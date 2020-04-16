# Api frontend

## Config
```json
{
    "aws_appsync_graphqlEndpoint": "https://z2omwfgl5je4llr5t7d3aj5qxe.appsync-api.us-east-1.amazonaws.com/graphql",
    "aws_appsync_region": "us-east-1",
    "aws_appsync_authenticationType": "AMAZON_COGNITO_USER_POOLS"
}
```

## App - example
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

## Codegen

## Uploading a file
```javascript
Storage.put(file.name, file)
.then (async (result) => {
    await API.graphql(graphqlOperation(createType, { input: inputObj })))
})
```