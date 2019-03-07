const faker = require('faker');
const fs = require('fs');

const generateCSV = () => {
	let str = `${faker.random.word()}|${faker.lorem.word()}|${faker.name.jobType()}|${Math.floor(Math.random() * 5) + 1}|${faker.image.image()}\n`;
	return str;
}

const wStream = fs.createWriteStream('output.csv');
(() => {
  let i = 1e7;
  write();
  function write() {
    let check = true;
    do {
      let data = generateCSV();
      i--;
      if (i === 0) {
        wStream.write(data, () => console.log('done'));
      } else {
        check = wStream.write(data);
      }
    } while (i > 0 && check);
    if (i > 0) {
      wStream.once('drain', write);
    }
  }
})();