const path = require('path');
const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'abibas_search',
  password: 'root'
});

const psqlSchema =
  `CREATE TABLE IF NOT EXISTS products(
  id BIGSERIAL NOT NULL PRIMARY KEY, 
  keyword VARCHAR, 
  item_name VARCHAR, 
  category VARCHAR, 
  stars INTEGER, 
  pictures VARCHAR
  )`;

pool
  .connect()
  .then(() => {
    console.log('Connected to PostgreSQL');
    pool.query(psqlSchema)
      .then(() => {
        pool.query('SELECT * FROM products LIMIT 5')
        .then(data => {
          if (data.rows.length === 0) {
            return pool.query(`\copy products("keyword","item_name","category","stars","pictures") FROM '${path.resolve( __dirname, '../../postgres2.csv' )}' DELIMITER '|' CSV;`)
            .then(() => {
              pool.query('CREATE INDEX IF NOT EXISTS keyword_b_idx ON products(keyword text_pattern_ops)')
                .then(() => {
                  pool.query('CREATE EXTENSION IF NOT EXISTS pg_trgm')
                    .then (() => {
                      pool.query('CREATE INDEX IF NOT EXISTS trgm_idx ON products USING GIN (keyword gin_trgm_ops)')
                        .then(() => console.log('Indexed'))
                      })
                    })
                  })
                }
              })
            })
          })
          .catch(err => console.log(err))

module.exports = pool;