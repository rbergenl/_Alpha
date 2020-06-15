/* eslint-disable no-new */
/* eslint-disable no-sync */
import * as fs from 'fs';
import * as path from 'path';

import * as appsync from '@aws-cdk/aws-appsync';
import * as cdk from '@aws-cdk/core';
import * as cognito from '@aws-cdk/aws-cognito';
import * as lambdaNodeJS from '@aws-cdk/aws-lambda-nodejs';

import { ApiDataSources } from './api-datasources';
import { ApiPipelines } from './api-pipelines';
import { ApiResolvers } from './api-resolvers';
import { ApiSchema } from './api-schema';

const paths = {
    generic: path.join(__dirname, '../graphql/generic'),
    models: path.join(__dirname, '../graphql/models'),
    resolvers: path.join(__dirname, '../graphql/resolvers'),
    pipelineResolvers: path.join(__dirname, '../graphql/pipelineResolvers'),
};

export interface Props {
    apiName: string;
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

        const schema = new ApiSchema();

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
            schemaDefinition: schema.asString(),
        });

        // Each defined model should get a table and resolvers
        const modelFiles = fs.readdirSync(paths.models);

        for (const file of modelFiles) {
            const resourceName = Api.capitalize(file.split('.')[0]);

            const dataSources = new ApiDataSources(
                this,
                `${resourceName}DataSources`,
                {
                    resourceName,
                    api,
                    pathResolvers: paths.resolvers,
                }
            );

            new ApiResolvers(this, `${resourceName}Resolvers`, {
                pathGeneric: paths.generic,
                pathResolvers: paths.resolvers,
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
            paths: paths,
        });
    }

    private static capitalize(value: string): string {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
}
