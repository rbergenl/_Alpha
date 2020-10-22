# Enable pipeline in repo

> Requires the *Initial Setup CICD* to be completed. The docker image and gitlab-ci file should have been pushed to the registry.
- Run `echo -e "# in Gitlab > Group > Repo > Settings > CI / CD > General Pipelines\n# the setting \"custom CI configuration path\"\n# is set to \".gitlab-ci.yml@<groupname>/cicd\"" > .gitlab-ci.yml`.
- Follow the instructions in the newly generated `gitlab-ci.yml` file.
- Copy/paste the scripts as defined in `package.json` of the CICD repo into this repo.
- Run `git add . && git commit -m "enable pipeline" && git push`.
- View the pipeline in *Gitlab > Group > Repo > CI / CD > Pipelines*.

## App - Setup Pipeline (TODO)

TODO: check https://stackoverflow.com/questions/59539163/how-to-install-expo-ipa-on-iphone-6
TODO: check https://www.robincussol.com/build-standalone-expo-apk-ipa-with-turtle-cli/
Btw, check here: https://exp.host/@aardonyx1/aardonyx-app/index.exp?sdkVersion=37.0.0
