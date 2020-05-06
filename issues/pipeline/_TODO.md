## Expand pipeline
TODO: add this diagram to default `docs` in each project.

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

- Website
    - Check [docs](https://www.npmjs.com/package/gatsby-plugin-resolve-src).
    - Add to `eslint.config.js`:
    ```json
    {
        "settings": {
            "import/resolver": {
            "node": {
                "moduleDirectory": ["node_modules", "src"]
            }
            }
        }
    }
    ```

## Add Test:Unit
- jest

## Add Test:Integration

## Add Test:Functional
- cypress
