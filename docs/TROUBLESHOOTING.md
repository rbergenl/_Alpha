# Troubelshooting

## Gatsby
- manifest.webmanifest has error or 404 and icons not generated. Solution: upgrade gatsby-plugin-manifest to the latest version.

## Github Pages
- Github pages resets the custom domain. Solution: add a `CNAME` file with the line `www.<domainname>.com`.
- The `www.` subdomain gives privacy error. Solution: in your DNS point `www.<domainname>.com` as CNAME to `<username>.github.io`.

## React Native

- Check the `ios/Podfile` at the `react-native` or `expo` github repository inside `template` folder.
- Using JS Debugging: when in the app; open the menu > dev settings > server and port > localhost:8081. Then in Chrome go to `chrome://extensions/` to disable all extensions (cause they might give errors). Close the browser. And on the device then enable menu > js debugging
- when loading firebase while using react-native, you might get the error "undefined self.fetch". This problem is in the fetch module, and can be solved by opening the from the Dev menu on the device the Remote JS debugger
- Install the latest version of XDE https://github.com/expo/xde/releases. If you don’t update, you will see an error similar to: `Error: Cannot find module 'exponent/tools/hashAssetFiles'...` (actually, it is because of expo should be under 'dependencies' in the package.json)
- when starting metro bundler and get error about 'AccessibilityInfo', restart the computer and run `$ npm start -- --reset-cache`
- Android Studio Virtual Device: try installing or updating Intel Emulator Accelerator (HAXM installer) from SDK Manager and also check if Intel VT-x is enabled in your BIOS settings
- If using Real Device via USB; then install via SDK Manager > SDK Tools the Google USB Driver
- If error "Emulator: glClear:466 GL err 0x502", then do manual install as admin via `Android\sdk\extras\intel\hardware_accelerated_execution_manager`
- If with installing 'HAXM' you get the error 'windows requires a digitally signed driver'; then run Windows security updated; or download haxm v7.1.0 from https://github.com/intel/haxm/releases
- if JS Debugging says "connecting to remote debugger".. open the browser already at debugger url; and restart the app.
- To reload the application or enable hot loading, shake the device or send via the terminal `$ adb shell input keyevent KEYCODE_MENU` (or `npm run menu`)

## Jest React Unit Testing
- Async-Storage > __mock__
- Moment > jsconfig.json > "esModuleInterop": true,
- Add `|react-router-native` to jest config transformIgnorePatterns.
- Add to top of test file `jest.useFakeTimers();` to prevent the error "ReferenceError: You are trying to `import` a file after the Jest environment has been torn down." on `<StoreContext.Provider>`
- Redux: use `redux-mock-store` https://redux.js.org/recipes/writing-tests#async-action-creators
- Add `redux-persist` to the transformIgnorePatterns key in `package.json > jest`
