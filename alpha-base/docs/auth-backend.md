# Auth


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

## CDK - create UserPool with a ClientApp and IdentityProvider
- Enter all details for the `Auth` construct.

