import * as path from 'path';
import * as fs from 'fs';
import { ApolloServer } from 'apollo-server-express';
import { makeExecutableSchema, addMocksToSchema } from 'graphql-tools';

import { mocks as awsMocks } from './aws';
import { resolvers as messageResolvers } from './message';

const schemaString = fs.readFileSync(path.join(require.resolve('@aardonyx/base/package.json'), '../cdk.out/schema.graphql')).toString();

const schema = makeExecutableSchema({
    typeDefs: [schemaString],
    resolvers: [messageResolvers]
});

const mocks = {
    ...awsMocks
};

addMocksToSchema({
    schema,
    mocks,
    preserveResolvers: true
});

export const apolloServer = new ApolloServer({
    schema,
    subscriptions: {
        onConnect: () => console.log('Connected to websocket'),
    }
});
