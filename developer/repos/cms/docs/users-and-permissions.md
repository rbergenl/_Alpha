# Users

## Add User: Admin

> This user is allowed to manage *Content-Types* and *User Permissions* through the Strapi Admin Panel.
- Open the browser at `http://localhost:1337/admin`.
- Create a user with the name `Admin`, the password `Admin123@` and as email `admin_local+<project-email>`.
- Add the credentials to LastPass.

## Add User: Editor

> This is a technical user for the Content API which is only allowed to manage *Content*.
- Open the browser at `http://localhost:1337/admin` and login as Admin.
- Add to Collection-Type User a new user with the name `Editor`, the password `Editor123@` and as email `editor_local+<project-email>`. Set the role to `Authenticated` and enable `Confirmed`.

## Add User: Website

> This is a technical user for the Content API which is only allowed to read *Content*.
- Open the browser at `http://localhost:1337/admin` and login as Admin.
- Add to Collection-Type User a new user with the name `Website`, the password `Website123@` and as email `website_local+<project-email>`. Set the role to `Public` and enable `Confirmed`.

## Set Roles & Permissions

> Make sure to add Content-Types first (the `api` and `components` folder).

- Go to the *Roles & Permissions* plugin to edit the role *Authenticated*. Under *Application* give this role all permissions for each Content-Type.
- Go to the *Roles & Permissions* plugin to edit the role *Public*. Under *Application* give this role only *find and findOne* permissions for each Content-Type.

## Test Environment: Add Users & Permissions

- Start Strapi for Localhost Test.
- Go to the provided admin url and enter username `Admin`. For production let LastPass generate a password. Provide the email `admin_test+<project-email>`. And login.
- Add to Collection-Type User a new user with the name `Editor`, a LastPass generated password (stored as a note) and as email `editor_test+<project-email>`. Set the role to `Authenticated` and enable `Confirmed`.
- Add to Collection-Type User a new user with the name `Website`, a LastPass generated password (stored as a note) and as email `website_test+<project-email>`. Set the role to `Public` and enable `Confirmed`.
- Go to the *Roles & Permissions* plugin to edit the role *Authenticated*. Under *Application* give this role all permissions for each Content-Type.
- Go to the *Roles & Permissions* plugin to edit the role *Public*. Under *Application* give this role only *find and findOne* permissions for each Content-Type.
