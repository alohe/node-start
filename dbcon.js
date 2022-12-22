var mysql = require("mysql");
require("dotenv").config();

var conn = mysql.createConnection({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

conn.connect();

module.exports = conn;
