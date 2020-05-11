import * as path from 'path';
import { URL } from 'url';

import express from 'express';

import { ApolloServer } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import * as mergeGraphqlSchemas from 'merge-graphql-schemas';

export const graphqlRouter = express.Router();

const { fileLoader, mergeTypes } = mergeGraphqlSchemas;
const typesArray = fileLoader(path.join(require.resolve('@aardonyx/base/package.json'), '../graphql/**/*.graphql'));
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

export const apolloServer = new ApolloServer({ schema, mocks })
