# Enable pipeline in repo
> Requires the *setup pipeline* to be completed. The docker image should have been pushed to the registry.
- From *Project Alpha* copy/pase the file `.gitlab-ci.yml`.
- Make sure the file `.gitlab-ci.yml` points `image` to `registry.gitlab.com/<groupname>/base`.
- Add/replace to `package.json` these scripts:
    ```json
    "audit": "echo \"should be implemented\"",
    "lint": "echo \"should be implemented\"",
    "format": "echo \"should be implemented\"",
    "test": "echo \"should be implemented\"",
    "deploy:test": "echo \"should be implemented\"",
    "deploy:prod": "echo \"should be implemented\""
    ```
- Git add, commit and push.
