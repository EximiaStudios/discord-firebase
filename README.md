# Discord Firebase

Firebase widget for [@peterthehan](https://github.com/peterthehan) [create-discord-bot](https://github.com/peterthehan/create-discord-bot) Discord bot.

**DISCLAIMER**

This is developed and tested for the older version of the bot framework.

## Setup

1. Follow the instructions in [create-discord-bot](https://github.com/peterthehan/create-discord-bot).

2. Download this widget and move it into the [src/widgets](https://github.com/peterthehan/create-discord-bot/blob/master/src/widgets/) folder.

3. Create a `config.js` file based on [config.js.sample](https://github.com/EximiaStudios/discord-firebase/blob/master/config.js.sample) to configure your own settings.

4. Ensure your bot has the `firebase-admin` node module installed.

## Config

```js
module.exports = {
  serviceAccount: <JSON_OBJECT>,
  databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
  databaseUID: "<RULES UID>",
  storageBucket: "<BUCKET_NAME>.appspot.com",
};
```

The widget configuration fields need to be populated according to the Firebase documentation.

Refer below for more information:
- [Service account](https://firebase.google.com/docs/admin/setup#linux-or-macos)
- [Database URL](https://firebase.google.com/docs/database/admin/start)
- [Database UID](https://firebase.google.com/docs/database/security/rules-conditions)
- [Storage Bucket URL](https://firebase.google.com/docs/storage/admin/start)

## Docker

For docker deployment, the `config.js` can be entirely ignored by replacing it with ENV Variables.

- `FIREBASE_CREDENTIALS` is path to serviceAccount.json
- `FIREBASE_DB_URL` is databaseURL string
- `FIREBASE_DB_UID` is databaseUID string
- `FIREBASE_BUCKET_URL` is storageBucket string

## Dependency

- [firebase-admin](https://www.npmjs.com/package/firebase-admin) v9.5.0