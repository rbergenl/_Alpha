# Setup Initial Website

## Do Householding

- Modify in package.json `"name"` to reflect the actual name.
- Have Gatsby installed `npm install --global gatsby-cli`.
- Correct config:
    - In `gatsby-config.js` set correct info for `siteMetadata`.
    - In `gatsby-config.js` set correct info for `gatsby-plugin-manifest`.

- Absolute imports:
    - Check [docs](https://www.npmjs.com/package/gatsby-plugin-resolve-src)
    - Run `npm install --save-dev gatsby-plugin-resolve-src`.
    - Add to `gastby-config.js` to plugins `gatsby-plugin-resolve-src`.
    - Create a `jsconfig.json` with the contents (needed for VSCode to resolve the modules):
    ```json
    {
        "compilerOptions": {
            "baseUrl": "./src",
            "paths": {
                "*": [
                    "types/*",
                    "*"
                ]
            }
        },
    }
    ```
    - Modify the imports in `src/pages/*.js`.

## Add Theming

- Use CSS-in-JS:
    - TODO: can this section be moved to non-project specific issue?
    - Check [docs](https://www.gatsbyjs.org/docs/styled-components/).
    - A word on **critical css**: Gatsby handles this out of the box.
    - Run `npm install --save gatsby-plugin-styled-components styled-components babel-plugin-styled-components`.
    - Use `import styled from 'styled-components';`.

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
    - In *Terminal 1* start the Conent Management System locally and in *Terminal 2* run in the Website folder `npm start`.


# Ecommerce Features

- TODO: add ecommerce features.
- Signup with the project email at [**Snipcart**](https://snipcart.com/).
- TODO: Where to store product data??

## Marketing Features

- Create an account at [**ReCaptcha**](https://www.google.com/recaptcha).
- Signup with the project email at [**Mailchimp**](https://mailchimp.com/).
- Signup with the project email at [**Crispchat**](https://crisp.chat/).
- Signup with the project email at [**Formspree**](https://formspree.io/).
