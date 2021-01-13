# Setup Initial UI

## Do Householding

- First modify the name in `package.json` to reflect the scope `@<projectname>/ui`.
- Run `echo "node_modules/" >> .gitignore`.
- Copy/pase from *Alpha Project* the folders `components`, `fonts`, `icons` and `theme`.
- Run `npm install --save-dev typescript`.
- Run `npx tsc --init`.
- Enable in `tsconfig.json` the line `"declaration": true,` and `"jsx": "preserve"`.
- Also add outside of the compiler options the lines `"exclude": ["node_modules", "**/__tests__/*", "demo-app", "demo-web"],`.
- Add to `package.json`:
```json
"scripts": {
    "clean": "rm -rf dist/",
    "build": "npm run clean && tsc --outDir dist && npm run copy",
    "build:watch": "npm run build && tsc --outDir dist --watch",
    "copy": "cp -r components fonts icons theme dist"
}
```
- Run `echo "dist/" >> .gitignore`.

## TODO

- Add a CSS Reset file (to be included by Webapp and Website):
    - Check [docs](https://meyerweb.com/eric/tools/css/reset/).
    - Add that example code to `reset.css`.