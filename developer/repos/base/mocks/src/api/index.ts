import * as path from 'path';
import * as fs from 'fs';
import { ApolloServer } from 'apollo-server-express';
import { makeExecutableSchema, addMocksToSchema } from 'graphql-tools';

import { mocks as awsMocks } from './mocks/aws';
import { mocks as mongoMocks } from './mocks/monogdb';

// import { resolvers as messageResolvers } from './message';
import { resolvers as mealResolvers } from './resolvers/meal';

const schemaString = fs.readFileSync(path.join(__dirname, '../../../', './graphql/__generated__/schema.graphql')).toString();

const schema = makeExecutableSchema({
    typeDefs: [schemaString],
    resolvers: [mealResolvers]
});

const mocks = {
    ...awsMocks,
    ...mongoMocks
};

// TODO: when adding mocks, when a field should be null it becomes "Hello World" (e.g. meal.instructions.use)
// addMocksToSchema({
//     schema,
//     // mocks,
//     preserveResolvers: true
// });

export const apolloServer = new ApolloServer({
    schema,
    subscriptions: {
        onConnect: () => console.log('Connected to websocket'),
    }
});
