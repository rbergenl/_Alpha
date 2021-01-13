# Icons

## Add to UI Project

-> For monochromatic icons, use Icomoon.
-> For multicolor icons, use react-native-svg.
    -> Best approach is to convert SVG to React Components with `npx @svgr/cli --native --typescript --svgo-config "{ \"plugins\": [ {\"convertPathData\": false, \"removeViewBox\": false, \"removeDimensions\": true } ] }" [-d out-dir] [src-dir]`.

- Get an icon in Figma:
    1. In Figma open the menu and search for `Iconify`.
    2. Alternatively, find an icon at https://thenounproject.com/. Via Element Inspector, open the base64 in a new tab and save to svg. Then import that file into Figma and resize the frame to 16x16.
    
- Exporting SVG's from Figma:
    1. Select the layer of the icon and *right click > copy/pase > copy as svg*. Paste the contents into a new file `src/icons/<iconname>.svg`.
    2. Alternatively, select the group/frame and in the right menu export as svg in `export` section.

## Use in Frontend
- App:
    - View the [docs](https://docs.expo.io/guides/icons/) 
    - Is installed by default and can be used like `import { Ionicons } from '@expo/vector-icons'`.
    - Find icons via this [directory](https://expo.github.io/vector-icons/)

## SVG

- In *Figma* open the *App* file, then find a *Layer* which has an *Arrow Back* icon.
- Select the layer of the icon and *right click > copy/pase > copy as svg*.
- Paste the contents into a new file `src/theme/icons/arrow-back.svg`.
- In `Dummy.tsx` add the line `import arrowBack_icon from 'theme/icons/arrow-back.svg';` and replace the word `Click` with `<img src={arrowBack_icon} alt="arrow back icon" />`.
