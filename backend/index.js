const express = require("express");

const cors = require("cors");

const sequelize = require("./config/db");

const productoRoutes = require("./routes/productos");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/productos", productoRoutes); // esta linea hace el enlace entre de las rutas de productos.js


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