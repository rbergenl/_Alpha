## Initial Setup App

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

