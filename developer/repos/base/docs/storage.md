# Storage

> First setup the *Mocks* repo so that a *Mock GraphQL and Storage* endpoint is available.

> First add *Frontend Auth and Api* so that client side authentication and data storage is available.

You should know the different levels of authentication:
- Private: only `read, write and delete` by owner.
- Public: ...
- Protected: authenticated users can `read`, but only owner can `write, delete`.
- Read: ...
- Uploads: ...

## Initial Setup Backend

- Add to `lib/<projectname>-base-stack.ts` the lines:
```javascript
import { Storage } from '../constructs/storage';
new Storage(this, `Storage`, {
    authRole: auth.authRole,
    unAuthRole: auth.unAuthRole,
});
```

## Initial Setup Frontend
```json
{
  "Auth": {
    "identityPoolId": "XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab",
  },
  "AWSS3": {
    "bucket": "amplify-testa5197ab993e940dca492cd1929ca09a4prod-prod",
    "region": "us-east-1"
  }
}
```

## Enable Mocking

Not supported. Just develop in the cloud.

## Display Image

- Read the [docs](https://docs.amplify.aws/ui-legacy/storage/s3-image/q/framework/react-native).
- Run `npm install aws-amplify-react aws-amplify-react-native`.
- Render image with `<S3Image imgKey={key} />`.

## Upload File
```javascript
import Amplify, { Storage } from 'aws-amplify';

Storage.configure({ level: 'private' });

const uploadFile = async (evt: ChangeEvent<HTMLInputElement>) => {
    const target = evt.target;
    if (target.files) {
      const file = target.files[0];
      const name = file.name;

      Storage.put(name, file, {
        contentType: 'image/png'
      }).then(async (result) => {
        // this.setState({ file: name });
        await API.graphql(graphqlOperation(createType, { input: inputObj })))
      });
    }
}

<input type="file" onChange={uploadFile} />

```
