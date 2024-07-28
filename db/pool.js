const { Pool } = require("pg");
require('dotenv').config()

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
module.exports = new Pool({
  host: "localhost", // or wherever the db is hosted
  user: process.env.USER_NAME,
  database: process.env.DATABASE_NAME,
  password: process.env.USER_PASSWORD,
  port: 5432 // The default port
});
