const pool = require('../postgres/index.js');
// const loader = require('../loader/faker-loader.json');
// const arr = loader.variables[0].values[0];


module.exports = {
  get: (req, res) => {
    let { keyword } = req.params;
    pool.query(`SELECT * FROM products WHERE keyword LIKE \'%${keyword}%\' LIMIT 4`)
      .then(data => res.status(200).json(data.rows))
      .catch(err => res.status(404).send(err))
  }
  // post: (req, res) => {
  //   let item = req.body;
  //   pool.query(`INSERT INTO products("keyword","item_name","category","stars","pictures") VALUES('${item.keyword}','${item.product_name}','${item.category}','${item.stars}','${item.pictures}')`)
  // }
}