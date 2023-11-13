const asyncHandler = require("express-async-handler");
const config = require('../utils/config')

const collectionName = "Products"

// Display list of all products.
exports.product_list = asyncHandler(async (req, res, next) => {
  console.log('product_list');
  const ref = config.db.collection(collectionName);
  await ref.get().then((snapshot) => {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return res.status(200).send(data);
  })
});

// Display detail page for a specific product.
exports.product_detail = asyncHandler(async (req, res, next) => {
  const ref = config.db.collection(collectionName).doc(req.params.id)
  // Create a query against the collection.
  await ref.get().then((snapshot) => {
    return res.status(200).send(snapshot.data());
  })
});


// Handle product create on POST.
exports.product_create_post = asyncHandler(async (req, res, next) => {
  const ref = config.db.collection(collectionName);
  await ref.add(req.body);
  res.status(201).json({ msj: 'created' });
});

// Display product delete form on GET.
exports.product_delete_get = asyncHandler(async (req, res, next) => {
  const ref = config.db.collection(collectionName).doc(req.params.id)
  await ref.delete();
  res.send("deleted");
});

// Display product update form on GET.
exports.product_update_get = asyncHandler(async (req, res, next) => {
  const ref = config.db.collection(collectionName).doc(req.params.id)
  ref.update(req.body);
  res.status(202).json({ msj: 'updated' });
});

// Handle product update on POST.
exports.product_update_post = asyncHandler(async (req, res, next) => {
  const ref = config.db.collection(collectionName).doc(req.params.id)
  ref.update(req.body);
  res.status(202).json({ msj: 'updated' });
});