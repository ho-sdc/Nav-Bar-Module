const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'abibas_search',
  password: 'root'
});

pool.on('error', (err, client) => {
  console.error('idle client error', err.message, err.stack);
});

module.exports = pool;