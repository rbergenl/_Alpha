# Add Test:Unit

- Webapp: already enabled by default.
- App:
  - Check the [docs](https://docs.expo.io/guides/setting-up-continuous-integration/).
  - Run `npm install --save-dev jest ts-jest jest-expo react-test-renderer npm install @types/react-test-renderer @types/jest`.
  - Update `package.json` with:
  ```javascript
  "scripts": {
    ...
    "test": "jest --ci"
  }
  ```
  - Update `package.json` to include this [config](https://github.com/stringparser/expo-jest-typescript/blob/master/package.json).
  - Add to `tsconfig.json` the line `{ "compilerOptions": { "esModuleInterop": true, } }` to allow importing `react-test-renderer`.
  - Base: make sure `tsconfig.json` has `"include": ["lambda"]`.
  - Create a file `src/App.spec.tsx` with contents:
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
- Read the `CONTRIBUTING.md` file for more information.

## Add Reports

- App / Base:
  - Run `npm install --save-dev jest-junit`.
  - Modify the `package.json` script to `"test": "jest --ci --coverage --reporters=\"default\" --reporters=\"jest-junit\"",`.
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
      - Add the url to bookmarks as *Gitlab - <Reponame> - Master - Coverage* to the folder *Developer > Test Coverage Reports* and verify the URL is already in `README.md`.
