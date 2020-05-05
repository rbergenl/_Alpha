# Initial Setup CMS

- Add User:
    - Run `npx strapi install graphql`.
    - Run `npm run develop`.
    - Run `curl --data '{ "username": "Admin", "email": "<PROJECT_EMAIL>","password": "<PASSWORD>" }' --header 'Content-Type: application/json' http://localhost:1337/auth/local/register`
    - Open the browser at `http://localhost:1337/admin` and verify the login works.

- Add Api:
    - Run `npx strapi generate:api page title:string body:text`.
    - Run `npm run build`.

- Set Roles & Permissions:
    - Go to the role *Public* and give this role only *count, find and findOne* permissions for each Content-Type.
        - Go to the role *Authenticated* and give it all permissions for each Content-Type.

## Add Content (locally)
- To get a JWT token for the *Admin* user run `curl --data '{ "identifier": "Admin","password": "<PASSWORD>" }' --header 'Content-Type: application/json' http://localhost:1337/auth/local`.
- Open browser at `http://localhost:1337/graphql`.
- In the GraphQL Playground set HTTP-Headers: `{ "Authorization": "Bearer <JWT_TOKEN>" }`.
- Copy the content from *Alpha Project* file `strapi-content-seed.graphql`.
- Paste the conten in the GraphQL Playground and click the play button.

## Setup Production Environment

### Add Cloudinary
- Login to Cloudinary to find the *Account details*.
- Run `echo "CLOUDINARY_NAME=<CLOUD_NAME> >> .env.production`.
- Run `echo "CLOUDINARY_KEY=<API_KEY> >> .env.production`.
- Run `echo "CLOUDINARY_SECRET=<API_SECRET> >> .env.production`.
- Run `npm install strapi-provider-upload-cloudinary`.
- Update `./extensions/upload/config/settings.json` with.
```javascript
if (process.env.NODE_ENV === 'production') {
    module.exports = {
        provider: 'cloudinary',
        providerOptions: {
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.CLOUDINARY_KEY,
            api_secret: process.env.CLOUDINARY_SECRET,
        }
    };
} else {
    // to use the default local provider you can return an empty configuration
    module.exports = {};
}
```

### Add Mongo Database
- Login to mLab and *create a Starter Cluster* using all defaults.
- Click `connect`:
    - Since IP addresses from Heroku are dynamic, enter IP `0.0.0.0/0`. This is not secure, but good for now.
    - Enter username `admin` and click *generate password*, copy the password and paste it somewhere. Then click *create user* and then *choose a connection method*.
    - Select `connect your application` and keep the default *NodeJS* and version *3.0 or later*. Then copy/paste the connection string.
- Run `echo ".env*" >> .gitignore`.
- Run `echo "DATABASE_USERNAME=admin" >> .env.production`
- Run `echo "DATABASE_PASSWORD=<PASSWORD>" >> .env.production`
- Run `echo "DATABASE_HOST=<HOST>" >> .env.production`
- Run `echo "DATABASE_NAME=strapi" >> .env.production`
- Run `npm install strapi-connector-mongoose`.
- Run `npm install --save-dev dotenv-cli`.
- Modify `config/environments/production/database.json`.
```json
{
    "connector": "mongoose",
    "settings": {
        "uri": "mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}?retryWrites=true&w=majority"
    },
    "options": {
        "ssl": true
    }
}
```
- Add to `package.json` script `"production": "NODE_ENV=production dotenv -e .env.production strapi start",`.
- Run `npm run production` for production database and `npm run develop` for local database.
- Go to the provided admin url and enter username `Admin`. For production let LastPass generate a password, for local enter `Admin123`. Provide the project email.
- After login, create the same user under *Collection Types*.

### Deploy to Heroku
- Run `heroku login`.
- Run `heroku create <projectname>-cms`.
- Run `heroku config:set $(grep DATABASE_USERNAME .env.production | xargs)`.
- Run `heroku config:set $(grep DATABASE_PASSWORD .env.production | xargs)`.
- Run `heroku config:set $(grep DATABASE_HOST .env.production | xargs)`.
- Run `heroku config:set $(grep DATABASE_NAME .env.production | xargs)`.
- Run `heroku config:set $(grep CLOUDINARY_NAME .env.production | xargs)`.
- Run `heroku config:set $(grep CLOUDINARY_KEY .env.production | xargs)`.
- Run `heroku config:set $(grep CLOUDINARY_SECRET .env.production | xargs)`.
- Run `git push heroku master`.
- Open and bookmark the provided URL (find the previously created password in LastPass).