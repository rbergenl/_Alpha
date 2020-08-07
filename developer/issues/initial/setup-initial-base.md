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

## Enable Mocking

> The HTTPS connection is required for the Auth *Json Web Token (JWT)* to work.

- Copy/paste from *Alpha Projects* the folder `mocks`.
- Add to `tsconfig.json` the compiler options `"esModuleInterop": true`
- Run `npm install --save-dev body-parser cors express @types/{cors,express} ts-node-dev`.
- Add to `package.json` the script `"mocks": "ts-node-dev mocks/src"`.
- Run in the folder `mocks`:
```bash
openssl req \
    -newkey rsa:2048 \
    -x509 \
    -nodes \
    -keyout selfsigned.key \
    -new \
    -out selfsigned.crt \
    -subj /CN=mock.<projectname>.com \
    -reqexts SAN \
    -extensions SAN \
    -config <(cat /System/Library/OpenSSL/openssl.cnf \
        <(printf '[SAN]\nsubjectAltName=DNS:localhost')) \
    -sha256 \
    -days 3650
```
- Open KeychainOS > Certificates > `File` > `Import Items...`.
- Import the just created `crt` file.
- Open it and at the section *Trust* set it to *Always Trust*.
- Run `npm run mocks` and open the browser at `https://localhost:8443`.

## Add Backend

> When using Api and/or Storage, always add Auth first.

- Auth: follow the instructions from `<projectname>/<projectname>-base/docs/auth.md`.
- Api: follow the instructions from `<projectname>/<projectname>-base/docs/api.md`.
- Storage: follow the instructions from `<projectname>/<projectname>-base/docs/storage.md`.
- Function: follow the instructions from `<projectname>/<projectname>-base/docs/function.md`.
