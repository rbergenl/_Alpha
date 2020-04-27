# UX

Get started with your team's design system by creating libraries of shared colors, styles, and components.
What is already setup for you initially:
    - Two files: `Website v1` and `App v1`.
    - Both files contain the pages:
        - A page `Shared Components` containing mobile and desktop components to be used in the mobile and desktop pages containg prototypes (the prototypes should not create components themselves, but should all come from the *Shared Components* page).
        - A page `Bootstrap Original` containing all default bootstrap components, to be copy/pasted as starting building block for creating shared components.
    - The file *Website v1* contains specifically a page `Mobile` containing the mobile prototype and a page `Desktop` containing the desktop prototype, both with basic components and flows:
            - Navigation
            - Hero
            - Footer
            - Blog
            - Product
    - The file *App v1* contains specifically a page containing the mobile prototype with basic components and flows:
            - Login/Register/Logout
            - User Preferences

## Workflow
The workflow for working in Figma is:
    - Define **colors**, **text styles** and **effects** in `Design System`.
    - In the App or Website file, add a component to the `Shared Components` page. This page contains a list with all components stacked onto each other for mobile, and for desktop.
    - Style the component whilst using the branded colors, texts and effects.
    - Make the component for both mobile and desktop.
    - Use the component in the `Mobile Prototype` and `Desktop Prototype`.
    - The prototypes is eventually used by developers to view the desired user flows and component styling and behaviour.

## Setup Figma
- Login to Figma and at bottom left click `New Team`. Give it the name of the project.

## Fonts
- Choose a Font from [Google Fonts](https://fonts.google.com). Generally apps use *Roboto* and websites use *Avenir*.

## Design System
- Click in the left navigation on your teamname.
- Then click on the project `Design System`.
- Open the file `<Teamname>'s Team Colors`.
    - Rename the file to `<Teamname>'s Team Styles`.
    - Rename the page to `Colors`.
        - Add a new color:
        - Add a new color (Give it a style name `Brand Primary`).
        - Click in left menu on `Assets` and then `Team Library`. 
        - Click on `Publish 1 change`.
    - Add a new page with name `Text App`.
        - Select the previously chosen font family.
    - Add a new page with name `Text Website`.
        - Select the previously chosen font family.
        - Copy/paste the `Typography` section from *Bootstrap UI Kit*.

- TODO: import basic wireframe (website) and basic flows (apps)
- TODO: Add Material UI Kit.
- TODO: Add iOS UI Kit.
- TODO: Add Basic Flows to App and Website (as described above).

## Website Prototype
- Click in the left navigation on your teamname.
- Then at the top right click `New Project`. Give the name `Website`.
- On the top right click on `Import` and choose `website-v1.fig`.
- Build on the existing prototype in the workflow as described above.

## App Prototype
- Click in the left navigation on your teamname.
- Then at the top right click `New Project`. Give the name `App`.
- On the top right click on `Import` and choose `app-v1.fig`.
- Build on the existing prototype in the workflow as described above.
