# Startups

TODO:
- have these building blocks ready: 1) Users graph in Data Studio with Data from Analytics. 2) A first feature with AB experiment. 3) The initial website via CMS. 4) Initial designs in Figma.
- setup CMS with Strapi on Heroku, mLab and Gatsby (and image assets where?)
- check https://www.integromat.com/en/integrations/google-data-studio/revolut
- check https://www.outsystems.com/blog/posts/ab-testing-mobile-apps-google-optimize/
- create a `.gitlab-ci.yml` template which performs all required cicd steps. Also check here for more steps and industry standards: https://docs.gitlab.com/ee/topics/autodevops/
- process the Planty Base docs (already copy in alpha/base).
- create in all apps the basic flows `User: login/register/profile/preferences`, and `Ecommerce: products/cart/checkout` (add these tasks to issues-seed).
- make sure to use correct `@auth` usage in schema and resolvers.
- for issue `add auth`, use `exports.js` from `base`, and add a mock Cognito Api.
- check how to do `a/b testing` and `ecommerce`: https://www.gatsbyjs.org/docs/ab-testing-with-google-analytics-and-netlify/

**Congratulations on getting started with a Startup!**

It is possible to have a Minimum Viable Product ready on **day 1**. In short this means you have a website which points to your native app, has a login for users on the web and for an admin on the web. Publishing the apps to the Stores and putting the website live can be done later. This means deciding on a name can also be done later. It might be difficult to begin because you don't know where to start. This guide helps to make the first steps. To be clear: you do not need a final name from the beginning and you can have an MVP ready without paying a dime.

1. [Initial Ownership](#1-initial-ownership)
2. [Initial Setup](#2-initial-setup)
3. [Minimum Viable Product](#3-minimum-viable-product)
4. [Name decided](#4-name-decided)
5. [Growth](#5-growth)
6. [Ownership Transfer](#6-ownership-transfer)

## 1. Initial Ownership
Start with these necessary steps:

### Working Title
- Go to Google and search for Dinosaur names. Pick one.
- Create a new folder in `Startups` with that name as projectname.

### Tools Signup
- Make sure to follow these instructions in [`BUSINESS.md`](docs/BUSINESS.md):
    - Emailaddress.
    - Password Manager.
    - Accounts.

## 2. Initial Setup
Follow up with laying the groundwork for the startup:

### UX
- Make sure to follow these instructions in [`UX.MD`](docs/UX.md):
    - Setup Figma.

### Marketing
- Make sure to follow these instructions in [`MARKETING.MD`](docs/MARKETING.md):
    - Setup Google Marketing Platform.

- TODO: create initial dashboards for marketing in Google Data Studio (Users, Growth, Financial, Features [analytics, hotjar]). -> users: paid, registered, activated, loggedon, oneTimeUsage, fiveTimeUsage.

### Developer
- In Gitlab create a new Group with name `<Projectname>`.
- Make sure to follow these instructions in [`DEVELOPER.md`](docs/DEVELOPER.md):
    - Install Developer Tools.
    - Initialize a NodeJS version.
    - Setup access to new Git Repository.
    - Setup access to new Docker Registry.
    - Setup access to Heroku.
    - Setup integration between Sentry and Gitlab.
- Do the following for each project: admin, app, base, cms, ui, webapp and website:
    - Create a new *blank* project with name `<Reponame>` in the Gitlab *Group*.
    - Import the `gitlab-issues-seed.csv` at the Issues section in Gitlab and follow those instructions when applicable.

## 3. Minimum Viable Product
Build the MVP and bring it live (version Alpha):

### Business
- Make sure to follow these instructions in [`BUSINESS.md`](docs/BUSINESS.md):
    - Creditcard.
    - AWS Accounts.
    - Apple Developer Program.
    - Accounts (creditcard required).

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
- A/B Tests (Google Optimze or Optimezely) -> TODO: have one initial experiment already in base setup as example.
- Figma: Create a Color Scheme and modify all base components to those brand colors.
- Figma: Modify existing flows to just created theme.
- Figma: Expand with new flows.

### Developer
**AWS Account required**
- Add Auth, Api and Storage for ‘base’
- Add Hosting and publish for ‘admin’, ‘webapp’ and ‘website’
- Add Payment Providers:
    - PayPal
    - Stripe

## 4. Name decided
Now that you are live it becomes important to decide on a name and build a brand (version Beta):

### Business
- Buy domain at https://domains.google/
- Create or update website pages: Home, About us, General Agreement, Investor, etc.

### Developer
- Setup Mailgunner
- Setup Gmail settings to be able to receive and sent email with new domain (https://medium.com/@jeremygale/how-to-setup-a-custom-domain-for-your-gmail-address-3e4b7c147306).
- Publish webapp - point DNS to CDN
- Publish app android - Play Store - or transfer ownership from gmail account to domain email.
- Publish app ios - App Store - or transfer ownership from gmail account to domain email.

### Marketing
- Create a *Press-kit*:
    - Professional photos
    - Professional video
    - A template news item

## 5. Growth
Go live with version 1 and grow to sell:

### Marketing
- Perform SEO:
    - Keyword research
    - Google Search Console
    - Google PageSpeed Insights
    - Linkbacks

### Developer
- Build features by using the *Issue Tracking* in **Gitlab** and performing A/B experiment for each feature.

### Business
- Create an Investor Pitch.

## 6. Ownership Transfer

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
