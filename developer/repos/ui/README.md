
# UI

Shared UI components, styleguide for ReactNative and Web. Place code snippets as well.

- App: Use [NativeBase](https://nativebase.io/). It has platform or brand based theming and allows customisation; and has most stars on GitHub.
    - To fix the error about `import type { KeyboardAwareInterface } from './KeyboardAwareInterface'` do the following:
        - Run `expo customize:web` and choose to generate a `webpack.config.js`.
        - Modify that file to change the argument `env` into `{...env,babel:{dangerouslyAddModulePathsToTranspile: ['@codler/react-native-keyboard-aware-scroll-view'] }}`
- Web: Use [React Bootstrap](https://react-bootstrap.github.io/). It is an industry standard for many years.

Keep this library as thin as possible.
Organise styling per theme.
Sass/Css variables.
Fonts
Icons
Demo App (expo web) and Web: HTML snippets (and examples) for components and page templates.

**TIP**: to build clean components use this reference for code snippets: https://www.w3schools.com/howto/default.asp

## Getting Started

- Run `npm install`
- To view the demo app: `cd demo-app && npm run web`.
- To view the demo web: `cd demo-web && npm start`.

## Add Fonts

- Download the font files from [Google Fonts](https://fonts.google.com).
    - Select the style `Regular 400`.
    - In the popup at *Embed* open the link.
    - Copy/paste only the part commented with `/* latin */` into the file `theme/src/web-fonts.css`.
    - Download the font file as defined in `src: url()`.
    - Change the line to `src: local('Dosis'), url(/fonts/dosis-regular-400.woff) format('woff');` (might also be `woff2` depending on what is provided).
    - Also add to `variables.ts` the code:
    ```javascript
    export const WEB_FONT_FAMILIES = {
        sansSerif: '"Dosis", Helvetica, Arial, sans-serif',
        serif: 'Georgia, Times, "Times New Roman", serif',
        monoSpaced: '"Consolas", monaco, monospace',
    }
    ```
    - Copy/paste and rename the downloaded file into `theme/public/fonts` (e.g. dosis-regular-400.woff).

## Add Icons

- In *Figma* open the *App* file, then find a *Layer* which has an icon (e.g. Home and Profile).
- Select the layer of the icon and *right click > copy/pase > copy as svg*.
- Paste the contents into a new file `src/icons/<iconname>.svg`.

## Variables

## Themes

## Components

- Layout:
    - Hero
- Forms:
    - Form
- Presentational:
    - Quote
    - Video
- Dialog:
    - Slider

## Feature Flows

- E-Commerce:
    - ??
- Product-Tour:
    - ??
- User-Account:
    - Signup
    - Signin
    - Preferences

## Inspirations

- https://gestalt.netlify.app
