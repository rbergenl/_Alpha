# Initial Setup Webapp

## Do Householding
- Cleanup:
    - Remove the files `App.css` and `index.css` and their respective imports (CSS-in-JS is going to be used instead).
- Absolute imports:
    - Add `"baseUrl": "./src"` to the `compilerOptions` in `tsconfig.json`.

## Add Amplify
- Run `npm install aws-amplify`.
- Copy/paste from *Alpha Project* the `app-config.js` into the `src` folder.
- Add to `app.tsx`:
```javascript
    import Amplify from 'aws-amplify';
    import config from './app-config';
    Amplify.configure(config.aws);
```
