import * as path from 'path';
import * as fs from 'fs';
import * as mergeGraphqlSchemas from 'merge-graphql-schemas';
const { fileLoader, mergeTypes } = mergeGraphqlSchemas;

if (!fs.statSync(path.join(__dirname, '../cdk.out'))) fs.mkdirSync(path.join(__dirname, '../cdk.out'));

const typesArray = fileLoader(path.join(__dirname, '../graphql/**/*.graphql'));
export const schemaString = mergeTypes(typesArray, { all: true });

fs.writeFileSync(path.join(__dirname, '../cdk.out/schema.graphql'), schemaString);
