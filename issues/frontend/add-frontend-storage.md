# Add Frontend Storage

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
