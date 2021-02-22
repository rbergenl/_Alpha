# Troubelshooting

## NPM
- With `lifecycle EPERM, Operation not permitted` do the following: Go to System Preferences > Security & Privacy > Privacy > Full Disk Access. Add Terminal.

## Gatsby

- manifest.webmanifest has error or 404 and icons not generated. Solution: upgrade gatsby-plugin-manifest to the latest version.

## Github Pages

- Github pages resets the custom domain. Solution: add a `CNAME` file with the line `www.<domainname>.com`.
- The `www.` subdomain gives privacy error. Solution: in your DNS point `www.<domainname>.com` as CNAME to `<username>.github.io`.

## Expo

- Try to publish with `expo publish --target managed` to publish an app that will run in Expo client. Or run `expo publish --target bare` to just publish the app.
- Try: go to the Expo project page and near the QR code click `Open project in browser`. There the app can be opened in Android and might display more error information.
- Something wrong with expo App? For example 'invariant violation: "main" has not been registered'. Run `expo start --no-dev --minify`. Or also handy to clear cache with `expo r -c`.
- Here are the steps to resolve problems:
    - Go to folder: ~/Library/MobileDevice/Provisioning Profiles/
    - Remove all the provisioning profile
    - In Xcode 10 menu > Product > Clean Build Folder
    - In Xcode 10 menu > Xcode > Preferences > Account > Download Manual Profiles
    - In Xcode 10 menu > Product > Build / Archive

## React Native

- Check the `ios/Podfile` at the `react-native` or `expo` github repository inside `template` folder (https://github.com/expo/expo/tree/master/templates/expo-template-bare-minimum).
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
- When building received error about `} catch {` from module `fs-extra`. Find and replace all occurences in `node_modules/{@expo,fs-extra}` with `} catch (error) {`.
- An error like `"CopySwiftLibs" build input file cannot be found` gets solved by removing the *User-Defined* setting `EXCLUDED_ARCHS` at the pojects > target.

## Jest React Unit Testing

- Async-Storage > __mock__
- Moment > jsconfig.json > "esModuleInterop": true,
- Add `|react-router-native` to jest config transformIgnorePatterns.
- Add to top of test file `jest.useFakeTimers();` to prevent the error "ReferenceError: You are trying to `import` a file after the Jest environment has been torn down." on `<StoreContext.Provider>`
- Redux: use `redux-mock-store` https://redux.js.org/recipes/writing-tests#async-action-creators
- Add `redux-persist` to the transformIgnorePatterns key in `package.json > jest`

## MacOS Storage Full

- Check folders via Terminal with command `du -hs */ | sort -h` (disk utility, human-readable summary and sort by the human-readable column (e.g. 2.2G)). Use `du -hs .*` to include hidden folders otherwise visible with `ls -a` or `du -hs *` for just files otherwise visible with `ls -l`.
    - You can also you Finder. Go to View > Show View Options > Calculate All Size.
    - To show hidden files use CMD+SHIFT+(dot).
    - To navigate a folder up use CMD+(up).
- Go through all NodeJS projects and remove the `node_modules` folder.
    - On Mac, use Finder and first search "Documents" for "node_modules". Then click the plus sign and filter by Kind is Folder. Right click to open each enclosing folder to see in which project it was installed (perhaps go up multiple teams to get out of nested node_modules).
- NVM:
    - stores versions here ``/Users/username/.nvm/versions`. It creates a different folder for each installation of Node. And each globally installed package is installed per version of Node. So, consolidate the versions of Node (e.g. v14.0.1 and v14.0.2 and v14.0.3, means, upgrade all to v14.0.3).
- Docker:
    - remove all with `docker system prune`.
    - stores caches for each layer of images that are build or run. Check images with `docker images` and remove with `docker image rm <id|name>`  (tip, doubleclick and id, then CMD+right click then Space and next). Optionally force remove with the flag `-f`.
    - Perhaps first remove stopped containers with `docker ps -a` and then `docker container rm <id>` (tip, doubleclick and id, then CMD+right click then Space and next).
- Xcode:
    - stores downloads here `/Users/username/Library/Caches/com.apple.dt.Xcode`.
    - stores a build of an App here `/Users/username/Library/Developer/Xcode/DerivedData/`
    - stores device support in the folders `/watchOS DeviceSupport` and `/iOS DeviceSupport`.
    - stores simulator data here `/Users/username/Library/Developer/CoreSimulator`.
- Chrome:
    - stores profiles here `/Users/username/Library/Application Support/Google/Chrome`.
- Mac:
    - stores system updates here `/Library/Updates/` (first check if latest update is installed, it should be automatically removed).
    - stores application data here `/Users/username/Library/Application Support/` and here `/Library/Application Support/` (check for application you don't use anymore).

## Trusting a SSL Certificate

- Download certificate: `openssl s_client -showcerts -connect acc.mrp-ns.nl:443 < /dev/null | openssl x509 -outform DER > mrp-ns.pem`.
- Either:
    - Import certificate: `yes | sudo keytool -importcert -file mrp-ns.pem -keystore $JAVA_HOME/jre/lib/security/cacerts -storepass changeit -alias "mrp-ns-root"`
    - Or import via the Keychain tool (import certificate; and then change setting to *Always Trust*).

## Using a Proxy to intercept Network Traffic
- Read the Mitmproxy [docs](https://docs.mitmproxy.org/stable/)
- Setup an automatic response by creating a Python file `example.py`:
```python
from mitmproxy import http

def request(flow: http.HTTPFlow) -> None:
    if flow.request.pretty_url == "http://example.com/path":
        flow.response = http.HTTPResponse.make(
            200,  # (optional) status code
            b"Hello World",  # (optional) content
            {"Content-Type": "text/html"}  # (optional) headers
        )
```
- Starting the Proxy:
    - Install: `brew install mitmproxy`.
    - Run: `mitmproxy -s example.py --set listen_port=9061`.
    - Test: `curl --proxy http://127.0.0.1:9061 "http://example.com/path"`.
- Manually configure the Proxy:
    1. use ‘i’ to set a filter
    2. Select a request and press `e` to edit
    3. use ESC and Q
    4. use `a` to resume the flow
- Configure to use Proxy on iPhone:
    1. Start mitmproxy on the Macbook.
    2. On the iPhone launch safari and and navigate to `mitm.it`. Click to install the certificate. 
    3. Settings > General > Profile > “mitmproxy” > Install.
    4. Settings > General > About > Certificate Trust Settings > enable “mitmproxy”.
    5. Settings > WiFi > Click (i) > Use Proxy > Manual > Set the IP as found on Macbook and Port as defined with mitmproxy command.
        - To find the Macbook IP run `ifconfig` and use `en0` the IP address at `inet`.
- Configure to use Proxy on Macbook:
    1. System Preferences > Network > Wi-Fi > Advanced... > Tab "Proxies" > Enable "Web Proxy (HTTP)" > Set the IP to `127.0.0.1` and Port as defined with mitmproxy command.
