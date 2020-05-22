# Initial setup UI

## Do Householding

## Setup Theme
- In the folder `theme`:
    - Run `npm install --save-dev typescript`.
    - Run `npx tsc --init`.
    - Enable in `tsconfig.json` the line `"declaration": true,`.
    - Also add outside of the compiler options the lines `"include": ["src"], "exclude": ["node_modules", "**/__tests__/*"],`.
    - Add to `package.json`:
    ```json
    "files": ["dist"]
    "scripts": { "build": "tsc --outDir dist" }
    ```
    - Run `echo "dist" >> .gitignore`.

## Add Fonts
- Download the font files from [Google Fonts](https://fonts.google.com).
    - Select the style `Regular 400`.
    - In the popup at *Embed* open the link.
    - Copy/paste only the part commented with `/* latin */` into the file `theme/src/fonts.ts` as `export const = WEB_FONT_FACE \`\``.
    - Download the file as defined in `src`.
    - Change the line to `src: local('Dosis'), url(/fonts/dosis-regular-400.woff) format('woff');` (might also be `woff2` depending on what is provided).
    - Also add the line
    ```javascript
        export const WEB_FONT_FAMILY = `font-family: 'Dosis', sans-serif;`;
    ```
    - Copy/paste and rename the downloaded file into `theme/public/fonts` (e.g. dodis-regular-400.woff).
    - Add to `index.ts` the line `export { WEB_FONT_FACE, WEB_FONT_FAMILY } from './fonts';`.

## TODO
- Add a CSS Reset file (to be included by Webapp and Website):
    - Check [docs](https://meyerweb.com/eric/tools/css/reset/).
    - Add that example code to `reset.css`.