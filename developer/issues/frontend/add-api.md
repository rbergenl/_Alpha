# Add Api

> First setup the *Base* repo so that a *Mock GraphQL* endpoint is available.

## Add Config

- Run the commands:
```bash
echo "REACT_APP_APPSYNC_GRAPHQL_ENDPOINT=https://localhost:8443/graphql" >> .env.local
echo "REACT_APP_APPSYNC_REGION=localhost_region" >> .env.local
```
- Add `.env*` to `.gitignore` if it doesn't exist yet.

## Add Apollo Client

- Read the [docs](https://www.apollographql.com/docs/react/get-started/).
- Run `npm install @apollo/client apollo graphql`.
- Add to `App.tsx` the lines (make sure to add the provider inside auth and store):
```javascript
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import config from './app-config'; // make sure "allowJs": true is added to tsconfig.json
const client = new ApolloClient({
  uri: config.aws.aws_appsync_graphqlEndpoint,
  cache: new InMemoryCache()
});
<ApolloProvider client={client}>..the app</ApolloProvider>
```

## Add Subscription Support

- Check the [docs](https://www.apollographql.com/docs/react/data/subscriptions/).
- Run `npm install --save apollo-link-ws subscriptions-transport-ws`.

## Add Codegen and Intellisense

- Add to `package.json` the script `"codegen": "apollo client:codegen src/__generated__/types --target typescript --outputFlat",`.
- Add to the root a file `apollo.config.js` with the contents:
```javascript
const path = require('path');
module.exports = {
    client: {
        service: {
            name: '<projectname>-webapp-graphql',
            localSchemaFile: path.resolve(__dirname, './node_modules/@aardonyx/base/graphql/__generated__/schema.graphql')
        }
    }
};
```
- Create a file `src/api/queries/message.ts` (with import apollo-boost).

## Chat Example
```javascript
import { LIST_MESSAGES, ON_CREATE_MESSAGE, CREATE_MESSAGE } from 'api/queries/message';
import { createMessage as CreateMessage } from 'api/types/createMessage';
import { listMessages as ListMessages } from 'api/types/listMessages';
import { onCreateMessage as OnCreateMessage } from 'api/types/onCreateMessage';
const [
    createMessage,
    {
        loading: mutationLoading,
        error: mutationError
    }
] = useMutation<CreateMessage>(CREATE_MESSAGE);
const {
    loading: queryLoading,
    error: queryError,
    data: queryData,
    subscribeToMore
} = useQuery<ListMessages>(LIST_MESSAGES);
useEffect(() => subscribeToMore<OnCreateMessage>({
    document: ON_CREATE_MESSAGE,
    variables: {},
    updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const newMessage = subscriptionData.data.onCreateMessage;
        return Object.assign({}, prev, {
            listMessages: {
                items: [newMessage, ...prev.listMessages!.items!],
                __typename: 'MessageConnection'
            }
        });
    }
}), [ subscribeToMore ]);
return (<React.Fragment>
  <h2>Messages</h2>
  <ul>
      {queryData!.listMessages!.items!.map((value: any, index: number) => {
          return <li key={index}>{value.sentBy.name}: { value.text }</li>
      })}
  </ul>
  <form
      onSubmit={e => {
          e.preventDefault();
          createMessage({ variables: { 
              text: messageInput.current?.value,
              sentBy: { eq: state.user.id }
          } });
          messageInput.current!.value = '';
      }}
  >
      <input ref={messageInput} />
      <button type="submit">Send Message</button>
  </form>
</React.Fragment>)
```
