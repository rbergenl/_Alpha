# Backend Storage

## Initial Setup

- Add to `lib/<projectname>-base-stack.ts` the lines:
```javascript
import { Storage } from '../constructs/storage';
new Storage(this, `Storage`, {
    authRole: auth.authRole,
    unAuthRole: auth.unAuthRole,
});
```

## Enable Mocks

Not supported. Just develop in the cloud.

## CDK Stack

The stack creates an S3 bucket, with CORS settings, and gives proper permissions to the Cognito Auth_Role and UnAuth_Role.
https://aws-amplify.github.io/docs/js/storage
