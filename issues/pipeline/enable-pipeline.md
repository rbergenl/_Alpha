# Enable pipeline in repo
> Requires the *setup pipeline* to be completed. The docker image and gitlab-ci file should have been pushed to the registry.
- In Gitlab > Group > Repo > Settings > CI / CD > General Pipelines set the setting *Custom CI configuration path* to `ci/.gitlab-ci.yml@<groupname>/base`
- From *Project Alpha* copy/pase the file `.gitlab-ci.yml`.
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
