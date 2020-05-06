# Create new repo

In the project folder run:
- Admin: `npx create-react-app <projectname>-admin --template typescript`.
- App: `expo init <projectname>-app --template expo-template-blank-typescript`.
- Base: `mkdir <projectname>-base && cd <projectname>-base && cdk init --language typescript`.
- CICD: `mkdir <projectname>-cicd && cd <projectname>-cicd && touch .gitignore && git init && git add . && git commit -m "initial commit"`.
- CMS: `npx create-strapi-app <projectname>-cms --quickstart --no-run && cd <projectname>-cms && git init && git commit -am "initial commit"`.
- UI: `mkdir <projectname>-ui && cd <projectname>-ui && git init && npm init --yes --scope @<projectname>`.
    - First modify the name in `package.json` to reflect the scope.
    - App:
        - `expo init app --template expo-template-blank-typescript`.
        - `cd app && rm -r .git`.
        - `npm install native-base`.
    - Web:
        - `npx create-react-app web --template typescript`.
        - `cd web && rm -r .git`.
        - `npm install react-bootstrap bootstrap`.
- Webapp: `npx create-react-app <projectname>-webapp --template typescript`.
- Website: `npx gatsby new <projectname>-website`.
    - Modify in package.json `"name"` to reflect the actual name.
