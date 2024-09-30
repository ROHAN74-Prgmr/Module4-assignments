const express = require("express");
const {
  deleteProductById,
  updateProductPrice,
  createProduct,
  getAllProducts,
  getAllProductsSorted,
} = require("../controllers/productController");
const router = express.Router();

router.post("/createproduct", createProduct); // Create product
router.get("/getproducts", getAllProducts); // Get all products
router.get("/sorted", getAllProductsSorted);       
router.get("/updatePrice/:id", updateProductPrice);
router.get("/delete/:id", deleteProductById);

module.exports = router;
