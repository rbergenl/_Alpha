/* eslint-disable no-new */
import * as cdk from '@aws-cdk/core';
import * as cognito from '@aws-cdk/aws-cognito';
import * as iam from '@aws-cdk/aws-iam';
import * as ssm from '@aws-cdk/aws-ssm';
import * as cr from '@aws-cdk/custom-resources';

export interface Props {
    userPoolName: string;
    authDomainPrefix: string;
    appClients: AppClient[];
    identityProviders: IdentityProvider[];
}

export interface AppClient {
    appUrls: string[];
    cognitoClientName: string;
    allowedOAuthFlows: string[];
    allowedOAuthScopes: string[];
}

export interface IdentityProvider {
    type: ProviderType;
    // eslint-disable-next-line @typescript-eslint/camelcase
    client_id: string;
    // eslint-disable-next-line @typescript-eslint/camelcase
    authorize_scopes: string;
}

export enum ProviderType {
    GOOGLE = 'Google',
}

export class Auth extends cdk.Construct {
    public userPool: cognito.IUserPool;

    public authRole: iam.IRole;

    public unAuthRole: iam.IRole;

    public constructor(scope: cdk.Construct, id: string, props: Props) {
        super(scope, id);

        // ========================================================================
        // Resource: Amazon Cognito User Pool
        // ========================================================================

        // Purpose: creates a user directory and allows federation from external IdPs

        // See also:
        // - https://aws.amazon.com/cognito/
        // - https://docs.aws.amazon.com/cdk/api/latest/docs/@aws-cdk_aws-cognito.CfnIdentityPool.html

        // high level construct
        const groupsAttributeName = 'groups';
        const groupsAttributeClaimName = `custom:${groupsAttributeName}`;

        this.userPool = new cognito.UserPool(this, props.userPoolName, {
            signInAliases: { email: true },
        });

        new cdk.CfnOutput(this, 'UserPoolIdOutput', {
            description: 'UserPool ID',
            value: this.userPool.userPoolId,
        });

        // Any properties that are not part of the high level construct can be added using this method
        const userPoolCfn = this.userPool.node
            .defaultChild as cognito.CfnUserPool;

        userPoolCfn.schema = [
            {
                name: groupsAttributeName,
                attributeDataType: 'String',
                mutable: true,
                required: false,
                stringAttributeConstraints: {
                    maxLength: '2000',
                },
            },
        ];

        // Create two groups, each with a user, one for admins one for users
        // these groups can be used without configuring a 3rd party IdP
        this.createGroupWithUser(props, 'Admin');
        this.createGroupWithUser(props, 'User');

        // ========================================================================
        // Resource: Cognito Auth Domain
        // ========================================================================

        // Purpose: creates / updates the custom subdomain for cognito's hosted UI

        // See also:
        // https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-assign-domain.html

        const cfnUserPoolDomain = new cognito.CfnUserPoolDomain(
            this,
            'CognitoDomain',
            {
                domain: props.authDomainPrefix,
                userPoolId: this.userPool.userPoolId,
            }
        );

        // https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-app-integration.html
        const cognitoDomain = `${cfnUserPoolDomain.domain}.auth.${cdk.Aws.REGION}.amazoncognito.com`;

        new cdk.CfnOutput(this, 'CognitoDomainOutput', {
            description: 'Cognito Domain',
            value: cognitoDomain,
        });

        // ========================================================================
        // Resource: Identity Provider Settings
        // ========================================================================

        // Purpose: define the external Identity Provider details, field mappings etc.

        // See also:
        // - https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-saml-idp.html

        // mapping from IdP fields to Cognito attributes
        const supportedIdentityProviders = ['COGNITO'];
        const cognitoIdps: cognito.CfnUserPoolIdentityProvider[] = [];

        props.identityProviders.forEach((identityProvider): void => {
            const cognitoIdp = new cognito.CfnUserPoolIdentityProvider(
                this,
                `CognitoIdP${identityProvider.type}`,
                {
                    // ProviderName should be same as providertype
                    providerName: identityProvider.type,
                    providerDetails: {
                        // eslint-disable-next-line @typescript-eslint/camelcase
                        client_id: identityProvider.client_id,
                        // eslint-disable-next-line @typescript-eslint/camelcase
                        client_secret: ssm.StringParameter.valueForStringParameter(
                            this,
                            // Secret should be stored in SSM and resolved during deployment
                            `/${props.userPoolName}${identityProvider.type}Secret`
                        ),
                        // eslint-disable-next-line @typescript-eslint/camelcase
                        authorize_scopes: identityProvider.authorize_scopes,
                    },
                    providerType: identityProvider.type,

                    // Structure: { "<cognito attribute name>": "<IdP SAML attribute name>" }
                    attributeMapping: {
                        email: 'email',
                        // eslint-disable-next-line @typescript-eslint/camelcase
                        family_name: 'lastName',
                        // eslint-disable-next-line @typescript-eslint/camelcase
                        given_name: 'firstName',
                        // Alias to given_name
                        name: 'firstName',
                        // Syntax for a dynamic key
                        [groupsAttributeClaimName]: 'groups',
                    },
                    userPoolId: this.userPool.userPoolId,
                }
            );

            cognitoIdps.push(cognitoIdp);
            supportedIdentityProviders.push(identityProvider.type);
        });

        // ========================================================================
        // Resource: Cognito App Client
        // ========================================================================

        // Purpose: each app needs an app client defined, where app specific details are set, such as redirect URIs

        // See also:
        // - https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-client-apps.html

        const userPoolClients: cognito.CfnUserPoolClient[] = [];

        props.appClients.forEach((appClient): void => {
            const cfnUserPoolClient = new cognito.CfnUserPoolClient(
                this,
                'CognitoAppClient',
                {
                    supportedIdentityProviders,
                    clientName: appClient.cognitoClientName,
                    allowedOAuthFlowsUserPoolClient: true,
                    allowedOAuthFlows: appClient.allowedOAuthFlows,
                    allowedOAuthScopes: appClient.allowedOAuthScopes,
                    generateSecret: false,
                    refreshTokenValidity: 1,
                    callbackUrLs: appClient.appUrls,
                    logoutUrLs: appClient.appUrls,
                    userPoolId: this.userPool.userPoolId,
                    explicitAuthFlows: [
                        'ALLOW_CUSTOM_AUTH',
                        'ALLOW_USER_PASSWORD_AUTH',
                        'ALLOW_REFRESH_TOKEN_AUTH',
                        'ALLOW_USER_SRP_AUTH',
                    ]
                }
            );

            // We want to make sure we do things in the right order
            cognitoIdps.forEach((cognitoIdp): void => {
                cfnUserPoolClient.node.addDependency(cognitoIdp);
            });

            new cdk.CfnOutput(this, `AppClientIdOutput${cfnUserPoolClient}`, {
                description: 'App Client ID',
                value: cfnUserPoolClient.ref,
            });

            new cdk.CfnOutput(this, `HostedUIUrlOutput${cfnUserPoolClient}`, {
                description: 'HostedUI URL',
                value: `https://${cognitoDomain}/login?client_id=${
                    cfnUserPoolClient.ref
                }&response_type=${
                    cfnUserPoolClient.allowedOAuthFlows
                        ? cfnUserPoolClient.allowedOAuthFlows.join('+')
                        : ''
                }&scope=${
                    cfnUserPoolClient.allowedOAuthScopes
                        ? cfnUserPoolClient.allowedOAuthScopes.join('+')
                        : ''
                }&redirect_uri=${
                    cfnUserPoolClient.callbackUrLs
                        ? cfnUserPoolClient.callbackUrLs[0]
                        : ''
                }`,
            });

            userPoolClients.push(cfnUserPoolClient);
        });

        // ========================================================================
        // Resource: Cognito Federated Identity Pool
        // ========================================================================
        const identityPool = new cognito.CfnIdentityPool(
            this,
            `${props.userPoolName}IdentityPool`,
            {
                // should be set to true to allow storage and analytics
                allowUnauthenticatedIdentities: true,
                cognitoIdentityProviders: userPoolClients.map(
                    (
                        client
                    ): cognito.CfnIdentityPool.CognitoIdentityProviderProperty => ({
                        clientId: client.ref,
                        providerName: userPoolCfn.attrProviderName,
                    })
                ),
            }
        );

        // Create a role for authorized acces to AWS resources. Control what your user can access.
        // This example only allows Lambda invokation
        // Only allows users in the previously created Identity Pool
        this.authRole = new iam.Role(this, 'AuthRole', {
            assumedBy: Auth.getFederatedPrincipal(
                identityPool.ref,
                'authenticated'
            ),
        });

        this.unAuthRole = new iam.Role(this, 'UnAuthRole', {
            assumedBy: Auth.getFederatedPrincipal(
                identityPool.ref,
                'unauthenticated'
            ),
        });

        new cognito.CfnIdentityPoolRoleAttachment(this, 'RoleAttachment', {
            identityPoolId: identityPool.ref,
            roles: {
                authenticated: this.authRole.roleArn,
                unauthenticated: this.unAuthRole.roleArn,
            },
        });
    }

