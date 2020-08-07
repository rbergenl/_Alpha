# Add basic documentation

- Run `git checkout -b docs`
- From *Project Alpha* copy/paste the `README.md`. Rename an already existing readme file (e.g. `README_cra.md`).
- Fom *Project Alpha* copy/paste the `CONTRIBUTING.md` when applicable.
- From *Project Alpha* copy/paste the `docs/` folder when applicable (which contains an architecture diagram).
- Run `git add . && git commit -m "add docs" && git push --set-upstream origin docs`.
- In Gitlab at the Repo go to *Repository > Compare*. Select `docs` as source and `develop` as target and first click *Compare* then click *Create merge request*. Then add to the description the text `Closes #3` and click *Submit merge request*.
- Click the green *Merge* button while *Delete source branch* is selected.
- Refresh this page to see the issue being closed.
- Run `git checkout develop && git pull && git branch -d docs`.
