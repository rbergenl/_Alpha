# Add Navigator

Inspired by [React Navigation](https://reactnavigation.org/) different types of navigation can be identified:
- Tab Navigator
- Stack Navigator
- Drawer Navigator

## Getting Started

- Web:
    - Run `npm install react-router-dom @types/react-router-dom`.
    - Add to `App.tsx` the line `import { Switch, Route, BrowserRouter } from 'react-router-dom';`.
    - Replace the `<Dummy />` component with `<BrowserRouter><Switch><Route path="/home" component={Dummy} /></Switch></BrowserRouter>`. For App this should be with child component instead of render component `<Switch><Route exact path="/"><Dummy></Dummy></Route></Switch>`.

- App:
    - Read the [docs](https://reactnavigation.org/docs/getting-started).
    - Run `npm install @react-navigation/native`.
    - Run `expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view`.
    - Run `npx pod-install ios`.
    - Add to `index.js` the line `import 'react-native-gesture-handler';`.
    - Add the `App.tsx` the line `import { NavigationContainer } from '@react-navigation/native';` and `<NavigationContainer>{/* Rest of your app code */}</NavigationContainer>`. Also remove the `<View>` currently acting as app container.

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
