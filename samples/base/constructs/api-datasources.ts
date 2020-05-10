/* eslint-disable no-new */
/* eslint-disable no-sync */
import { RootType } from './api';
import * as appsync from '@aws-cdk/aws-appsync';
import * as cdk from '@aws-cdk/core';
import * as dynamodb from '@aws-cdk/aws-dynamodb';
import * as fs from 'fs';

export interface Props {
    resourceName: string;
    api: appsync.GraphQLApi;
    pathResolvers: string;
}

export class ApiDataSources extends cdk.Construct {
    public db: appsync.DynamoDbDataSource;

    public none: appsync.CfnDataSource;

    public constructor(scope: cdk.Construct, id: string, props: Props) {
        super(scope, id);

        const table = new dynamodb.Table(this, `${props.resourceName}Table`, {
            billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
            partitionKey: {
                name: 'id',
                type: dynamodb.AttributeType.STRING,
            },
        });

        ApiDataSources.createSecondaryIndexes(props, table);

        this.db = props.api.addDynamoDbDataSource(
            `${props.resourceName}`,
            `The ${props.resourceName} data source`,
            table
        );

        this.none = new appsync.CfnDataSource(
            this,
            `${props.resourceName}DSNone`,
            {
                apiId: props.api.apiId,
                name: `${props.resourceName}DSNone`,
                type: 'NONE',
            }
        );

        this.none.addDependsOn(props.api.schema);
    }

    // For each type that has @key defined, it should also have queryField defined
    // And based on that resolver `Query.{type}By{field}` an index will be created
    private static createSecondaryIndexes(
        props: Props,
        table: dynamodb.Table
    ): void {
        const resolverFiles = fs.readdirSync(props.pathResolvers);

        for (const resolverFile of resolverFiles) {
            const [rootType, index, reqres] = resolverFile.split('.');

            const [
                type,
                partitionKeyName,
                sortKeyName,
                compositeKeyName,
            ] = index.split('By');

            if (rootType !== RootType.QUERY || reqres === 'res') {
                // Only the 'Query' and 'req' file is needed
                continue;
            }

            if (type === props.resourceName.toLowerCase()) {
                table.addGlobalSecondaryIndex({
                    indexName: `by${partitionKeyName}By${sortKeyName}${
                        compositeKeyName ? `By${compositeKeyName}` : ``
                    }`,
                    partitionKey: {
                        name: partitionKeyName.toLowerCase(),
                        type: dynamodb.AttributeType.STRING,
                    },
                    sortKey: {
                        name: `${sortKeyName.toLowerCase()}${
                            compositeKeyName ? `#${compositeKeyName}` : ``
                        }`,
                        type: dynamodb.AttributeType.STRING,
                    },
                });
            }
        }
    }
}
