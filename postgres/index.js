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
    pool.query(psqlSchema);
  })
  .then(() => {
    console.log('Applying B-Tree Index...');
    pool.query('CREATE INDEX IF NOT EXISTS keyword_b_idx ON products(keyword text_pattern_ops)')
  })
  .then(() => {
    console.log('Installing trigrams...');
    pool.query('CREATE EXTENSION IF NOT EXISTS pg_trgm')
  })
  .then(() => {
    console.log('Applying trigram GIN Index...');
    pool.query('CREATE INDEX IF NOT EXISTS trgm_idx ON products USING GIN (keyword gin_trgm_ops)')
  })
  .catch(err => console.error(err));

module.exports = pool;