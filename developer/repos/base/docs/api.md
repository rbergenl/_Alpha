# Backend Api

## Initial Setup

- Run `npm install --save-dev graphql merge-graphql-schemas`.
- Add to `package.json` the line `"files": [ "graphql/" ]`.
- Add to `package.json` the script `"schemagen": "npx ts-node -e \"import { ApiSchema } from './constructs/api-schema'; new ApiSchema()\""`.
  - Always run this script after modifying any GraphQL file and commit the generated schema file to version control.
- Add to `config-stack.ts` the lines:

```javascript
export const apiConfig = {
  apiName: `${pascalCaseProjectName}Api`,
};
```

- Add to `lib/<projectname>-base-stack.ts` the lines:

```javascript
import { apiConfig } from "../stack-config";
import { Api } from "../constructs/api";
new Api(this, "Api", {
  apiName: apiConfig.apiName,
  userPool: auth.userPool,
  functions: lambdas.functions,
});
```

## Generating GraphQL Typescript Definitions

- Run `npm install --save-dev apollo-boost`.
- Add to `package.json` the script `"codegen": "apollo client:codegen src/api/types --target typescript --outputFlat",`.
- Add a file `apollo.config.js` with the content:

```javascript
const path = require("path");
module.exports = {
  client: {
    service: {
      name: "<projectname>-<reponame>-graphql",
      localSchemaFile: path.resolve(
        __dirname,
        "./node_modules/<base_package_name>/cdk.out/schema.graphql"
      ),
    },
  },
};
```

- Create a file `src/api/queries/message.ts` (with import apollo-boost).

## Enable Mocking in Frontend

- Run `npm install apollo-server-express graphql-tools merge-graphql-schemas`.
- Run `npm install --save-dev git+ssh://git@<username>.gitlab.com:<groupname>/base.git#master`.
- In the _Base_ repo run `npm link` and then in the target repo run `npm link @<projectname>/base` (this allows to use the local repo to be used for rapid development).
- Add in `package.json` to `"start"` script the command `npm run link` and add `"link": npm link @<projectname>/base`.

### Mocking Api

> Have MongoDB Compass installed to view the database

- Run `mkdir -p mocks/data/db`.
- Add to `package.json` the script `"start:db": "mongod --dbpath mocks/data/db"`.
- Open MongoDB Compass and connect to `mongodb://localhost:27017`.

### Mocking Chat

- Run `npm install graphql-subscriptions`.
- Create a file `src/api/message.ts`.
- Use PubSub and create resolvers for Query, Mutation and Subscription.

## Playground for Staging/Production

- Add to `package.json` the script `"graphiql": "http-server -o /graphiql.html?name=Admin",`.
- TODO:.... add `graphiql.html` file.

## Instructions

https://aws-amplify.github.io/docs/cli-toolchain/graphql#custom-resolvers

In short: define the schema. And for each 'resource' as a type add the Query, Mutation and Subscription. Then, make in the 'resolvers' directory a folder with the resource name and copy/paste all sample velocity templates from the 'docs/samples' folder. When running 'cdk deploy', it creates the 'table' and attaches the 'resolvers' to the corresponding fields.

To test a query via the managements console, first create a user in Cognito Userpool. Give username `test@test.com` and password `Test123@`. Use that user, and a Cognito Userpool ClientID to login (first time password change required, just specify the same again).

Beware: with defining the types, use the predefined keywords like 'input' as a variable, because those are referenced in the resolvers. When changing the variable name, it should also be changed in the resolver.

## Define the Schema

NoSQL databases are known for their performance, but since it is not relational it is important to define the model up front. Write down the list of expected Data Access Patterns (queries and entities).
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-general-nosql-design.html
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-relational-modeling.html

First steps:

- Copy the sample folder `generic` to the project folder `graphql`.
- Create a file `schema.graphql` to contain the applications top-level entities.
- Then, follow the steps for `@model`.

## GraphQL Transform alternatives

Amplify CLI uses directives to speed up development of a GraphQL API. In order to avoid using the CLI, use these alternatives.

### @model

Object types that are annotated with @model are top-level entities in the generated API. Objects annotated with @model are stored in Amazon DynamoDB and are capable of being protected via @auth, related to other objects via @connection, and streamed into Amazon Elasticsearch via @searchable. You may also apply the @versioned directive to instantly add a version field and conflict detection to a model type.
You do not have to define `@model` for each entity. Instead, each top-level entity added to `schema.graphql` should get all fields added to the Root Types by default; this is done with the steps below.

Create yourself:

- First define the Type in `schema.graphql` and make sure it starts with an `ID` field.
- Copy the sample file `entity.graphql` to `graphql/models/{type}.graphql`.
- Modify the input for query (filter) and mutation (condition) and the extended root types with the standard items.
  - Find and replace `Meal` with `{Type}`.
  - Find `#fields` and modify there the type specific fields. The `@connection` fields should have the type `IDInput`.

### @auth

Authentication is handled inside the Velocity mapping templates. By default each action is secured with least privilage: full access by owner. To extend authorization inside the template, add read access to a specific group or define it as public.

Create yourself:

- write for the type `# @auth()`.

### @key

Is used to create a Secondary Index for the DynamoDB Table of the resource. Decide for the type which ways it might be queried for. All files in the folder `resolvers` which start with `Query` are a result of the `@key` directive with `queryField` defined.

Create yourself:

