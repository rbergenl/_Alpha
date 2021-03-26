# Contributing

## Submitting an Issues
-> TODO

## Branching
-> TODO

## Submitting a Pull Request
-> TODO

When merging from a feature branch to develop use in the Pull request description the text Closes #1. When it fixes an issue from Sentry also use Fixes ADMIN-1

## Auditing

- Run `npm run audit` to check audit issues.
- Run `npm audit fix` to fix audit issues.
- If any audit issues remain, those are most likely due to issues in dependencies of this projects dependencies. To resolve those, run `npx resolve-audit` and choose to `fix` or `ignore` the issue.
- Run `npm ls <modulename>` to view more `details` and find the dependency usage(s). Then run `npm update --depth <depth> <modulename>`.

## Updating

- Run `npm outdated` periodically. Then run the command `npm update` to make sure the red packages are updated to the *wanted* version.
- To update all packages including major versions, first commit all changes. Then run `npx npm-update-all`. Test to validate no breaking changes occured, otherwise revert to the latest commit with `git restore .`.
- Run `npm dedupe` after updating packages to remove any duplicates.
- App: remember to check for a new Expo SDK and run `expo upgrade`.

## Formatting

- When the pipeline command `npm run format` detects issues in file(s) the solution is: in VSCode, install via extension sidebar `prettier-vscode`, and execute on a document with `CDM+SHIFT+P` and `Format Document`.

# Testing

- Run `npx jest --watch <optionally_first_part_of_filename>` to work on specific tests in a Test Driven Development approach.
- Inside a testfile, mark a test with `it.only()` to skip all other tests in the suite.
- Use the watch mode to review and update snapshot(s). The snapshot exists to capture unintented UI changes and should be commit and code reviewed during a Pull Request.

## Releasing

- The last commit before merging a feature branch to develop should be conform [commitizen](https://github.com/commitizen/cz-cli) convention.
- Run `git commit -m "message"` and exit `CTRL+C` the interactive pre-commit-hook to commit without convention.
- A release happens after a commit on master. Based on the conventional commits in git log, the tool [semantic-release](https://github.com/semantic-release/semantic-release) creates a `git tag`, create a release, bumps the `package.json` version accordingly and generates a `CHANGELOG.md`.

## Publishing

- Publishing an NPM package is handled by the pipeline during the Release step.
- To manually publish a package add the following `.npmrc` file (modify `<projectname>`):
```yml
# The Project ID and Token are automatically set by the pipeline
# For manual publishing:
# - the Project Id can be found on Gitlab Project Overview Page
# - the Personal Token (used for CI_JOB_TOKEN) can be found in Gitlab > Group > Setting > Variables > GITLAB_TOKEN
# Set URL for your scoped packages.
@<projectname>:registry=https://gitlab.com/api/v4/projects/${CI_PROJECT_ID}/packages/npm/
# Add token for uploading to the registry.
//gitlab.com/api/v4/projects/${CI_PROJECT_ID}/packages/npm/:_authToken=${CI_JOB_TOKEN}
```
- Set the Environment Variables `CI_PROJECT_ID` and `CI_JOB_TOKEN` with the retrieved values.
- Run `npm publish`.

## Debugging

- Check the file `TROUBLESHOOTING.md`.
- Run `npm run debug` when applicable.
- Check Sentry for errors when applicable.
- App: Check the [docs](https://docs.expo.io/workflow/debugging/).
    - Install debugger: `brew cask install react-native-debugger`.
    - Install proxy: `brew install mitmproxy`.
    - Instaal logger: `brew install --HEAD libimobiledevice -g`.
- App: run `npx @react-native-community/cli doctor` to find missing items from a common App development setup.
- Redux: to enable debugger add in `store/index.tsx` to the `createStore()` function as third parameter `(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()` (ignore the eslint error).

## Patching

- Run `npm install --save-dev patch-package`.
- Add to `package.json` the script `"postinstall": "patch-package"`.
- Also add `unsafe-perm = true` to `.npmrc` file to allow the postinstall action.
- Make a fix in a node_modules/ package file.
- Run `npx patch-package <packagename>`.
- Commit the patch file in `patches/`.
