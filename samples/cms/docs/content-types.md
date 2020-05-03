# Content Types

Working with a Content Management System requires knowledge of common concepts. These are described here.

## Roles & Permissions
After adding a new route to the api with `npx strapi generate:api <content-type> <attributes>` it is required to set the approriate permissions for that content type.
- Login to the Strapi Admin system.
- Go to Roles & Permissions:
    - Go to the role *Public* and give this role only *count, find and findOne* permissions for each Content-Type.
    - Go to the role *Authenticated* and give it all permissions for each Content-Type.

## Pages

## Components
