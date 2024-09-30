const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const CookieParser = require("cookie-parser");

const app = express();
app.use(cors());
app.use(express.json());

app.use(CookieParser());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "hbs");
app.set("views", "views");

app.get("/", (req, res) => {
  res.render("index");
});

require("dotenv").config();

const dburl = process.env.dburl;

const userRoutes = require("./src/apiroutes/userRoute.js");
const categoryRoutes = require("./src/apiroutes/categoryRoute.js");
const productRoutes = require("./src/apiroutes/productRoute.js");
const orderRoutes = require("./src/apiroutes/orderRoute.js");
const reviewRoutes = require("./src/apiroutes/reviewRoute.js");

app.use("/api/users", userRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/reviews", reviewRoutes);

mongoose.connect(dburl).then(() => {
  console.log("DB Connected");
});

app.listen(process.env.PORT, () => {
  console.log("server started");
});

module.exports = app;
