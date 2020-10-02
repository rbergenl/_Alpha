# Business

## Initial Ownership

### Emailaddress

You need an email address to be able to create accounts for needed third party services. After deciding on a name and buying the domain, the email can be forwarded to this free and initial email address without being visible to others.
- Go to Google and create a new [account](https://accounts.google.com/signup) using the chosen name.
    - Use the projectname as firstname and lastname. You can change this data when transfering the account later.
    - Use the chosen name for the email address (if needed choose one suggested or search first for available usernames).
    - Use a password generator (LastPass) and save it in your personal and browser password manager. Save the password first before using it because it might get lost from the clipboard.
    - Leave phonenumber and alternate email address empty.
        - If you are required to enter a phonenumber it is because only 2 accounts per IP-address can be created. And only 5 accounts per phonenumber are allowed. A workaround is to create the account via the Gmail op on a mobile phone and then choose to *Skip* the phonenumber step.
    - Use 01-01-1970 as date of birth and gender *prefer not to say*.
    - Skip the screen *Get more from your number*
    - During Service Agreement, choose *More options* and disable all services.
    - From the overview `myaccount.google.com`, remove your lastname and phonenumber for privacy reasons; and at *Personalisation* set the language to English.
- Create an isolated business environment by opening Google Chrome browser: click on the top right profile icon and `add` new person. Login with the new Google Account and enable sync. Use this browser profile for all startup activities.

### Company Names

While working on the Startup you might come up with ideas for a Company Name, sometimes including a catchy Slogan. Store these in [Google Keep](https://keep.google.com/) with the tag `name`.

### Password Manager

All passwords for created accounts should be securely stored. An added benefit of using LastPass is an easy way to login to those accounts.
- Go to Lastpass and create a new [account](https://www.lastpass.com/).
- Signup with the project email. Also since your are logged into Google Chrome with the Google Account you can let it generate a password and have it stored in Chrome.
- Follow the instructions to install Lastpass as browser extension.
- Then login to that extension (you can find the password in Chrome > Settings > Passwords).
- Even though the LastPass Master Password is stored in the browser, still save it to your personal LastPass as a note or in [Google Keep](https://keep.google.com).
- Then login to [Gmail](https://gmail.google.com) and logout then login again to let Lastpass store that username/password.

### Accounts

For running and growing a startup you need different kind of tools for Business, Marketing, UX and Development. First open the user loggedin Chrome Browser and go to Bookmarks Manager > Import Bookmarks to import the `bookmarks.html` file. Then go to the following links to signup:
- Developer:
    - Login with Google Account at [Gitlab](https://about.gitlab.com/).
        - Optionally disable receiving emails at *Settings > Notifications*.
    - Login with Google Account at [Sentry](https://sentry.io/welcome/).
    - Signup with the project email at [Optimizely](https://www.optimizely.com/).
        - Click `create account` and enter the project email and country.
        - Follow the link in the registartion email to create a password.
- UX:
    - Login with Google Account at [Figma](https://www.figma.com/).
- CMS:
    - Signup with the project email at [Heroku](https://www.heroku.com/).
        - Select profession *Other* and Language is *NodeJS*.
    - Signup with the project email at [Atlas MLab Mongo](https://mlab.com/).
    - Signup with the project email at [Cloudinary](https://cloudinary.com/).
        - Generate a password with Lastpass and select primary interest as *Images and Video*.
- App:
    - Signup with the project email at [Expo](https://expo.io/signup).
        - Use the project email and name.
    - Signup for an Apple ID (used to let Expo create credentials to build an iOS app).
        - Go to [Apple Developer](https://developer.apple.com) website and click on `Account` to create a new one.
        - Fill the projectname as first and lastname and 01-01-1970 as date of birth.
        - Let LastPass generate a password for you.
        - The phonenumber is only used to securely login to the account (MFA)
        - (Old process) Set three security questions all with the projectname as answer each suffixed with a number 1, 2 3.
        - Confirm with the receive code in the email and then agree with the terms.

- Website (marketing):
    - Create an account at [**ReCaptcha**](https://www.google.com/recaptcha).
    - Signup with the project email at [**Mailchimp**](https://mailchimp.com/).
    - Signup with the project email at [**Crispchat**](https://crisp.chat/).
    - Signup with the project email at [**Formspree**](https://formspree.io/).
- Website (ecommerce):
    - Signup with the project email at [**Snipcart**](https://snipcart.com/).
    - TODO: Where to store product data??

## Minimum Viable Product

### Creditcard

With [Revolut](https://www.revolut.com/) you get a free bank account and a virtual creditcard. This card can be used to create accounts which require a creditcard (like AWS). The Revolut app is connected to your personal data. And the card is only used for accounts creation, where actual payment will not occur (like Mailgunner).
    - Install the Revolut app.
    - Enter the phonenumber, a password and the received code.
    - Enter your real name and address.
    - Verify with your passport.
    - Topup the account with €10. Sometimes a creditcard verification process takes $1. You can topup the account using Apple Pay or a direct bank transfer.

### Accounts (creditcard required)

- Signup with the project email at **Stripe**.
- Signup with the project email at **Mailgunner**.

### AWS Accounts

- You will create a root account and from that account you will create a Test and Production account.
    - Go to [AWS]((https://aws.amazon.com)). Click the button top right to Sign in and then click `Create a new AWS account`.
    - Choose *Professional* and enter your name, projectname, phonenumber, country, address, region, city and postal code. Full details are needed for creditcard verification.
    - Enter creditcard number, expiration date, your full name (In Revolut > Settings > Personal details) and use the provided address.
    - Follow the verify identity steps by entering your phonenumber again. If this fails, it is probably due to failed payment method verification:
        - Open the Revolut app and see a failed transaction from AWS. Make sure to topup Revolut account with €10.
        - Login to the AWS Console as the root user.
        - Go to the Billing Dashboard > Payment Details. For the creditcard click `verify`. If this does not work, click `edit` and make sure all details are entered and correct.
        - Do not forget to still finish the sign up steps: verify identity.
    - Select the support plan *Free*.

- Setup an AWS Organisation so you have two accounts, Test and Production.
    - Login as root user to console.aws.com.
    - Go to Organization and create a new account with email: `<projectname>+awstest@gmail.com`.
    - Note the account ID, then logout and go again to console.aws.com.
    - Login as root user (the provided email) to the noted account and `Forget password`.
    - Go to the emailbox and create a new password. This is the best practice to get started.
- For both AWS Accounts, create an Admin user.
- Go to *Billing* and set a Monthly Budget.
- TODO: set 'permission boundaries' deny ec2, ecs and billing (with budgets)

### Google Cloud Account

- TODO:
- Go to [Google Cloud Console](console.cloud.google.com).
- Setup the Preferences > Language to English and create Organisation (only with GSuite) with Billing and Budgets (not api quotas).
- Create a new Project with name `Projectname`.

### Apple Developer Program

- In order to publish an iOS app to the App Store you need to be registered as a Developer and be enrolled in the Developer Program (costs €99 per year).

## Name Decided

### Business Registration

TODO? where to do online business registration which will be accepted by Apple developer program and PayPal and printful. -> If at home is possible, just do that. If too much effort or expensive, Latvia has e-Residency (one time 190 euro and then 50 per month for service provider). Or get an office address for 5 euro per month in Amsterdam; and register the business on that address).
-> Registration of a BV (or LLC) does not require capital anymore. And no costs for accountant. Only cost is the Notary which can all digitally be completed with Power of Attorney.


### Accounts (name required)

- Signup with the project email at [Paypal](https://www.paypal.com/).
    - Use the signup button at the top right of the page.
    - Select `Business account`.
    - Enter the project email and the password.

### App Store

TODO: ??

### Play Store

TODO: ??

## Exit Strategy

TODO: where to place these decisions?
Goal # of users: ?
Goal $ of revenue: ?
Goal monthly % growth: ?
Transaction: ownership in exchange for shares or lump sum.

IPO:
    - https://www.binck.nl/kennis/artikeleducatie/educatie/wat-is-een-beursgang
    - https://www.banken.nl/bibliotheek/emissie
    - https://www.afm.nl/en/professionals/registers/meldingenregisters/goedgekeurde-prospectussen/details?id=738
    - https://www2.deloitte.com/content/dam/Deloitte/nl/Documents/audit/deloitte-nl-offerings-servicesbrochure.pdf
Merger & Acquisition: ..
Private Shares: ..?
