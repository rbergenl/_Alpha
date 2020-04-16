# Hosting
Should be create as a seperate stack on a per project basis.

## CDK
- `npm install @aws-cdk/aws-cloudfront @aws-cdk/aws-s3`
- Add a new stack to `/lib` and use `constructs/hosting.ts`.
- Define configuration in `config/hosting.ts`.

## DNS Settings for Go Live
- Create in AWS a SSL certificate for `*.rtbprojects.com` (add the validation record to DNS) and add the ARN to the hosting configuration.
- In DNS add a CNAME record with the URI and set the value to the Domain Name of the Cloudfront Distribution.
