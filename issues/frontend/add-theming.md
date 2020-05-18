# Add Theming

> First setup the *UI* repo so that a *Base Theme* is available.

- Run `npm install --save-dev git+ssh://git@<username>.gitlab.com:<groupname>/ui.git#master`.
- In the *UI* repo run `npm link` and then in the target repo run `npm link @<projectname>/ui` (this allows to use the local repo to be used for rapid development).
- Run `npm install styled-components`.
- Run `npm install --save-dev @types/styled-components`.
- Copy/pase from *Alpha Project* the `theme` folder into `src`.
- In `App.tsx` add
```javascript
import { ThemeProvider, themeLight } from 'theme';
<ThemeProvider theme={themeLight}></ThemeProvider>
```
