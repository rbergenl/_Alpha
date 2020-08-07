# CMS

Strapi open-source Content Management System hosted on Heroku with MongoDB. Images are hosted on Cloudinary.

## Getting Started

## Getting Started

- Run `nvm use`.
- Run `npm install`.
- Run `npm run develop` for development.
- Run `npm run build && npm start` for production.
    - The browser should open to `http://localhost:1337/admin`.

## Local Environment

- SQLite Database is created at location `.tmp/data.db`. When in Visual Code the SQLite extension is installed you can right-click the file and select *Open Database*.
- File Uploads are stored at location `public/uploads`. The location is already in `.gitignore`.

## Production Environment

> Since the CMS is an internal application there is no need for a test and/or acceptance environment. Changes to the CMS is directly deployed to production.

- URL: https://<projectname>-cms.herokuapp.com/admin

## Using the Content API

> Make sure a User has been created with an assigned Role, and that the Role has correct Permissions to access previously created Content-Types.

- To make a HTTP-request to any route in the Content API the user should be authenticated.
    - Run `curl --data '{ "identifier": "<USERNAME>", "password": "<PASSWORD>" }' --header 'Content-Type: application/json' http://localhost:1337/auth/local`.
    - The received JWT-token should be added as HTTP-header like so `"Authorization": "Bearer <JWT_TOKEN>"`.