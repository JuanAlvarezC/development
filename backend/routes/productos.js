const express = require("express");
const router = express.Router();

const Producto = require("../models/Producto");


// CONSULTAR  Metodo GET 
router.get("/", async (req, res) => {

  const productos = await Producto.findAll();

  res.json(productos);

});


// INSERTAR
router.post("/", async (req, res) => {

  const producto = await Producto.create(req.body);

  res.json(producto);

});


// ACTUALIZAR
router.put("/:id", async (req, res) => {

  await Producto.update(req.body, {
    where: {
      id: req.params.id
    }
  });

  res.json({
    mensaje: "Producto actualizado"
  });

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