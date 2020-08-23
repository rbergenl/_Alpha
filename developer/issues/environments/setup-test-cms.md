# Setup Test Environment for CMS

> Requires the initial CMS setup to be completed.

> Requires an account for Cloudinary, mLab and Heroku.

## Add Cloudinary

- Login to Cloudinary to find the *Account details*.
- Run `echo "CLOUDINARY_NAME=<CLOUD_NAME> >> .env.test`.
- Run `echo "CLOUDINARY_KEY=<API_KEY> >> .env.test`.
- Run `echo "CLOUDINARY_SECRET=<API_SECRET> >> .env.test`.
- Run `npm install strapi-provider-upload-cloudinary`.
- Update `./extensions/upload/config/settings.json` with.
```javascript
if (process.env.NODE_ENV === 'test') {
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

## Add Mongo Database

- Check the [docs](https://strapi.io/documentation/v3.x/guides/databases.html#mongodb-installation).
- Login to mLab and *create a Starter Cluster* using all defaults.
- Click `connect`:
    - Since IP addresses from Heroku are dynamic, select *Allow access from anywhere* to display `0.0.0.0/0` and click *Add IP-address*. This is not secure, but good for now.
    - Enter username `admin` and click *generate password*, copy the password and paste it to LastPass secure note `MongoDB`. Then click *create user* and then *choose a connection method*.
    - Select `connect your application` and keep the default *NodeJS* and version *3.0 or later*. Then copy/paste the connection string.
- Run `echo ".env*" >> .gitignore`.
- Run `echo "DATABASE_URI=<CONNECTION_STRING>" >> .env.test`.
- Run `npm install strapi-connector-mongoose@<same_version_as_strapi>`.
- Copy/paste `config/database.js` to `config/env/test/database.js` and modify to:
```javascript
{
    connections: {
        default: {
            connector: 'mongoose',
            settings: {
                uri: env('DATABASE_URI'),
            },
            options: {
                ssl: true,
            },
        }
    }
}
```
- Add to `package.json` the script `"develop:test": "ENV_PATH=.env.test NODE_ENV=test npm run develop"`.
- Run `git add . && git commit -m "add test env setup"`

## Add Users & Permissions

- Start Strapi for Localhost Test.
- Go to the provided admin url and enter username `Admin`. For production let LastPass generate a password. Provide the project email. And login.
- Add to Collection-Type User a new user with the name `Editor`, a LastPass generated password (stored as a note) and as email `editor_test+<project-email>`. Set the role to `Authenticated` and enable `Confirmed`.
- Add to Collection-Type User a new user with the name `Website`, a LastPass generated password (stored as a note) and as email `website_test+<project-email>`. Set the role to `Public` and enable `Confirmed`.
- Go to the *Roles & Permissions* plugin to edit the role *Authenticated*. Under *Application* give this role all permissions for each Content-Type.
- Go to the *Roles & Permissions* plugin to edit the role *Public*. Under *Application* give this role only *find and findOne* permissions for each Content-Type.

## Add Content

- Start Strapi for Localhost Test.
- Open browser at `http://localhost:1337/graphql`.
- Authenticate the user *Editor* as described in `README.md`.
- In the GraphQL Playground set HTTP-Headers: `{ "Authorization": "Bearer <JWT_TOKEN>" }`.
- Copy the content from *Alpha Project* file `strapi-content-seed.graphql`.
- Paste the content in the GraphQL Playground and click the play button.

## Deploy to Heroku

- Run `heroku login`.
- Run `heroku create <projectname>-cms`.
- Run `heroku config:set NODE_ENV=test`.
- Run `heroku config:set $(grep DATABASE_URI .env.test | xargs)`.
- Run `heroku config:set $(grep CLOUDINARY_NAME .env.test | xargs)`.
- Run `heroku config:set $(grep CLOUDINARY_KEY .env.test | xargs)`.
- Run `heroku config:set $(grep CLOUDINARY_SECRET .env.test | xargs)`.
- Run `git push heroku develop:master`.
- Open the provided URL with `/admin` and bookmark it as *Strapi Admin* to an *Environments* folder and verify the URL is already in `README.md`.
- Login as Admin using the credentials as stored in LastPass.
