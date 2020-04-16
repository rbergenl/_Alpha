# Hosting - frontend

## App Deployments / CICD
- Add to package.json scripts (deploy: with correct bucketName and cache: with correct distributionId):
```json
{
    "deploy": "aws s3 sync build s3://planty-admin.rtbprojects.com --acl public-read --delete",
    "cache": "aws cloudfront create-invalidation --distribution-id E2DIPRN0JD71E6 --paths \"/index.html\""
}
```
