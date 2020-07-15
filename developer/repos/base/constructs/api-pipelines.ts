/* eslint-disable no-sync */
import * as appsync from '@aws-cdk/aws-appsync';
import * as cdk from '@aws-cdk/core';
import * as fs from 'fs';
import * as iam from '@aws-cdk/aws-iam';
import * as lambdaNodeJS from '@aws-cdk/aws-lambda-nodejs';
import * as path from 'path';

export interface Props {
    paths: Record<string, string>;
    functions: Map<string, lambdaNodeJS.NodejsFunction>;
    api: appsync.GraphQLApi;
}

export enum LambdaDataSourceOperation {
    INVOKE = 'Invoke',
}

export class ApiPipelines extends cdk.Construct {
    public constructor(scope: cdk.Construct, id: string, props: Props) {
        super(scope, id);

        // Each pipelineResolver should have its datasource and resolvers available
        for (const resolverFile of fs.readdirSync(
            props.paths.pipelineResolvers
        )) {
            const [
                operation,
                functionName,
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                dataSource,
                reqres,
            ] = resolverFile.split('.');

            if (
                operation !== LambdaDataSourceOperation.INVOKE ||
                reqres === 'res'
            ) {
                // Only the 'Invoke' and 'req' file is needed for current 'functionName'
                continue;
            }

            const lambdaFunction = props.functions.get(functionName);

            if (!lambdaFunction) {
                throw new Error('Lambda does not exist for Lambda DataSource');
            }

            const functionResolverReq = path.join(
                props.paths.pipelineResolvers,
                `${operation}.${functionName}.LambdaDataSource.req.vtl`
            );
            const functionResolverRes = path.join(
                props.paths.pipelineResolvers,
                `${operation}.${functionName}.LambdaDataSource.res.vtl`
            );

            const dataSourceServiceRole = this.createServiceRole(
                this,
                functionName,
                lambdaFunction.functionArn
            );

            const lambdaDataSource = new appsync.CfnDataSource(
                this,
                `${functionName}DS`,
                {
                    apiId: props.api.apiId,
                    name: functionName,
                    lambdaConfig: {
                        lambdaFunctionArn: lambdaFunction.functionArn,
                    },
                    type: 'AWS_LAMBDA',
                    serviceRoleArn: dataSourceServiceRole.roleArn,
                }
            );

            lambdaDataSource.addDependsOn(props.api.schema);

            const functionConfig = new appsync.CfnFunctionConfiguration(
                this,
                `${functionName}FunctionConfiguration`,
                {
                    apiId: props.api.apiId,
                    functionVersion: '2018-05-29',
                    name: `${functionName}Config`,
                    dataSourceName: lambdaDataSource.name,
                    requestMappingTemplate: appsync.MappingTemplate.fromFile(
                        functionResolverReq
                    ).renderTemplate(),
                    responseMappingTemplate: appsync.MappingTemplate.fromFile(
                        functionResolverRes
                    ).renderTemplate(),
                }
            );

            functionConfig.addDependsOn(lambdaDataSource);

            // Each pipelineResolver should have its datasource and resolvers available
            for (const pipelineResolverFile of fs.readdirSync(
                props.paths.resolvers
            )) {
                const [
                    typeName,
                    fieldName,
                    pipelineReqRes,
                ] = pipelineResolverFile.split('.');

                if (fieldName !== functionName || pipelineReqRes === 'res') {
                    // Only the 'req' file is needed for types with 'fieldName' same as 'functionName'
                    continue;
                }

                const pipelineResolverReq = path.join(
                    props.paths.resolvers,
                    `${typeName}.${functionName}.req.vtl`
                );
                const pipelineResolverRes = path.join(
                    props.paths.resolvers,
                    `${typeName}.${functionName}.res.vtl`
                );

                const pipelineResolver = new appsync.CfnResolver(
                    this,
                    `${typeName}${functionName}PipelineResolver`,
                    {
                        apiId: props.api.apiId,
                        typeName,
                        fieldName,
                        kind: 'PIPELINE',
                        pipelineConfig: {
                            functions: [functionConfig.attrFunctionId],
                        },
                        requestMappingTemplate: appsync.MappingTemplate.fromFile(
                            pipelineResolverReq
                        ).renderTemplate(),
                        responseMappingTemplate: appsync.MappingTemplate.fromFile(
                            pipelineResolverRes
                        ).renderTemplate(),
                    }
                );

                new cdk.CfnOutput(this, 'Pipelineresolver', {
                    value: pipelineResolver.attrResolverArn,
                });

                pipelineResolver.addDependsOn(functionConfig);
            }
        }
    }

    private createServiceRole(
        scope: cdk.Construct,
        functionName: string,
        lambdaArn: string
    ): iam.Role {
        const dataSourceServiceRole = new iam.Role(
            scope,
            `${functionName}DSServiceRole`,
            {
                assumedBy: new iam.ServicePrincipal('appsync.amazonaws.com'),
            }
        );
        const policy = new iam.Policy(this, 'InvokeLambda');
        const statement = new iam.PolicyStatement({
            effect: iam.Effect.ALLOW,
            actions: ['lambda:InvokeFunction'],
            resources: [lambdaArn],
        });

        policy.addStatements(statement);
        dataSourceServiceRole.attachInlinePolicy(policy);

        return dataSourceServiceRole;
    }
}
