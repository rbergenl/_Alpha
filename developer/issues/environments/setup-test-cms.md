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
- Run `echo "DATABASE_URI=<CONNECTION_STRING>" >> .env.test`.
- Add to `package.json` the script `"develop:test-env": "ENV_PATH=.env.test NODE_ENV=test npm run develop"`.
- Run `git add . && git commit -m "add test env setup"`

## Add Users and Permissions

- Follow the instructions as described in the repos `docs/users-and-permissions.md`.

## Add Content Seed

- Follow the instructions as described in the repos `docs/add-content-seed.md`.

## Deploy to Heroku

- Run `heroku login`.
- Run `heroku create <projectname>-cms`.
- Run `heroku config:set NODE_ENV=test`.
- Run `heroku config:set $(grep DATABASE_URI .env.test | xargs)`.
- Run `heroku config:set $(grep CLOUDINARY_NAME .env.test | xargs)`.
- Run `heroku config:set $(grep CLOUDINARY_KEY .env.test | xargs)`.
- Run `heroku config:set $(grep CLOUDINARY_SECRET .env.test | xargs)`.
- Run `git push heroku develop:master`.
- Open the provided URL with `/admin` and bookmark it as *Strapi Admin* to an *Product* folder and verify the URL is already in `README.md`.
- Login as Admin using the credentials as stored in LastPass.
