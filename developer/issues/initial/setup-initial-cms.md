# Setup Initial CMS

> Make sure MongoDB is installed.

## Do Householding

- Remove the file `.env.example`.
- Run `npx strapi install graphql`.
- Copy/paste from *Alpha* project the folders `api` and `components`.

## Setup Local Database

- Run `echo ".env*" >> .gitignore`.
- Run `echo "DATABASE_URI=mongodb://localhost:27017/strapi" >> .env`.
- Run `npm install strapi-connector-mongoose@<same_version_as_strapi>`.
- Modify `config/database.js` to:
```javascript
{
    connections: {
        default: {
            connector: 'mongoose',
            settings: {
                uri: env('DATABASE_URI'),
            },
            options: {
                ssl: process.env.NODE_ENV === 'development' ? false : true,
            },
        }
    }
}
```
- Run `mkdir -p .tmp/data/db`.
- Add to `package.json` the script `"start:db": "mongod --dbpath .tmp/data/db"`.

## Add Users and Permissions

- Follow the instructions as described in the repos `docs/users-and-permissions.md`.

## Add Content Seed

- Follow the instructions as described in the repos `docs/add-content-seed.md`.
