import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [productos, setProductos] = useState([]);

  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");

  const [editando, setEditando] = useState(false);
  const [idProducto, setIdProducto] = useState(null);


  // OBTENER PRODUCTOS
  const obtenerProductos = async () => {

    try {

      const res = await axios.get(
        "http://localhost:3001/productos"
      );

      setProductos(res.data);

    } catch (error) {

      console.log(error);

    }

  };


  // GUARDAR O ACTUALIZAR
  const guardarProducto = async () => {

    const producto = {
      nombre,
      precio,
      stock
    };

    try {

      if (editando) {

        await axios.put(
          `http://localhost:3001/productos/${idProducto}`,
          producto
        );

        alert("Producto actualizado");

        setEditando(false);

      } else {

        const res = await axios.post(
          "http://localhost:3001/productos",
          producto
        );

        alert(res.data.mensaje);

      }

      limpiarFormulario();

      obtenerProductos();

    } catch (error) {

      alert(error.response.data.error);

    }

  };


  // ELIMINAR
  const eliminarProducto = async (id) => {

    try {

      await axios.delete(
        `http://localhost:3001/productos/${id}`
      );

      obtenerProductos();

    } catch (error) {

      console.log(error);

    }

  };


  // CARGAR DATOS PARA EDITAR
  const editarProducto = (producto) => {

    setNombre(producto.nombre);
    setPrecio(producto.precio);
    setStock(producto.stock);

    setIdProducto(producto.id);

    setEditando(true);

  };


  // LIMPIAR FORMULARIO
  const limpiarFormulario = () => {

    setNombre("");
    setPrecio("");
    setStock("");

    setIdProducto(null);

    setEditando(false);

  };


  useEffect(() => {

    obtenerProductos();

  }, []);


  return (

    <div style={{ padding: "20px" }}>

      <h1>CRUD Productos</h1>

      <input
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        min="0"
        placeholder="Precio"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        min="0"
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />

      <br /><br />

      <button onClick={guardarProducto}>

        {
          editando
            ? "Actualizar"
            : "Guardar"
        }

      </button>

      <hr />

      {
        productos.map((producto) => (

          <div key={producto.id}>

            <h3>{producto.nombre}</h3>

            <p>Precio: {producto.precio}</p>

            <p>Stock: {producto.stock}</p>

            <button
              onClick={() => editarProducto(producto)}
            >
              Editar
            </button>

            <button
              onClick={() => eliminarProducto(producto.id)}
            >
              Eliminar
            </button>

            <hr />

          </div>

        ))
      }

    </div>

  );
}

export default App;