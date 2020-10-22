# Setup Initial App

> Make sure you have an *Expo* account.

## Householding

- Have Expo CLI installed `npm install --global expo-cli`.
- Run `expo login`.
- Run `echo -e "\n# Custom" >> .gitignore`.
- Add to `app.json` to the key `ios` the line `"bundleIdentifier": "com.<projectname>.app"`.
- Add to `package.json` the key `"name": "<projectname>-app",`.
- Copy/paste from `app.json` the key `version` into `package.json`.
- Add to `package.json` the script `"version": "node -e \"const app = require('./app.json'); const pkg = require('./package.json'); const fs = require('fs'); app.expo.version=pkg.version; fs.writeFileSync('app.json', JSON.stringify(app, null, 2));\" && git add -A app.json",` to keep both json files aligned.
- Add to `package.json` the script `"debug": "expo start --no-dev --minify"` (to be able to publish the app from there).
- Modify in `App.tsx` the line `export default function App() {` into `const App: React.FC = () => {` and end the file with `export default App`.
- Run `git add . && git commit -m "householding" && git push`.
- Run `npx @react-native-community/cli doctor` to find missing items from a common App development setup.

## Set the Splash Screen

- Read the [docs](https://github.com/expo/expo/blob/master/packages/expo-splash-screen/README.md).
- First install [unimodules](https://docs.expo.io/bare/installing-unimodules/).
- Run `expo install expo-splash-screen && npx pod install`.
- TODO..
- TODO.. also to set the Icon and supportsTablet from Xcode.

## Enable Expo Bare Workflow

> Make sure Xcode is installed with its developer tools.
- Check the [docs](https://docs.expo.io/bare/exploring-bare-workflow/).
- Have React Native installed `npm install --global react-native-cli`.
- Run `expo eject`.
- Modify in `app.json` the line `"entryPoint": "index.js"`.
- Move `App.tsx` into `./src` and update import in `index.js` approriately.
- Run `git add . && git commit -m "expo eject" && git push`.
- Run `npx pod-install`.
- Run in a seperate terminal `npm start`.
- Run `npm run ios`.
- Remember the process for installing an Expo Component:
    - Run `expo install <component>`.
    - Run `npx pod-install` (or `cd ios && pod install`).

## Enable absolute imports
- Add `"baseUrl": "./src"` to the `compilerOptions` in `tsconfig.json` (to enable absolute imports). -> TODO: check, this did not work. (check: https://reactnative.dev/docs/typescript#using-custom-path-aliases-with-typescript)

## Run in Expo Client

> After project creation make short iterations on initial functionality. This publishing to a channel (first default, later to live) allows for Over-The-Air updates.
- Run `expo publish`.
    - Make sure your Expo Client is installed and logged-in with the actual email of the project.
    - Open the project page `https://expo.io/@<username>/<username>-app` and scan the QR code with the phone camera.

## Run in iOS Simulator from CLI

> Make sure you have Xcode installed and you are able to make a build and run the app in a simulator
- Run `expo build:ios -t simulator` and follow the instructions.
- Download and unzip the given `tar` file.
- Open Xcode and go to `Xcode > Open Developer Tools > Simulator`. Or hit `CMD+Space` to open Spotlight and search for `Simulator`.
- Drag and drop the `.app` file onto the virtual device and open the app.

### Run in iOS Simulator from Xcode

> Make sure to enable the Expo Bare Workflow first.
- Open in Xcode the `.xcworkspace` file (not the xproject file).
- Select the active scheme `<projectname>app - iPhone11` and press *Play*. A simulator should open the app.
> It is actually better to work on a real device, and even better to have an older one.

## Run on your device from Xcode (preferred method)

> Make sure you have an *Apple ID* (enrollment in Apple Developer Program not needed).
- Login with your Apple ID (Xcode > Preferences > Accounts) and create a Developer Signing Certificate via *Manage Certificates* (valid for 7 days).
- In the *Project Navigator* pane select `<projectname>app`.
- Select 'Target > <projectname>app' and go to section `Signing & Capabilities`. Select a Team (from Apple Id). Update the `Bundle Identifier` to `com.<projectname>.app` (as set in `app.json`).
- Connect the Iphone and build to the Iphone.
    - First time: on the iPhone, open Settings > General > Device Management > <appleid> > *Trust*.

## TODO: the feedback after fresh project running expo eject

⚠️  iOS configuration applied with warnings that should be fixed:
- supportsTablet: You will need to configure this in the "General" tab for your project target in Xcode.
- icon: This is the image that your app uses on your home screen, you will need to configure it manually.
- splash: This is the image that your app uses on the loading screen, we recommend installing and using expo-splash-screen. Details. (​https://github.com/expo/expo/blob/master/packages/expo-splash-screen/README.md​)

⚠️  Android configuration applied with warnings that should be fixed:
- splash: This is the image that your app uses on the loading screen, we recommend installing and using expo-splash-screen. Details. (​https://github.com/expo/expo/blob/master/packages/expo-splash-screen/README.md​)
- icon: This is the image that your app uses on your home screen, you will need to configure it manually.
