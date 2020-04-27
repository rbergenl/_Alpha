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
    - The file *App v1* contains specifically a page containing the mobile prototype with basic components and flows:
            - Login/Register/Logout
            - User Preferences

## Setup Figma
- Login to Figma and at bottom left click `New Team`. Give it the name of the project.

## Design System
- Click in the left navigation on your teamname.
- Then click on the project `Design System`.
- Open the file `<Teamname>'s Team Colors`.
    - Rename the file to `<Teamname>'s Team Styles`.
    - Rename the page to `Colors`.
    - Add a new page with name `Text`.
    - 
    - Add a new color:
        - Add a new color (Give it a style name `Brand Primary`).
        - Click in left menu on `Assets` and then `Team Library`. 
        - Click on `Publish 1 change`.
- In the **Design System** select `Import` and choose `bootstrap-ui-kit.fig`.
    - Rename the page to `Original`.
    - Duplicate the page and name it `Branded`.
    - TODO: import basic wireframe (website) and basic flows (apps)
- Add Material UI Kit.
- Add iOS UI Kit.

## Website Prototype
- Click in the left navigation on your teamname.
- Then at the top right click `New Project`. Give the name `Website`.
- On the top right click on `Import` and choose `website-v1.fig`.
- In `Assets` open the `Library` and add a *Basic Flow: authentication*.

## App Prototype
- Click in the left navigation on your teamname.
- Then at the top right click `New Project`. Give the name `App`.
- On the top right click on `Import` and choose `app-v1.fig`.
- In `Assets` open the `Library` and add a *Basic Flow: authentication*.
