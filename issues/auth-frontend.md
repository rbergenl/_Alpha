## Config - setup config for the frontend
Use the output of the cdk deploy to setup the config for the frontend

```javascript
const awsconfig = {
    "aws_cognito_region": "us-east-1",
    "aws_user_pools_id": "us-east-1_eOgwt6srm",
    "aws_user_pools_web_client_id": "2n0376cm6n5c5umrvcoebhma7v",
    "oauth": {
        "domain": "planty-mhl3923fsj.auth.us-east-1.amazoncognito.com",
        "scope": [
            "email",
            "openid",
            "profile"
        ],
        "redirectSignIn": "http://localhost:3000/",
        "redirectSignOut": "http://localhost:3000/",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS"
};
```

## App
```javascript
import { Auth } from 'aws-amplify';
<button onClick={() => Auth.federatedSignIn()}>Sign In</button>
```

## Amplify - Google
- `amplify add auth` # AUTH
> Choose defaults (and http://localhost:3000/)
- add clientId and secret to `team-provider-info.json` and run `amplify auth update`.
- `amplify push`
- Add to `app.js`:
```javascript
import { Auth } from 'aws-amplify';
<button onClick={() => Auth.federatedSignIn()}>Sign In</button>
```
- `amplify publish -c` (-c to invalidate cache after changes)
- `npm install aws-amplify-react` # For UI Component building blocks


## Custom code
Based on: https://github.com/aws-amplify/amplify-js/blob/master/packages/auth/src/Auth.ts
- `npm install amazon-cognito-identity-js`
- create `lib/Auth.ts` and `lib/OAuth.ts`.

## Amplify
`npm install aws-amplify`.

