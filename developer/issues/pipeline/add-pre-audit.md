# Add .Pre:Audit

- Run `npm install --save-dev npm-audit-resolver`.
- Add to `package.json` the script `"audit": "check-audit",`.
- In case of an issue run: `npx resolve-audit`.

# Add Documentation

- Create/update file `CONTRIBUTING.md` with the text:
```markdown
## Auditing

- Run `npm run audit` to check audit issues.
- Run `npm audit fix` to fix audit issues.
- If any audit issues remain, those are most likely due to issues in dependencies of this projects dependencies. To resolve those, run `npx resolve-audit` and choose to `fix` or `ignore` the issue.
- Run `npm ls <modulename>` to view more `details` and find the dependency usage(s). Then run `npm update --depth <depth> <modulename>`.
- Run `npm outdated` periodically. Then run the command `npm update` to make sure the red packages are updated to the *wanted* version.
- To update all packages including major versions, first commit all changes. Then run `npx npm-update-all`. Test to validate no breaking changes occured, otherwise revert to the latest commit with `git restore .`.
- Run `npm dedupe` after updating packages to remove any duplicates.
```