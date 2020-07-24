# Initial Setup App

> Make sure you have an *Expo* account.

## Householding
- Have Expo CLI installed `npm install --global expo-cli`.
- Run `expo login`.
- Add to `app.json` to the key `ios` the line `"bundleIdentifier": "com.<projectname>.app"`.
- Add to `package.json` the script `"debug": "expo start --no-dev --minify"` (to be able to publish the app from there).
- Move `App.tsx` into `./src` and update import in `index.js` approriately.
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

## Enable Expo Bare Workflow

> Make sure Xcode is installed with its developer tools.
- Check the [docs](https://docs.expo.io/bare/exploring-bare-workflow/).
- Have React Native installed `npm install --global react-native-cli`.
- Run `expo eject`.
- Run `cd ios && pod install`.
- Run in a seperate terminal `npm start`.
- Run `npm run ios`.
- Remember the process for installing an Expo Component:
    - Run `expo install <component>`.
    - Run `cd ios && npx pod-install`.

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

## Build for the App Store (TODO)

> You should be enrolled in the Apple Developer Program.
- TODO??: add Version and Permissions to app.json.
- TODO??: add Privacy Policy, add Icon, choose PrimaryColor.
- TODO??: first create your own credentials (keys files etc).
- Run `expo build:ios -t archive` and follow the instructions..
    - To Configure credentials say "No" and then "Let Expo handle the process".
    - If login fails, wait a couple of minutes, and run the command again with the flag ` --clear-credentials`.

## Build and Test for Android (TODO)
- Test Andriod App on Android Simulator.

## Setup Pipeline (TODO)

TODO: check https://stackoverflow.com/questions/59539163/how-to-install-expo-ipa-on-iphone-6
TODO: check https://www.robincussol.com/build-standalone-expo-apk-ipa-with-turtle-cli/
Btw, check here: https://exp.host/@aardonyx1/aardonyx-app/index.exp?sdkVersion=37.0.0

## EXAMPLE SOUPCHEF

- Download code from [here](https://developer.apple.com/documentation/sirikit/soup_chef_accelerating_app_interactions_with_shortcuts).
- Before you can run Soup Chef on your iPhone, you need to:
    - Set the app group name for the SoupChef, SoupChefIntents, SoupChefWatch Extension, and SoupChefIntentsWatch targets to a valid name. For more information on app groups, see Configure app groups.
        - Select 'Target > SoupChef' and select a Team (from Apple Id). Update the `Bundle Identifier` to `com.example.apple-<projectname>.<appname>` and also add a `App Group` with name `com.example.apple-<projectname>`.
    - Change AppGroup value in UserDefaults+DataSource.swift to match your app group name.
- Connect the Iphone and build to the Iphone.
    - First time: on the iPhone, open Settings > General > Device Management > <appleid> > *Trust*.

TROUBLESHOOTING:
In my case, here are the steps that I resolve the problems:
- Go to this folder: ~/Library/MobileDevice/Provisioning Profiles/
- Remove all the provisioning profile
- In Xcode 10 menu > Product > Clean Build Folder
- In Xcode 10 menu > Xcode > Preferences > Account > Download Manual Profiles
- In Xcode 10 menu > Product > Build / Archive

Something wrong with expo App? For example 'invariant violation: "main" has not been registered'. Run `expo start --no-dev --minify`. Or also handy to clear cache with `expo r -c`

## TODO: the feedback after fresh project running expo eject

⚠️  iOS configuration applied with warnings that should be fixed:
- supportsTablet: You will need to configure this in the "General" tab for your project target in Xcode.
- icon: This is the image that your app uses on your home screen, you will need to configure it manually.
- splash: This is the image that your app uses on the loading screen, we recommend installing and using expo-splash-screen. Details. (​https://github.com/expo/expo/blob/master/packages/expo-splash-screen/README.md​)

⚠️  Android configuration applied with warnings that should be fixed:
- splash: This is the image that your app uses on the loading screen, we recommend installing and using expo-splash-screen. Details. (​https://github.com/expo/expo/blob/master/packages/expo-splash-screen/README.md​)
- icon: This is the image that your app uses on your home screen, you will need to configure it manually.
