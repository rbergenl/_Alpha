# Create new repo

In the project folder run:
- Admin: `npx create-react-app <projectname>-admin --template typescript`.
- App: `expo init <projectname>-app --template expo-template-blank-typescript` (for creating a temporary expo project to test something out use `expo init --template bare-minimum`).
- Base: `mkdir <projectname>-base && cd <projectname>-base && npx cdk init --language typescript`.
- CICD: `mkdir <projectname>-cicd && cd <projectname>-cicd && touch .gitignore && git init && git add . && git commit -m "initial commit Closes #1, #2"`.
- CMS: `npx create-strapi-app <projectname>-cms --quickstart --no-run && cd <projectname>-cms && git init && git add . && git commit -m "initial commit"`.
- Mocks: `mkdir <projectname>-mocks && cd <projectname>-mocks && npm init --yes --scope @<projectname> && echo -e "/node_modules\n/dist\n.DS_Store" > .gitignore && git init && git add . && git commit -m "initial commit"`.
- UI: `mkdir <projectname>-ui && cd <projectname>-ui && git init && npm init --yes --scope @<projectname>/ui`.
- Webapp: `npx create-react-app <projectname>-webapp --template typescript`.
- Website: `npx gatsby new <projectname>-website`.
