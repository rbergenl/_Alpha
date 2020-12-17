# Setup Test Environment for Base

> The Test Environment for Base runs the Mock Server.
> Requires the initial Base setup to be completed.
> Requires an account for Heroku.

## Deploy to Heroku

- Run `heroku login`.
- Run `heroku create <projectname>-base`.
- Run `heroku config:set NPM_CONFIG_PRODUCTION=false` to let Heroku skip installing *devDepencies*.
- Run `heroku config:set NODE_ENV=development` to enable GraphQL Playground.
- Run `git push heroku develop:master`.
- Add the url to bookmarks as *Heroku - Mock Server* to the folder *Developer > Environments* and verify the URL is already in `README.md`.

## Add Mongo Database

> Follow the instructions on *Setup Test CMS* to create a MongoDB Cluster. Inside that cluster multiple databases are possible.

- Login to mLab and at the cluster select *Connect*.
- Select `connect your application` and keep the default *NodeJS* and version *3.0 or later*. Then copy/paste the connection string.
- Run `echo ".env*" >> .gitignore`.
- Run `echo "DATABASE_URI=<CONNECTION_STRING>" >> .env.test`. Make sure te enter correcly the `<password>` (find credentials in LastPass) and use `mocks` for the `<dbname>`.
- Run `heroku config:set DATABASE_URI=<CONNECTION_STRING>`.
- Add to `package.json` the script `"seed:test-env": "DB_URI='$(cat .env.test | FIX_THIS)' npx mongo-seeding-cli --drop-database --replace-id ./mocks/db-data"`
