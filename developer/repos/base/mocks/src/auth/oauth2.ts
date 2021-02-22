// Amazon Cognito User Pools is a full-featured user directory service to handle user registration, authentication, and account recovery
// Amplify Auth.Sign() handles getting JWT tokens from User Pools and AWS credentials from Identity Pools.
import express from 'express';
import querystring from 'querystring';
import { sign, SignOptions } from 'jsonwebtoken';

import { users, USERS } from '../../cognito/users';

export const oAuthRouter = express.Router();

enum CLIENT_IDS {
    localhost_admin_client = 'localhost_admin_client',
    localhost_webapp_client = 'localhost_webapp_client'
}

const AUTH_SERVER_SECRET = 'auth_server_secret';

oAuthRouter.get('/authorize', (req: express.Request, res: express.Response) => {
    const { identity_provider, state, redirect_uri, client_id } = req.query;
    if (!state || !redirect_uri || !client_id) throw new Error();

    let url = '';
    let queryString = '';

    switch (identity_provider) {
        case 'COGNITO':
            queryString = querystring.stringify({
                state: state.toString(),
                redirect_uri: redirect_uri.toString(),
                client_id: client_id.toString()
            });
            url = `./hosted_ui?${queryString.toString()}`;
            break;
        case 'Google':
            queryString = querystring.stringify({
                client_id: '1042212733592-r6fmj27ttt6719pjtnnnkv6c7ogpe0f6.apps.googleusercontent.com',
                redirect_uri: 'https://testwebapp385c62e1-385c62e1-dev.auth.us-east-1.amazoncognito.com/oauth2/idpresponse',
                // redirect_uri: 'https://localhost:8443/oauth2/idpresponse',
                scope: 'openid email profile',
                response_type: 'code',
                state: state.toString()
            });
            url = `./google?${queryString.toString()}`;
            break;
    }
    res.redirect(url);
});

oAuthRouter.get('/idpresponse', (req, res) => {
    const { state } = req.query;
    if (!state) throw new Error();

    const username = USERS.user1;
    const queryString = querystring.stringify({
        state: state.toString(),
        code: Buffer.from(username).toString('hex'),
    });

    // TODO: fetch redirect_uri stored at the /authorize call
    res.redirect(`http://localhost:19006/?${queryString.toString()}`);
});

oAuthRouter.get('/hosted_ui', (req: express.Request, res: express.Response) => {
    const { client_id } = req.query;
    let username = '';

    if (client_id === CLIENT_IDS.localhost_admin_client) {
        username = USERS.admin1;
    }
    if (client_id === CLIENT_IDS.localhost_webapp_client) {
        username = USERS.user1;
    }

    res.send(`
        <style>
            html { background-color: darkcyan; }
            form { height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; }
            form > * { font-size: 200%; margin: 1rem; background-color: white; }
        </style>
        <form method="POST" action="./login">
            <input name="state" type="hidden" value="${req.query.state}" />
            <input name="redirect_uri" type="hidden" value="${req.query.redirect_uri}" />
            <input name="username" placeholder="username" type="text" value="${username}" />
            <button type="submit">Login</button>
        </form>
    `);
});

oAuthRouter.post('/login' , (req: express.Request, res: express.Response) => {
    const { redirect_uri, state, username } = req.body;

    const user = users.find((user) => user['cognito:username'] === username);

    if (user) {
        const queryString = querystring.stringify({
            state,
            code: Buffer.from(username).toString('hex'),
        });
        res.redirect(`${redirect_uri}?${queryString.toString()}`);
    } else {
        res.status(404);
        res.send(`user <strong>${username}</strong> not found`);
    }
});

oAuthRouter.post('/token', (req: express.Request, res: express.Response) => {
    
    const username = Buffer.from(req.body.code, 'hex').toString('utf8');
    const user = users.find((user) => user['cognito:username'] === username);

    if (!user) throw new Error();
    
    const payload = {
        ...user
    };

    const signOptions: SignOptions = {
        issuer:  'localhost_issuer',
        subject:  'localhost_subject',
        audience:  'localhost_audience',
        expiresIn:  '12h',
        // algorithm:  'RS256' // requires privateKey
        algorithm: 'HS256'
    };

    // const token = sign(payload, privateKey, signOptions);
    const token = sign(payload, AUTH_SERVER_SECRET, signOptions);

    res.json({
        id_token: token,
        access_token: token,
        refresh_token: token,
        expires_in: 3600,
        token_type: 'Bearer'
    });
});
