## Add Deploy:Prod
- Base:
    > Requires creditcard and AWS Account.
    - Add to package.json `"deploy:base": "cdk deploy <Projectname>BaseStack --require-approval never",`.

- Admin/Webapp/CMS/Website:
    - Add to package.json scripts (deploy: with correct bucketName and cache: with correct distributionId):
    ```json
    {
        "deploy": "aws s3 sync build s3://planty-admin.rtbprojects.com --acl public-read --delete",
        "cache": "aws cloudfront create-invalidation --distribution-id E2DIPRN0JD71E6 --paths \"/index.html\""
    }
    ```
    - Add to `<projectname>-base/stack.config.ts`.
    ```javascript
    import { Props as HostingProps } from './lib/constructs/hosting';
    export const hostingConfig: HostingProps = {
        domainName: 'rtbprojects.com',
        siteSubDomain: 'planty-admin',
        certificateArn: 'arn:aws:acm:us-east-1:219009929765:certificate/5d11fd07-7d5b-4f46-ade7-e1dea7b36666',
    };
    ```