import { Props, ProviderType } from '../lib/constructs/auth';

// Auth domain prefix should be unique
const uuid = 'mhl3923fsj';

export const config: Props = {
    userPoolName: `PlantyBasePool`,
    authDomainPrefix: `planty-${uuid}`,
    appClients: [
        {
            appUrls: [
                'http://localhost:3000/',
                'https://planty-admin.rtbprojects.com',
            ],
            cognitoClientName: `PlantyAdmin`,
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
                '375381587358-0gomr36ookhhc6c46176cm57tossso62.apps.googleusercontent.com',
            // As set in the Google Console
            // eslint-disable-next-line @typescript-eslint/camelcase
            authorize_scopes: 'openid email profile',
        },
    ],
};
