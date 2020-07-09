## Add Test:Unit

### App
- Run `npm install --save-dev jest jest-expo react-test-renderer npm install @types/react-test-renderer @types/jest`.
- Update `package.json` with:
```javascript
"scripts": {
  ...
  "test": "jest"
},
"jest": {
  "preset": "jest-expo"
}
```
- Create a file `App.test.tsx` with contents:
```javascript
import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

describe('<App />', () => {
    it('has 1 child', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree.children.length).toBe(1);
    });
});
```
- Add snapshot test with line: `expect(tree).toMatchSnapshot();`.
- Add Coverage report:
  - Provide to Jest config `"collectCoverage": true,`.
  - Add to `.gitignore` the line `coverage/**/*`.

### Tips
- Add these scripts:
```javascript
// active development of tests, watch files for changes and re-runs all tests
"test": "jest --watch --coverage=false --changedSince=origin/master",
// debug, console.logs and only re-runs the file that was changed
"testDebug": "jest -o --watch --coverage=false",
// displays code coverage in cli and updates the code coverage html
"testFinal": "jest",
// when a screen/component is updated, the test snapshots will throw an error, this updates them
"updateSnapshots": "jest -u --coverage=false"
```

### Troubleshooting
> Get Jest config from here: https://github.com/stringparser/expo-jest-typescript/blob/master/package.json
- Async-Storage > __mock__
- Moment > jsconfig.json > "esModuleInterop": true,
- "test": "jest --detectOpenHandles" (for async operations)
- Add `|react-router-native` to jest config transformIgnorePatterns.
- Add to top of test file `jest.useFakeTimers();` to prevent the error "ReferenceError: You are trying to `import` a file after the Jest environment has been torn down." on `<StoreContext.Provider>`

