# Setup Initial Website

## Do Householding

- Modify in package.json `"name"` to reflect the actual name.
- Have Gatsby installed `npm install --global gatsby-cli`.
- Remove the file `src/pages/using-typescript.tsx`.
- Correct config:
    - In `gatsby-config.js` set correct info for `siteMetadata`.
    - In `gatsby-config.js` set correct info for `gatsby-plugin-manifest`.
- Typescript:
    - Modify all files in `src` to `.tsx` extension
    - Run `npm install --save-dev @graphql-codegen/{cli,typescript,typescript-operations`.
    - Add `codegen.yml`:
    ```yaml
    overwrite: true
    schema: "http://localhost:8000/___graphql"
    generates:
    src/__generated__/types.ts:
        plugins:
        - "typescript"
        - "typescript-operations"
    ```
    - Add to `package.json` the script `"codegen": "graphql-codegen --config codegen.yml"`.
    - Start the Gatsby server and run `npm run codegen`.
- Run `git add . && git commit -m "do householding" && git push`.

## Add Pages

- Add Pages:
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
                    'pages',
                    ],
                    queryLimit: 1000,
                }
            }
        ]
    }
    ```
    - Run `npm install react-markdown`.
    - Add to `src/pages/index.js`:
    ```javascript
    import { useStaticQuery, graphql } from 'gatsby'
    import ReactMarkdown from 'react-markdown'
    import { Query } from '../__generated__/types'
    const data = useStaticQuery<Query>(graphql`
        query {
            allStrapiPages { 
                edges {
                node {
                    title
                    content {
                    text
                    }
                }
                }
            }
        }
    `);
    const { text } = data.allStrapiPages.edges[0].node.content[0];
    <ReactMarkdown source={ text } />
    ```
    - In *Terminal 2* start the Conent Management System locally and in *Terminal 1* run in the Website folder `npm start`.
- Run `git add . && git commit -m "add pages" && git push`.