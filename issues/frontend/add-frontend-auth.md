# Add Frontend Auth
**TODO: move awsconfig.js file to @node_modules/@<projectname>/base**

- Run `npm install aws-amplify`.
- Create a file `awsconfig.js` with the contents:
```javascript
const awsconfig = {
    aws_cognito_region: 'us-east-1',
    aws_user_pools_id: '<USER_POOL_ID>',
    aws_user_pools_web_client_id: '<CLIENT_ID>',
    oauth: {
        domain: '<PROJECT>-<UUID>.auth.us-east-1.amazoncognito.com',
        scope: [
            'email',
            'openid',
            'profile'
        ],
        redirectSignIn: 'http://localhost:3000/',
        redirectSignOut: 'http://localhost:3000/',
        responseType: 'code'
    },
    federationTarget: 'COGNITO_USER_POOLS'
};
export default awsconfig;
```
- Add to `app.tsx`:
```javascript
    import Amplify, { Auth } from 'aws-amplify';
    import awsconfig from './aws-exports';
    Amplify.configure(awsconfig);
    <button onClick={() => Auth.federatedSignIn()}>Sign In</button>
    <button onClick={async () => console.log(await Auth.currentSession())}>Current Session</button>
    <button onClick={() => Auth.signOut()}>Sign Out</button>
```
- Add `user` to React Context.
- Add Mock Cognito Api