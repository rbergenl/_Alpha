# Setup Test Environment for Base

> The Test Environment for Base runs the Mock Server.
> Requires the initial Base setup to be completed.
> Requires an account for Heroku.

## Deploy to Heroku

- Run `heroku login`.
- Run `heroku create <projectname>-base`.
- RUn `heroku config:set NPM_CONFIG_PRODUCTION=false`
- Run `git push heroku develop:master`.
- Open and bookmark the provided URL.
