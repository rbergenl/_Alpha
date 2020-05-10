import * as path from 'path';
import { URL } from 'url';

import express from 'express';
import bodyParser from 'body-parser';

import { ApolloServer } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import * as mergeGraphqlSchemas from 'merge-graphql-schemas';

export const graphqlRouter = express.Router();

const { fileLoader, mergeTypes } = mergeGraphqlSchemas;
const typesArray = fileLoader(path.join(__dirname, '../graphql/**/*.graphql'));
const schemaString = mergeTypes(typesArray, { all: true });

const awsSchema = `
    scalar AWSDateTime
    scalar AWSDate
    scalar AWSURL
    directive @aws_subscribe(mutations: [String]!) on FIELD_DEFINITION
`;

const schema = makeExecutableSchema({
    typeDefs: [schemaString, awsSchema]
});

const mocks = {
    AWSDateTime: () => new Date(),
    AWSDate: () => new Date(),
    AWSURL: () => new URL('http://localhost')
};

// const server = new ApolloServer({
//     schema,
//     mocks
// });
export const apolloServer = new ApolloServer({ schema, mocks })

// graphqlRouter.use('/', bodyParser.json(), );
