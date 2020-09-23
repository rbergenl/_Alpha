Expand on existing Dockerfile, and install the Gitlab Runner to it.
Then run it on Google Cloud Run, using the smallest engine (micro) to keep it for free.
Use the run command to connect it to Gitlab.

## Do Householding

- Disable *Shared Runners* in Gitlab.
- And find the *Token* to add your own runner (In Group > Settings).

## Create a VM with Docker

Choose Ubuntu latest version.
Add SSH key (note the added username.. is first part of email address).
Create.
Find the External IP in Network interface details.

`ssh -i ~/.ssh/dacent_google ddacent2@104.155.184.137`
`cat /etc/os-release` (Ubuntu)
`lsb_release -cs` (focal)
`uname -m` (x86_64)
Follow `apt-get` steps: https://docs.docker.com/engine/install/ubuntu/

Optionally: `sudo apt-get install build-essential`.

To run without SUDO add the user to the docker group `sudo usermod -aG docker $USER` en `reboot`.

## Pull the CICD Image
- Find the earlier created token: `cat ~/.docker/dacent_gitlab | pbcopy`.
- Run `nano docker_token`.
- Run `docker login registry.gitlab.com --username <username> --password-stdin < docker_token`.
- Run `docker pull registry.gitlab.com/dacent1/cicd`.

## Install and register gitlab-runner

- Check the [docs](https://docs.gitlab.com/runner/install/docker.html).
- Run:
```bash
docker run -d --name gitlab-runner --restart always \
-v /srv/gitlab-runner/config:/etc/gitlab-runner \
-v /var/run/docker.sock:/var/run/docker.sock \
gitlab/gitlab-runner:latest
```
- Run:
```bash
docker run --rm -it -v /srv/gitlab-runner/config:/etc/gitlab-runner gitlab/gitlab-runner register
# OR
docker run --rm -v /Users/Shared/gitlab-runner/config:/etc/gitlab-runner us.gcr.io/dacent-cicd/dacent-cicd register \
  --non-interactive \
  --executor "docker" \
  --docker-image alpine:latest \
  --url "https://gitlab.com/" \
  --registration-token "<TOKEN>" \
  --description "docker-runner" \
  --tag-list "docker" \
  --run-untagged="true" \
  --locked="false" \
  --access-level="not_protected"
```

## Configure the gitlab-runner

- Run `sudo nano /srv/gitlab-runner/config/config.toml`.
    - Keep concurrent on 1, because server will be overloaded with more.
- Run `docker restart gitlab-runner`.

# Enable Caching

- Caching is by default enabled and stored on the VM at `/var/lib/docker/volumes/<volume-id>/_data/<user>/<project>/<cache-key>/cache.zip`.
- The `.gitlab-ci.yml` file should enable global caching with (the install step should have this exact same settings but overriding the policy to `policy: pull-push` so cache is stored)
```yml
cache:
    key: $CI_COMMIT_REF_SLUG-$CI_PROJECT_DIR
    paths:
        - .npm/
        - node_modules/
    policy: pull
```
- In Google Cloud, create a Bucket:
  - Name: `<username>-gitlab-runner-cache-bucket`.
  - Region: single, same as VM.
  - Class: standard.
  - Access: bucket uniform.
  - Create.
- In Google Cloud, create a Service Account:
  - Name: `<username>-gitlab-runner-cache-bucket`.
  - Role: Storage Object Admin. (also add the condition: name > bucket name??)
  - Create.
  - Actions: create Key > JSON (use the fields `client_email` and `private_key`, then delete the file).
- Add to `/srv/gitlab-runner/config/config.toml`
```yaml
[runners.cache]
  Type = "gcs"
  Path = ""
  Shared = false
  [runners.cache.gcs]
    AccessID = "cache-access-account@test-project-123456.iam.gserviceaccount.com"
    PrivateKey = "-----BEGIN PRIVATE KEY-----\nXXXXXX\n-----END PRIVATE KEY-----\n"
    BucketName = "<username>-gitlab-runner-cache-bucket"
```
- Run `docker restart gitlab-runner`.

## Troubleshooting
- Restart docker with `sudo systemctl restart docker`.
- Job stays *Pending*; you can pause and start a runner.
