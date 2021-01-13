# Theme

TODO: modify theming to comply with this setup (mode and variant): https://styled-components.com/docs/tooling#styled-theming

> First setup the *UI* repo so that a *Base Theme* and *Fonts* are available.

> A word on *critical css* for *Website*: Gatsby handles this out of the box.

## Initial Setup Frontend

- Make sure the `.npmrc` file is added as described in *Getting Started* of the `README.md`.
- Run `npm install @<projectname>/ui`.
- Add in `package.json` the scripts:
```json
    "link": "npm link @<projectname>/ui",
    "unlink": "npm unlink --no-save @<projectname>/ui"
```
    - While working on an application and the UI repo at the same time, it is quicker to link the repos locally instead of publishing and installing the UI repo each time.
    - In the *UI* repo run `npm run build && cd dist && npm link` to make it locally available.
    - In the target repo run `npm run link`.
- Copy/pase from *Alpha Project* the `theme` folder into `src`.
    - Modify the imports in the `index.tsx` file 
    - Remove the `/native` accordingly.
    - Uncomment the web features accordinly.
- In `App.tsx` add (replace the `<div></div>`):
```javascript
import { Themed } from 'theme';
<Themed>...existing app</Themed>
```

- Webapp / App:
    - Run `npm install --save styled-components @types/styled-components` (this type should be installed without devDependency to make VSCode IntelliSense work. Also make sure react, react-dom, react-native and its @types are updated to the latest version).

- Website: 
    - Check [docs](https://www.gatsbyjs.org/docs/styled-components/).
    - Run `npm install --save gatsby-plugin-styled-components styled-components babel-plugin-styled-components`.


## Add Button with Variant

- In `Dummy.tsx` add the code:
```javascript
import Button from '@<projectname>/ui/{app|web}';
<Button variant="primary">Click</Button>
```

## Add App Shell

- Copy/paste from *Project Alpha* the `withAppShell.tsx` Higher Order Component into `src`.
- Move the `<Header />` from `App.tsx` into `<header></header>` of `withAppShell.tsx`.
- Add to `Dummy.tsx` the lines:
```javascript
import withAppShell from './withAppShell';
export default withAppShell(Dummy);
```
