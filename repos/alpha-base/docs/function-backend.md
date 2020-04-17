# Function backend

- Make sure to run `npm install --save-dev parcel-bundler`.

## Local Testing
- Create an `event.json` file in the lambda folder.
```javascript
{
  "typeName": "Mutation",
  "fieldName": "shoppingcartToAH",
  "arguments": { "one": "one" },
  "identity": {},
  "source": {},
  "request": {},
  "prev": {}
}
```
- During CDK deploy a file `invoke.sh` is created in the lambda folder.
- To test the lambda in an actual container, run with `sh invoke.sh`.
- During CDK deploy a file `test.ts` is created in the lambda folder.
- To execute the function with node, run with `npx ts-node test`.

## Mocking
T.b.d.
