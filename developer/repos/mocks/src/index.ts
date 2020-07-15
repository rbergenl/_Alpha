import * as fs from 'fs';
import * as path from'path';
import * as https from 'https';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { apolloServer } from './api';
import { oAuthRouter, logoutRouter } from './auth';
import { analyticsRouter } from './analytics';

export const privateKey = fs.readFileSync(path.join(__dirname, '../selfsigned.key'), 'utf-8');
const certificate = fs.readFileSync(path.join(__dirname, '../selfsigned.crt'), 'utf-8');
const PORT = 8443;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/oauth2', oAuthRouter);
app.use('/logout', logoutRouter);
app.use('/v1/apps/localhost-analytics-app', analyticsRouter);

const server = https.createServer({ key: privateKey, cert: certificate }, app);
apolloServer.installSubscriptionHandlers(server);
apolloServer.applyMiddleware({ app });

server.listen(PORT, () => {
    console.log(`Mock HTTPS Server listening at https://localhost:${PORT}`)
    console.log(`Mock GraphQL Server listening at https://localhost:${PORT}${apolloServer.graphqlPath}`)
    console.log(`Mock WebSocket Server listening at wss://localhost:${PORT}${apolloServer.subscriptionsPath}`)
});
