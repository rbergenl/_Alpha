# Contributing

## Submitting an Issues
-> TODO

## Branching
-> TODO

## Submitting a Pull Request
-> TODO

When merging from a feature branch to develop use in the Pull request description the text Closes #1. When it fixes an issue from Sentry also use Fixes ADMIN-1

## Updating

- Run `npm outdated` periodically. Then run the command `npm update` to make sure the red packages are updated to the *wanted* version.
- To update all packages including major versions, first commit all changes. Then run `npx npm-update-all`. Test to validate no breaking changes occured, otherwise revert to the latest commit with `git restore .`.
- Run `npm dedupe` after updating packages to remove any duplicates.
- App: remember to check for a new Expo SDK and run `expo upgrade`.
