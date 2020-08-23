# Setup Initial CMS

> First follow the *Getting Started* steps in the repos `README.md`.

## Add User: Admin

> This user is allowed to manage *Content-Types* and *User Permissions* through the Strapi Admin Panel.
- Open the browser at `http://localhost:1337/admin`.
- Create a user with the name `Admin`, the password `Admin123@` and as email `<project-email>`.
- Add the credentials to LastPass.

## Add User: Editor

> This is a technical user for the Content API which is only allowed to manage *Content*.
- Open the browser at `http://localhost:1337/admin` and login as Admin.
- Add to Collection-Type User a new user with the name `Editor`, the password `Editor123@` and as email `editor_local+<project-email>`. Set the role to `Authenticated` and enable `Confirmed`.

## Add User: Website

> This is a technical user for the Content API which is only allowed to read *Content*.
- Open the browser at `http://localhost:1337/admin` and login as Admin.
- Add to Collection-Type User a new user with the name `Website`, the password `Website123@` and as email `website_local+<project-email>`. Set the role to `Public` and enable `Confirmed`.

## Add Api and Components:

> The fields `created_at` and `updated_at` are added to saved content automatically and is not needed to add to the model.
> The model for *Page* is based on [Wordpress API](https://developer.wordpress.org/rest-api/reference/pages/#create-a-page).
> The model for *Product* is based on [Woocommerce API](https://woocommerce.github.io/woocommerce-rest-api-docs/#product-properties).
- Copy/paste from *Alpha* project the folders `api` and `components`.

## Set Roles & Permissions

- Go to the *Roles & Permissions* plugin to edit the role *Authenticated*. Under *Application* give this role all permissions for each Content-Type.
- Go to the *Roles & Permissions* plugin to edit the role *Public*. Under *Application* give this role only *find and findOne* permissions for each Content-Type.

## Add Content

- Run `npx strapi install graphql`.
- Start Strapi.
- Open browser at `http://localhost:1337/graphql`.
- Authenticate the user *Editor* as described in `README.md`.
- In the GraphQL Playground set HTTP-Headers: `{ "Authorization": "Bearer <JWT_TOKEN>" }`.
- Copy the content from *Alpha Project* file `strapi-content-seed.graphql`.
- Paste the content in the GraphQL Playground and click the play button.
