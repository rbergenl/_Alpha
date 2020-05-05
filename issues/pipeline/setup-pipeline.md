# Setup pipeline

## Docker Image
- From *Project Alpha* copy/paste the folder `base/ci`.
- Make sure in the `Dockerfile` you modified the `docker` commands in the top comments.
- Run `docker login registry.gitlab.com --username <username> --password-stdin < ~/.docker/<projectname>_gitlab`.
- Run the `docker build` command as described in the `Dockerfile`.
- Run the `docker push` command as described in the `Dockerfile`.

## Gitlab-CI File
TODO: ??
