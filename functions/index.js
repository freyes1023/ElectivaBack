/* eslint-disable max-len */
const functions = require("firebase-functions");
const asyncHandler = require("express-async-handler");

// Config DB

const admin = require("firebase-admin");

const serviceAccount = {
  "type": "service_account",
  "project_id": "back-electiva",
  "private_key_id": "6f37904c593149e44f06ccf6922e22186f29484c",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCba24sXM7oTgzn\njGhF2YITyIc9fMlAn5mQ9zTUSOi47JP+kFxi/Ah+i2CZ9ZjNukW6oliH7VhpDyYC\nkAKm0BgdWX+rHvl+/OksmTaJtWw4Ua8KWnEBwZ2xjzEmPyul38TGlVi3uaxXDN44\n/9k70c7txiNvnx+RxEzFKYT0f+Xvt+t/rMWvgppwlcu9i4G02DXnV3hx7RPmAZoe\nbH9k+DntS7EWzDNxDVKhS8sM2wguP8UohRCH/ufh8PKmCjsTpUgVP1IYZgXuNYkh\nZFQYI3lqfO1ZGnbIS6uYWwGDZsKV5GhhRTKGenwJa+VXKo1CVQqru2py2Vqd/6Y4\nWy9e8uInAgMBAAECggEAIj7PNV4zxxMfm8uf1DhDhalrRzyeOauRElSuItJ32Ptj\n9rUHblYbZwq9+96WT0pqf9+ywyykjO2mEe16cBgtIBZu351BG16N4GJYForPsC8r\ncwwPl3P6k7u5+DP2IaQHPzx8Imt6kmnG82dIjfpCbrj4aOl2cs9+nPjzj045M5MK\nOs7X1yknAeYwIfYUrER+rFbkqmGK/8Ud5fXC4CDEqneDf16UnM1cjivoNLuNcTzj\nHpvwEMDwL/VIp+GHohihwL/Jus3T/XrPv41pGQJtDASg9L3M4I9yV9Q2MCfR8lOB\nRF2tOkWkJHw00htAiXPFyX79MJJo966YbEHyaEyruQKBgQDbBU/As9Lkh8Ip8tBm\nmsSDcRdLTN1XMfXm09o4HM6xIc4N9V5+VrCEjjS9n6tmKQUsEI5L5el1ChNA+f6w\ngEPGL+W5CZw0vMKVHZ4gvZq6WjHmrif8F9+GQ9o/RvsvnS7F9pvyPdfTd0l2OQy4\nCexhMwxu1FG1yecb7GxqAXqKiQKBgQC1qRoKbzXhoCgPhmvi46q/t2rWp32tzmn3\nMBeIg4NEkt1XjvxWdKj+RG+2QX/5A9lhchwAo4UJvHoULuQ8/wCb+cxlOD56uEO2\njfFbR0EvxRaPjB0hafB6QnkC5qS+rVcSc1TCGOoGExKEkBjN8sJca87jzPvt79I6\nvH+YpF8bLwKBgG77hQs31AC7jjbldJbZjASy9MPSYkKB7YIXDffrGQ2G/Lvz/vr0\nAKRazvzbgOXWmWlXxlNNYHxPK6x8QYO8qxstQDIAXagXkl4vUOZ0TYhqlei3jUlf\n64NEtL3lwPjCpGXp7eHVVp0wUAhZJknHtYEXdhBfBDyi37o1lkYtE6RJAoGBAIOr\nc/KINRe6zA6kseIcfpDDUy8O66tk562BMC2ElUrI4KIsQ34uxKa31/jUdPt67L8S\nxHU6EJ3D/QBQFKKZekmTv7DGGZM9p+bT71LnzLnhMr8NIbgsX19eevO9VT/XyDrZ\nWV/uSwHoJQ3sm+36vSHcCnNXCmul3k0wf5OV4FGFAoGBAIE/Aa86MCAB+eKA10pG\nnapFXbxoCV1H7mJY61Vsmjt1DEqjyMxPaZyht0UBrYKaw55Usmf1KCAifUrEIvyq\nJ8IYqElLUky4mj2N1kRtD83dAddCEVyKgG8Sj9C4yo6x6WiemufMFkmdgQ7maP5G\nZBYIFx4mI4u7IsFgtxB6bawk\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-wjbei@back-electiva.iam.gserviceaccount.com",
  "client_id": "116991751212376815805",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-wjbei%40back-electiva.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com",
};
/* const serviceAccount = require(
    "../back-electiva-firebase-adminsdk-wjbei-6f37904c59.json"); */

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

//

/* const admin = require("firebase-admin");
 try {
  admin.initializeApp(functions.config().firebase);
} catch (e) {
  console.log(e);
} */


const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
// const port = 3000;

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(cors());


// Catalogue Routes

// eslint-disable-next-line new-cap
const router = express.Router();

// Require controller modules.
// const product_controller = require("../controllers/products");


// Controllers

// const config = require('../utils/config')

const collectionName = "Products";

// Display list of all products.
const productList = asyncHandler(async (req, res, next) => {
  console.log("productList");
  const ref = db.collection(collectionName);
  await ref.get().then((snapshot) => {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return res.status(200).send(data);
  });
});

// Display detail page for a specific product.
const productDetail = asyncHandler(async (req, res, next) => {
  const ref = db.collection(collectionName).doc(req.params.id);
  // Create a query against the collection.
  await ref.get().then((snapshot) => {
    return res.status(200).send(snapshot.data());
  });
});

// Handle product create on POST.
const productCreate = asyncHandler(async (req, res, next) => {
  const ref = db.collection(collectionName);
  await ref.add(req.body);
  res.status(201).json({msj: "created"});
});

// Display product delete form on GET.
const productDelete = asyncHandler(async (req, res, next) => {
  const ref = db.collection(collectionName).doc(req.params.id);
  await ref.delete();
  res.send("deleted");
});

// Display product update form on GET.
const productUpdate = asyncHandler(async (req, res, next) => {
  const ref = db.collection(collectionName).doc(req.params.id);
  ref.update(req.body);
  res.status(202).json({msj: "updated"});
});


// product ROUTES ///

// GET request for list of all products.
router.get("/", productList);

// POST request for creating product.
router.post("/", productCreate);

// delete request to delete product.
router.delete("/:id", productDelete);

// patch request to update product.
router.patch("/:id", productUpdate);

// put request to update product.
router.put("/:id", productUpdate);

// GET request for one product.
router.get("/:id", productDetail);

app.use("/products", router);
app.use("/", (req, res, next) => {
  res.send("API BACKEND Electiva");
});
//

// Handle product update on POST.
/* const product_update_post = asyncHandler(async (req, res, next) => {
  const ref = db.collection(collectionName).doc(req.params.id);
  ref.update(req.body);
  res.status(202).json({msj: "updated"});
}); */

//
/* const productsRouter = require("../routes/products");
app.use("/products", productsRouter);  */
/* const indexRouter = require("../routes/index");
const usersRouter = require("../routes/users");

app.use("/", indexRouter);
app.use("/users", usersRouter);


// app.use("/", indexRouter);
*/
/*
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
 */

// module.exports = app;
// const app = require("../app");
exports.app = functions.https.onRequest(app);
