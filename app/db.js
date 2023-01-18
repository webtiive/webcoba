const Pool = require('pg').Pool;

const client = new Pool({
  host: 'localhost',
  user: 'webstriix',
  port: 5432,
  password: 'uzumakinaruto269',
  database: 'anucara',
});

module.exports = client;
