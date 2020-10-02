# CMS

Strapi open-source Content Management System hosted on Heroku with MongoDB. Images are hosted on Cloudinary.

## Getting Started

- Run `npm install`.
- For development, run in terminal 1 `npm run start:db` and in terminal 2 `npm run develop`.
- For production, run `npm run build && npm start`.

## URLs

- Localhost (npm start): `http://localhost:1337/admin`.
- GraphQL: `http://localhost:1337/graphql`
- Localhost Test (npm run develop:test-env): `http://0.0.0.0:1337/admin`.
- Test: https://<projectname>-cms.herokuapp.com/admin

## Local Environment

- Plugin `gatsby-source-strapi` bases its schema on the fields present in the database. The local SQLLite has the field `id` as an Int, while MongdoBD has a String (solved by using MongoDB locally as well). Also, when a field from a Content-Type is never filled in and saved, it will not be present in the schema (solved by using a draft system with unpublished dummy content).
- The MongoDB database is stored in `./temp/data/db` and can be viewed using the UI Admin MongoDB Compass.
- File Uploads are stored at location `public/uploads`. The location is already in `.gitignore`.
