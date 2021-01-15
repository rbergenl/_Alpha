import express from 'express';
import querystring from 'querystring';

import { sign, SignOptions } from 'jsonwebtoken';

import { privateKey } from '../index';
import { users, USERS } from '../../db-data/users';

export const oAuthRouter = express.Router();
export const logoutRouter = express.Router();

enum CLIENT_IDS {
    localhost_admin_client = 'localhost_admin_client',
    localhost_webapp_client = 'localhost_webapp_client'
}

oAuthRouter.get('/authorize', (req: express.Request, res: express.Response) => {
    const { state, redirect_uri, client_id } = req.query;
    if (!state || !redirect_uri || !client_id) throw new Error();

    const queryString = querystring.stringify({
        state: state.toString(),
        redirect_uri: redirect_uri.toString(),
        client_id: client_id.toString()
    });
    res.redirect(`./hosted_ui?${queryString.toString()}`);
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
    const payload = {
        ...user
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

logoutRouter.get('/', (req: express.Request, res: express.Response) => {
    const { logout_uri } = req.query;
    if (!logout_uri) throw new Error();
    res.redirect(logout_uri.toString());
});
