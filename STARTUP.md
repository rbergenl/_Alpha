# Startups
TODO:
- create `contentful-seed.json` for initial content (homepage, about us, etc.).
- create in all apps the basic flows `User: login/register/profile/preferences`, and `Ecommerce: products/cart/checkout` (add these tasks to issues-seed).
- create initial dashboards for business in Google Data Studio (Users, Growth, Financial, Features [analytics, hotjar]).
- create a `.gitlab-ci.yml` template which performs all required cicd steps.
- make sure to use correct `@auth` usage in schema and resolvers.
- add `install` instructions for each developer tool (npm, docker, etc.)
- check how to do `a/b testing` and `ecommerce`: https://www.gatsbyjs.org/docs/ab-testing-with-google-analytics-and-netlify/

1. [Initial Ownership](#1-initial-ownership)
2. [Initial Setup](#2-initial-setup)
3. [Minimum Viable Product](#3-minimum-viable-product)
4. [Creditcard available](#4-creditcard-available)
5. [Name decided](#5-name-decided)
6. [Growth](#6-growth)
7. [Ownership Transfer](#7-ownership-transfer)

## 1. Initial Ownership
To get started, without any hurdles of deciding on a name or what to do exactly, start with these necessary steps:

### Working Title
- Go to Google and search for Dinosaur names. Pick one.
- Create new folder in `Startups` with that name.

### Google Account
You need an email adress to be able to create accounts for needed third party services. After deciding on a name and buying the domain, the email can be forwarded to this free and initial email address.
- Go to Google and create a new [Account](https://accounts.google.com/signup) using the chosen name.
    - Use your real name. You can change this data when transfering the account later.
    - Use the chosen name for the email address (if needed suffix with a 1, 2, etc.).
    - Use a password generator and save it in your personal and browser password manager.
    - Verify with your real phonenumber.
    - Use your real date of birth and gender.
    - During Service Agreement, disable all services.
    - From the overview `myaccount.google.com`, remove your lastname for privacy reasons.

### Creditcard
You need a creditcard to be able to create/use accounts for some needed third party services.
- Go to https://n26.com N26 Creditcard (€100 required).

## 2. Initial Setup

### Tools
- UX:
    - Login with Google Account at **Figma**.
- Developer:
    - NVM
    - Docker
    - `npm install -g create-react-app`.
    - `npm install -g expo-cli`.
    - `npm install -g aws-cdk`.
    - `npm install -g gatsby-cli`.
    - Install the `Expo Client` app on your mobile phone.
- Technology:
    - Signup with the project email at [**Expo**](`https://expo.io/signup`).
    - Login with Google Account at **Gitlab**.
    - Login with Google Account at **Sentry**.
    - Login with Google Account at **Contentful CMS**.
    - Signup with the project email at [**Snipcart**](https://snipcart.com/)

### Business
- Setup initial administration > Google Drive > Sheets > From template > By Xero.

### UX
- In Figma, import a Material UI Kit, an iOS UI Kit and a Bootstrap UI Kit.
- Create a Color Scheme and modify all base components to those brand colors.
- Import the basic flows and modify it to decided theme.

### Technology
- Setup integration between your computer and Gitlab.
    - Run `ssh-keygen -t rsa -b 4096 -C "<GOOGLE_EMAIL>"`.
    - Save it to path `/Users/<username>/.ssh/<projectname>_gitlab`.
    - Run for both private and public key `chmod 0400 ~/.ssh/<ssh_key>`
    - Add to `~/.ssh/config` an entry:
        ```bash
        # <Projectname> GitLab
        Host <username>.gitlab.com
            Hostname gitlab.com
            PreferredAuthentications publickey
            IdentityFile ~/.ssh/<private_ssh_key>
        ```
    - Copy the public key into the SSH setting in Gitlab.
    - Create a file `.gitconfig` in the project folder:
        ```bash
        [user]
            name = <NAME>
            email = <EMAIL>
        ```
    - Edit the main `~/.gitconfig` to include the config for this project.
        ```bash
        [includeIf "gitdir:~/<PATH_TO_PROJECT>/"]
        path = ~/<PATH_TO_PROJECT>/.gitconfig
        ```
    - In Settings > Personal Access Token, create a new with the name `Docker` and the scope `api`. Save the token in a file `~/.docker/<projectname>_gitlab.
    - Run `docker login registry.gitlab.com --username <username> --password-stdin < ~/.docker/<projectname>_gitlab

- Setup integration between Sentry and Gitlab.
    - In Sentry create a project and follow the installation instructions.
    - Setup integration between Sentry and Gitlab. Make sure previously created Gitlab project is in a Group.
        - In Sentry go to Settings > Integrations > Gitlab > New Installation.
        - Follow the instructions.
    - To mark an issue as resolved use in the commit message `Fixes ADMIN-1`.

- Do the following for each project: admin, app, base, ui, webapp and website:
    - Create each repository in the project folder:
        - Admin: `npx create-react-app <projectname>-admin --template typescript`.
        - App: `expo init <projectname>-app --template expo-template-blank-typescript`.
        - Base: `mkdir <projectname>-base && cd <projectname>-base && cdk init --language typescript`.
        - UI: `mkdir <projectname>-ui && cd <projectname>-ui && git init && npm init --yes --scope @<projectname>`. Still modify the name in `package.json`.
            - App:
                - `expo init app --template expo-template-blank-typescript`.
                - `cd app && rm -r .git`.
                - `npm install native-base`.
            - Web:
                - `npx create-react-app web --template typescript`.
                - `cd web && rm -r .git`.
                - `npm install react-bootstrap bootstrap`.
        - Webapp: `npx create-react-app <projectname>-webapp --template typescript`.
        - Website: `gatsby new <projectname>-website`.
    - Version Control System:
        - In Gitlab create a new Group with name `<Projectname>`
        - In the Group create a new *blank* project with name `<Reponame>`.
        - In Settings > Notification > disable the notifications for the project.
        - In the local repository folder do:
            - `git remote add origin git@<username>.gitlab.com:<groupname>/<reponame>.git`
            - `git push --set-upstream origin master`
    - Issue Tracking:
        - Import the `issues-seed.csv` at the Issues section in Gitlab.

## 3. Minimum Viable Product

### Tools
- Marketing:
    - Login with Google Account at **Optimizely**

### Marketing
- Keyword Research
- Google Tag Manager
    - Universal Analytics
        - Add events to apps and website
- Hotjar
- A/B Tests
- Google Search Console

## 4. Creditcard available

### Tools
- Technology:
    - Create account for **AWS**.
    - Createa account for **Paypal**.
    - Create account for **Stripe**.
    - Create account for **Mailgunner**.

### Technology Staging
- AWS Account (creditcard required)
- Add Auth, Api and Storage for ‘base’
- Add Hosting and publish for ‘admin’, ‘webapp’ and ‘website’
- Add Payment Providers:
    - PayPal (creditcard required)
    - Stripe (creditcard and paypal required)

## 5. Name decided

### Business
- Do Business registration at Chamber of Commerce.
- Create website pages: About us, General Agreement, etc.

### Technology Live
- Buy domain (creditcard required) https://domains.google/
- Mailgunner (creditcard required)
- Setup Gmail settings to be able to receive and sent email with new domain
- Publish webapp - point DNS to CDN
- Publish app android - Play Store
- Publish app ios - App Store

### Marketing
- Create a *Press-kit*:
    - Professional photos
    - Professional video
    - A template news item

## 6. Growth
- Perform SEO:
    - Keyword research
    - Google Search Console
    - Google PageSpeed Insights
    - Linkbacks
- Build features by using the *Issue Tracking* in **Gitlab** and performing A/B experiment for each feature.

## 7. Ownership Transfer

### Exit Procedure
- Change creditcard in:
    - Google
    - AWS
    - Paypal
    - Stripe
    - Mailgunner
- Google Account:
    - myaccount.google.com - Change name, phonenumber, country, date of birth.
    - Give credentials and remove from your password manager(s).
- Cancel current N26 creditcard.
