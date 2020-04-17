/* eslint-disable no-new */
/* eslint-disable no-sync */
import { ApiDataSources } from './api-datasources';
import { ApiPipelines } from './api-pipelines';
import { ApiResolvers } from './api-resolvers';
import * as appsync from '@aws-cdk/aws-appsync';
import * as cdk from '@aws-cdk/core';
import * as cognito from '@aws-cdk/aws-cognito';
import * as fs from 'fs';
import * as lambdaNodeJS from '@aws-cdk/aws-lambda-nodejs';
import * as mergeGraphqlSchemas from 'merge-graphql-schemas';

export interface Props {
    apiName: string;
    paths: Record<string, string>;
    userPool: cognito.IUserPool;
    functions: Map<string, lambdaNodeJS.NodejsFunction>;
}

// FIELD
export enum DefaultField {
    CREATE = 'create',
    DELETE = 'delete',
    UPDATE = 'update',
    GET = 'get',
    LIST = 'list',
    ONCREATE = 'onCreate',
    ONDELETE = 'onDelete',
    ONUPDATE = 'onUpdate',
}

// TYPE
export enum RootType {
    QUERY = 'Query',
    MUTATION = 'Mutation',
    SUBSCRIPTION = 'Subscription',
}
export class Api extends cdk.Construct {
    public constructor(scope: cdk.Construct, id: string, props: Props) {
        super(scope, id);

        const api = new appsync.GraphQLApi(this, 'Api', {
            name: props.apiName,
            authorizationConfig: {
                defaultAuthorization: {
                    userPool: props.userPool,
                    // TODO: should be deny, and then resolver auths sufficient
                    defaultAction: appsync.UserPoolDefaultAction.ALLOW,
                },
            },
            logConfig: {
                fieldLogLevel: appsync.FieldLogLevel.ALL,
            },
            schemaDefinition: Api.generateschemaDefinitionFile(props),
        });

        // Each defined model should get a table and resolvers
        const modelFiles = fs.readdirSync(props.paths.models);

        for (const file of modelFiles) {
            const resourceName = Api.capitalize(file.split('.')[0]);

            const dataSources = new ApiDataSources(
                this,
                `${resourceName}DataSources`,
                {
                    resourceName,
                    api,
                    pathResolvers: props.paths.resolvers,
                }
            );

            new ApiResolvers(this, `${resourceName}Resolvers`, {
                pathGeneric: props.paths.generic,
                pathResolvers: props.paths.resolvers,
                resourceName,
                api,
                dataSourceDB: dataSources.db,
                dataSourceNone: dataSources.none,
            });
        }

        // Add pipelineResolvers to the fields which have a lambda function
        new ApiPipelines(this, 'Pipelines', {
            api,
            functions: props.functions,
            paths: props.paths,
        });
    }

    private static capitalize(value: string): string {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

    private static generateschemaDefinitionFile(props: Props): string {
        const { fileLoader, mergeTypes } = mergeGraphqlSchemas;
        const typesArray = fileLoader(props.paths.schemasIn);
        const typeDefs = mergeTypes(typesArray, { all: true });

        fs.writeFileSync(props.paths.schemaOut, typeDefs);

        return typeDefs;
    }
}
