# Add Auth

> First setup the _Base_ repo so that a _Mock Auth_ endpoint is available.

> First setup the _UI_ repo so that _UI Components_ are available.

> First setup _Store_ so that _user and session details_ can be stored.

> First setup _Navigator_ so that _auth flow_ is possible.

- For info on the `useAuth` hook, check this [blog](https://www.rockyourcode.com/custom-react-hook-use-aws-amplify-auth/).

## Add Config

- Run the commands:
  > depending on the client, change `localhost_admin_client` to `localhost_app_client` or `localhost_webapp_client` to enable prefilled login username.

```bash
echo "REACT_APP_AWS_COGNITO_REGION=localhost_region" >> .env.local
echo "REACT_APP_AWS_USER_POOLS_ID=localhost_user_pool_id" >> .env.local
echo "REACT_APP_AWS_USER_POOLS_WEB_CLIENT_ID=localhost_admin_client" >> .env.local
echo "REACT_APP_OAUTH_DOMAIN=localhost:8443" >> .env.local
echo "REACT_APP_OAUTH_REDIRECT_SIGN_IN=http://localhost:3000/" >> .env.local
echo "REACT_APP_OAUTH_REDIRECT_SIGN_OUT=http://localhost:3000/" >> .env.local
```

## Add UI

- TODO: should come from the _UI_ project.
- Add to `app.tsx`:

```javascript
    import { Auth } from 'aws-amplify';
    <button onClick={() => Auth.federatedSignIn()}>Sign In</button>
    <button onClick={async () => console.log(await Auth.currentSession())}>Current Session</button>
    <button onClick={() => Auth.signOut()}>Sign Out</button>
```

## Add State

- TODO: Add `user` to React Context.

## Add Private Route

- TODO: Add `PrivateRoute.tsx`.
