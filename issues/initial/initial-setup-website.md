# Initial Setup Website

- Handy imports:
    - TODO: Check [docs](https://www.npmjs.com/package/gatsby-plugin-resolve-src)

- Correct config:
    - In `gatsby-config.js` set correct info for `siteMetadata`.
    - In `gatsby-config.js` set correct info for `gatsby-plugin-manifest`.

- Use CSS-in-JS:
    - TODO: can this section be moved to non-project specific issue?
    - Check [docs](https://www.gatsbyjs.org/docs/styled-components/).
    - A word on **critical css**: Gatsby handles this out of the box.
    - Run `npm install --save gatsby-plugin-styled-components styled-components babel-plugin-styled-components`.
    - Use `import styled from 'styled-components';`.

- Add Pages:
    - Run `echo "STRAPI_API_URL=http://localhost:1337" >> .env.development`.
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
                    apiURL: process.env.STRAPI_API_URL || 'https://aardonyx-cms.herokuapp.com',
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
    - In *Terminal 1* start Strapi CMS locally and in *Terminal 2* run in the Website folder `npm start`.

- Add a Sitemap:
    - TODO: (and add it to robots.txt).


# Ecommerce
- TODO: add ecommerce features.