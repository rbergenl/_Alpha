/* eslint-disable no-sync */
import * as cdk from '@aws-cdk/core';
import * as fs from 'fs';
import * as lambda from '@aws-cdk/aws-lambda';
import * as lambdaNodeJS from '@aws-cdk/aws-lambda-nodejs';
import * as path from 'path';

interface Props {
    pathLambda: string;
}

export class Function extends cdk.Construct {
    public functions: Map<string, lambdaNodeJS.NodejsFunction> = new Map();

    public constructor(scope: cdk.Construct, id: string, props: Props) {
        super(scope, id);

        const lambdaFiles = fs.readdirSync(props.pathLambda);

        for (const lambdaName of lambdaFiles) {
            const lambdaFunction = new lambdaNodeJS.NodejsFunction(
                this,
                lambdaName,
                {
                    runtime: lambda.Runtime.NODEJS_10_X,
                    entry: path.resolve(
                        props.pathLambda,
                        `${lambdaName}/${lambdaName}.ts`
                    ),
                    handler: 'handler',
                    timeout: cdk.Duration.minutes(1),
                }
            );

            this.functions.set(lambdaName, lambdaFunction);

            const { stackName } = cdk.Stack.of(this);

            Function.writeInvokeFile(props.pathLambda, lambdaName, stackName);

            Function.writeTestFile(props.pathLambda, lambdaName);
        }
    }

    private static writeInvokeFile(
        lambdaPath: string,
        lambdaName: string,
        stackName: string
    ): void {
        const command = `#!/bin/sh
set logicalId = cat ../../cdk.out/manifest.json | jq '.artifacts.${stackName}.metadata["/${stackName}/Function/${lambdaName}/Resource"][0].data'
sam local invoke $logicalId --event event.json --template ../../cdk.out/${stackName}.template.json
`;
        const invokeFile = path.join(lambdaPath, `${lambdaName}/invoke.sh`);

        fs.writeFileSync(invokeFile, command);
    }

    private static writeTestFile(lambdaPath: string, lambdaName: string): void {
        const code = `import * as event from './event.json';
import * as lambda from './shoppingcartToAH';

lambda.handler(event).then(
    (response): boolean => process.stdout.write(\`\${response}\\n\`),
    (error): boolean => process.stderr.write(\`\${error}\\n\`)
);
`;
        const invokeFile = path.join(lambdaPath, `${lambdaName}/test.ts`);

        fs.writeFileSync(invokeFile, code);
    }
}
