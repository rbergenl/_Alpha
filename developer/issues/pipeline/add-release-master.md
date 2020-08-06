# Add Release:Version

- TODO: npm publish (in cicd) -> only for UI and Base project.
- TODO: check reference to issue ticket

# Setup Commitizen

- Run `npx commitizen init cz-conventional-changelog --save-dev --save-exact`.
- Add to `package.json` the `{ "huskey": "hooks": { "prepare-commit-msg": "exec < /dev/tty && git cz --hook || true" } }` (huskey should already be installed for the *Format* step).

# Setup Semantic Release

- In Gitlab, create a Personal Access Token with scope *api, write repo* and add is as a protected and masked variable `GITLAB_TOKEN` to *Gitlab > <Groupname> > Settings > CI / CD > Variables*.
- Run `npm install --save-dev semantic-release @semantic-release/changelog @semantic-release/npm @semantic-release/git @semantic-release/gitlab`.
- Add to `package.json` the script `"release": "semantic-release --debug",`
- Add to `package.json` the key `"repository": { "url": "https://gitlab.com/<groupname>/<reponame>" },` (needed to format URL to issues correctly).
- Modify `package.json` the key `"private": false` (for Base and UI only, which will run npm publish).
- Add to `package.json` the config under key `"release"`:
```json
{
"release": {
    "plugins": [
      "@semantic-release/commit-analyzer",
      "@semantic-release/release-notes-generator",
      "@semantic-release/changelog",
      "@semantic-release/npm",
      [
        "@semantic-release/git",
        {
          "assets": [
            "CHANGELOG.md",
            "package.json",
            "package-lock.json"
          ],
          "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
        }
      ],
      "@semantic-release/gitlab"
    ]
  }
}
```

# Add Documentation

- Create a file `CONTRIBUTING.md` with the text:
```markdown
# Release

- The last commit before merging a feature branch to develop should be conform [commitizen](https://github.com/commitizen/cz-cli) convention.
- To commit without convention, just commit as you normally would `git commit -m "message"` and exit `CTRL+C` the interactive pre-commit-hook.
- A release happens after a commit on master. Based on the conventional commits in git log, the tool [semantic-release](https://github.com/semantic-release/semantic-release) creates a `git tag`, create a release, bumps the `package.json` version accordingly and generates a `CHANGELOG.md`.
```
