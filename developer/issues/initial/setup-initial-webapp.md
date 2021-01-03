# Setup Initial Webapp

## Do Householding

- Add `"baseUrl": "./src"` to the `compilerOptions` in `tsconfig.json` (to enable absolute imports).
- Remove the files `App.css` and `index.css` and their respective imports (CSS-in-JS is going to be used instead).
- In the folder `components` create a new component `Dummy.tsx` with code:
```javascript
import React from 'react';
function Dummy() { return(<React.Fragment>Dummy</React.Fragment>) }
export default Dummy;
```
- Also create a new component `Header.tsx` with code:
```javascript
import React from 'react';
function Header() { return(<React.Fragment>Header</React.Fragment>) }
export default Header;
```
- In `App.tsx` replace all content with `return (<div><Suspense fallback={renderLoader()}><Header /><Dummy /><Suspense></div>);` and import using Lazy Loading:
```javascript
import React, { lazy, Suspense } from 'React';
const Dummy = lazy(() => import('components/Dummy'));
const Header = lazy(() => import('components/Header'));
const renderLoader = () => <p>Loading</p>;
```

## Add Amplify
- Run `npm install aws-amplify`.
- Copy/paste from *Alpha Project* the `app-config.js` into the `src` folder.
- Add to `App.tsx`:
```javascript
    import Amplify from 'aws-amplify';
    import config from './app-config';
    Amplify.configure(config.aws);
```
