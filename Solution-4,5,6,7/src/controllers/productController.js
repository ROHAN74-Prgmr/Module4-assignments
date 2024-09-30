const Product = require("../models/product");

exports.createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("category");
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//Solution of Q5
// will fetch all products sorted by name in ascending order
exports.getAllProductsSorted = async (req, res) => {
  try {
    const products = await Product.find().sort({ name: 1 });  // Sorting by name in ascending order
    res.status(200).json({
      success: true,
      data: products
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// Solution of Q-6
// will update the product price by ID
exports.updateProductPrice = async (req, res) => {
  const productId = req.params.id;  // Get the product ID from the request params
  const { price } = req.body;       // Get the new price from the request body

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { price: price },  // Update the price
      { new: true }     
    );

    if (!updatedProduct) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    res.status(200).json({
      success: true,
      message: "Product price updated successfully",
      data: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// Solution of Q-7
// Delete the product by ID
exports.deleteProductById = async (req, res) => {
  const productId = req.params.id;

  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      data: deletedProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
