# Add .Pre:Lint

- Check [docs](https://reactjs.org/docs/hooks-rules.html#eslint-plugin)
- App:
    - Run `npm install eslint --save-dev`.
    - Run `npx eslint --init`.
        - Select *To check syntax and find problems*.
        - Select *JavaScript modules*
        - Select *React*
        - Select *Yes* for TypeScript
        - Select *Browser*
        - Select *Use a popular style guide*
        - Select *Standard*
        - Select *JSON*
        - Select *Yes* to install dependencies
    - Move the contents of the generated `.eslintrc.json` file into `package.json` under the key `eslintConfig` and remove the generated file again.
    - Also extend the config with `"settings": { "react": { "version": "detect" } }`.
    - Add to `package.json` the script `"lint": "eslint --ext .tsx src/",`.
- Webapp:
    - Run `npm install --save-dev eslint tslint-config-prettier`.
    - Add to `eslint.json`:
    ```json
    {
       "extends": ["tslint:recommended", "tslint-config-prettier"]
    }
    ```
    - Add to `package.json` the script `"lint": "tslint -p tsconfig.json"`.
- Website:
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
