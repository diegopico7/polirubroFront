import { useState } from "react";
import { useContext } from "react";
import { ProductosContext } from "../../context/ProductosContext";
import { CarritoContext } from "../../context/CarritoContext";
import { Card } from "./Card";

export const ComprasPage = () => {
  const { articulos } = useContext(ProductosContext);
  const { agregarCompra, eliminarCompra } = useContext(CarritoContext);
  const articulosArr = Object.values(articulos);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todas");

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

  return (
    <>
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
    </>
  );
};
