const { serviceAccount, databaseURL, databaseUID, storageBucket } = require("../config");
var admin = require("firebase-admin");

module.exports = (client) => {
  admin.initializeApp({
    credential: admin.credential.cert(process.env.FIREBASE_CREDENTIALS || serviceAccount),
    databaseURL:
      process.env.FIREBASE_DB_URL || databaseURL,
    databaseAuthVariableOverride: {
      uid: process.env.FIREBASE_DB_UID || databaseUID,
    },
    storageBucket: process.env.FIREBASE_BUCKET_URL || storageBucket,
  });

  console.log("firebase: ready");
};