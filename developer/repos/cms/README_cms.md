# CMS

Strapi open-source Content Management System hosted on Heroku with MongoDB. Images are hosted on Cloudinary.

## Getting Started

- Run `npm install`.
- For development, run `npm run develop`.
- For production, run `npm run build && npm start`.
- The browser should open to `http://localhost:1337/admin`.

## Local Environment

- SQLite Database is created at location `.tmp/data.db`. When in Visual Code the SQLite extension is installed you can right-click the file and select *Open Database*.
- File Uploads are stored at location `public/uploads`. The location is already in `.gitignore`.

## Production Environment

> Since the CMS is an internal application there is no need for a test and/or acceptance environment. Changes to the CMS is directly deployed to production.

-Access via: `https://<projectname>-cms.herokuapp.com/admin`.
