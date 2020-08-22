# Add Theme

TODO: modify theming to comply with this setup (mode and variant): https://styled-components.com/docs/tooling#styled-theming

> First setup the *UI* repo so that a *Base Theme* and *Fonts* are available.
> A word on *critical css* for *Website*: Gatsby handles this out of the box.

## Getting Started


- Run `npm install --save-dev git+ssh://git@<username>.gitlab.com:<groupname>/ui.git#master`.
- In the *UI* repo run `npm link` and then in the target repo run `npm link @<projectname>/ui` (this allows to use the local repo to be used for rapid development).
- Add in `package.json` to `"start"` script the command `npm run link` and add `"link": npm link @<projectname>/ui`.

- Webapp:
    - Run `npm install --save-dev styled-components styled-theming @types/styled-components @types/styled-theming`.

- Website: 
    - Check [docs](https://www.gatsbyjs.org/docs/styled-components/).
    - Run `npm install --save gatsby-plugin-styled-components styled-components babel-plugin-styled-components`.

- Copy/pase from *Alpha Project* the `theme` folder into `src`.
- In `App.tsx` add (replace the `<div></div>`):
```javascript
import { Themed } from 'theme';
<Themed>...existing app</Themed>
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

## Add App Shell

- Copy/paste from *Project Alpha* the `withAppShell.tsx` Higher Order Component into `src/components`.
- Move the `<Header />` from `App.tsx` into `<header></header>` of `withAppShell.tsx`.
- Add to `Dummy.tsx` the lines:
```javascript
import withAppShell from './withAppShell';
export default withAppShell(Dummy);
```

## Add Button with Variant

- In `Dummy.tsx` add the code:
```javascript
import { VARIANTS } from 'theme';
import Button from 'theme/ui/Button';
<Button variant={VARIANTS.primary}>Click</Button>
```

## Add SVG

- In *Figma* open the *App* file, then find a *Layer* which has an *Arrow Back* icon.
- Select the layer of the icon and *right click > copy/pase > copy as svg*.
- Paste the contents into a new file `src/theme/icons/arrow-back.svg`.
- In `Dummy.tsx` add the line `import arrowBack_icon from 'theme/icons/arrow-back.svg';` and replace the word `Click` with `<img src={arrowBack_icon} alt="arrow back icon" />`.
