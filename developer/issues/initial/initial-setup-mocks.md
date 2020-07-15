# Initial Setup Mocks

> First setup the *Base* repo so that a *GraphQL Schema* is available.

# Do Householding
- Run `npm install --save-dev nodemon typescript npm-run-all`.
- Run `npx tsc --init`.
- Add to `package.json`:
```json
"start": "npm run build && node dist",
"develop": "npm-run-all --parallel \"build -- --watch\" \"serve -- --watch\"",
"serve": "nodemon dist",
"build": "rm -rf dist && tsc --outDir dist"
```
- Copy/pase from *Alpha Project* the `src` folder.

## Auth
- Check [docs](https://aws.amazon.com/premiumsupport/knowledge-center/decode-verify-cognito-json-token/).
- Run `npm install express cors body-parser jsonwebtoken`.
- Run `npm install --save-dev @types/express @types/cors @types/jsonwebtoken`.
- RUN `openssl req \
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
    -days 3650`.
- Open KeychainOS > Certificates > `File` > `Import Items...`.
- Import the just created `crt` file.
- Open it and at the section *Trust* set it to *Always Trust*.

## Api
- Run `npm install apollo-server-express graphql-tools merge-graphql-schemas`.
- Run `npm install --save-dev git+ssh://git@<username>.gitlab.com:<groupname>/base.git#master`.
- In the *Base* repo run `npm link` and then in the target repo run `npm link @<projectname>/base` (this allows to use the local repo to be used for rapid development).
- Add in `package.json` to `"start"` script the command `npm run link` and add `"link": npm link @<projectname>/base`.

### GraphQL Types
- Run `npm install --save-dev apollo-boost`.
- Add to `package.json` the script `"codegen": "apollo client:codegen src/api/types --target typescript --outputFlat",`.
- Add a file `apollo.config.js` with the content:
```javascript
const path = require('path');
module.exports = {
    client: {
        service: {
            name: 'aardonyx-webapp-graphql',
            localSchemaFile: path.resolve(__dirname, './node_modules/@aardonyx/base/cdk.out/schema.graphql')
        }
    }
};
```
- Create a file `src/api/queries/message.ts` (with import apollo-boost).

### Chat
- Run `npm install graphql-subscriptions`.
- Create a file `src/api/message.ts`.
- Use PubSub and create resolvers for Query, Mutation and Subscription.

## Analytics
- Add `app.use(bodyParser.json());`.
- Add `app.use('/v1/apps/localhost-analytics-app', analyticsRouter);`.
