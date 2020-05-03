# Website Initial Setup

<!-- - Create Space:
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
        ``` -->
- Add Pages:
    - Run `echo "STRAPI_API_URL=http://localhost:1337" >> .env.development`.
    - Run `echo "STRAPI_API_URL=https://<projectname>-cms.herokuapp.com" >> .env.production`.
    - Run `npm install gatsby-source-strapi`.
    - Add to `gatsby-config.js`:
    ```javascript
    require("dotenv").config({
        path: `.env.${process.env.NODE_ENV}`,
    });
    module.exports = {
        plugins: [
            {
                resolve: 'gatsby-source-strapi',
                options: {
                    apiURL: 'http://localhost:1337',
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
    - Add to `index.js`:
    ```javascript
    import { useStaticQuery, graphql } from 'gatsby'
    import ReactMarkdown from 'react-markdown'
    const data = useStaticQuery(graphql`
        query HomeQuery {
            allStrapiPages { 
            edges {
                node {
                title
                body
                }
            }
            }
        }
    `);
    <ReactMarkdown source={ data.allStrapiPages.edges[0].node.body } />
    ```

- Add a Sitemap:
    - TODO: (and add it to robots.txt).

## Deploy to Test (Heroku):
- Check [docs](https://www.gatsbyjs.org/docs/deploying-to-heroku/).
- Run `heroku login`.
- Run `heroku create <projectname>-website`.
- Run `heroku config:set CONTENTFUL_ACCESS_TOKEN=<TOKEN>`.
- Run `heroku buildpacks:set heroku/nodejs`.
- Run `heroku buildpacks:add https://github.com/heroku/heroku-buildpack-static.git`.
- Add a new file `static.json` with the content:
```json
{
    "root": "public/",
    "headers": {
    "/**": {
        "Cache-Control": "public, max-age=0, must-revalidate"
    },
    "/**.css": {
        "Cache-Control": "public, max-age=31536000, immutable"
    },
    "/**.js": {
        "Cache-Control": "public, max-age=31536000, immutable"
    },
    "/static/**": {
        "Cache-Control": "public, max-age=31536000, immutable"
    }
    },
    "https_only": true,
    "error_page": "404.html"
}
```
- Run `git push heroku master`.
- Open and bookmark the provided URL.

## Deploy to Prod (AWS)
