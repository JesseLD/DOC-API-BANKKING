const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || "3000";


const MYSQL_DEV = {
  port:MYSQL_PORT_DEV || "3306",
  user:MYSQL_USER_DEV || "root",
  password:MYSQL_PASS_DEV || "9090",
  database:MYSQL_DB_DEV || "bankkingDOC",
}

const MYSQL_PROD = {
  port:MYSQL_PORT || "3306",
  user:MYSQL_USER || "root",
  password:MYSQL_PASS || "9090",
  database: MYSQL_DB || "bankkingDOC",
}

module.exports = {
  port: PORT,
  mysql_dev: MYSQL_DEV,
  mysql_prod: MYSQL_PROD
}