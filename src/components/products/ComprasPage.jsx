import { useEffect, useState } from "react";
import { useContext } from "react";
import { ProductosContext } from "../../context/ProductosContext";
import { CarritoContext } from "../../context/CarritoContext";
import { Card } from "./Card";
import { NavLink } from "react-router-dom";
import { Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { Footer } from "../utilidades/Footer";
import { WhatsApp } from "../utilidades/WhatsApp";

export const ComprasPage = () => {
  const { articulos, actualizarProductos } = useContext(ProductosContext);
  const { agregarCompra, eliminarCompra } = useContext(CarritoContext);
  const articulosArr = Object.values(articulos);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todas");
  const { listaCompras } = useContext(CarritoContext);

  const handleCategoriaChange = (e) => {
    setCategoriaSeleccionada(e.target.value);
  };
  const productosFiltrados =
    categoriaSeleccionada === "todas"
      ? articulosArr
      : articulosArr.filter(
          (articulo) => articulo.categoria === categoriaSeleccionada
        );
  const handleAgregar = (compra) => {
    agregarCompra(compra);
  };
  const handleQuitar = (id) => {
    eliminarCompra(id);
  };

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch(
          "https://backpolirubro.onrender.com/articulos"
        );
        const data = await response.json();

        // Actualizar el contexto con la nueva lista de productos
        actualizarProductos(data.articulos);
      } catch (error) {
        console.error("Error al cargar productos:", error);
      }
    };
    fetchProductos();
  }, [actualizarProductos]);

  return (
    <>
      <article className="menu-list__item badge">
        <NavLink to="/carrito">
          <Badge badgeContent={listaCompras.length} color="success">
            <ShoppingCart color="action" sx={{ fontSize: 30 }} />
          </Badge>
        </NavLink>
        <WhatsApp></WhatsApp>
      </article>
      <div className="contenedor-filtrado">
        <h3 className="titulo-filtrado">Filtrar por categoria</h3>
        <select value={categoriaSeleccionada} onChange={handleCategoriaChange}>
          <option value="todas">Todos los productos</option>
          <option value="bijouterie">Bijouterie</option>
          <option value="libreria">Libreria</option>
          <option value="juguetes">Juguetes</option>
          <option value="maquillaje">Maquillaje</option>
          <option value="varios">Varios</option>
        </select>
      </div>
      <div className="producto-contenedor">
        {productosFiltrados.map((articulo) => (
          <Card
            key={articulo._id}
            imagen={articulo.imagen}
            titulo={articulo.titulo}
            descripcion={articulo.description}
            categoria={articulo.categoria}
            precio={articulo.precio}
            handleAgregar={() => handleAgregar(articulo)}
            handleQuitar={() => handleQuitar(articulo.id)}
          ></Card>
        ))}
      </div>
      <Footer></Footer>
    </>
  );
};
