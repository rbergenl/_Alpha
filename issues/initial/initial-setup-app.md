# Initial Setup App

- Add privacy policy
- Add Icon
- Choose primaryColor
- Modify `app.json`.
    - Version
    - Bundle
    - Permissions
- Publish bundle to allow for Over-The-Air updates:
    - First `expo publish`.
- Preferably, test App in Expo Client.
- Alternatively, test iOS App on iPhone Simulator:
    - Required Xcode to be installed.
    - Run `expo build:ios -t simulator` and follow the instructions.
    - First time: login with Apple ID and let expo set credentials.
    - Download and unzip the given `tar` file.
    - Open Xcode and go to `Xcode > Open Developer Tools > Simulator`. Or hit `CMD+Space` to open Spotlight and search for `Simulator`.
    - Drag and drop the `.app` file onto the virtual device and open the app.
- Alternatively, test Andriod App on Android Simulator:
    - TODO

TODO: check https://stackoverflow.com/questions/59539163/how-to-install-expo-ipa-on-iphone-6
TODO: check https://www.robincussol.com/build-standalone-expo-apk-ipa-with-turtle-cli/
Btw, check here: https://exp.host/@aardonyx1/aardonyx-app/index.exp?sdkVersion=37.0.0

## Expo Bare Workflow
- Prerequisites:
    - Have Xcode installed.
    - Login with your Apple ID (Xcode > Preferences > Accounts) and create a Developer Signing Certificate (valid for 7 days).
    - Have Expo CLI installed `npm install --global expo-cli`.
    - Have React Native installed `npm install --global react-native-cli`.
- Check the [docs](https://docs.expo.io/bare/exploring-bare-workflow/).
- Create a bare project with `expo init --template bare-minimum`.
- Run `expo eject`.
- Run `cd ios && pod install`.
- Run `npm run ios`.
- Installing an Expo Component:
    - Run `expo install <component>`.
    - Run `cd ios && npx pod-install`.

SIRI
-> Open the `.xcworkspace` file (not the xproject file).
-> In Xcode, select the xproject file (at the top) > Tab Capabilities > Add `Siri`.

-> `npm install react-native-siri-shortcut --save`.
-> Update the IOS files (Appdelegate.m, Podfile, Info.plist).


TRY EXAMPLE SOUPCHEF
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