const express = require("express");
const { createOrder, getAllOrders } = require("../controllers/orderController");
const router = express.Router();

router.post("/", createOrder); // Create order
router.get("/", getAllOrders); // Get all orders

module.exports = router;
