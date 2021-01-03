# Design

Get started with your team's design system by creating libraries of shared colors, styles, and components.
What is already setup for you initially:
    - Two files: `Website v1` and `App v1`.
    - Both files contain the pages:
        - A page `UI Components` containing mobile and desktop components to be used in the mobile and desktop pages containg prototypes.
            - The page(s) containing a prototype should not create components themselves, but should all come from the *Shared Components* page.
            - The list is alphabetically ordered per mobile/desktop.
            - A component always has a state *Primary* as a subgroup. If applicatiable, other states are grouped in the component as well.
        - A page `Bootstrap Original` containing all default bootstrap components, to be copy/pasted as starting building block for creating shared components.
    - The file *Website v1* contains specifically a page `Mobile Prototype` containing the mobile prototype and a page `Desktop Prototype` containing the desktop prototype, both with basic components and flows:
            - Navigation
            - Hero
            - Footer
            - Blog
            - Product
    - The file *App v1* contains specifically a page containing the mobile prototype with basic components and flows:
            - LoggedOut/Register/Login/ForgotPassword
            - Infinite List with Overlay and Search
            - Chats and Individual Chat
            - User Profile
            - Settings with RemoveAccount
    - The *Frame* for mobile prototypes is *iPhone 11 Pro* (375x812), which is also the *Prototype Settings*.
    - The *Frame* for desktop prototypes is *Macbook Pro* while the *Prototype Settings* is *none* since the preview is actually on a desktop.

The naming convention is as following:
    - Texts are named `App/HeadingOne` or `Website/HeadingOne`.
    - Colors are named `Text/Light/Primary` or `Background/Dark/Secondary` (first slashes are the groupname, the last one the actual colorname).

## Decide on initial Fonts and Color Scheme
- Choose a Font from [Google Fonts](https://fonts.google.com). Generally native apps use *Roboto* and for the web is commonly used *Avenir* or *Helvetica Neue*.
- Store the decisions in [Google Keep](https://keep.google.com/) with the tag `ux` based on this example:
```
[title] Fonts
Apps: Roboto
Website: Avenir
Webapp: Helvetica Neue
```
- Use [this tool](https://coolors.co/) to generate a Color Pallete with 5 colors.
- Store the decisions in [Google Keep](https://keep.google.com/) with the tag `ux` based on this example:
```
[title] Colors
[image] screenshot of the chosen colors
QueenPink = e2c2c6
UnbleachedSilk = ffe5d4
LaurelGreen = bacdb0
DarkSkyBlue = 96bdc6
SpanishCarmine = ca2e55
BrandPrimary = DarkSkyBlue
BrandSecondary = QueenPink
Accent = SpanishCarmine
Neutral = UnbleachedSlik
```

## Setup Figma

- Login to Figma and at bottom left click `New Team`. Give it the name of the project.
- Go to *Plugins* and install the popular plugins:
    - *Unsplash* (to insert beautiful images)
    - *Iconify* (to have all kinds of icons)
    - *Content Reel* (to have texts and avatars)
    - *Dark Mode Switcher* (select a frame and switch to colors based on `/light` or `/dark` in the color name).

## Create Design System

- Click in the left navigation on `<Teamname>`.
- Then click on the project `Design System`.
- Open the file `<Teamname>'s Team Colors`.
- Rename the file to `<Teamname>'s Team Styles`.
- Rename the page to `Styles`.
    - Colors:
        - Remove all the elements from the page.
        - Add an `Iphone 11 Pro` frame onto the page and give it a name `App Light`.
        - Add a `Rectangle` onto the frame, rename the layer to `Background/Light/Primary` and give a *radius* of 3. Also select it in the *Layers* navigation and choose *Group Selection* with the name `Colors`.
        - Give the rectangle a color and *Fill > Style > Create style* with the same name as the layer.
        - Copy/pase the frame and rename it to `App Dark` and change the *Fill Color* to black.
        - Click the *Rectangle* and detach the style.
        - Change the color to more light and *Fill > Style > Create style* with name `Background/Dark/Primary` also rename the layer the same way.
        - Add an `Macbook Pro` frame onto the page and give it a name `Website` (currently a website does not have to be in dark mode).
        - Copy/paste the *Background/Light/Primary* layer and move it to the desktop frame.
        - Click in left menu on `Assets`, then `Team Library` and click on `Publish 2 changes`.
    - Texts App:
        - Copy/paste the `Typography` section from *Bootstrap UI Kit* and set *Design > W* width to `375` Also change the *Design > H* height of the frame to make all content fit. And also select it in the *Layers* navigation and choose *Group Selection* with the name `Texts`.
        - Select `Heading 1` element and rename the layer to `App/HeadingOne`. Then change the font to the previously chosen font family and *Text > Style > Create style* with same name as the layer.
        - Also select the element and *Fill > Style > Create style* with the name `Text/Light/Primary`.
        - Copy/paste the element onto the *App Dark* frame and change the color to more light. Then again *Fill > Style > Create style* with the name `Text/Dark/Primary`.
        - Click in left menu on `Assets`, then `Team Library` and click on `Publish 3 changes`.
    - Texts Website:
        - Copy/paste the `Typography` section from *Bootstrap UI Kit* and change the frame *Design > H* height to make all content fit. Also select all elements in the *Layers* navigation and choose *Group Selection* with the name `Texts`.
        - Select `Heading 1` element and rename the layer to `Website/HeadingOne`. Then change the font to the previously chosen font family and *Text > Style > Create style* with same name as the layer.
        - Click in left menu on `Assets`, then `Team Library` and click on `Publish 1 change`.

## Create Website Prototype

- Click in the left navigation on your teamname.
- Then at the top right click `New Project`. Give the name `Website`.
- On the top right click on `Import` and choose `website-v1.fig`.
- Modify all `UI components` to meet the *Design System* standards.

## Create App Prototype

- Click in the left navigation on your teamname.
- Then at the top right click `New Project`. Give the name `App`.
- On the top right click on `Import` and choose `app-v1.fig`.
- Modify all `UI components` to meet the *Design System* standards.

## Use workflow to add new user flows

- Build on the existing prototypes in the workflow as described here:
    - Define **colors**, **text styles** and **effects** in `Design System`.
    - In the App or Website file, add a component to the `UI Components` page. This page contains a list with all components stacked onto each other for mobile and for desktop.
    - Style the component whilst using the branded colors, texts and effects.
    - Make the component for both mobile and desktop.
    - Use the component in the `Mobile Prototype` and `Desktop Prototype`.
    - The prototype is eventually used by developers to view the desired user flows and component styling and behaviour.

## Perform experiments for new features

TODO: expand on items below..
- Hotjar
- A/B Tests (Google Optimze or Optimezely) -> TODO: have one initial experiment already in base setup as example.