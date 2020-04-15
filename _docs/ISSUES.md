
**CICD pipeline**
1. [Setup pipeline](#setup-pipeline)
2. [Expand pipeline](#expand-pipeline)

**Admin project**
1. [Add basic documentation](#admin-add-basic-documentation)
2. [Add basic features](#admin-add-basic-features)
3. [Create Dashboard page](#admin-create-dashboard-page)

**Website project**
1. [Add basic documentation](#website-add-basic-documentation)
2. [Add basic features](#website-add-basic-features)

# CICD pipeline

## Setup pipeline
- From *Project Alpha* copy/paste the folder `alpha-base/ci`.
- Make sure in the `Dockerfile` you modified the `docker` commands in the top comments.
- Run `docker login registry.gitlab.com --username <username> --password-stdin < ~/.docker/<projectname>_gitlab`.
- Run `docker build -t registry.gitlab.com/<group>/<repo> .`
- Run `docker push registry.gitlab.com/<group>/<repo>`.
- From *Project Alpha* copy/pase the file `<repo>/.gitlab-ci.yml`.
- Make sure the file `.gitlab-ci.yml` points `image` to the just pushed image.
- Git add, commit and push.

## Expand pipeline
| Stage:Job         | Tool      | Push | Create PR | Merge | Create RC | Release |
|:- |:- |:- |:- |:- |:- |:- |
| .Pre:Install      | Npm       | :heavy_check_mark: | | | | |
| .Pre:Audit        | ?         | :heavy_check_mark: | | | | |
| .Pre:Lint         | Eslint    | :heavy_check_mark: | | | | |
| .Pre:Format       | Prettier  | :heavy_check_mark: | | | | |
| Build:Compile     | Npm       | :heavy_check_mark: | | | | |
| Build:Release*    | ?         | | | | :heavy_check_mark: | |
| Test:Security     | ?         | :heavy_check_mark: | | | | |
| Test:Unit         | Jest      | :heavy_check_mark: | | | | |
| Test:Integration  | ?         | :heavy_check_mark: | | | | |
| Test:Functional   | Cypress   | | :heavy_check_mark: | | | |
| Deploy:Test       | ?         | | | :heavy_check_mark: | | |
| Deploy:Prod       | ?         | | | | | :heavy_check_mark: |
| .Post:Performance | ?         | | :heavy_check_mark: | | | |
| .Post:Visual      | ?         | | | :heavy_check_mark: | | |
| .Post:Smoketest   | ?         | | | :heavy_check_mark: | | |
| .Post:Lighthouse  | ?         | | | :heavy_check_mark: | | |

> Stages run in sequence and jobs run in parralel.

> *Release: consists of the steps `version`, `changelog` (for apps only) and `git tag`.

> Deploy and .Post stages are not for Base, UI and the App, but only for Admin, Webapp and Website.

# Admin project

## Admin: add basic documentation
- From *Project Alpha* copy/paste the `README.md`. Rename an already existing readme file (e.g. `README_cra.md`).

## Admin: add basic features (Auth)
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

## Admin: add basic features (UI)
- Run `npm install git+ssh://git@<username>.gitlab.com:<groupname>/ui.git#master --save-dev`.
- Run `npm install styled-components`
- Add `<ThemeProvider>`.
- Add Theming dark/light mode.

## Admin: add basic features (Router)
- `npm install react-router-dom @types/react-router-dom`
- Create `Router.tsx`
- Create `Routes.tsx`
- Create `RoutePrivate.tsx`
- Add `<Router>` to `app.tsx`

## Admin: add basic features (Apollo)
- State Management with React Context, Hooks and Apollo.

## Admin: create Dashboard page
Create a page `dashboard` which displays AWS CloudWatch Widgets as images.

# Website project

## Website: add basic features
- Add Typescript plugin: https://www.gatsbyjs.org/packages/gatsby-plugin-typescript/
- Add Contentful plugin: https://www.gatsbyjs.org/packages/gatsby-source-contentful/?=
- use a `.env` file for the api keys.
