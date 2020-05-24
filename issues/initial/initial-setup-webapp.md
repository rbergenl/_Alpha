# Initial Setup Webapp

## Do Householding
- Absolute imports:
    - Add `"baseUrl": "./src"` to the `compilerOptions` in `tsconfig.json`.
- Cleanup:
    - Remove the files `App.css` and `index.css` and their respective imports (CSS-in-JS is going to be used instead).
    - In the folder `components` create a new component `Home.tsx` with code:
    ```javascript
    import React from 'react';
    function Home() { return(<React.Fragment>Home</React.Fragment>) }
    export default Home;
    ```
    - Also create a new component `Header.tsx` with code:
    ```javascript
    import React from 'react';
    function Header() { return(<React.Fragment>Header</React.Fragment>) }
    export default Header;
    ```
    - In `App.tsx` replace all content with `return (<div><Header /><Home /></div>);` and import appropriately.

## Add Amplify
- Run `npm install aws-amplify`.
- Copy/paste from *Alpha Project* the `app-config.js` into the `src` folder.
- Add to `App.tsx`:
```javascript
    import Amplify from 'aws-amplify';
    import config from './app-config';
    Amplify.configure(config.aws);
```
