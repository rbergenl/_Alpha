# Fonts

## Add to UI Project

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

## Use in Frontend

- App:
    - View the [docs](https://docs.expo.io/guides/using-custom-fonts/).
    - Download the font files from [Google Fonts](https://fonts.google.com).
    - Place the file(s) inside `./assets/fonts/<fontname>.otf`.
- Webapp:
    - The `@font-face` definition is already defined in `GlobalStyle` component.
    - Copy/paste from *UI* repo the `public/fonts` folder into the projec folder.
    - Add to `public/index.html` the line `<link rel="preload" as="font" type="font/woff" crossorigin="anonymous" href="/fonts/<fontname>.woff"/>` (change `woff` to `woff2` if applicable).
- Website:
    - Run `npm install --save gatsby-plugin-prefetch-google-fonts`.
    - Add to `gatsby-config.js`:
    ```javascript
    {
        resolve: `gatsby-plugin-prefetch-google-fonts`,
        options: {
            fonts: [
                {
                family: `Dosis`
                }
            ]
        }
    }
    ```
    - Add the line `html { font-family: 'Dosis' }` in `components/layout.css`file.
