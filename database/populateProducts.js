const mongoose = require("mongoose");
const { Products } = require("./index.js");
const data = require("./productData.json");

const populateData = dataArr => {
  return dataArr.map(object => {
    let newData = new Products(object);
    return newData.save();
  });
};

populateData(data);

module.exports = { populateData };
