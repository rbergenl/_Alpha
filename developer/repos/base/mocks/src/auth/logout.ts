import express from 'express';
export const logoutRouter = express.Router();

logoutRouter.get('/', (req: express.Request, res: express.Response) => {
    const { logout_uri } = req.query;
    if (!logout_uri) throw new Error();
    res.redirect(logout_uri.toString());
});
