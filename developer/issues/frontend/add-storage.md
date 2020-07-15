# Add Frontend Storage

> First setup the *Mocks* repo so that a *Mock GraphQL and Storage* endpoint is available.
> First add *Frontend Auth and Api* so that client side authentication and data storage is available.

You should know the different levels of authentication:
- Private: only `read, write and delete` by owner.
- Public: ...
- Protected: authenticated users can `read`, but only owner can `write, delete`.
- Read: ...
- Uploads: ...

## Config
```json
{
    "aws_user_files_s3_bucket": "amplify-testa5197ab993e940dca492cd1929ca09a4prod-prod",
    "aws_user_files_s3_bucket_region": "us-east-1"
}
```

## Uploading a file
```javascript
Storage.put(file.name, file)
.then (async (result) => {
    await API.graphql(graphqlOperation(createType, { input: inputObj })))
})
```

## App
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
      }).then(() => {
        // this.setState({ file: name });
      });
    }
}

<input type="file" onChange={uploadFile} />

```
