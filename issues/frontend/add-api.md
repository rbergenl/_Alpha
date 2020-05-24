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
