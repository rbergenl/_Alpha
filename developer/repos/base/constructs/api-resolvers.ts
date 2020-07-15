/* eslint-disable no-sync */
import { DefaultField, RootType } from './api';
import * as appsync from '@aws-cdk/aws-appsync';
import * as cdk from '@aws-cdk/core';
import * as fs from 'fs';

export interface Props {
    pathGeneric: string;
    pathResolvers: string;
    resourceName: string;
    dataSourceDB: appsync.DynamoDbDataSource;
    dataSourceNone: appsync.CfnDataSource;
    api: appsync.GraphQLApi;
}

export class ApiResolvers extends cdk.Construct {
    public constructor(scope: cdk.Construct, id: string, props: Props) {
        super(scope, id);

        // Set all resolvers to the default fields of the root types
        for (const defaultField of Object.values(DefaultField)) {
            const suffix = defaultField === DefaultField.LIST ? 's' : '';
            const rootType = ApiResolvers.getRootType(defaultField);
            const reqFile = `${props.pathGeneric}/${rootType}.${defaultField}.req.vtl`;
            const resFile = `${props.pathGeneric}/${rootType}.${defaultField}.res.vtl`;

            // If override file exists in resolvers folder it will be used instead of generic
            const reqFileOverride = `${props.pathResolvers}/${rootType}.${defaultField}${props.resourceName}.req.vtl`;
            const resFileOverride = `${props.pathResolvers}/${rootType}.${defaultField}${props.resourceName}.res.vtl`;

            if (!fs.existsSync(reqFile) || !fs.existsSync(resFile)) {
                // Both 'req' and 'res' file should be available
                continue;
            }

            if (rootType === RootType.QUERY || rootType === RootType.MUTATION) {
                props.dataSourceDB.createResolver({
                    typeName: rootType,
                    fieldName: `${defaultField}${props.resourceName}${suffix}`,
                    requestMappingTemplate: appsync.MappingTemplate.fromFile(
                        fs.existsSync(reqFileOverride)
                            ? reqFileOverride
                            : reqFile
                    ),
                    responseMappingTemplate: appsync.MappingTemplate.fromFile(
                        fs.existsSync(resFileOverride)
                            ? resFileOverride
                            : resFile
                    ),
                });
            }

            // Subscriptions have datasource type None (not supported by CDK yet)
            if (rootType === RootType.SUBSCRIPTION) {
                const resolver = new appsync.CfnResolver(
                    this,
                    `${rootType}${defaultField}${props.resourceName}Resolver`,
                    {
                        apiId: props.api.apiId,
                        typeName: rootType,
                        dataSourceName: props.dataSourceNone.name,
                        fieldName: `${defaultField}${props.resourceName}`,
                        requestMappingTemplate: appsync.MappingTemplate.fromFile(
                            reqFile
                        ).renderTemplate(),
                        responseMappingTemplate: appsync.MappingTemplate.fromFile(
                            resFile
                        ).renderTemplate(),
                    }
                );

                // Manually added since the resolver is a CfnResource
                resolver.addDependsOn(props.dataSourceNone);
            }
        }

        const resolverFiles = fs.readdirSync(props.pathResolvers);

        // Add resolver to each Secondary Index field of this resource on Query
        for (const resolverFile of resolverFiles) {
            const [rootType, index, reqres] = resolverFile.split('.');
            const [type] = index.split('By');

            if (
                type !== props.resourceName.toLowerCase() ||
                rootType !== RootType.QUERY ||
                reqres === 'res'
            ) {
                // Only the 'Query' and 'req' file is needed for current 'resourceName'
                continue;
            }

            props.dataSourceDB.createResolver({
                typeName: rootType,
                fieldName: `${index}`,
                requestMappingTemplate: appsync.MappingTemplate.fromFile(
                    `${props.pathResolvers}/${rootType}.${index}.req.vtl`
                ),
                responseMappingTemplate: appsync.MappingTemplate.fromFile(
                    `${props.pathResolvers}/${rootType}.${index}.res.vtl`
                ),
            });
        }

        // Add resolver to connected fields of this Type
        for (const resolverFile of resolverFiles) {
            const [type, field, reqres] = resolverFile.split('.');

            if (
                // Only if the field is this resource
                field
                    .toLowerCase()
                    .startsWith(props.resourceName.toLowerCase()) &&
                // And the type is not a roottype
                !Object.values(RootType)
                    .toString()
                    .includes(type) &&
                // And only once, so for 'req' file
                reqres === 'req'
            ) {
                props.dataSourceDB.createResolver({
                    typeName: type,
                    fieldName: `${field}`,
                    requestMappingTemplate: appsync.MappingTemplate.fromFile(
                        `${props.pathResolvers}/${type}.${field}.req.vtl`
                    ),
                    responseMappingTemplate: appsync.MappingTemplate.fromFile(
                        `${props.pathResolvers}/${type}.${field}.res.vtl`
                    ),
                });
            }
        }
    }

    private static getRootType(defaultField: DefaultField): RootType {
        switch (defaultField) {
            case DefaultField.CREATE:
            case DefaultField.DELETE:
            case DefaultField.UPDATE:
                return RootType.MUTATION;
            case DefaultField.GET:
            case DefaultField.LIST:
                return RootType.QUERY;
            case DefaultField.ONCREATE:
            case DefaultField.ONDELETE:
            case DefaultField.ONUPDATE:
                return RootType.SUBSCRIPTION;
            default:
                throw new Error('resolver action not found');
        }
    }
}
