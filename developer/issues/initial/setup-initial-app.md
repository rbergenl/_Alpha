# Setup Initial App

> Make sure you have an *Expo* account.

## Do Householding

- Have Expo CLI installed `npm install --global expo-cli`.
- Run `expo login`.
- Run `echo -e "\n# Custom" >> .gitignore`.
- Run `echo ".npmrc" >> .gitignore`.
- Add to `app.json` to the key `ios` the line `"bundleIdentifier": "com.<projectname>.app"`.
- Add to `package.json` the key `"name": "<projectname>-app",`.
- Copy/paste from `app.json` the key `version` into `package.json`.
- Add to `package.json` the script `"version": "node -e \"const app = require('./app.json'); const pkg = require('./package.json'); const fs = require('fs'); app.expo.version=pkg.version; fs.writeFileSync('app.json', JSON.stringify(app, null, 2));\" && git add -A app.json",` to keep both json files aligned.
- Add to `package.json` the script `"debug": "expo start --no-dev --minify"` (to be able to publish the app from there).
- Modify in `App.tsx` the line `export default function App() {` into `const App: React.FC = () => {` and end the file with `export default App`.
- Run `git add . && git commit -m "householding" && git push`.
- Add the url `https://expo.io/@<username>/<package.name>` to bookmarks as *Expo - App* to the folder *Developer > Environments* and verify the URL is already in `README.md`.
- Cleanup the development tool Flipper from `ios/Podfile`.

## Enable Expo Bare Workflow

> Make sure Xcode is installed with its developer tools.
- Check the [docs](https://docs.expo.io/bare/exploring-bare-workflow/).
- Have React Native installed `npm install --global react-native-cli`.
- Run `expo eject`.
- Modify in `app.json` the line `"entryPoint": "index.js"`. (not needed anymore).
- Add to `package.json` the script `ios` an existing simulator `--simulator=\"iPhone 11 Pro Max\"`.
- Move `App.tsx` into `./src` and update import in `index.js` approriately.
- Run `git add . && git commit -m "expo eject" && git push`.
- Run `npx pod-install` (if an error occurs, follow the instruction to update cocoapods).
- Run in a seperate terminal `npm start`.
- Run `npm run ios`.
- Remember the process for installing an Expo Component:
    - Run `expo install <component>`.
    - Run `npx pod-install` (or `cd ios && pod install`).
- Fix the Expo warnings - Splash Screen:
    - Read the [docs](https://github.com/expo/expo/blob/master/packages/expo-splash-screen/README.md).
    - First install [unimodules](https://docs.expo.io/bare/installing-unimodules/).
        - Run `npm install react-native-unimodules && npx pod-install`.
    - Run `expo install expo-splash-screen && npx pod-install`.
    - Run `npx expo-splash-screen --background-color <color_code>`.
    - Update `app.json` to `"splash": { "xib": "./ios/<projectname>/Base.lproj/LaunchScreen.xib" }`. Also remove `assets/splashscreen.png`.
- Fix the Expo warnings - Icon:
    - Open Xcode and navigate to Project > Images.xcassets > AppIcon.
    - Remove the existing AppIcon. Then **right-click > App Icons > New iOs App Icon**.
    - Find an icon image via Google and get an Icon Set from it via an online tool like https://appicon.co/. Make sure the images are actually a PNG.
    - Drag and drop the downloaded folder `AppIcon.appiconset` into the projects `ios/<projectname>/Images.xcassets/` folder.
    - Update `app.json` to `"icon": "./ios/<projectname>/Images.xcassets/AppIcon.appiconset/1024.png"`. Also remove `assets/icon.png`.
- Fix the Expo warnings - Android: TODO!

## Add Amplify

- Run `npm install aws-amplify aws-amplify-react aws-amplify-react-native`.
- Run `npm install dotenv`.
- Create in the root of the project a file `app.config.js` with the contents:
```javascript
import dotenv from 'dotenv';
dotenv.config({ path: `.env.local` });
export default ({ config }) => {
    return {
        ...config,
        extra: { aws: {} }
    }
}
```
- Copy/paste from *Alpha Project* in the file `app-config.ts` the object `aws` and replace it with the `aws` object in `app.config.js`.
- Add to `App.tsx`:
```javascript
    import Amplify from 'aws-amplify';
    import Constants from 'expo-constants';
    Amplify.configure(Constants.manifest.extra.aws);
```
