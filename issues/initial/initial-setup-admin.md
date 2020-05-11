# Initial Setup Admin

## Add Amplify
- Run `npm install aws-amplify`.
- Copy/paste from *Alpha Project* the `app-config.js` into the `src` folder.
- Add to `app.tsx`:
```javascript
    import Amplify, { Auth } from 'aws-amplify';
    import config from './app-config';
    Amplify.configure(config.aws);
```
## Create a Dashboard
- Create a page `dashboard` which displays AWS CloudWatch Widgets as images.
    - View: database usage Atlas Mlab Mongo.
    - View: storage usage Cloudinary.
