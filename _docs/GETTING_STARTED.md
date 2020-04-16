# Startups

**Congratulations on getting started with a Startup!**

TODO:
- create a `.gitlab-ci.yml` template which performs all required cicd steps. Also check here for more steps and industry standards: https://docs.gitlab.com/ee/topics/autodevops/
- add `install` instructions for each developer tool (npm, docker, etc.).
- create `contentful-seed.json` for initial content (homepage, about us, etc.).
- process the Planty Base docs.
- create in all apps the basic flows `User: login/register/profile/preferences`, and `Ecommerce: products/cart/checkout` (add these tasks to issues-seed).
- create initial dashboards for business in Google Data Studio (Users, Growth, Financial, Features [analytics, hotjar]). -> users: paid, registered, activated, loggedon, oneTimeUsage, fiveTimeUsage.
- determine how to do initial setup for Figma with regards to UI frameworks and basic flows.
- make sure to use correct `@auth` usage in schema and resolvers.
- for issue `add auth`, use `exports.js` from `base`, and add a mock Cognito Api.
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
- Create new folder in `Startups` with that name as projectname.

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

### Creditcard / Bankaccount
You need a creditcard to be able to create/use accounts for some needed third party services.
- Go to https://n26.com N26 Creditcard (€100 required).

## 2. Initial Setup

### Accounts
- UX:
    - Login with Google Account at **Figma**.
    - Signup with the project email at [**Optimizely**](https://www.optimizely.com/).
- Developer:
    - Signup with the project email at [**Expo**](https://expo.io/signup).
    - Login with Google Account at **Gitlab**.
    - Login with Google Account at **Sentry**.
    - Login with Google Account at **Contentful CMS**.

### Business
- Setup initial administration > Google Drive > Sheets > From template > By Xero.

### UX
- In Figma, import a Material UI Kit, an iOS UI Kit and a Bootstrap UI Kit.
- In Figma, import the basic flows.

### Developer
- In Gitlab create a new Group with name `<Projectname>`.
- Make sure to follow all instructions in `DEVELOPER.md`:
    - Install Developer Tools.
    - Initialize a NodeJS version
    - Setup access to new Git Repository
    - Setup access to new Docker Registry
    - Setup integration between Sentry and Gitlab
- Do the following for each project: admin, app, base, ui, webapp and website:
    - Create a new *blank* project with name `<Reponame>` in the Gitlab Group.
    - In Settings > Notification > disable the notifications for the project.
    - Import the `issues-seed.csv` at the Issues section in Gitlab and follow those instructions when applicable.

## 3. Minimum Viable Product

### Accounts
- Marketing:
    - Login with Google Account at **Optimizely**

### Marketing
- Personas
- Keyword Research
- Google Tag Manager
    - Universal Analytics
        - Add events to apps and website
- Google Search Console
- Personalisation?
- Google Survey
- Chatbot

### UX
- Hotjar
- A/B Tests
- Figma: Create a Color Scheme and modify all base components to those brand colors.
- Figma: Modify existing flows to just created theme.
- Figma: Expand with new flows.

## Business
- Investor Pitch

## 4. Creditcard available

### Accounts
- Developer:
    - Signup with the project email at **AWS**.
    - Signup with the project email at **Paypal**.
    - Signup with the project email at **Stripe**.
    - Signup with the project email at **Mailgunner**.
    - Signup with the project email at [**Snipcart**](https://snipcart.com/)

### Technology Staging
- AWS Account
- Add Auth, Api and Storage for ‘base’
- Add Hosting and publish for ‘admin’, ‘webapp’ and ‘website’
- Add Payment Providers:
    - PayPal
    - Stripe

## 5. Name decided

### Business
- Do Business registration at Chamber of Commerce.
- Create website pages: Home, About us, General Agreement, Investor, etc.

### Developer
- Buy domain https://domains.google/
- Setup Mailgunner
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
