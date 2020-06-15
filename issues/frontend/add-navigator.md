# Add Navigator

Inspired by [React Navigation](https://reactnavigation.org/) different types of navigation can be identified:
- Tab Navigator
- Stack Navigator
- Drawer Navigator

## Getting Started
- Run `npm install react-router-dom @types/react-router-dom`
- Add to `App.tsx` the line `import { Switch, Route, BrowserRouter } from 'react-router-dom';`.
- Replace the `<Dummy />` component with `<BrowserRouter><Switch><Route path="/home" component={Dummy} /></Switch></BrowserRouter>`.

## Add NotFound
- Create `components/NotFound.tsx` with code:
```javascript
import React from 'react';
const Notfound = () => <h1>Not found</h1>;
export default Notfound;
```
- Add to `App.tsx` as last entry in the `<Switch>` the route `<Route component={NotFound} />` and import the component appropriately.

## Add TabNavigator
- Add to `withAppShell.tsx` the lines:
```javascript
import { Link } from 'react-router-dom';
import TabNavigator from 'theme/ui/TabNavigator';
import icon_home from '@<projectname>/ui/theme/dist/icons/home.svg';
import icon_profile from '@<projectname>/ui/theme/dist/icons/profile.svg';
<footer>
    <TabNavigator>
        <Link to="/home"><img src={ icon_home } alt="icon_home" /></Link>
        <Link to="/profile"><img src={ icon_profile } alt="icon_profile" /></Link>
    </TabNavigator>
</footer>
```
