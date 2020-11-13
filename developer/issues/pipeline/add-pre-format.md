# Add .Pre:Format

- Webapp / App / Base / UI:
  - Run `npm install --save-dev prettier`.
  - Add to `package.json` the script `"format": "prettier --check \"src/**/*.{js,jsx,ts,tsx,json,css,scss,md}\"",` (command taken from [here](https://create-react-app.dev/docs/setting-up-your-editor/#formatting-code-automatically)).
    - For *Base* replace the `src` with `{bin,clients,constructs,lambda,lib,mocks,types}`.
    - For *UI* replace the `src` with `{components,fonts,icons,theme}`.
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
- Read the `CONTRIBUTING.md` file for more information.

## Enable Formatting on Commit

- Check the [docs](https://create-react-app.dev/docs/setting-up-your-editor/#formatting-code-automatically).
- Run `npm install --save-dev husky lint-staged prettier`.
- Add to `package.json` the lines:
> For *Base* and *UI* modify the lint-staged accordingly
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
