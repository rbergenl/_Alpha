# Add Deploy:Test

> Make sure you have an *Expo* account (only for App).
> Requires the setup test environment to be completed, including an initial Heroku deployment and a token added to Gitlab (for Website, CMS, Base only).

## Setup access to Heroku

> Only applies for Website / CMS / Base.

- Run `heroku login` and login via the browser.
- Run `heroku authorizations:create --description=gitlab`.
- Copy/paste the token to *Gitlab > Group > Settings > CICD > Variables* and add the variable `HEROKU_TOKEN` and set the flag *Protected* and *Masked*.

## NPM Script
- App:
    - Check the [docs](https://docs.expo.io/guides/setting-up-continuous-integration/).
    - Add to Gitlab > Group > Repo > Settings > CI / CD > Variables a variable `EXPO_CLI_PASSWORD` and `EXPO_CLI_USERNAME` with the values as stored in LastPass.
    - Add to `package.json` the script `"deploy:test": "expo publish --non-interactive",`.
- Website / CMS / Base:
    - Add to package.json `"deploy:test": "git remote add heroku https://heroku:${HEROKU_TOKEN}@git.heroku.com/${npm_package_name}.git && git push heroku HEAD:master",`.
        - In case the project is a scoped package (e.g. @project/repo), then add a key `"slug": "<repo_directory_name>",` and modify the deploy command to `npm_package_slug`.
