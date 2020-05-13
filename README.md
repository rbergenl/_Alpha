# Startups

TODO:
- have these building blocks ready: 1) Users graph in Data Studio with Data from Analytics. 2) A first feature with AB experiment. 3) The initial website via CMS. 4) Initial designs in Figma.
- check https://www.integromat.com/en/integrations/google-data-studio/revolut
- check https://www.outsystems.com/blog/posts/ab-testing-mobile-apps-google-optimize/
- process the Planty Base docs (already copy in alpha/base).
- create in all apps the basic flows `User: login/register/profile/preferences`, and `Ecommerce: products/cart/checkout` (add these tasks to issues-seed).
- make sure to use correct `@auth` usage in schema and resolvers (least privilege).
- for issue `add auth`, use `exports.js` from `base`, and add a mock Cognito Api. Also set admin/user password via config, via ssm.
- check how to do `a/b testing` and `ecommerce`: https://www.gatsbyjs.org/docs/ab-testing-with-google-analytics-and-netlify/

**Congratulations on getting started with a Startup!**

It is possible to have a Minimum Viable Product ready on **day 1**. In short this means you have a website which points to your native app, has a login for users on the web and for an admin on the web. Publishing the apps to the Stores and putting the website live can be done later. This means deciding on a name can also be done later. It might be difficult to begin because you don't know where to start. This guide helps to make the first steps. To be clear: you do not need a final name from the beginning and you can have an MVP ready without paying a dime.

1. [Initial Ownership](#1-initial-ownership)
2. [Initial Setup](#2-initial-setup)
3. [Minimum Viable Product](#3-minimum-viable-product)
4. [Name decided](#4-name-decided)
5. [Growth](#5-growth)
6. [Ownership Transfer](#6-ownership-transfer)

> See [these diagrams](./docs/OVERVIEWS.md) for an overview of what is provided.

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
    - Decide on initial Color Scheme and Fonts.
    - Setup Figma.
    - Create Design System.

### Marketing

- Make sure to follow these instructions in [`MARKETING.MD`](docs/MARKETING.md):
    - Setup Google Marketing Platform.
    - Create Google Data Studio reports.

### Developer

- In Gitlab create a new Group with name `<Projectname>`.
- Make sure to follow these instructions in [`DEVELOPER.md`](docs/DEVELOPER.md):
    - Install Developer Tools.
    - Initialize a NodeJS version.
    - Setup access to new Git Repository.
    - Setup access to new Docker Registry.
    - Setup access to Heroku.
    - Setup integration between Sentry and Gitlab.
- Do the following for each project: admin, app, base, cicd, cms, mocks, ui, webapp and website:
    - Create a new *blank* project with name `<Reponame>` in the Gitlab *Group*.
    - In the *Alpa Project* run `node issues <reponame>` to generate an `gitlab-issues-seed-<repo>.csv` file. This can be imported at the *Issues* section in the Gitlab Repository. Follow the instructions in those issues to complete initial setup.

## 3. Minimum Viable Product

Build the MVP and bring it live (version Alpha):

### Business

- Make sure to follow these instructions in [`BUSINESS.md`](docs/BUSINESS.md):
    - Creditcard.
    - AWS Accounts.
    - Apple Developer Program.
    - Accounts (creditcard required).

### Marketing

- Make sure to follow these instructions in [`MARKETING.MD`](docs/MARKETING.md):
    - Add Minumum Viable Product features.

### UX

- Make sure to follow these instructions in [`UX.MD`](docs/UX.md):
    - Create Website Prototype.
    - Create App Prototype.
    - Use workflow to add new user flows.

### Developer

> **AWS Account required**

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
- Set Marketing Goals and perform Analysis on them.

### Developer

- Build features by using the *Issue Tracking* in *Gitlab* and performing an A/B experiment for each feature.
- Grow the team and grow the product using concepts from [Basecamp Shape Up](https://basecamp.com/shapeup).

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
