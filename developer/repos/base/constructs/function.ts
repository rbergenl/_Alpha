/* eslint-disable no-sync */
import * as cdk from '@aws-cdk/core';
import * as fs from 'fs';
import * as path from 'path';
import * as lambda from '@aws-cdk/aws-lambda';
import * as lambdaNodeJS from '@aws-cdk/aws-lambda-nodejs';

import { LambdaName } from '../stack-config';

export interface FunctionProps {
    lambdas: Record<LambdaName, lambdaNodeJS.NodejsFunctionProps>;
}

const paths = {
    lambda: path.join(__dirname, '../lambda'),
};

export class Function extends cdk.Construct {
    public functions: Map<LambdaName, lambdaNodeJS.NodejsFunction> = new Map();

    public constructor(scope: cdk.Construct, id: string, props: FunctionProps) {
        super(scope, id);
 
        const lambdaFiles = fs.readdirSync(paths.lambda);

        for (const lambdaName of lambdaFiles) {
            const lambdaFunction = new lambdaNodeJS.NodejsFunction(
                this,
                lambdaName,
                {
                    runtime: lambda.Runtime.NODEJS_10_X,
                    entry: path.resolve(
                        paths.lambda,
                        `${lambdaName}/${lambdaName}.ts`
                    ),
                    handler: 'handler',
                    timeout: cdk.Duration.minutes(1),
                }
            );

            this.functions.set(lambdaName as LambdaName, lambdaFunction);
        }
    }
}
