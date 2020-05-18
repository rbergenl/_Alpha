# Create new repo

In the project folder run:
- Admin: `npx create-react-app <projectname>-admin --template typescript`.
- App: `expo init <projectname>-app --template expo-template-blank-typescript`.
- Base: `mkdir <projectname>-base && cd <projectname>-base && cdk init --language typescript`.
    - Modify the name in `package.json` to reflect the scope `@<projectname>/base`.
    - Remove the `bin` key from `package.json` since the reference to Typescript file fails when installing this repo in other projects.
  ],
- CICD: `mkdir <projectname>-cicd && cd <projectname>-cicd && touch .gitignore && git init && git add . && git commit -m "initial commit"`.
- CMS: `npx create-strapi-app <projectname>-cms --quickstart --no-run && cd <projectname>-cms && git init && git commit -am "initial commit"`.
- Mocks: `mkdir <projectname>-mocks && cd <projectname>-mocks && npm init --yes --scope @<projectname> && echo -e "/node_modules\n/dist" > .gitignore && git init && git add . && git commit -m "initial commit"`.
    - Modify the name in `package.json` to reflect the scope `@projectname/mocks`.
- UI: `mkdir <projectname>-ui && cd <projectname>-ui && git init && npm init --yes --scope @<projectname>/ui`.
    - First modify the name in `package.json` to reflect the scope.
    - App:
        - `expo init app --template expo-template-blank-typescript`.
        - `cd app && rm -r .git`.
        - `npm install native-base`.
    - Web:
        - `npx create-react-library` and give the answers: `web ui-web <projectname> <projectname>/web MIT npm typescript`.
    - TODO: ?? This one, or the one above? Web:
        - `npx create-react-app web --template typescript`.
        - `cd web && rm -r .git`.
        - `npm install react-bootstrap bootstrap`.
    - Theme: 
        - `mkdir theme && npm init --yes && echo "node_modules" >> .gitignore`.
- Webapp: `npx create-react-app <projectname>-webapp --template typescript`.
- Website: `npx gatsby new <projectname>-website`.
    - Modify in package.json `"name"` to reflect the actual name.
