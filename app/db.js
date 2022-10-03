const Pool = require('pg').Pool;

const client = new Pool({
  host: 'localhost',
  user: 'postgres',
  port: 8000,
  password: 'uzumakinaruto269',
  database: 'anucara',
});

module.exports = client;
