const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'flatearth',
  password: '314159',
  port: 5432,
});

module.exports = pool;

