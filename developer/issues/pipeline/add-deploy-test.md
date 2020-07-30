# Add Deploy:Test

> Make sure to have finished the step *Setup access to Heroku* in *DEVELOPER.md*.
> Make sure you have an *Expo* account.

- App:
    - Check the [docs](https://docs.expo.io/guides/setting-up-continuous-integration/).
    - Add to Gitlab > <Groupname> > <Reponame> > Settings > CI / CD > Variables a variable `EXPO_CLI_PASSWORD` and `EXPO_CLI_USERNAME` with the values as stored in LastPass.
    - Add to `package.json` the script `"deploy:test": "expo publish --non-interactive",`.
- Website:
    > Requires the setup test environment to be completed, including an initial Heroku deployment and a token added to Gitlab.
    - Add to package.json `"deploy:test": "git remote add heroku https://heroku:${HEROKU_TOKEN}@git.heroku.com/${npm_package_name}.git && git push heroku HEAD:master",`.
- CMS:
    > Requires the setup test environment to be completed, including an initial Heroku deployment and a token added to Gitlab.
    - Add to package.json `"deploy:test": "git remote add heroku https://heroku:${HEROKU_TOKEN}@git.heroku.com/${npm_package_name}.git && git push heroku HEAD:master"`.

- Base:
    - In file `/bin/<projectname>-base.ts` add the accountId with Region.
