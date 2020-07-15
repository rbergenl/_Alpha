/* eslint-disable no-new */
/* eslint-disable no-sync */
import * as cdk from '@aws-cdk/core';
import * as iam from '@aws-cdk/aws-iam';
import * as pinpoint from '@aws-cdk/aws-pinpoint';

export interface Props {
    appName: string;
    authRole: iam.IRole;
    unAuthRole: iam.IRole;
}

export class Analytics extends cdk.Construct {
    public constructor(scope: cdk.Construct, id: string, props: Props) {
        super(scope, id);

        const pinpointApp = new pinpoint.CfnApp(this, 'PinpointApp', {
            name: props.appName
        });

        // AuthRole and UnAuthRole permissions
        const policy = this.allowPolicy(pinpointApp.attrArn);
        props.authRole.attachInlinePolicy(policy);
        props.unAuthRole.attachInlinePolicy(policy);
    }

    private allowPolicy(pinpointAppArn: string) {
        const policy = new iam.Policy(this, 'UnAuthPolicy');
        const statement = new iam.PolicyStatement({
            effect: iam.Effect.ALLOW,
            actions: [
                'mobiletargeting:PutEvents',
                'mobiletargeting:UpdateEndpoint',
                'mobiletargeting:GetUserEndpoints'
            ],
            resources: [`${pinpointAppArn}*`],
        });

        policy.addStatements(statement);

        return policy;
    }
}
