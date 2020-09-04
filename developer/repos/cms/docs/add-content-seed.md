# Add Content Seed

## Get a JWT Token

> Make sure a User has been created with an assigned Role, and that the Role has correct Permissions to access previously created Content-Types.

- To make a HTTP-request to any route in the Content API or using GraphQL the user should be authenticated.
    - Run `curl --data '{ "identifier": "<USERNAME>", "password": "<PASSWORD>" }' --header 'Content-Type: application/json' http://localhost:1337/auth/local`.
    - The received JWT-token should be added as HTTP-header like so `{ "Authorization": "Bearer <JWT_TOKEN>" }`.

## Using the Content API as Admin

- Start Strapi.
- Open browser at `http://localhost:1337/graphql`.
- Authenticate the user *Editor* as described in `README.md`.
- In the GraphQL Playground set HTTP-Headers: `{ "Authorization": "Bearer <JWT_TOKEN>" }`.
    - You should user a JWT Token from an authenticated user. It is not possible to use the token in `extensions/users-permissions/config/jwt.js`.
- Copy the content from *Alpha Project* file `strapi-content-seed.graphql`.
- Paste the content in the GraphQL Playground and click the play button.
    - For now, execute each mutation individually. It gives you more control also.
