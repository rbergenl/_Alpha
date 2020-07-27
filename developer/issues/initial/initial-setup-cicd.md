# Initial Setup CICD

> Make sure you have *Docker* installed.

## Docker Image
- Run `docker login registry.gitlab.com --username <username> --password-stdin < ~/.docker/<projectname>_gitlab`.
- From *Project Alpha* copy/paste the file `Dockerfile`.
- Make sure in the `Dockerfile` to modify the `docker` commands in the top comments.
- Run the `docker build` command as described in the `Dockerfile`.
- Run the `docker push` command as described in the `Dockerfile`.

## NPM Scripts
- Run `npm init --yes`.
- Add these scripts to the newly generated `package.json` file:
```json
{
    "audit": "echo \"not yet implemented\"",
    "lint": "echo \"not yet implemented\"",
    "format": "echo \"not yet implemented\"",
    "build": "echo \"not yet implemented\"",
    "test": "echo \"not yet implemented\"",
    "deploy:test": "echo \"not yet implemented\"",
    "deploy:prod": "echo \"not yet implemented\""
}
```

## Gitlab-CI File
- From *Project Alpha* copy/paste the file `.gitlab-ci.yml`.
- In that file modify the key `image`.
- Run `git add . && git commit -m "add docker file, package file and gitlab file" && git push`
