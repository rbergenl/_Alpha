## Focus
- have these building blocks ready:
    1) Users graph in Data Studio with Data from Analytics.
    2) A first feature with AB experiment.
    3) The initial website via CMS.
    4) Initial designs in Figma.

## Reminders
- Docs: where in Issues is to add bookmark “expo project page”? Also modify “coverage” report bookmark name. And the “environments” strapi admin and website preview. And heroku mock-server.
- Docs: initial App - when using non expo library, use an If so that expo client keeps working. And only way “free” on a device is via Xcode.
- Find alternative to adding the SSH key as environment variable to the pipeline. (with using npm packages instead of git+ssh, this should bot be needed anymore)

## Other
- Investigate segment for personalization: https://segment.com/marketing/?ref=nav
- Investigate productboard for feature roadmap: https://portal.productboard.com/
- How to do multilingual website/cms? (when .nl domain, then default is dutch/euro and for each other language make specific).
- Optimize caching in Gitlab pipeline.
- Add Architecture images to Alpha/Samples/Docs (e.g. cms setup).
- check https://www.integromat.com/en/integrations/google-data-studio/revolut
- check https://www.outsystems.com/blog/posts/ab-testing-mobile-apps-google-optimize/
- create in all apps the basic flows `User: login/register/profile/preferences`, and `Ecommerce: products/cart/checkout` (add these tasks to issues-seed).
- make sure to use correct `@auth` usage in schema and resolvers (least privilege).
- check how to do `a/b testing` and `ecommerce`: https://www.gatsbyjs.org/docs/ab-testing-with-google-analytics-and-netlify/

# Intranet
- Create an intranet project and host it on an "internet web".
- Make a Contributing page and point each CONTRIBUTING.md file to this webpage.
- Make a Troubleshooting page and point Contributing > Debugging to this page.
- Make a Dashboard available for all employees.


- Process below security measures:
```
$ curl --head https://www.secure-website.nl/
HTTP/2 200
x-frame-options: sameorigin
content-security-policy: upgrade-insecure-requests;
pragma: no-cache
content-type: text/html;charset=UTF-8
x-content-type-options: nosniff
x-xss-protection: 1; mode=block
referrer-policy: same-origin
cache-control: no-cache
expires: Wed, 02 Sep 2020 13:00:07 GMT
date: Wed, 02 Sep 2020 13:00:07 GMT
strict-transport-security: max-age=15768000
```