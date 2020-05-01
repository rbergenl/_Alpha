import { Props as AuthProps, ProviderType } from './lib/constructs/auth';

// Auth domain prefix should be unique
const uuid = '<GENERATED_UUID>';

export const config: AuthProps = {
    userPoolName: `<USER_POOL_NAME>`,
    authDomainPrefix: `<PROJECT_NAME>-${uuid}`,
    appClients: [
        {
            appUrls: [
                'http://localhost:3000/',
                // TODO: can this below be imported from admin-config?
                'https://<URL>',
            ],
            cognitoClientName: `<NAME>`,
            // Used to generate the Hosted UI URL Output
            allowedOAuthFlows: ['code'],
            allowedOAuthScopes: ['phone', 'email', 'openid', 'profile'],
        },
    ],
    identityProviders: [
        {
            type: ProviderType.GOOGLE,
            // eslint-disable-next-line @typescript-eslint/camelcase
            client_id:
                '<CLIENT_ID>',
            // As set in the Google Console
            // eslint-disable-next-line @typescript-eslint/camelcase
            authorize_scopes: 'openid email profile',
        },
    ],
};
