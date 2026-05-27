// este archivo es importante ya que es el puente entre node.js y MySQL

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize( // creamos una instancia de sequelize
  "crud_db", // nombre de mi base de datos 
  "root", // usuario de mi base de datos 
  "123456789", // contraseña de mi base de datos 
  {
    host: "localhost",
    port: 3306,
    dialect: "mysql" // usamos el motor de MySQL
  }
);

module.exports = sequelize; // exporto la conexión 