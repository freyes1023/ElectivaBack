
var admin = require("firebase-admin");

var serviceAccount = require("../back-electiva-firebase-adminsdk-wjbei-6f37904c59.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
module.exports = { admin, db };