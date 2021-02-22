import * as fs from 'fs';
import * as path from'path';
import * as https from 'https';
import * as http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { apolloServer } from './api';
import { oAuthRouter } from './auth/oauth2';
import { oAuthCognitoRouter } from './auth/cognito-identity-provider';
import { oAuthGoogleRouter } from './auth/google-identity-provider';

import { logoutRouter } from './auth/logout';

// import { analyticsRouter } from './analytics';

const privateKey = fs.readFileSync(path.join(__dirname, '../selfsigned.key'), 'utf-8');
const certificate = fs.readFileSync(path.join(__dirname, '../selfsigned.crt'), 'utf-8');
const app = express();
const PORT = process.env.PORT || 8443;
const server = PORT === 8443 ? https.createServer({ key: privateKey, cert: certificate }, app) : http.createServer(app);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

apolloServer.installSubscriptionHandlers(server);
apolloServer.applyMiddleware({ app });

// in order to redirect the call to this server, configure Google Chrome extension Requestly with:
// "if request HOST Equals cognito-identity.us-east-1.amazonaws.com Destination https://localhost:8443/oauth2/cognito-identity"
// app.use('/oauth2/cognito-identity')

// in order to redirect the call to this server, configure Google Chrome extension Requestly with:
// "if request HOST Equals cognito-idp.localhost.amazonaws.com Destination https://localhost:8443/oauth2/cognito-idp"
// app.use('/oauth2/cognito-idp')

// Username/password login works on localhost and the test environment.
// Federated social login works only on localhost due to the redirects to cognito-identity.
app.use('/oauth2/google', oAuthGoogleRouter);
app.use('/oauth2/cognito', oAuthCognitoRouter);
app.use('/oauth2', oAuthRouter);
app.use('/logout', logoutRouter);

// when app.config.js has set'Storage:{AWSS3:{dangerouslyConnectToHttpEndpointForTesting:true}}'
// using S3Image will fetch images from http://localhost:20005
// in order to redirect that call to this server, configure Google Chrome extension Requestly with:
// "if request URL matches Wildcard http://localhost:20005/* Destination https://localhost:8443/$1"
app.use('/localhost_bucket', express.static(path.join(__dirname, '..', 's3-bucket', 'localhost_bucket')));

// app.use('/v1/apps/localhost-analytics-app', analyticsRouter);

app.use('/', (req: express.Request, res: express.Response) => res.send('Hello from Mock Server'));

server.listen(PORT, () => {
    console.log(`Mock HTTPS Server listening at https://localhost:${PORT}`)
    console.log(`Mock GraphQL Server listening at https://localhost:${PORT}${apolloServer.graphqlPath}`)
    // console.log(`Mock WebSocket Server listening at wss://localhost:${PORT}${apolloServer.subscriptionsPath}`)
});
