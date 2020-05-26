# Add Api

> First setup the *Mocks* repo so that a *Mock GraphQL* endpoint is available.

## Add Config
- Run the commands:
```bash
echo "REACT_APP_APPSYNC_GRAPHQL_ENDPOINT=https://localhost:8443/graphql" >> .env.local
echo "REACT_APP_APPSYNC_REGION=localhost_region" >> .env.local
```

## Run Codegen
TODO: ??

## Add Apollo
- Read the [docs](https://www.apollographql.com/docs/react/get-started/).
- Run `npm install apollo-boost @apollo/react-hooks graphql`.
- Add to `App.tsx` the lines (make sure to add the provider inside auth and store):
```javascript
import ApolloClient from 'apollo-boost';
const client = new ApolloClient({
  uri: config.aws.aws_appsync_graphqlEndpoint,
});
<ApolloProvider client={client}>..the app</ApolloProvider>
```

## Add Subscription Support
- Check the [docs](https://www.apollographql.com/docs/react/data/subscriptions/).
- Run `npm install --save apollo-link-ws subscriptions-transport-ws`.
- TODO: State Management with React Context, Hooks and Apollo.

## Add UI
```javascript
const addTodo = /* GraphQL */`
  mutation createTodo(
    $name:String!
    $description: String!
  ) {
    createTodo(input: { name:$name description:$description }) {
      id
      name
      description
    }
  }
`;
```
