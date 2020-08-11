# Backend Hosting

Should be create as a seperate stack on a per project basis.

## Configure CDK

- Run `npm install @aws-cdk/{aws-cloudfront,aws-s3}`.
- Add to `<projectname>/<projectname>-base/stack-config.ts`:
```javascript
import { HostingProps } from './constructs/hosting';
export const hostingConfig: HostingProps = {
    domainName: 'example.com',
    siteSubDomain: 'web',
    certificateArn: '<STAR_CERTIFICATE_CREATED_IN_US_EAST_1_FOR_CLOUDFRONT>',
};
```
- Add a new stack to `/lib` (for admin, website or webapp) and add the lines:
```javascript
import { hostingConfig } from '../stack-config';
import { Hosting } from '../constructs/hosting';
new Hosting(this, 'Hosting', hostingConfig);
```

## DNS Settings for Go Live

- Create in AWS a SSL certificate for `*.rtbprojects.com` (add the validation record to DNS) and add the ARN to the hosting configuration.
- In DNS add a CNAME record with the URI and set the value to the Domain Name of the Cloudfront Distribution.
