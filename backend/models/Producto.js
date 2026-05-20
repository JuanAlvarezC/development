const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Producto = sequelize.define("Producto", {

  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },

  precio: {
    type: DataTypes.FLOAT
  },

  stock: {
    type: DataTypes.INTEGER
  }

});

module.exports = Producto;