const express = require("express");
const router = express.Router();

// Require controller modules.
const product_controller = require("../controllers/products");


/// product ROUTES ///

// GET request for list of all products.
router.get("/", product_controller.product_list);

// POST request for creating product.
router.post("/", product_controller.product_create_post);

// delete request to delete product.
router.delete("/:id", product_controller.product_delete_get);

// patch request to update product.
router.patch("/:id", product_controller.product_update_get);

// put request to update product.
router.put("/:id", product_controller.product_update_post);

// GET request for one product.
router.get("/:id", product_controller.product_detail);


module.exports = router;