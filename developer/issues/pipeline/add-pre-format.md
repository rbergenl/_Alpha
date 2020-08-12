# Add .Pre:Format

- Webapp / App / Base:
  - Run `npm install --save-dev prettier`.
  - Add to `package.json` the script `"format": "prettier --check \"src/**/*.{js,jsx,ts,tsx,json,css,scss,md}\"",` (command taken from [here](https://create-react-app.dev/docs/setting-up-your-editor/#formatting-code-automatically)).
    - For *Base* replace the `src` with `{bin,clients,constructs,lambda,lib,mocks,types}`.
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
  - First time, modify in `package.json` the command `--check` into `--write` and run `npm run format`. Then revert the modification.

## Enable Formatting on Commit

- Check the [docs](https://create-react-app.dev/docs/setting-up-your-editor/#formatting-code-automatically).
- Run `npm install --save-dev husky lint-staged prettier`.
- Add to `package.json` the lines (for *Base* modify the lint-staged accordingly):
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

## Add Documentation
- Create/update file `CONTRIBUTING.md` with the text:
```markdown
## Formatting

- When the pipeline command `npm run format` detects issues in file(s) the solution is: in VSCode, install via extension sidebar `prettier-vscode`, and execute on a document with `CDM+SHIFT+P` and `Format Document`.
```
