
**CICD pipeline**
1. [Setup pipeline](#setup-pipeline)
2. [Expand pipeline](#expand-pipeline)

**Admin project**
1. [Add basic documentation](#admin-add-basic-documentation)
2. [Add basic features](#admin-add-basic-features)
3. [Create Dashboard page](#admin-create-dashboard-page)

**Website project**
1. [Add basic documentation](#website-add-basic-documentation)
2. [Add basic features](#website-add-basic-features)

# CICD pipeline

## Setup pipeline
- From *Project Alpha* copy/paste the folder `ci` and the file `.gitlab-ci.yml`.
- Make sure you are logged into the docker registry (explained at initial setup).
- Run `docker build -t registry.gitlab.com/<group>/<repo> .`
- Run `docker push registry.gitlab.com/<group>/<repo>`.
- Make sure the file `.gitlab-ci.yml` points `image` to the just pushed image.
- Git add, commit and push.

## Expand pipeline
Lint: eslint
Format: prettier
Unit test: jest
Functional test: cypress

# Admin project

## Admin: add basic documentation
- From *Project Alpha* copy/paste the `README.md`. Rename an already existing readme file (e.g. `README_cra.md`).

## Admin: add basic features (UI)
- Run `npm install git+ssh://git@<username>.gitlab.com:<groupname>/ui.git#master --save-dev`.
- Run `npm install styled-components`
- Add `<ThemeProvider>`.
- Add Theming dark/light mode.

## Admin: add basic features (Router)
- `npm install react-router-dom @types/react-router-dom`
- Create `Router.tsx`
- Create `Routes.tsx`
- Create `RoutePrivate.tsx`
- Add `<Router>` to `app.tsx`

## Admin: add basic features (Apollo)
- State Management with React Context, Hooks and Apollo.

## Admin: create Dashboard page
Create a page `dashboard` which displays AWS CloudWatch Widgets as images.

# Website project

## Website: add basic features
- Add Typescript plugin: https://www.gatsbyjs.org/packages/gatsby-plugin-typescript/
- Add Contentful plugin: https://www.gatsbyjs.org/packages/gatsby-source-contentful/?=
- use a `.env` file for the api keys.
