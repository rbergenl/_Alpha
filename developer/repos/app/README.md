# App

React Native app based on Expo.

## Prerequisites

- Xcode with developer tools (e.g. Simulator).

## Getting Started

- Run `nvm use`.
- Add an `.npmrc` file with
    - Make sure to modify `<projectname>` and `<NPM_TOKEN>`.
    - Make sure this file is added to `.gitignore`.
```yml
# Find the value for `GITLAB_TOKEN` in *Gitlab > Group > Settings > CI / CD > Variables*.
@<projectname>:registry=https://gitlab.com/api/v4/packages/npm/
//gitlab.com/api/v4/packages/npm/:_authToken=<NPM_TOKEN>
```
- Run `npm install`.
- For Web, Run `npm run web`.
- For iOS, Run `npm start` and in another terminal run `npm run ios`.

## URLs

- Expo - App: https://expo.io/@<username>/<package.name>
- Test Coverage Report: http://**groupname**.gitlab.io/**reponame**>/lcov-report

## Debugger

- Check the [docs](https://docs.expo.io/workflow/debugging/).
- The *React Native Debugger* should listen to the port where *Metro Bundler* is running.

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

## Mocking

> To be able to connect to this local server from an Expo Client (app on device) it is recommended to use `ngrok`. Via http you can replace `localhost` with the local ip-address (192.168.1.108). But for HTTPS, the certificate is signed for localhost only. First create an account at ngrok.com. Then run `ngrok authtoken <token>`. Then run `ngrok http https://localhost:8443 -host-header="localhost:8443"`. Place the given address in `app-config.ts`.
