import express from 'express';
import querystring from 'querystring';

export const oAuthGoogleRouter = express.Router();

oAuthGoogleRouter.get('/', (req, res) => {
    const { state } = req.query;
    if (!state) throw new Error();

    const queryString = querystring.stringify({
        state: state.toString(),
        code: '4/0AY0e-g5JLhkqGrlJnWNe2FVDRoNnDTpXfz7JgVUOKeCJOs0klUgGrB8PYfxuu48ijHaAxw',
        scope: 'email profile https://www.googleapis.com/auth/userinfo.email openid https://www.googleapis.com/auth/userinfo.profile',
        authuser: 0,
        prompt: 'none'
    });

    res.redirect(`./idpresponse?${queryString.toString()}`);
});
