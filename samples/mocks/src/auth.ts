import express from 'express';

import { sign, SignOptions } from 'jsonwebtoken';

import { privateKey } from './index';

export const oAuthRouter = express.Router();
export const logoutRouter = express.Router();

oAuthRouter.get('/authorize', (req: express.Request, res: express.Response) => {
    const { redirect_uri, state } = req.query;
    const code = 'localhost_code';
    res.redirect(`${redirect_uri}?code=${code}&state=${state}`);
});

oAuthRouter.post('/token', (req: express.Request, res: express.Response) => {
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

logoutRouter.get('/', (req: express.Request, res: express.Response) => {
    const { logout_uri } = req.query;
    res.redirect(logout_uri.toString());
});