- write for the type `# @key(name: 'by{Fieldname}', fields: ['name', 'id'], queryField: '{type}By{partitionkey}By{sortkey}')`
  - the name should be like `by{partitionkey}By{sortkey}`.
  - the fields are first the Unique hash key, then Sort key or Composite Sort key (e.g. status and date as statusDate). Mostly the `id` or `date` is used as the Sort key.
  - the queryfield should be like `{type}By{partitionkey}By{sortkey}`. It is the name of the new top level query field.
- if queryField is defined, then:
  - extend type Query with the defined QueryField (see typescript example below).
  - the input for the query are the defined fields (id, name); hashKey and compositeSortKey.
  - the query field also takes _filter_, _sortDirection_, _limit_ and _nextToken_.
  - add a resolver for the field `resolvers/Query.{type}By{partitionkey}By{sortkey}`. The resolver talks to the defined Secondary Index.
- For this CDK project: always define queryField and then create that resolver including setting $index, $partitionKey and \$sortKey. This way a secondary index for that type will be created. The index is created based on the resolver file, that is why all required details should be available in the filename.

```javascript
extend type Query {
    employeesNewHire(
      newHire: String,
      id: IDKeyConditionInput,
      sortDirection: SortDirection,
      filter: EmployeeFilterInput,
      limit: Int,
      nextToken: String
    ): EmployeeConnection
}
```

### @connection

Defines on a field which type it is connected to. The field that has a connection needs a specific resolver to be able to fetch data from that connected type Secondary Index. So, whenever a field has a connection, that type it is connected to should at least have `@key`. So whenever you add a connection, check if that type has a Secondary Index, if not, define one. All files in the folder `resolvers` which **do not** start with `Query` are a result of the `@connection` directive.

Create yourself:

- the name of the field should start with the name of the connected type (field 'ingredients' for type 'ingredient'). This is because when the resource is created, it should know on which fields it should add a resolver, no matter on which type that field is.
- write for the field `# @connection(keyName: "{keyName}", fields: ["id"])`.
  - the keyName is the actual name of the referenced type `@key`.
  - the argument 'fields' defines which field can be queried on (so by id on type Order). This is actually always 'id'.
- the field that has a connection should return that fields `{Type}Connection`.
- the field should have an input for _condition_ consisting of the '(composite) sort key'. Beware, not the unique hashKey. If the index has a single sort key, the input condition is with a default primitive (e.g. string or int). If the index has a composite sort key, the input condition is named like `{Type}{keyName}CompositeKeyConditionInput`
- the field also takes _filter_, _sortDirection_, _limit_ and _nextToken_.
  - For filter, the input is the fields type `{Type}FilterInput`.
- add a resolver for the field `resolvers/{Type}.{fieldname}`. The resolver talks to the defined Secondary Index.

```javascript
\\ for indexes with a composite keys
input {Type}{ByHashkey}{ByFieldByField}CompositeKeyConditionInput {
  eq: {Type}{ByHashkey}{ByFieldByField}CompositeKeyInput
  le: {Type}{ByHashkey}{ByFieldByField}CompositeKeyInput
  lt: {Type}{ByHashkey}{ByFieldByField}CompositeKeyInput
  ge: {Type}{ByHashkey}{ByFieldByField}CompositeKeyInput
  gt: {Type}{ByHashkey}{ByFieldByField}CompositeKeyInput
  between: [{Type}{ByHashkey}{ByFieldByField}CompositeKeyInput]
  beginsWith: {Type}{ByHashkey}{ByFieldByField}CompositeKeyInput
}

input {Type}{ByHashkey}{ByFieldByField}CompositeKeyInput {
  fieldOne: String
  fieldTwo: String
}
```

### @function

- Determine if the function returns data (Query) or changes data internally/externally (Mutation).
- In `schema.graphql` add a field to that `extend $RootType`; this fieldName represents the function name.
- Add a resolver for that actual field `Mutation.${lambdaName}.req.vtl`.
- Add to the folders `pipelineResolvers` the mappings with name `Invoke.${lambdaName}.LambdaDataSource.{req,res}.vtl`.
- Add to the folder `lambda` the actual function, again with the same name.

### @searchable

T.b.d.

## CDK Api Stack

- `npm install @aws-cdk/aws-appsync`.
- `npm install @aws-cdk/aws-dynamodb`.
- For each resource a DynamoDb will be created, with default RemovalPolicy set to Retain.
- For `Subscription` a datasouce `None` will be created.
- For `@function` a datasource `AWS_LAMBDA` will be created including a `pipelineResolver`.

## Add Resolvers

- If the datasource is a MySQL database: https://docs.aws.amazon.com/appsync/latest/devguide/tutorial-rds-resolvers.html
- How authorization works: https://docs.aws.amazon.com/appsync/latest/devguide/security-authorization-use-cases.html
- Documentation about Resolver Mapping Templates: https://docs.aws.amazon.com/appsync/latest/devguide/resolver-mapping-template-reference.html
  The following default resolvers are used for the Root Types:
- Mutation.createType.{req,res}.vtl
- Mutation.deleteType.{req,res}.vtl
- Mutation.updateType.{req,res}.vtl
- Query.getType.{req,res}.vtl
- Query.listType.{req,res}.vtl
- Subscription.onCreateType.{req,res}.vtl
- Subscription.onDeleteType.{req,res}.vtl
- Subscription.onUpdateType.{req,res}.vtl

> Velocity Template for the **response** will mostly contain `$util.toJson($ctx.result)`.
