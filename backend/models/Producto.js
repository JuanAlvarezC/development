const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // proviene de db.js 

const Producto = sequelize.define("Producto", { // define mi modelo que representa una tabla en mi base de datos

  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    unique : true
  },

  precio: {
    type: DataTypes.FLOAT,
    allowNull:false,
    
    validate: {
      min:{
        args: [0], 
        msg:"el producto no puede ser negativo"
      }
    }
  },

  stock: {
    type: DataTypes.INTEGER,
    defaultValue:0
  }

});

module.exports = Producto;