const loader = require('./faker-loader.json');
const fs = require('fs');

const arr = loader.variables[0].values[0];

let variable = {
  "version": 1,
  "variables": [{
    "names": ["keyword"],
    "values": []
  }]
}

arr.forEach(word => variable.variables[0].values.push([word]));

fs.writeFile('output.json', JSON.stringify(variable), 'UTF-8', err => {
  if (err) {
    console.log(err);
  }
})