# Setup Initial Base

## Do Householding

- Modify the name in `package.json` to reflect the scope `@<projectname>/base`.
- Remove the `bin` key from `package.json` since the reference to Typescript file fails when installing this repo in other projects.
- Remove the folder `test`, but keep the Jest config, since unit tests might be written for Lambda Functions.
- Run `echo "cdk.context.json" >> .gitignore` (so that the SSM secrets do not end up in the codebase).
- Add to `tsconfig.json` the line `"compilerOptions": { "resolveJsonModule": true,` (to be able to import package.json).
- Add to `bin/<projectname>-base.ts` the line `const env: cdk.Environment = { account: '<ACCOUNT_ID>', region: '<REGION>' };` and add a third parameter to the stack `{ env }`.
- Run `touch stack.config.ts` (to create initial config file).
- Copy/paste from *Alpha Project* the folders `constructs`, `graphql` and `lambda`.
- Run `git add . && git commit -m "perform initial householding" && git push`.

## Add Backend

> When using Api and/or Storage, always add Auth first.

- Auth: follow the instructions from `<projectname>/<projectname>-base/docs/auth.md`.
- Api: follow the instructions from `<projectname>/<projectname>-base/docs/api.md`.
- Storage: follow the instructions from `<projectname>/<projectname>-base/docs/storage.md`.
- Function: follow the instructions from `<projectname>/<projectname>-base/docs/function.md`.
