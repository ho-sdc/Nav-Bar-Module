const pool = require('../postgres/index.js');

module.exports = {
  get: (req, res) => {
    let { keyword } = req.params;
    console.log(keyword);
    if (keyword.length > 3) {
      pool.query(`SELECT * FROM products WHERE keyword ILIKE \'%${keyword}%\' LIMIT 4`)
        .then(data => res.status(200).json(data.rows))
        .catch(err => res.status(404).send(err))
    }
  }
}