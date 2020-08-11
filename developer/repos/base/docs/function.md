# Backend Function

## Initial Setup

- Make sure to run `npm install --save-dev parcel-bundler`.
- Run `npm install @aws-cdk/{aws-lambda,aws-lambda-nodejs}`.
- Add to `config-stack.ts` the lines:
```javascript
import { FunctionProps } from './constructs/function';
export enum LambdaName {};
export const functionConfig: FunctionProps = {
    lambdas: {}
};
```
- Add to `lib/<projectname>-base-stack.ts` the lines:
```javascript
import { functionConfig } from '../stack-config';
import { Function as Lambdas } from '../constructs/function';
const lambdas = new Lambdas(scope, 'Lambdas', functionConfig);
```

## Enable Mocking

T.b.d.

## Adding Lambda

- Copy/paste the `example` and modify accordingly.
- Add to `stack-config.ts` the lambda foldername to the `enum LambdaName` and add it to `functionConfig`.

## Invoking Locally

- Add a new JSON file in the `test/events` folder.
- To invoke the lambda with:
  - Default event: run `test/invoke`.
  - Custom event: run `test/invoke <event_filename>`.
