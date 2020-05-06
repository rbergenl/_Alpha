# Enable pipeline in repo
> Requires the *setup pipeline* to be completed. The docker image and gitlab-ci file should have been pushed to the registry.
- In Gitlab > Group > Repo > Settings > CI / CD > General Pipelines set the setting *Custom CI configuration path* to `.gitlab-ci.yml@<groupname>/cicd`
- Add/replace to `package.json` these scripts:
    ```json
    "audit": "echo \"not yet implemented\"",
    "lint": "echo \"not yet implemented\"",
    "format": "echo \"not yet implemented\"",
    "test": "echo \"not yet implemented\"",
    "deploy:test": "echo \"not yet implemented\"",
    "deploy:prod": "echo \"not yet implemented\""
    ```
- Run `echo -e "# in Gitlab > Group > Repo > Settings > CI / CD > General Pipelines\n# the setting \"custom CI configuration path\"\n# is set to \".gitlab-ci.yml@<groupname>/cicd\"" > .gitlab-ci.yml`.
- Git add, commit and push.
