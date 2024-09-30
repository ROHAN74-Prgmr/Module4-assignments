const express = require("express");
const { createCategory, getAllCategories } = require("../controllers/categoryController");
const router = express.Router();

router.post("/", createCategory); // Create category
router.get("/", getAllCategories); // Get all categories

module.exports = router;
