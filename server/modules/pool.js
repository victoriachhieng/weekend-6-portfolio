const pg = require('pg');

// Setup PG to connect to database
const Pool = pg.Pool;
const pool = new Pool({
  database: 'portfolio', // name of database
  host: 'localhost', // server hosting the postgres database
  port: 5432, // port of database
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000 // how long a client is allowed to remain idle before being closed
});

// show connection if successful
pool.on('connect', () => {
  console.log('Postgresql connected');
});

// catch error if unsuccessful connection
pool.on('error', error => {
  console.log('Error with postgres pool', error);
});

module.exports = pool;
