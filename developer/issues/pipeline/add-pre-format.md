# Add .Pre:Format

- Webapp / App:
  - Run `npm install --save-dev prettier`.
  - Add to `package.json` the script `"format": "prettier --check \"src/**/*.{js,jsx,ts,tsx,json,css,scss,md}\"",` (command taken from [here](https://create-react-app.dev/docs/setting-up-your-editor/#formatting-code-automatically)).
  - For configuration use these [defaults](https://prettier.io/docs/en/configuration.html).
  - Add to `package.json` the config (for *Base* it should be `"semi": true`):
  ```json
  "prettier": {
      "trailingComma": "es5",
      "tabWidth": 4,
      "semi": false,
      "singleQuote": true,
      "printWidth": 120
  }
  ```
  - Run `npx prettier --write "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}"` (only needed once).

## Enable Formatting on Commit
- Check the [docs](https://create-react-app.dev/docs/setting-up-your-editor/#formatting-code-automatically).
- Run `npm install --save-dev husky lint-staged prettier`.
- Add to `package.json` the lines:
```json
{
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
      "prettier --write"
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }
}
```

## Optional extras

- Use setup as explained here: https://create-react-app.dev/docs/setting-up-your-editor/
- Run `touch .editorconfig` (see editor configuration https://editorconfig.org).
- In VSCode, install via extension sidebar `prettier-vscode`, and execute on a document with `CDM+SHIFT+P` and `Format Document`.
