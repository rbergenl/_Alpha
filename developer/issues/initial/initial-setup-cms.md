# Initial Setup CMS

> First follow the *Getting Started* steps in the repos `README.md`.

## Add User:
- Open the browser at `http://localhost:1337/admin`.
- Create a user with the name `Admin`, the password `Admin123@` and as email `<project-email>`.

## Add Api:
> These commands generates a Model and Routes for the REST Api. The routes use handlers `find, findOne, count, create, update, delete`.
- Run `npx strapi generate:api page title:string body:text`.
- Run `npm run build`.

## Set Roles & Permissions:
- Go to the role *Public* and give this role only *count, find and findOne* permissions for each Content-Type.
- Go to the role *Authenticated* and give it all permissions for each Content-Type.

## Add Content (locally)
- Run `npx strapi install graphql`.
- To get a JWT token for the *Admin* user run `curl --data '{ "identifier": "Admin","password": "<PASSWORD>" }' --header 'Content-Type: application/json' http://localhost:1337/auth/local`.
- Open browser at `http://localhost:1337/graphql`.
- In the GraphQL Playground set HTTP-Headers: `{ "Authorization": "Bearer <JWT_TOKEN>" }`.
- Copy the content from *Alpha Project* file `strapi-content-seed.graphql`.
- Paste the content in the GraphQL Playground and click the play button.
