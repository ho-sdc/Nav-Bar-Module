const mongoose = require("mongoose");
const { Products } = require("./index.js");
const data = require("./productData.json");
const faker = require('faker');
const fs = require('fs');

const populateData = dataArr => {
  return dataArr.map(object => {
    let newData = new Products(object);
    return newData.save();
  });
};

// populateData(data);


const generate = () => {
  let obj = {
    keyword: faker.random.word(),
    item_name: faker.lorem.word(),
    category: faker.name.jobType(),
    stars: Math.floor(Math.random() * 5) + 1,
    picture: faker.image.image()
  }
  return obj;
}

const wStream = fs.createWriteStream('output2.json');
(() => {
  let i = 1e1;
  let id = 1;
  write();
  function write() {
    let check = true;
    do {
      let data = generate();
      data.id = id;
      data = JSON.stringify(data);
      i--;
      if (i === 0) {
        wStream.write(data, () => console.log('done'));
      } else {
        check = wStream.write(data);
        id++;
      }
    } while (i > 0 && check);
    if (i > 0) {
      wStream.once('drain', write);
    }
  }
})();


module.exports = { populateData };