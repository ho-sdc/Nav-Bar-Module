const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const path = require("path");
const port = 3000;
const { Products, regex } = require("../database/index.js");

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.resolve(__dirname, "../client/dist")));

app.get("/search/:keyword", (req, res) => {
  let { keyword } = req.params;
  const actualRegex = regex(keyword);
  Products.find({ keyword: actualRegex })
    .then(data => res.send(data))
    .catch(err => console.log(err));
});

app.listen(port, () => console.log("App is listening on port: ", port));
