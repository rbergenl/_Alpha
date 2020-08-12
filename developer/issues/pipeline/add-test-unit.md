# Add Test:Unit

- App:
  - Check the [docs](https://docs.expo.io/guides/setting-up-continuous-integration/).
  - Run `npm install --save-dev jest ts-jest jest-expo react-test-renderer npm install @types/react-test-renderer @types/jest`.
  - Update `package.json` with:
  ```javascript
  "scripts": {
    ...
    "test": "jest --ci"
  },
  "jest": {
    "preset": "jest-expo"
  }
  ```
  - Update `package.json` to include this [config](https://github.com/stringparser/expo-jest-typescript/blob/master/package.json).
  - Add to `tsconfig.json` the line `{ "compilerOptions": { "esModuleInterop": true, } }` to allow importing `react-test-renderer`.
  - Create a file `App.test.tsx` with contents:
  ```javascript
  import React from 'react'
  import renderer from 'react-test-renderer'
  import App from './App'

  jest.useFakeTimers()

  describe('<App />', () => {
      it('has 1 child', () => {
          const tree = renderer.create(<App />)
          expect(tree.toJSON()).toMatchSnapshot()
      })
  })
  ```

## Add Reports

- App / Base:
  - Run `npm install --save-dev jest-junit`.
  - Modify the `package.json` script to `"test": "jest --ci --coverage --reporters=\"jest-junit\"",`.
  - Add to `package.json` to key `jest` the config (or for *Base* in the already existing `jest.config.js` file):
  ```json
  {
    "coverageReporters": [
      "json",
      "lcov",
      "text",
      "clover",
      "cobertura"
    ],
    "collectCoverageFrom": [
      "**/*.{ts,tsx}",
      "!**/coverage/**",
      "!**/node_modules/**",
      "!**/babel.config.js",
      "!**/jest.setup.js"
    ]
  }
  ```
  - Run `echo coverage/ >> .gitignore`.
  - Run `echo junit.xml >> .gitignore`.
  - In *Gitlab > Group > Repo > Settings > CI / CD > General Pipelines* add the regex `All files[^|]*\|[^|]*\s+([\d\.]+)` to the setting *Test coverage parsing*.
  - Coverage report can be viewed at:
    - *Pipeline > Job "test_unit" > Details column*.
    - *Merge request - Overview page > Pipeline section*.
    - http://**groupname**.gitlab.io/**reponame**>/lcov-report
      - By default configured to deploy *Master* only.
      - Also check *Settings > Pages*.
      - Add the url to bookmarks with name `Gitlab - <Reponame> - Master - Coverage`.

# Add Documentation

- Create/update file `CONTRIBUTING.md` with the text:
```markdown
# Testing

- Run `npx jest --watch <optionally_first_part_of_filename>` to work on specific tests in a Test Driven Development approach.
- Inside a testfile, mark a test with `it.only()` to skip all other tests in the suite.
- Use the watch mode to review and update snapshot(s). The snapshot exists to capture unintented UI changes and should be commit and code reviewed during a Pull Request.
```
