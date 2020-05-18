# Initial setup UI

## Do Householding
- Run `npm install --save-dev typescript`.
- Run `npx tsc --init`.
- Enable in `tsconfig.json` the line `"declaration": true,`.
- Add to `package.json`:
```json
"build": "tsc --outDir dist"
```
- Run `echo "dist" >> .gitignore`.

## TODO
- Add a CSS Reset file (to be included by Webapp and Website):
    - Check [docs](https://meyerweb.com/eric/tools/css/reset/).
    - Add that example code to `reset.css`.