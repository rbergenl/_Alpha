# Base

Backend in AWS:
- Hosting: with S3 and CloudFront.
- Storage: with S3 and proper authentication roles.
- Function: with Lambda.
- Auth: with Cognito.
- Api: GraphQL with AppSync and data stored in DynamoDB.

## URLs
- Mock Server - Test Environment: https://<projectname>-base.herokuapp.com/

## Mocking

- Run `npm start`.
- Open the browser at `https://localhost:8443` (note the secure connection).
- When GraphQL is enabled, open the browser at `https://localhost:8443/graphql`.
