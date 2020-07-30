# Add .Pre:Audit

- Run `npm install --save-dev npm-audit-resolver`.
- Add to `package.json` the script `"audit": "check-audit",`.
- In case of an issue run: `npx resolve-audit`.
