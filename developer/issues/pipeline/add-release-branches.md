# Add Release:Branches

> Make sure to finish *Setup Initial CICD* and that `GITLAB_TOKEN` is set.
> Releasing a branch is already automatically covered by the `.gitlan-ci.yml` file.

## NPM Private Scope Package

### Publish

- Add `files`. And/or check `.npmrc` file.
- Remove the key `"private": "true",`.
- Add `.npmrc` file.
- Find the `project-id` in the HTML of the project (18085746).
- `"publishConfig": { "@foo:registry":"https://gitlab.com/api/v4/projects/<your_project_id>/packages/npm/" }`
- Go to *Gitlab > Group > Settings > Repository > Deploy Tokens*. And create with name `NPM` and select `read_package_registry` and `write_package_registry`.
- Copy/paste the *Token* and store in a CI / CD variables `NPM_TOKEN` (for later usage reference).

### Install

- Add `.npmrc` file with:
```bash
# Set URL for your scoped packages.
@scope:registry=https://gitlab.com/api/v4/packages/npm/
# Add the token for the scoped packages URL. This will allow you to download
//gitlab.com/api/v4/packages/npm/:_authToken=${CI_JOB_TOKEN}
```
- Run `export CI_JOB_TOKEN=<npm_token_in_group_cicd_variables>`.


TODO
- TODO: prerelease on all feature branches? (develop yes.. and feature based on `[release]`)(how does this work with semantic-release?)
- Develop is postfixed with -alpha. Release is postfixed with -beta. Master creates a tag and runs npm version and a script to generate release notes.
- Libraries use GitFlow to manage multiple supported live versions and SemanticVersioning to communicate the type of changes (breaking, feature or fix).
- Applications use GitHubFlow to bring features quickly to production as Continuous Delivery and SemanticVersioning to communice the type of release (new or fixes).

