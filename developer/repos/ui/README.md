
# UI

Shared UI components, styleguide for ReactNative and Web. Place code snippets as well.

- App: Use [NativeBase](https://nativebase.io/). It has platform or brand based theming and allows customisation; and has most stars on GitHub.
    - To fix the error about `import type { KeyboardAwareInterface } from './KeyboardAwareInterface'` do the following:
        - Run `expo customize:web` and choose to generate a `webpack.config.js`.
        - Modify that file to change the argument `env` into `{...env,babel:{dangerouslyAddModulePathsToTranspile: ['@codler/react-native-keyboard-aware-scroll-view'] }}`
    > Do not use Native Base. Stay plain vanilla, keep it simple!
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
