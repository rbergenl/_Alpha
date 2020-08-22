# Add Error Reporting
- Sentry

## Setup integration between Sentry and Gitlab

- In Sentry create a project and follow the installation instructions.
- In *Settings > Account > Notifications* set _Weekly reports_ to _off_.
- Setup integration between Sentry and Gitlab. Make sure previously created Gitlab project is in a Group.
  - In Sentry go to *Settings > Integrations > Gitlab > New Installation*.
  - Follow the instructions.
- To mark an issue as resolved use in the commit message `Fixes ADMIN-1`.

- App:
    - Check the [docs](https://docs.expo.io/guides/using-sentry/).
