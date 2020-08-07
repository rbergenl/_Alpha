# Setup Initial Mocks

> First setup the *Base* repo so that a *GraphQL Schema* is available.

TODO: process the sections below towards Base project

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
