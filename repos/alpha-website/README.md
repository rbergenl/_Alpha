# Website

React Gatsby website for legal and marketing purposes.

## Layouts
- By default Gatsby generates a page with its URL based on the files in `src/pages` (so `src/pages/about.js` becomes that page at `/about`).
- All pages should be wrapped with the `<Layout>` component.
- The `src/components/layout.js` already defines a default website layout with a `<header>`, `<main>` and `<footer>`.
- Pages can be created using `gatsby-node.js` which should use a page template from `src/templates`.

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

### Fat Footer
- Navigation: like a mega-menu, but even more clear/focussed.
- Newsletter signup.
- Social media icons: not in the header but as a last catch at the bottom.

## Contact Form
- Check [docs](https://www.gatsbyjs.org/docs/building-a-contact-form/.
- TODO

## Newsletter
- Check [docs](https://www.gatsbyjs.org/packages/gatsby-plugin-mailchimp/).
- TODO

## Chatbot
- Check [docs](https://www.gatsbyjs.org/packages/gatsby-plugin-crisp-chat/).
- TODO

## Feedback Widget
- TODO: (check https://github.com/jlengstorf/gatsby-feedback-widget/)
