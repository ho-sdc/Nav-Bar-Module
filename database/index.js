const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/abibas_search");

const db = mongoose.connection;
db.on("err", console.error.bind(console, "connection error:"));

const productsSchema = new mongoose.Schema({
  item_name: String,
  category: String,
  price: Number,
  stars: Number,
  picture: String
});

const Products = mongoose.model("products", productsSchema);
