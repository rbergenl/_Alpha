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

> To be able to connect to this local server from an Expo Client (app on device) it is recommended to use `ngrok`. Via http you can replace `localhost` with the local ip-address (192.168.1.108). But for HTTPS, the certificate is signed for localhost only. First create an account at ngrok.com. Then run `ngrok authtoken <token>`. Then run `ngrok http https://localhost:8443 -host-header="localhost:8443"`. Place the given address in `app-config.ts`.
