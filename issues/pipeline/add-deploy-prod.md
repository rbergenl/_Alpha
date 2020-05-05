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
