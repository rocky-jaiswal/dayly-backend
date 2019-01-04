import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';
import * as jwt from 'express-jwt';

import { healthCheck } from './handlers/health';
import { login } from './handlers/login';
import { getAllUsers } from './handlers/users';
import { getLogEntry, createLogEntry } from './handlers/logEntries';
import jwtKey from './config/jwtKey';

const app = express();

// Middleware
app.use(cors({ origin: ['http://localhost:3000', 'https://dayly-test.firebaseapp.com'] }));
app.use(jwt({ secret: jwtKey }).unless({ path: ['/_health', '/login'] }));

// Routes
app.get('/_health', healthCheck);
app.post('/login', login);
app.get('/users', getAllUsers);
app.get('/logEntries', getLogEntry);
app.post('/logEntries', createLogEntry);

exports.app = functions.https.onRequest(app);
