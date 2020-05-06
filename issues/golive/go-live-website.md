# GoLive Website

- Add a Sitemap:
    - Run `npm install gatsby-plugin-sitemap`.
    - Add to `gatsby-config.js`:
    ```javascript
    siteMetadata: {
            siteUrl: `https://<domainname>`,
    },
    plugins: [`gatsby-plugin-sitemap`],
    ```
    - Run `echo "Sitemap: https://<domainname>/sitemap.xml" >> static/robots.txt`.
