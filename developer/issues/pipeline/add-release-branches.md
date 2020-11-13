# Add Release:Branches

> Make sure to finish *Setup Initial CICD* and that `GITLAB_TOKEN` is set.

> Releasing a branch is already automatically covered by the `.gitlab-ci.yml` file.

## NPM Scoped Package

### Publish

- Add to `package.json` the key `files`.
    - For *UI* the value should be `["dist/"]`.
- Remove from `package.json` the key `"private": "true",`.
- Publishing is handled by the pipeline which utilizes `npm config set` instead of an `.npmrc` file. 
- Read the `CONTRIBUTING.md` file for more information.
- How to install a package is described in the *Getting Started* of a `README.md` (for example in *App*).

TODO
- TODO: prerelease on all feature branches? (develop yes.. and feature based on `[release]`)(how does this work with semantic-release?)
- Develop is postfixed with -alpha. Release is postfixed with -beta. Master creates a tag and runs npm version and a script to generate release notes.
- Libraries use Git Flow to manage multiple supported live versions and SemanticVersioning to communicate the type of changes (breaking, feature or fix).
- Applications use GitHub Flow to bring features quickly to production as Continuous Delivery and SemanticVersioning to communice the type of release (new or fixes).

