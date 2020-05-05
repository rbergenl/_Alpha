# Initial Setup Base

- In file `/bin/planty-base.ts` change the logical stack name (will be name in cloudformation) and add the accountId with Region.
- Add to `tsconfig.json` the line `"resolveJsonModule": true` (to be able to import package.json).
- Add `cdk.context.json` to `.gitignore` (so that the SSM secrets do not end up in the codebase).

## Deploy the CI Docker Image
- TODO: ??

## Add Backend Auth
- Follow the instructions from `<projectname>/<projectname>-base/docs/auth.md`.
- Add Mock Auth.

## Add Backend Api
- First add backend auth.
- Follow the instructions from `<projectname>/<projectname>-base/docs/api.md`.
- Add Mock Api.

## Add Backend Storage
- First add backend auth.
- Follow the instructions from `<projectname>/<projectname>-base/docs/storage.md`.
- Add Mock Storage.

