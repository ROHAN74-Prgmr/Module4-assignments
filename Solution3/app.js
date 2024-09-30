const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const CookieParser = require("cookie-parser");

const app = express();
app.use(cors());

app.set("view engine", "hbs");
app.set("views", "views");

app.get("/", (req, res) => {
  res.render("index");
});

require("dotenv").config();

const dburl = process.env.dburl;

mongoose.connect(dburl).then(() => {
  console.log("DB Connected");   
});

app.use(express.json());

app.use(CookieParser());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => {
  console.log("server started");
});

module.exports = app;
