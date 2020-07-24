# Add Deploy:Test

> Make sure to have finished the step *Setup access to Heroku* in *DEVELOPER.md*.

- Website:
    > Requires the initial website setup to be completed, including an initial Heroku deployment and a token added to Gitlab.
    - Add to package.json `"deploy:test": "git remote add heroku https://heroku:${HEROKU_TOKEN}@git.heroku.com/${npm_package_name}.git && git push heroku HEAD:master",`.
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

- CMS:
    > Requires the initial cms setup to be completed, including an initial Heroku deployment and a token added to Gitlab.
    - Add to package.json `"deploy:test": "git remote add heroku https://heroku:${HEROKU_TOKEN}@git.heroku.com/${npm_package_name}.git && git push heroku HEAD:master"`.

- Base:
    - In file `/bin/<projectname>-base.ts` add the accountId with Region.