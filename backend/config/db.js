const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "crud_db",
  "root",
  "123456789", 
  {
    host: "localhost",
    port: 3306,
    dialect: "mysql"
  }
);

module.exports = sequelize;