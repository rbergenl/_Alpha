# Initial Setup Mocks

- Run `npm install --save-dev nodemon typescript npm-run-all`.
- Run `npx tsc --init`.
- Add to `package.json`:
```json
"start": "npm run build && node dist",
"develop": "npm-run-all --parallel \"build -- --watch\" \"serve -- --watch\"",
"serve": "nodemon dist",
"build": "tsc --outDir dist"
```

## Api
- Run `npm install apollo-server-express graphql-tools merge-graphql-schemas`.

## Auth
- Check [docs](https://aws.amazon.com/premiumsupport/knowledge-center/decode-verify-cognito-json-token/).
- Run `npm install express cors jsonwebtoken`.
- Run `npm install --save-dev @types/express @types/cors @types/jsonwebtoken`.
- RUN `openssl req \
    -newkey rsa:2048 \
    -x509 \
    -nodes \
    -keyout selfsigned.key \
    -new \
    -out selfsigned.crt \
    -subj /CN=mock.<projectname>.com \
    -reqexts SAN \
    -extensions SAN \
    -config <(cat /System/Library/OpenSSL/openssl.cnf \
        <(printf '[SAN]\nsubjectAltName=DNS:localhost')) \
    -sha256 \
    -days 3650`.
- Open KeychainOS > Certificates > `File` > `Import Items...`.
- Import the just creted `crt` file.
- Open it and at the section *Trust* set it to *Always Trust*.
