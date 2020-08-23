# CMS

Strapi open-source Content Management System hosted on Heroku with MongoDB. Images are hosted on Cloudinary.

## Getting Started

## Getting Started

- Run `nvm use`.
- Run `npm install`.
- Run `npm run develop` for development.
- Run `npm run build && npm start` for production.

## URLS

- Localhost (npm start): `http://localhost:1337/admin`.
- GraphQL: `http://localhost:1337/graphql`
- Localhost Test (npm run develop:test): `http://0.0.0.0:1337/admin`.
- Test: https://<projectname>-cms.herokuapp.com/admin

## Local Environment

- SQLite Database is created at location `.tmp/data.db`. When in Visual Code the SQLite extension is installed you can right-click the file and select *Open Database*.
- File Uploads are stored at location `public/uploads`. The location is already in `.gitignore`.

## Production Environment

> Since the CMS is an internal application there is no need for a test and/or acceptance environment. Changes to the CMS is directly deployed to production.

## Using the Content API

> Make sure a User has been created with an assigned Role, and that the Role has correct Permissions to access previously created Content-Types.

- To make a HTTP-request to any route in the Content API the user should be authenticated.
    - Run `curl --data '{ "identifier": "<USERNAME>", "password": "<PASSWORD>" }' --header 'Content-Type: application/json' http://localhost:1337/auth/local`.
    - The received JWT-token should be added as HTTP-header like so `"Authorization": "Bearer <JWT_TOKEN>"`.

### Users

- Admin User: is allowed to manage *Content-Types* and *User Permissions* through the Strapi Admin Panel.
- Editor User: is a technical user for the Content API which is only allowed to manage *Content*.
- Website User: is a technical user for the Content API which is only allowed to read *Content*.

## Further Reading

- [Content Architecture](./docs/content-architecture.md)
- [Building Content Types](./docs/building-content-types.md)
