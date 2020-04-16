
**Project initialization**

2. [Create new project](#create-new-project)
3. [Setup Version Control System](#setup-version-control-system)
1. [Add basic documentation](#add-basic-documentation)
4. [Project specific initialization](#project-specific-initialization)

**CICD pipeline**

1. [Setup pipeline](#setup-pipeline)
2. [Expand pipeline](#expand-pipeline)

**Backend: basic features**

1. [Add basic UX flows](#add-basic-ux-flows)
2. [Add Backend Auth](#add-backend-auth)
3. [Add Backend Api](#add-backend-api)

**Frontend: basic features**

3. [Add Frontend Auth](#add-frontend-auth)
6. [Add Frontend Api](#add-frontend-api)
4. [Add basic UI and theming](#add-basic-ui-and-theming)
5. [Add Router](#add-router)
1. [Add Error tracking](#add-error-tracking)
2. [Add A/B testing](#add-ab-testing)

**Project specific**

1. [Admin: create Ops Dashboard page](#admin-create-ops-dashboard-page)
2. [Website: add Content Management System](#website-add-content-management-system)

# Project initialization

## Create new project

In the project folder run:
- Admin: `npx create-react-app <projectname>-admin --template typescript`.
- App: `expo init <projectname>-app --template expo-template-blank-typescript`.
- Base: `mkdir <projectname>-base && cd <projectname>-base && cdk init --language typescript`.
- UI: `mkdir <projectname>-ui && cd <projectname>-ui && git init && npm init --yes --scope @<projectname>`. Still modify the name in `package.json`.
    - App:
        - `expo init app --template expo-template-blank-typescript`.
        - `cd app && rm -r .git`.
        - `npm install native-base`.
    - Web:
        - `npx create-react-app web --template typescript`.
        - `cd web && rm -r .git`.
        - `npm install react-bootstrap bootstrap`.
- Webapp: `npx create-react-app <projectname>-webapp --template typescript`.
- Website: `gatsby new <projectname>-website`.

## Setup Version Control System

- Make sure the repository is created in Gitlab.
- In the local repository folder:
    - Run `git remote add origin git@<username>.gitlab.com:<groupname>/<reponame>.git`
    - Run `git push --set-upstream origin master`.

## Add basic documentation

- From *Project Alpha* copy/paste the `README.md`. Rename an already existing readme file (e.g. `README_cra.md`).

## Project specific initialization

- Website: add Typescript plugin: https://www.gatsbyjs.org/packages/gatsby-plugin-typescript/

- Base:
    - In file `/bin/planty-base.ts` change the logical stack name (will be name in cloudformation) and add the accountId with Region.
    - Add to `tsconfig.json` the line `"resolveJsonModule": true` (to be able to import package.json).
    - Add `cdk.context.json` to `.gitignore` (so that the SSM secrets do not end up in the codebase).

# CICD pipeline

## Setup pipeline

- From *Project Alpha* copy/paste the folder `alpha-base/ci`.
- Make sure in the `Dockerfile` you modified the `docker` commands in the top comments.
- Run `docker login registry.gitlab.com --username <username> --password-stdin < ~/.docker/<projectname>_gitlab`.
- Run the `docker build` command as described in the `Dockerfile`.
- Run the `docker push` command as decsribed in the `Dockerfile`.
- From *Project Alpha* copy/pase the file `<repo>/.gitlab-ci.yml`.
- Make sure the file `.gitlab-ci.yml` points `image` to the just pushed image.
- Add to `package.json` these scripts:
    ```json
    "audit": "echo \"should be implemented\"",
    "lint": "echo \"should be implemented\"",
    "format": "echo \"should be implemented\""
    ```
- Git add, commit and push.

## Expand pipeline

| Stage:Job         | Tool          | Push | Create PR | Merge | Create RC | Release |
|:- |:- |:- |:- |:- |:- |:- |
| .Pre:Install      | Npm           | :heavy_check_mark: | | | | |
| .Pre:Audit        | Audit Resolver| :heavy_check_mark: | | | | |
| .Pre:Format       | Prettier      | :heavy_check_mark: | | | | |
| .Pre:Lint         | Eslint        | :heavy_check_mark: | | | | |
| Build:Compile     | React Scripts | :heavy_check_mark: | | | | |
| Test:Functional   | Cypress       | | :heavy_check_mark: | | | |
| Test:Integration  | ?             | :heavy_check_mark: | | | | |
| Test:Security     | ?             | :heavy_check_mark: | | | | |
| Test:Unit         | Jest          | :heavy_check_mark: | | | | |
| Release:Changelog | ?             | | | | :heavy_check_mark: | |
| Release:Tag       | Git           | | | | :heavy_check_mark: | |
| Release:Version   | Npm           | | | | :heavy_check_mark: | |
| Deploy:Prod       | ?             | | | | | :heavy_check_mark: |
| Deploy:Test       | ?             | | | :heavy_check_mark: | | |
| .Post:Performance | ?             | | :heavy_check_mark: | | | |
| .Post:Quality     | Lighthouse    | | | :heavy_check_mark: | | |
| .Post:Smoketest   | ?             | | | :heavy_check_mark: | | |
| .Post:Visual      | ?             | | | :heavy_check_mark: | | |

> Stages run in sequence and jobs run in parralel.

> Only for Admin, Webapp and Website: Release:Changelog, Deploy:* and .Post:*.

## Add .Pre:Audit
- npm-audit-resolver

## Add .Pre:Format
- prettier

**TODO: this text comes from Planty Admin readme**
- Use setup as explained here: https://create-react-app.dev/docs/setting-up-your-editor/
- `touch .editorconfig` (see editor configuration https://editorconfig.org)
- add script `"eslint": "eslint --ext .tsx src/",`.
- and add `eslintConfig` extends with `"eslint:recommended"`
- Follow steps in: https://prettier.io/docs/en/integrating-with-linters.html#eslint
- `npm install --save-dev --save-exact prettier`
- add key "prettier" to package.json with config from  https://prettier.io/docs/en/configuration.html. (but for CDK it should be "semi": true)
- add script to package.json "prettier": "prettier --write \"src/**/*.{js,jsx,ts,tsx,json,css,scss,md}\"".
- In VSCode, install via extension sidebar `prettier-vscode`, and execute on a document with `CDM+SHIFT+P` and `Format Document`.


## Add .Pre:Lint
- eslint

## Add Test:Unit
- jest

## Add Test:Integration

## Add Test:Functional
- cypress

## Add Deploy:Prod
- Add to package.json `"deploy:base": "cdk deploy PlantyBaseStack --require-approval never",`.

# Backend: basic features

## Add Backend Auth

## Add Backend Api
Should first add backend auth.

## Add Backend Storage
Should first add backend auth.

# Frontend: basic features

## Add Error tracking
- Sentry

## Add A/B testing
- Optimizely

## Add Auth
**TODO: move awsconfig.js file to @node_modules/@<projectname>/base**

- Run `npm install aws-amplify`.
- Create a file `awsconfig.js` with the contents:
```javascript
const awsconfig = {
    aws_cognito_region: 'us-east-1',
    aws_user_pools_id: '<USER_POOL_ID>',
    aws_user_pools_web_client_id: '<CLIENT_ID>',
    oauth: {
        domain: '<PROJECT>-<UUID>.auth.us-east-1.amazoncognito.com',
        scope: [
            'email',
            'openid',
            'profile'
        ],
        redirectSignIn: 'http://localhost:3000/',
        redirectSignOut: 'http://localhost:3000/',
        responseType: 'code'
    },
    federationTarget: 'COGNITO_USER_POOLS'
};
export default awsconfig;
```
- Add to `app.tsx`:
```javascript
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);
<button onClick={() => Auth.federatedSignIn()}>Sign In</button>
<button onClick={async () => console.log(await Auth.currentSession())}>Current Session</button>
<button onClick={() => Auth.signOut()}>Sign Out</button>
```
- Add `user` to React Context.
- Add Mock Cognito Api

## Add basic UI and theming

- Run `npm install git+ssh://git@<username>.gitlab.com:<groupname>/ui.git#master --save-dev`.
- Run `npm install styled-components`
- Add `<ThemeProvider>`.
- Add Theming dark/light mode.

## Add Router

- `npm install react-router-dom @types/react-router-dom`
- Create `Router.tsx`
- Create `Routes.tsx`
- Create `RoutePrivate.tsx`
- Add `<Router>` to `app.tsx`

## Add Api

- State Management with React Context, Hooks and Apollo.
- Add Codegen.
- Add Mock GraphQL Api.

# Project specific

## Admin: create Ops Dashboard page

Create a page `dashboard` which displays AWS CloudWatch Widgets as images.

## Website: add Content Management System

- Add Contentful plugin: https://www.gatsbyjs.org/packages/gatsby-source-contentful/?=
- use a `.env` file for the api keys.
