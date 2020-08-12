# Setup Test Environment for Website

> Requires the initial website setup to be completed.

## Deploy to Heroku

- Check [docs](https://www.gatsbyjs.org/docs/deploying-to-heroku/).
- Run `heroku login`.
- Run `heroku create <projectname>-website`.
- Run `heroku config:set CONTENTFUL_ACCESS_TOKEN=<TOKEN>`. << TODO: this is different now
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
- Run `git push heroku develop:master`.
- Open and bookmark the provided URL.
