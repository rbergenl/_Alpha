# Website

React Gatsby website for legal and marketing purposes.

## URLS

- Localhost (npm run develop): http://localhost:8000
- Localhost GraphQL: http://localhost:8000/___graphql
- Localhost Public (npm run serve): http://localhost:9000
- Access Preview via: https://<projectname>-website.herokuapp.com/.
- Access Live via: https://www.domain.app (website should be hosted on subdmain `www`).

## Development Tips

- To start developing, first run `npm run codegen`.
- To locally test a production build, first run `npm run build` (optionally with `:test-env`), and then run `npm run serve`.
- After adding a new Content-Type to the CMS do not forget to add Permissions, and the type name to plugin options in `gatsby-config.js`.
- Keep the GraphQL Types generator running while developing `npm run codegen -- --watch`.

## Layouts

- By default Gatsby generates a page with its URL based on the files in `src/pages` (so `src/pages/about.js` becomes that page at `/about`).
- All pages should be wrapped with the `<Layout>` component.
- The `src/components/layout.js` already defines a default website layout with a `<header>`, `<main>` and `<footer>`.
- Pages can be created using `gatsby-node.js` which should use a page template from `src/templates`.

## Multilingual

- If domain is `.com` the default language is `en-US` and paths are not prefixed with language code. If domain is `.nl` the default language is `nl-NL`. When the user uses a `Location Switcher` it is then added as snake_case prefix to the path `www.domain.com/nl_nl/page`. The `<link hreflang>` should be set, with `x-default` pointing to the base language page.

## Header

- Logo
- Main links
- Language switch

## Footer

### Oneliner

- Check [docs](https://www.orbitmedia.com/blog/website-footer-design-best-practices/)
- Copyright: to protect again plagiarism (with year auto increment).
- Privacy: It typically links to a page explaining what information the website collects, how it’s stored and how it might be used. For most websites, it’s about tracking (Analytics and remarketing), form submissions and email signups.
- Terms: The "terms of use" explain what the visitor agrees to by visiting the website (like a disclaimer).
- Sitemap: link to an HTML version of sitemap.xml for crawlers.
- Contact: link to contact page with a form (no emailaddress).
- Employee login link.
- Press: link to press kit.
- Blog: link to the blog posts overview (a post is published by a person).
- FAQ: link to Frequently Asked Questions.

### Fat Footer

- Navigation: like a mega-menu, but even more clear/focussed.
- Newsletter signup.
- Social media icons: not in the header but as a last catch at the bottom.

## Contact Form

- Check [docs](https://www.gatsbyjs.org/docs/building-a-contact-form/.
- Also include reCaptcha.
- TODO

## Newsletter

- Check [docs](https://www.gatsbyjs.org/packages/gatsby-plugin-mailchimp/).
- TODO

## Chatbot

- Check [docs](https://www.gatsbyjs.org/packages/gatsby-plugin-crisp-chat/).
- TODO

## Feedback Widget

- TODO: (check https://github.com/jlengstorf/gatsby-feedback-widget/).
- Also include reCaptcha.

## Blog

- TODOD: add amp to blog (gatsby amp plugin?).

## Email

https://sendgrid.com/pricing/ (100/day for free)
