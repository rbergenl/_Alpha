# Building Content API

## Models

- Check the [docs](https://strapi.io/documentation/v3.x/concepts/models.html#concept).
The CMS exposes content via an Api. The Api has routes which return a JSON based on a model.
For example a `page` is a content-type. And a page model is composes of fields and components which themselves are a content-type as well, for example `hero`.
Add a new content-type via the CLI with command `npx strapi generate:api <content-type> <attributes>`.

## Roles & Permissions

After adding a new route to the api with `npx strapi generate:api <content-type> <attributes>` it is required to set the approriate permissions for that content type.
- Login to the Strapi Admin system.
- Go to Roles & Permissions:
    - Go to the role *Public* and give this role only *count, find and findOne* permissions for each Content-Type.
    - Go to the role *Authenticated* and give it all permissions for each Content-Type.
