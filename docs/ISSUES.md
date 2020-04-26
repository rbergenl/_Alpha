
**Project initialization**

1. [Create new project](#create-new-project)
2. [Setup Version Control System](#setup-version-control-system)
3. [Add basic documentation](#add-basic-documentation)
4. [Project specific initialization](#project-specific-initialization)
5. [Lighthouse to 100](#lighthouse-to-100)

**CICD pipeline**

1. [Setup pipeline](#setup-pipeline)
2. [Expand pipeline](#expand-pipeline)
3. [Publish native](#publish-native)

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

# Project initialization

## Create new project

In the project folder run:
- Admin: `npx create-react-app <projectname>-admin --template typescript`.
- App: `expo init <projectname>-app --template expo-template-blank-typescript`.
- Base: `mkdir <projectname>-base && cd <projectname>-base && cdk init --language typescript`.
- UI: `mkdir <projectname>-ui && cd <projectname>-ui && git init && npm init --yes --scope @<projectname>`.
    - First modify the name in `package.json` to reflect the scope.
    - App:
        - `expo init app --template expo-template-blank-typescript`.
        - `cd app && rm -r .git`.
        - `npm install native-base`.
    - Web:
        - `npx create-react-app web --template typescript`.
        - `cd web && rm -r .git`.
        - `npm install react-bootstrap bootstrap`.
- Webapp: `npx create-react-app <projectname>-webapp --template typescript`.
- Website: `npx gatsby new <projectname>-website`.

## Setup Version Control System

- Make sure the repository is created in Gitlab.
- In the local repository folder:
    - Run `git remote add origin git@<username>.gitlab.com:<groupname>/<reponame>.git`
    - Run `git push --set-upstream origin master`.

## Add basic documentation

- From *Project Alpha* copy/paste the `README.md`. Rename an already existing readme file (e.g. `README_cra.md`).

## Add Fonts
- App:
    - Find a desired font at https://fontflipper.com and download the font files.
    - Place the file(s) inside `android/app/src/main/assets/fonts`.
    - Use the actual font file name in the code `fontFamily: 'Kalam-Bold'`.
- Website:
    - Run `npm install --save gatsby-plugin-prefetch-google-fonts`.
    - Add to `gatsby-config.js`:
    ```javascript
    {
        resolve: `gatsby-plugin-prefetch-google-fonts`,
        options: {
            fonts: [
                {
                family: `Dosis`
                }
            ]
        }
    }
    ```
    - Add the line `html { font-family: 'Dosis' }` in `components/layout.css`file.

## Project specific initialization
- UI:
    - Add a CSS Reset file (to be included by Webapp and Website):
        - Check [docs](https://meyerweb.com/eric/tools/css/reset/).
        - Add that example code to `reset.css`.
- Webapp:
    - Handy imports:
        - Add a `.env` file with `NODE_PATH=src` so that you can import with absolute path. TODO: but check the error: "Setting NODE_PATH to resolve modules absolutely has been deprecated in favor of setting baseUrl in jsconfig.json (or tsconfig.json if you are using TypeScript) and will be removed in a future major release of create-react-app."
- Website:
    - Handy imports:
        - Check [docs](https://www.npmjs.com/package/gatsby-plugin-resolve-src)
    - Correct config:
        - In `gatsby-config.js` set correct info for `siteMetadata`.
        - In `gatsby-config.js` set correct info for `gatsby-plugin-manifest`.
    - Use CSS-in-JS:
        - Check [docs](https://www.gatsbyjs.org/docs/styled-components/).
        - A word on **critical css**: Gatsby handles this out of the box/
        - Run `npm install --save gatsby-plugin-styled-components styled-components babel-plugin-styled-components`.
        - Use `import styled from 'styled-components';`.
    - Create Space:
        - Run `contentful login` (saves config to `~/.contentfulrc.json`).
        - Run `contentful space create --name "<Projectname> Website"`.
        - Add a file `.contenful.json`.
        ```json
        {
            "spaceId": "<SPACE_ID>"
        }
        ```
        - Login to the newly created space and create a *Content Delivery Key*.
        - Add to a file `.env.development` and `.env.production`:
        ```
            CONTENTFUL_ACCESS_TOKEN=<DELIVERY_TOKEN>
            CONTENTFUL_PREVIEW_TOKEN=<PREVIEW_TOKEN>
        ```
    - Add Pages:
        - From *Project Alpha* run `node export/generator`.
        - Run `contentful space import --content-file export/contentful-export-initial-generated.json --config .contentful.json`.
        - Run `npm install --save gatsby-source-contentful`.
        - Add to `gatsby-config.js`:
        ```javascript
            require("dotenv").config({
                path: `.env.${process.env.NODE_ENV}`,
            });
            module.exports = {
                plugins: [
                    {
                        resolve: `gatsby-source-contentful`,
                        options: {
                            spaceId: spaceId: require('./.contentful').spaceId,
                            // Learn about environment variables: https://gatsby.dev/env-vars
                            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
                        },
                    },
                ],
            }
        ```
        - Add all files components and pages from `src` to the project.
        - Add to `index.js`.
        ```javascript
            import { graphql } from 'gatsby'
            export const pageQuery = graphql``;
        ```

- Base:
    - In file `/bin/planty-base.ts` change the logical stack name (will be name in cloudformation) and add the accountId with Region.
    - Add to `tsconfig.json` the line `"resolveJsonModule": true` (to be able to import package.json).
    - Add `cdk.context.json` to `.gitignore` (so that the SSM secrets do not end up in the codebase).

- Admin:
    - Create a page `dashboard` which displays AWS CloudWatch Widgets as images.

## Lighthouse to 100

### Search Engine Optimization to 100
- Website: already provided by Gatsby with the `<SEO>` component.
- Webapp/Admin:
    - The minimum setup is already provided by create-react-app.
    - Add to `public/index.html` the line `<meta name="description" content="Description" />`.

### Accessibility to 100
- Make sure in `public/index.html` the root div has a role like `<div id="root" role="main"></div>`

### Performance to 100

#### Serve build on HTTPS
- Run `$ npm install local-web-server`.
- Add to package.json the script `"serve-https": "npm run build && ws --directory ./build --port 443 --compress --http2"`.

#### Redirect HTTP to HTTPS
- Check [docs](https://github.com/lwsjs/local-web-server/wiki/How-to-redirect-HTTP-traffic-to-HTTPS)
- `$ npm install lws-redirect`.
- Add to package.json the script `"redirect-http": "ws --port 80 --stack redirect --redirect 'http -> https'"`.

#### Trust the Certificate
- Ceck [docs](https://github.com/lwsjs/local-web-server/wiki/How-to-get-the-%22green-padlock%22-using-the-built-in-certificate)
- Open KeychainOS > Certificates > 'File' > 'Import Items...'.
- Import the certificate located at `./node_modules/lws/ssl/lws-cert.pem`
- In the list of certificates is now a new one with the name `lws`.
- Open it and at the section 'Trust' set it to 'Always Trust'.
- Open the website specifying the protocol `https://localhost/`.

### Progressive Web App to 100

#### Enable the Service Worker
- Check [docs](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
- In `src/index.js` change `serviceWorker.unregister();` into `serviceWorker.register();`
- Website: enable `gatsby-plugin-offline` in the gatsby-config.js file.

#### Add Logos to the Manifest
-- TODO: this is for create-react-app.. how for Gatsby?
- Check [docs](https://developers.google.com/web/fundamentals/web-app-manifest/)
- Convert the `src/logo.svg` into a PNG using an online converter.
- Then make copies and resize the PNG into `512x512` and `192x192`.
- Place both PNGs in the folder `public`.
- Add to the `public/manifest.json` to the `icons` section:
```
{
    "src": "/icon-192.png",
    "type": "image/png",
    "sizes": "192x192"
},
{
    "src": "/icon-512.png",
    "type": "image/png",
    "sizes": "512x512"
}
```

## Test the Native Apps

- Add privacy policy
- Add Icon
- Choose primaryColor
- Modify `app.json`.
    - Version
    - Bundle
    - Permissions
- Publish bundle to allow for Over-The-Air updates:
    - First `expo publish`.
- Preferably, test App in Expo Client.
- Alternatively, test iOS App on iPhone Simulator:
    - Required Xcode to be installed.
    - Run `expo build:ios -t simulator` and follow the instructions.
    - First time: login with Apple ID and let expo set credentials.
    - Download and unzip the given `tar` file.
    - Open Xcode and go to `Xcode > Open Developer Tools > Simulator`. Or hit `CMD+Space` to open Spotlight and search for `Simulator`.
    - Drag and drop the `.app` file onto the virtual device and open the app.
- Alternatively, test Andriod App on Android Simulator:
    - TODO

TODO: check https://stackoverflow.com/questions/59539163/how-to-install-expo-ipa-on-iphone-6
TODO: check https://www.robincussol.com/build-standalone-expo-apk-ipa-with-turtle-cli/
Btw, check here: https://exp.host/@aardonyx1/aardonyx-app/index.exp?sdkVersion=37.0.0

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
| Publish:iOS       | ?             | | | | | |
| Publish:Android   | ?             | | | | | |
| .Post:Performance | ?             | | :heavy_check_mark: | | | |
| .Post:Quality     | Lighthouse    | | | :heavy_check_mark: | | |
| .Post:Smoketest   | ?             | | | :heavy_check_mark: | | |
| .Post:Visual      | ?             | | | :heavy_check_mark: | | |

> Stages run in sequence and jobs run in parralel.

> Only for Admin, Webapp and Website: Release:Changelog, Deploy:* and .Post:*.

## Add .Pre:Audit
- npm-audit-resolver
- Run `check-audit`
- In case of an issue: `resolve-audit`.

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
> Requires creditcard and AWS Account.
- Add to package.json `"deploy:base": "cdk deploy PlantyBaseStack --require-approval never",`.

## Add Publish:iOS
> Requires creditcard and Apple Developer Program enrollment.
- Build a standalone app IOS:
    - `expo build:ios`.

## Add Publish:Android
- Build a standalone app Android:
    - `expo build:android`.

- Check [docs](https://developer.okta.com/blog/2018/12/26/react-native-android-play-store).
- Checklists:
  - Launch: https://developer.android.com/distribute/best-practices/launch/launch-checklist
  - Quality: https://developer.android.com/docs/quality-guidelines/core-app-quality
- Remove action bar here: `android/app/src/main/res/values/styles.xml` with `<item name="android:windowFullscreen">true</item>`
- Set app name here: `android/app/src/main/res/values/strings.xml`
- Add an Icon via Android Studio via 'file > new > Image Asset' and upload a foreground and background for the `ic_launcher`
- Disable default React Native app permission (otherwise privacy policy is needed): add `xmlns:tools="http://schemas.android.com/tools"` to `android/app/src/main/AndroidManifest.xml` and add `<uses-permission tools:node="remove" android:name="android.permission.READ_PHONE_STATE" /><uses-permission tools:node="remove" android:name="android.permission.WRITE_EXTERNAL_STORAGE" /><uses-permission tools:node="remove" android:name="android.permission.READ_EXTERNAL_STORAGE" />`
- Minimize the APK file: `android/app/build.gradle` set `def enableSeparateBuildPerCPUArchitecture = true def enableProguardInReleaseBuilds = true`
- Update App Version: in `android/app/build.gradle` update the lines `versionCode 2` and `versionName "0.2"`
- In Android Studio create a signed APK
    - Open your app in Android Studio by browsing to the android folder of your React Native project.
    - Go to Build > Generate signed bundle / APK.
    - Select APK and click Next.
    - Under Key store path click Create new.
    - Choose a path like `/home/<user>/keystores/android.jks`.
    - Choose passwords for the keystore and key.
    - Enter the certificate information (note: this won’t be displayed in the app, just the certificate).
    - Next > Select Release and both V1 and V2 Signature versions.
- Create Application in Appstore: https://play.google.com/apps/publish/
- Fill in the forms for Shop Information (with creating screenshots of the app)
- Fill in the forms for Content Rating
- Fill in the forms for Pricing & Distribution
- Create a Release (Production track)
- Upload the file (app-x86-release.apk and app-armeabi-v7a-release.apk)
- Click "Start rollout"

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
