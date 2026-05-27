const express = require("express");

const cors = require("cors");

const sequelize = require("./config/db");

const productoRoutes = require("./routes/productos");

const app = express(); // este es mi servidor 

app.use(cors()); // activo mi los puentes 

app.use(express.json()); // leo los json desde mi frontend

app.use("/productos", productoRoutes); // esta linea hace el enlace entre de las rutas de productos.js conecta mis rutas crud con express


sequelize.sync()
  .then(() => {

    console.log("Base de datos conectada");

    app.listen(3001, () => {

      console.log("Servidor ejecutándose en puerto 3001");

    });

  })
  .catch((error) => {

    console.log(error);

  });