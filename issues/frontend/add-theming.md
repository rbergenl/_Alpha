# Add Theming

> First setup the *UI* repo so that a *Base Theme* and *Fonts* are available.

- In the *UI* repo run `npm link` and then in the target repo run `npm link @<projectname>/ui` (this allows to use the local repo to be used for rapid development).
- Run `npm install --save-dev git+ssh://git@<username>.gitlab.com:<groupname>/ui.git#master`.
- Run `npm install --save-dev styled-components @types/styled-components`.
- Copy/pase from *Alpha Project* the `theme` folder into `src`.
- In `App.tsx` add
```javascript
import { ThemeProvider, GlobalStyle, themeLight } from 'theme';
<ThemeProvider theme={themeLight}>
    <GlobalStyle />
    ...existing app
</ThemeProvider>
```

## Add Fonts
- App:
    - Download the font files from [Google Fonts](https://fonts.google.com).
    - Place the file(s) inside `android/app/src/main/assets/fonts`.
    - Use the actual font file name in the code `fontFamily: 'Kalam-Bold'`.
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

## Add UI Component

## Add SVG
- TODO: get SVG XML from Figma.
