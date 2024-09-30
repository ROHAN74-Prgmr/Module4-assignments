const Review = require("../models/review");

exports.createReview = async (req, res) => {
  try {
    const newReview = await Review.create(req.body);
    res.status(201).json(newReview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find().populate("product user");
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
