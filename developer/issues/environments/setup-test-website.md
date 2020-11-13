# Setup Test Environment for Website

> Requires the initial website setup to be completed.

> Required the *CMS* to be deployed to *Test Environment* first.

> Requires a *Heroku* account.

## Do Householding

- Run `echo "STRAPI_API_URL=<URL>" >> .env.test` (find the URL in `<project>-cms/README.md`, use the *Test URL* without the path `admin`. And a token is not needed since the CMS Api is public).
- Add to `package.json` the script `"develop:test": "OVERRIDE_ENV=test npm run develop",` (Gatsby preserved NODE_ENV for development and production only).
- Add to `package.json` the script `"build:test": "OVERRIDE_ENV=test npm run build",`.
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
- Run `git add . && git commit -m "add test env setup"`.

## Deploy to Heroku

- Check [docs](https://www.gatsbyjs.org/docs/deploying-to-heroku/).
- Run `heroku login`.
- Run `heroku create <projectname>-website`.
- Run `heroku config:set $(grep STRAPI_API_URL .env.test | xargs)`.
- Run `heroku buildpacks:set heroku/nodejs`.
- Run `heroku buildpacks:add https://github.com/heroku/heroku-buildpack-static.git`.
- Run `git push heroku develop:master`.
- Open the provided URL and bookmark it as *Heroku - Website* to the folder *Developer > Environments* and verify the URL is already in `README.md`.
