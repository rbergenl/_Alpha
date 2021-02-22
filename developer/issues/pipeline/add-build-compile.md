# Add Build:Compile

TODO.

## App - Turtle CLI to build App Binary (instead of using Expo's build service).
> To build a standalone app (not using Expo Client), you need an Apple Team ID.

- Prerequisites:
    - Have Fastlane installed `brew install fastlane` (and perhaps `xcode-select --install`).
    - If you are an Enrolled Developer; check this: https://developer.apple.com/account/resources/profiles/list
    - Get an Apple Team ID by:
        - Make sure you have an *Apple ID* (enrollment in Apple Developer Program not needed).
        - In Xcode: Login with your Apple ID (Xcode > Preferences > Accounts) and create a Developer Signing Certificate via *Manage Certificates* (valid for 7 days).
        - Select 'Target > <projectname>app' and go to section `Signing & Capabilities`. Select a Team (from Apple Id). Update the `Bundle Identifier` to `com.<projectname>.app` (as set in `app.json`).
        - Click on the info icon near `Provisioning Profile` and find the certificate number `AA12BB34CC56`. Use this as your Team ID.
    - In `app.json` the keys:
    ```json
    "ios": {
      "bundleIdentifier": "com.yourcompany.yourappname",
      "buildNumber": "1.0.0"
    },
    ```
    - 
- View example pipeline [config](https://github.com/expo/turtle-cli-example/blob/master/.travis.yml).
- Export Environment Variables:
    - Run `export EXPO_USERNAME=<username>` and `export EXPO_PASSWORD=<password>`.
    - Run `export EXPO_SDK_VERSION=40.0.0`.
    - Run `export ARTIFACT_PATH="/Users/travis/expo-project-$TRAVIS_COMMIT-`date +%s`.tar.gz"
- First publish the Javascript Bundle:
    - Run `expo login -u $EXPO_USERNAME -p $EXPO_PASSWORD --non-interactive`.
    - Run `npm install`.
    - Run `expo publish` (release channel?).
- Build the App Binary:
    - Run `npm install --global turtle-cli`.
    - Run `turtle setup:ios --sdk-version $EXPO_SDK_VERSION`.
    - For Simulator, run `turtle build:ios --team-id $EXPO_APPLE_TEAM_ID --type simulator -o $ARTIFACT_PATH`.
    - For App Store:
    > To build without Expo, use [Fastlane](https://docs.fastlane.tools/actions/gym/)
    ```bash
    turtle build:ios
            --team-id $EXPO_APPLE_TEAM_ID
            --dist-p12-path ./expo-project_dist.p12
            --provisioning-profile-path ./expo-project.mobileprovision
            -o $ARTIFACT_PATH
    ```
- Upload to App Store:
    - Use Fastlane.
    - Or Run `expo upload:ios`.

## App - Build for the App Store (TODO)

> You should be enrolled in the Apple Developer Program.
- TODO??: add Version and Permissions to app.json.
- TODO??: add Privacy Policy, add Icon, choose PrimaryColor.
- TODO??: first create your own credentials (keys files etc).
- Run `expo build:ios -t archive` and follow the instructions..
    - To Configure credentials say "No" and then "Let Expo handle the process".
    - If login fails, wait a couple of minutes, and run the command again with the flag ` --clear-credentials`.

## App - Build and Test for Android (TODO)
- Test Android App on Android Simulator.
