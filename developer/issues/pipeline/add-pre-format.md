## Add .Pre:Format
- prettier

- Webapp:
    - Add to package.json `"format": "prettier --write \"src/**/*.ts\" \"src/**/*.js\"",`.
    - Add a `.prettierrc` file:
    ```
    {
    "printWidth": 120,
    "trailingComma": "all",
    "singleQuote": true
    }
    ```

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
