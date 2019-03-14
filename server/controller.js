const pool = require('../postgres/index.js');
const loader = require('../loader/faker-loader.json');
const arr = loader.variables[0].values[0];


module.exports = {
  get: (req, res) => {
    let { keyword } = req.params;
    pool.query(`SELECT * FROM products WHERE keyword ILIKE \'%${keyword}%\' LIMIT 4`)
      .then(data => res.status(200).json(data.rows))
      .catch(err => res.status(404).send(err))
  }
  //   get: (req, res) => {
  //   arr.forEach(word => {
  //     pool.query(`SELECT * FROM products WHERE keyword='${word}'`)
  //     .then(() => console.log(`${word}: true`))
  //     .catch(() => console.log(`${word}: false`))
  //   })
  // }
  // post: (req, res) => {
  //   let item = req.body;
  //   pool.query(`INSERT INTO products("keyword","item_name","category","stars","pictures") VALUES('${item.keyword}','${item.product_name}','${item.category}','${item.stars}','${item.pictures}')`)
  // }
}