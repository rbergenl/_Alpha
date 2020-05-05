# Lighthouse to 100

## Search Engine Optimization to 100
- Website:
    - Already provided by Gatsby with the `<SEO>` component.
    - Add a file `<projectname-website>\static\robots.txt` with the lines:
    ```
        # https://www.robotstxt.org/robotstxt.html
        User-agent: *
    ```
- Webapp:
    - The minimum setup is already provided by create-react-app.
    - Add to `public/index.html` the line `<meta name="description" content="Description" />`.

## Accessibility to 100 (website/webapp only)
- Website:
    - Already provided by Gatsby.
- Webapp:
    - Make sure the `[role]="main"` attribute is set on the `<div id="root">` element in `public/index.html`.

## Performance to 100 (localhost only)

### Serve build on HTTPS
- Run `$ npm install local-web-server`.
- Add to package.json the script `"serve-https": "npm run build && ws --directory ./build --port 443 --compress --http2"`.

### Redirect HTTP to HTTPS
- Check [docs](https://github.com/lwsjs/local-web-server/wiki/How-to-redirect-HTTP-traffic-to-HTTPS)
- `$ npm install lws-redirect`.
- Add to package.json the script `"redirect-http": "ws --port 80 --stack redirect --redirect 'http -> https'"`.

### Trust the Certificate
- Ceck [docs](https://github.com/lwsjs/local-web-server/wiki/How-to-get-the-%22green-padlock%22-using-the-built-in-certificate)
- Open KeychainOS > Certificates > 'File' > 'Import Items...'.
- Import the certificate located at `./node_modules/lws/ssl/lws-cert.pem`
- In the list of certificates is now a new one with the name `lws`.
- Open it and at the section 'Trust' set it to 'Always Trust'.
- Open the website specifying the protocol `https://localhost/`.

## Progressive Web App to 100 (webapp only)

### Enable the Service Worker
- Check [docs](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
- In `src/index.js` change `serviceWorker.unregister();` into `serviceWorker.register();`
- Website: enable `gatsby-plugin-offline` in the gatsby-config.js file.

### Add Logos to the Manifest
- Check [docs](https://developers.google.com/web/fundamentals/web-app-manifest/)
- Convert the `src/logo.svg` into a PNG using an online converter.
- Then make copies and resize the PNG into `512x512` and `192x192`.
- Place both PNGs in the folder `public`.
- Add to the `public/manifest.json` to the `icons` section:
```
{
    "src": "/icon-192.png",
    "type": "image/png",
    "sizes": "192x192"
},
{
    "src": "/icon-512.png",
    "type": "image/png",
    "sizes": "512x512"
}
```
