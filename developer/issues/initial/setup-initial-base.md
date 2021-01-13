# Setup Initial Base

## Do Householding

- Modify the name in `package.json` to reflect the scope `@<projectname>/base`.
- Modify the script in `package.json` into `"build": "rm -rf build/ && tsc lib/*.ts --outDir build"`.
- Add to `tsconfig.json` the line `"include": ["lib"]` to only build the lib folder.
- Run `echo "build/" >> .gitignore`.
- Remove the `bin` key from `package.json` since the reference to Typescript file fails when installing this repo in other projects.
- Add to `package.json` the line `"files": [ "types/" ]`.
- Add to `bin/<projectname>-base.ts` the line `const env: cdk.Environment = { account: '<ACCOUNT_ID>', region: '<REGION>' };` and add a third parameter to the stack `{ env }`.
- Remove the folder `test` and modify `jest.config.js` to represent `{ roots: ['<rootDir>/lambda'], testMatch: ['**/*.spec.ts'], }`.
- Run `echo "cdk.context.json" >> .gitignore` (so that the SSM secrets do not end up in the codebase).
- Add to `tsconfig.json` the line `"compilerOptions": { "resolveJsonModule": true,` (to be able to import package.json).
- Create file `stack-config.ts` and add the lines:
```javascript
import * as pkg from './package.json';
const pascalCaseProjectName = pkg.name
    .split('-')
    .map((part: string): string => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
```
- Copy/paste from *Alpha Project* the folders `clients`, `constructs`, `graphql`, `lambda` , `mocks` and `types`.
- Run `git add . && git commit -m "perform initial householding" && git push`.
