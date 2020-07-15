# Initial setup UI

## Do Householding

## Setup Theme
- In the folder `theme`:
    - Run `mkdir src && cd src && touch web-fonts.css && mkdir icons`.
    - Run `npm install --save-dev typescript`.
    - Run `npx tsc --init`.
    - Enable in `tsconfig.json` the line `"declaration": true,`.
    - Also add outside of the compiler options the lines `"include": ["src"], "exclude": ["node_modules", "**/__tests__/*"],`.
    - Add to `package.json`:
    ```json
    "files": ["dist"]
    "scripts": {
        "build": "tsc --outDir dist && npm run copy",
        "copy": "cp -r src/icons dist && cp src/*.css dist"
    }
    ```
    - Run `echo "dist" >> .gitignore`.

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

## TODO
- Add a CSS Reset file (to be included by Webapp and Website):
    - Check [docs](https://meyerweb.com/eric/tools/css/reset/).
    - Add that example code to `reset.css`.