const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const path = require("path");
const morgan = require('morgan');
const port = 3001;
const routes = require('./routes.js');

const pool = require('../postgres/index.js');

const app = express();

app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.resolve(__dirname, "../client/dist")));

app.use('/', routes);

app.listen(port, () => console.log("App is listening on port: ", port));