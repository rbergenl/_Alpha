# Backend Auth

## Google Console - create a ClientApp with credentials

- Define an authDomainPrefix with an unique id (e.g. `planty-mhl3923fsj`).
- Go to https://console.cloud.google.com/:
- First create an app for OAuth-access screen
    - intern
    - scope: email, profile, openid
    - allowed domain: `amazoncognito.com`
- Then create new logindata/credentials oAuth
    - authorized Javascript URI's:
        - `https://{authDomainPrefix}.auth.{region}.amazoncognito.com` 
        - `http://localhost:3000`
    - authorized Redirect URI's:
        - `https://{authDomainPrefix}.auth.{region}.amazoncognito.com/oauth2/idpresponse`
- Save the client_secret into AWS Systems Manager Parameter Store as a **normal** String, since its only a secret in the account and not necessary to encrypt/decrypt. Define the Parameter Name as `/${props.userPoolName}${identityProvider.type}Secret` (e.g. `PlantyBasePoolGoogleSecret`).

## CDK Config - create UserPool with a ClientApp and IdentityProvider

- Enter all details for the `Auth` construct.
- Add to `<projectname>/<projectname>-base/stack-config.ts`.
```javascript
import { Props as AuthProps, ProviderType } from './lib/constructs/auth';
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
```
