# Setup Initial Website

## Do Householding

- Modify in package.json `"name"` to reflect the actual name.
- Have Gatsby installed `npm install --global gatsby-cli`.
- Run `npm install react-markdown`.
- Remove the folder `src`.
- Copy/paste from *Alpha Project* the folder `src`.
    - In `gatsby-config.js` set correct info for `siteMetadata`.
    - In `gatsby-config.js` set correct info for `gatsby-plugin-manifest`.
- Convert project to Typescript:
    - Modify all files in `src` to `.tsx` extension
    - Remove the file `gatsby-node.js` and create a new file `gatsby-node.ts` with the lines `export { onPostBootstrap } from './src/gatsby-node/onPostBoostrap';; export { createPages } from './src/gatsby-node/createPages';`.
    - Npm install `npm install --save-dev typescript ts-node`.
    - Add to `gatsby-config.js` the line `require('ts-node').register(); module.exports = require('./gatsby-config');`.
- Add Typescript IntelliSense
    - First time schema generation: comment out the line `createPages` in `gatsby-node.ts` and run `npm run develop`.
    - Npm install `npm install --save-dev apollo`.
    - Add a new file `apollo.config.js` with the config:
    ```javascript
    const path = require('path');
    module.exports = {
        client: {
            addTypename: false,
            includes: [
                './src/**/*.{ts,tsx}',
                './node_modules/gatsby-transformer-sharp/src/fragments.js',
            ],
            service: {
                name: 'dacent-website-graphql',
                localSchemaFile: path.resolve(__dirname, 'src/__generated__/schema.json')
            },
            tagName: 'graphql'
        },
    };
    ```
    - Make a couple of fixes: name the `query SEO {` and `query Image {` in respective files.
- Add Typescript Codegen:
    - Add to `package.json` the script `""codegen": "apollo client:codegen src/__generated__ --config apollo.config.js --target typescript --outputFlat --no-addTypename"`.
    - Run `npm run codegen -- --watch`.
    - Enable the code in `gatsby-node.ts` again.
- Start the Gatsby server to verify a working website.
- Add `__generated__` to `.gitignore`.
- Run `git add . && git commit -m "do householding" && git push`.

## Connect to CMS

- Run `echo "STRAPI_API_URL=http://localhost:1337" >> .env.development`.
- Run `npm install gatsby-source-strapi`.
- Add to `gatsby-config.js`:
```javascript
require("dotenv").config({
    path: `.env.${process.env.OVERRIDE_ENV || process.env.NODE_ENV}`,
});
module.exports = {
    plugins: [
        {
            resolve: 'gatsby-source-strapi',
            options: {
                apiURL: process.env.STRAPI_API_URL || 'https://<project>-cms.herokuapp.com',
                contentTypes: [
                    // List of the Content Types you want to be able to request from Gatsby.
                    'page',
                    'post',
                ],
                queryLimit: 1000,
            }
        }
    ]
}
```
- In *Terminal 2* start the Conent Management System locally and in *Terminal 1* run in the Website folder `npm start`.
- Add to `package.json` the script `"build:local-env": "OVERRIDE_ENV=development npm run build",` to be able to build locally.
- Run `git add . && git commit -m "connect to cms" && git push`.