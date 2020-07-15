## Add .Pre:Lint
- Check [docs](https://reactjs.org/docs/hooks-rules.html#eslint-plugin)
- Webapp:
    - `npm install --save-dev eslint tslint-config-prettier`.
    - Add to `eslint.json`:
    ```json
    {
       "extends": ["tslint:recommended", "tslint-config-prettier"]
    }
    ```
    - Add to package `"lint": "tslint -p tsconfig.json"`.
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
