require('dotenv').config();

module.exports = {
  development: {
    host: process.env.HOSTNAME,
    port: process.env.DB_PORT,
    database: 'hightechx_db',
    dialect: 'mysql',
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  },
  test: {
    host: process.env.HOSTNAME,
    port: process.env.DB_PORT,
    database: 'hightechx_db',
    dialect: 'mysql',
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  },
  production: {
    host: process.env.HOSTNAME,
    port: process.env.DB_PORT,
    database: 'hightechx_db',
    dialect: 'mysql',
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  },
};
