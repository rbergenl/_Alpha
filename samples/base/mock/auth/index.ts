// Resource used: https://aws.amazon.com/premiumsupport/knowledge-center/decode-verify-cognito-json-token/

// Run `npm install -save-dev express npm install @types/express cors npm install @types/cors jsonwebtoken @types/jsonwebtoken`.

/*
- RUN `openssl req \
    -newkey rsa:2048 \
    -x509 \
    -nodes \
    -keyout ./mock/auth/selfsigned.key \
    -new \
    -out ./mock/auth/selfsigned.crt \
    -subj /CN=mock.aardonyx.com \
    -reqexts SAN \
    -extensions SAN \
    -config <(cat /System/Library/OpenSSL/openssl.cnf \
        <(printf '[SAN]\nsubjectAltName=DNS:localhost')) \
    -sha256 \
    -days 3650`.
- Open KeychainOS > Certificates > `File` > `Import Items...`.
- Import the just creted `crt` file.
- Open it and at the section *Trust* set it to *Always Trust*.
*/

import * as fs from 'fs';
import * as path from'path';
import * as https from 'https';

import { sign, SignOptions } from 'jsonwebtoken';
import * as cors from 'cors';
import * as express from 'express';

const privateKey = fs.readFileSync(path.join(__dirname, './selfsigned.key'), 'utf-8');
const certificate = fs.readFileSync(path.join(__dirname, './selfsigned.crt'), 'utf-8');
const port = 8443;
const app = express();

app.use(cors());

app.get('/oauth2/authorize', (req: any, res: any) => {
    const { redirect_uri, state } = req.query;
    const code = 'localhost_code';
    res.redirect(`${redirect_uri}?code=${code}&state=${state}`);
});

app.post('/oauth2/token', (req: any, res: any) => {
    const payload = {
        'cognito:groups': [
          'localhost-mocks'
        ],
        token_use: 'id',
        'cognito:username': 'localhost-username-hashed',
        'email': 'mock@mock.com'
    };
    const signOptions: SignOptions = {
        issuer:  'localhost_issuer',
        subject:  'localhost_subject',
        audience:  'localhost_audience',
        expiresIn:  '12h',
        algorithm:  'RS256'
    };
    const token = sign(payload, privateKey, signOptions);

    res.json({
        id_token: token,
        access_token: token,
        refresh_token: token,
        expires_in: 3600,
        token_type: 'Bearer'
    });
});

app.get('/logout', (req: any, res: any) => {
    const { logout_uri } = req.query;
    res.redirect(logout_uri);
});

const server = https.createServer({ key: privateKey, cert: certificate }, app);

server.listen(port, () => console.log(`Mock Auth Server listening at https://localhost:${port}`));
