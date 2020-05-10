import * as fs from 'fs';
import * as path from'path';
import * as https from 'https';

import express from 'express';
import cors from 'cors';

import { apolloServer } from './api';
import { oAuthRouter, logoutRouter } from './auth';

export const privateKey = fs.readFileSync(path.join(__dirname, '../selfsigned.key'), 'utf-8');
const certificate = fs.readFileSync(path.join(__dirname, '../selfsigned.crt'), 'utf-8');
const port = 8443;

const app = express();

apolloServer.applyMiddleware({ app });

app.use(cors());

app.use('/oauth2', oAuthRouter);
app.use('/logout', logoutRouter);

const server = https.createServer({ key: privateKey, cert: certificate }, app);

server.listen(port, () => console.log(`Mock Server listening at https://localhost:${port}`));
