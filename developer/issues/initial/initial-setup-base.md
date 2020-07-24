# Initial Setup Base

## Do Householding
- Run `echo "cdk.context.json" >> .gitignore` (so that the SSM secrets do not end up in the codebase).
- Add to `tsconfig.json` the line `"compilerOptions": { "resolveJsonModule": true,` (to be able to import package.json).
- Add to `bin/<projectname>-base.ts` the line `const env: cdk.Environment = { account: '<ACCOUNT_ID>', region: '<REGION>' };` and add a third parameter to the stack `{ env }`.
- Run `touch stack.config.ts` (to create initial config file).
- Copy/paste from *Alpha Project* the folders `constructs`, `docs` and `graphql`.

## Add Backend Auth
- Follow the instructions from `<projectname>/<projectname>-base/docs/auth.md`.
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

## Add Backend Api
- Run `npm install --save-dev graphql merge-graphql-schemas`.
- Add to `package.json` the line `"files": [ "graphql/" ]`.
- Add to `package.json` the script `"codegen": "npx ts-node -e \"import { ApiSchema } from './constructs/api-schema'; new ApiSchema()\""`.
    - Always run this script after modifying any GraphQL file and commit the generated schema file to version control.
- Follow the instructions from `<projectname>/<projectname>-base/docs/api.md`.

## Add Backend Storage
- First add backend auth.
- Follow the instructions from `<projectname>/<projectname>-base/docs/storage.md`.
- TODO: Add Mock Storage.