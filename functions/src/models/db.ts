import * as admin from 'firebase-admin';

import { accountKey } from '../config/secretKeys';

admin.initializeApp({
  credential: admin.credential.cert(accountKey),
  databaseURL: "https://dayly-test.firebaseio.com"
});

const db = admin.firestore();

export default db;
