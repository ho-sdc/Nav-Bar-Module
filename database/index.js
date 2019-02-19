const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/abibas_search", {
  useNewUrlParser: true
});

const db = mongoose.connection;
db.on("err", console.error.bind(console, "connection error:"));

const productsSchema = new mongoose.Schema({
  keyword: String,
  item_name: { type: String, required: true },
  category: String,
  cuteness_level: Number,
  stars: String,
  picture: String
});

const regex = keyword => {
  return new RegExp(`^[${keyword}]\w*`, "g");
};

const Products = mongoose.model("products", productsSchema);

module.exports = { Products, regex };
