# Startups

**Congratulations on getting started with a Startup!**

TODO:
- create a `.gitlab-ci.yml` template which performs all required cicd steps. Also check here for more steps and industry standards: https://docs.gitlab.com/ee/topics/autodevops/
- add `install` instructions for each developer tool (npm, docker, etc.).
- create `contentful-seed.json` for initial content (homepage, about us, etc.). (TODO: or should be Strapi?)
- process the Planty Base docs.
- create in all apps the basic flows `User: login/register/profile/preferences`, and `Ecommerce: products/cart/checkout` (add these tasks to issues-seed).
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
To get started, without any hurdles of deciding on a name, needing a creditcard or what to do exactly, start with these necessary steps:

### Working Title
- Go to Google and search for Dinosaur names. Pick one.
- Create new folder in `Startups` with that name as projectname.
- Make sure to follow all instructions in [`BUSINESS.md`](docs/BUSINESS.md):
    - Emailaddress.
    - Password Manager.
    - Creditcard.
    - Accounts.

## 2. Initial Setup

### Business
- TODO: create initial dashboards for business in Google Data Studio (Users, Growth, Financial, Features [analytics, hotjar]). -> users: paid, registered, activated, loggedon, oneTimeUsage, fiveTimeUsage.

### UX
- In Figma, import a Material UI Kit, an iOS UI Kit and a Bootstrap UI Kit.
- In Figma, import the basic flows.

### Developer
- In Gitlab create a new Group with name `<Projectname>`.
- Make sure to follow all instructions in [`DEVELOPER.md`](docs/DEVELOPER.md):
    - Install Developer Tools.
    - Initialize a NodeJS version
    - Setup access to new Git Repository
    - Setup access to new Docker Registry
    - Setup integration between Sentry and Gitlab
- Do the following for each project: admin, app, base, ui, webapp and website:
    - Create a new *blank* project with name `<Reponame>` in the Gitlab Group.
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

## 4. Creditcard required

### Developer
- You will create a root account and from that account you will create a Test and Production account.
    - Go to [AWS]((https://aws.amazon.com)). Click the button top right to Sign in and then click `Create a new AWS account`.
    - Choose *Professional* and enter your name, projectname, phonenumber, country, address, region, city and postal code. Full details are needed for creditcard verification.
    - Enter creditcard number, expiration date, your full name (In Revolut > Settings > Personal details) and use the provided address.
    - Follow the verify identity steps by entering your phonenumber again. If this fails, it is probably due to failed payment method verification:
        - Open the Revolut app and see a failed transaction from AWS. Make sure to topup Revolut account with €10.
        - Login to the AWS Console as the root user.
        - Go to the Billing Dashboard > Payment Details. For the creditcard click `verify`. If this does not work, click `edit` and make sure all details are entered and correct.

- Setup an AWS Organisation so you have two accounts, Test and Production.
    - Login as root user to console.aws.com.
    - Go to Organization and create a new account with email: `<projectname>+awstest@gmail.com`.
    - Note the account ID, then logout and go again to console.aws.com.
    - Login as root user (the provided email) to the noted account and `Forget password`.
    - Go to the emailbox and create a new password. This is the best practice to get started.
- For both AWS Accounts, create an Admin user.
        
- Add Auth, Api and Storage for ‘base’
- Add Hosting and publish for ‘admin’, ‘webapp’ and ‘website’
- Add Payment Providers:
    - PayPal
    - Stripe

## 5. Name decided

### Business
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
- Give credentials to the Password Manager.
- Remove all stored credentials from Google Chrome.
- Google Account:
    - myaccount.google.com - change name, phonenumber, country, date of birth.
- AWS Accounts:
    - In all accounts: change owner name, phonenumber, country, address, region, city and postal code and payment method.
- Paypal account:
    - Legal first name and last name. Business name, phonenumer, address, postal code and city.
    - Type of business 'particulier' and keyword 'zakelijke dienstverlening'.
    - Creditcard afschrift: projectname
    - Personal details: date of birth, nationality.
- Change creditcard in:
    - Paypal
    - Stripe
    - Mailgunner
- Cancel used Revolut creditcard.
