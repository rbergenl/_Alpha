# Setup Initial CICD

> Make sure you have *Docker* installed.

## Setup access to Gitlab Repository

> This access is needed so that a release can be commited back to the repository.

- In Gitlab, create a Personal Access Token with name `Pipeline` and scope *api, write repo* and add is as a protected and masked variable `GITLAB_TOKEN` to *Gitlab > Group > Settings > CI / CD > Variables*.

## Setup access to Docker Registry

- In *Gitlab > Settings > Access Token* create a new token with name `Docker` and scope `api`. Save the token in a file `nano ~/.docker/<projectname>_gitlab`.
- Run `docker login registry.gitlab.com --username <username> --password-stdin < ~/.docker/<projectname>_gitlab`.

## Docker Image

- From *Project Alpha* copy/paste the file `Dockerfile`.
- Make sure in the `Dockerfile` to modify the account details in the `docker` commands in the top comments.
- Run the `docker build` command as described in the `Dockerfile`.
- Run the `docker push` command.
- Run the `docker image` command to cleanup your local system.

## NPM Scripts

- Run `npm init --yes`.
- Run `npm install` to generate a `package-lock.json` file.
- Add these scripts to the newly generated `package.json` file:
```json
{
    "audit": "echo \"not yet implemented\"",
    "lint": "echo \"not yet implemented\"",
    "format": "echo \"not yet implemented\"",
    "build": "echo \"not yet implemented\"",
    "test": "echo \"not yet implemented\"",
    "release": "echo \"not yet implemented\"",
    "deploy:test": "echo \"not yet implemented\"",
    "deploy:prod": "echo \"not yet implemented\""
}
```

## Gitlab-CI File

- From *Project Alpha* copy/paste the file `.gitlab-ci.yml`.
- Run `git add . && git commit -m "add docker file, package file and gitlab file, closes #4" && git push`.
- View the pipeline success in *Gitlab > Group > Repo > CI / CD > Pipelines*.