    private static getFederatedPrincipal(
        identityPoolRef: string,
        condition: string
    ): iam.FederatedPrincipal {
        return new iam.FederatedPrincipal(
            'cognito-identity.amazonaws.com',
            {
                StringEquals: {
                    'cognito-identity.amazonaws.com:aud': identityPoolRef,
                },
                'ForAnyValue:StringLike': {
                    'cognito-identity.amazonaws.com:amr': condition,
                },
            },
            'sts:AssumeRoleWithWebIdentity'
        );
    }

    private createGroupWithUser(props: Props, name: string) {
        const groupName = `${props.userPoolName.toLowerCase()}-${name.toLowerCase()}s`;
        const userName = `${name.toLowerCase()}@${name.toLowerCase()}.com`;
        const passWord = `${name}123@`;

        new cognito.CfnUserPoolGroup(this, `${name}sGroup`, {
            groupName: groupName,
            userPoolId: this.userPool.userPoolId,
        });

        const adminUser = new cognito.CfnUserPoolUser(this, `${name}User`, {
            username: userName,
            userPoolId: this.userPool.userPoolId,
            desiredDeliveryMediums: ['EMAIL'],
            messageAction: 'SUPPRESS',
        });

        new cr.AwsCustomResource(this, `${name}SetPassword`, {
            onCreate: {
                service: 'CognitoIdentityServiceProvider',
                action: 'adminSetUserPassword',
                parameters: {
                    UserPoolId: this.userPool.userPoolId,
                    Username: userName,
                    Password: passWord,
                    Permanent: true,
                },
                physicalResourceId: cr.PhysicalResourceId.of(adminUser.logicalId)
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE})
        });

        new cognito.CfnUserPoolUserToGroupAttachment(this, `${name}GroupAttachment`, {
            groupName,
            userPoolId: this.userPool.userPoolId,
            username: userName,
        })
    }
}
