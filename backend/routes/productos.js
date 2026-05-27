const express = require("express"); //creo un a instancia de express mi Framework de node.js 
const router = express.Router(); // creo mi manejador de rutas 

const Producto = require("../models/Producto"); // importo mi modelo sequelize, aca lo importo porque la rutas necesitan interactuar con la base de datos mediante sequelize 


// CONSULTAR  Metodo GET 
router.get("/", async (req, res) => {

  try{

  const productos = await Producto.findAll();

  res.json(productos);
} catch (error) {
  res.status(500).json({
    error: "Error al obtener productos"
  });

}

});


// INSERTAR
router.post("/", async (req, res) => {

  try {
        const {nombre, precio, stock} = req.body;
        const productoExistente = await Producto.findOne({
          where: {
            nombre:nombre
          }
        });


// si este producto ya existe se debera actualizar

if (productoExistente){
    await productoExistente.update({
      precio,
      stock

    });

    return res.json(
      {mensaje: "Producto actualizado",
      producto:productoExistente
      });

}

// si ya validaste si existe y no esta entonces se crea 

const producto = await Producto.create({
  nombre,
  precio,
  stock
});

res.status(201).json({
  mensaje: "producto creado",
  producto
});
} catch (error) {
  res.status(400).json({
    error: error.errors[0].message
  });
}

});

// ELIMINAR
router.delete("/:id", async (req, res) => {

  await Producto.destroy({
    where: {
      id: req.params.id
    }
  });

  res.json({
    mensaje: "Producto eliminado"
  });

});

module.exports = router;