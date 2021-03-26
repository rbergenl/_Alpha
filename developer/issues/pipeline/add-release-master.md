# Add Release:Master

> Make sure to finish *Setup Initial CICD* and that `GITLAB_TOKEN` is set.

- TODO: use git version as the basis for versioning (see "Remarks" below).
- TODO: npm publish (in cicd) -> only for UI and Base project.
- TODO: check reference to issue ticket
- Develop is postfixed with -alpha. Release is postfixed with -beta. Master creates a tag and runs npm version and a script to generate release notes.

- Read the `CONTRIBUTING.md` file for more information.

# Setup Commitizen

- Run `npx commitizen init cz-conventional-changelog --save-dev --save-exact`.
- Add to `package.json` the `{ "huskey": "hooks": { "prepare-commit-msg": "exec < /dev/tty && git cz --hook || true" } }` (huskey should already be installed for the *Format* step).

# Setup Semantic Release

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

## Remarks

- https://cloudblogs.microsoft.com/industry-blog/en-gb/technetuk/2019/06/18/perfecting-continuous-delivery-of-nuget-packages-for-azure-artifacts/
- `git commit +semver: major`
- `npm version —follow-git`
- https://gist.github.com/aredridel/8973e96b4ff60fd98716
- `"postversion": "git push origin master --follow-tags && npm publish"`
- https://www.npmjs.com/package/semantic-release
- https://dev.to/bycedric/simplify-expo-releases-with-standard-version-2f4o
- https://github.com/expo-community/standard-version-expo/blob/master/package.json
