const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const path = require("path");
const port = 3000;

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.resolve(__dirname, "../client/dist")));

app.listen(port, () => console.log("App is listening on port: ", port));
