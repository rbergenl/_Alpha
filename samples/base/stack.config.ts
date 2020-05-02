import { Props as HostingProps } from './lib/constructs/hosting';
import { Props as AuthProps, ProviderType } from './lib/constructs/auth';

export const hostingConfig: HostingProps = {
    domainName: 'rtbprojects.com',
    siteSubDomain: 'planty-admin',
    certificateArn: 'arn:aws:acm:us-east-1:219009929765:certificate/5d11fd07-7d5b-4f46-ade7-e1dea7b36666',
};

// Auth domain prefix should be unique
const uuid = 'mhl3923fsj';

export const authConfig: AuthProps = {
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
