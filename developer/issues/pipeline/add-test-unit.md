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

## Tips on Snapshots

- Whenever you make a UI change run `npx jest --watch` to interactively review and update snapshot(s). The snapshot exists to capture unintented UI changes and should be code reviewed during a Pull Request.

## Add Reports

- App:
  - Run `npm install --save-dev jest-unit`.
  - Modify the `package.json` script to `"test": "jest --ci --coverage --reporters=\"jest-junit\"",`.
  - Add to `package.json` to key `jest` the config:
  ```json
  {
    "coverageReporters": [
      "json",
      "lcov",
      "text",
      "clover",
      "cobertura"
    ],
  }
  ```
  - Run `echo coverage/ >> .gitignore`.
  - Run `echo junit.xml >> .gitignore`.
  - In *Gitlab > <Groupname> > <Reponame> > Settings > CI / CD > General Pipelines* add the regex `All files[^|]*\|[^|]*\s+([\d\.]+)` to the setting *Test coverage parsing*.
  - Coverage report can be viewed at:
    - *Pipeline > Job "test_unit" > Details column*.
    - *Merge request - Overview page > Pipeline section*.
    - http://<groupname>.gitlab.io/<reponame>/lcov-report
      - By default configured to deploy *Master* only.
      - Also check *Settings > Pages*.
      - Add the url to bookmarks with name `Gitlab - <Reponame> - Master - Coverage`.
