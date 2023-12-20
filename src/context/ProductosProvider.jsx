/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { ProductosContext } from "./ProductosContext";

export const ProductosProvider = ({ children }) => {
  const [articulos, setArticulos] = useState([]);

  const fetchProductos = async () => {
    const response = await fetch(
      "https://backpolirubro.onrender.com/articulos"
    );
    const data = await response.json();

    setArticulos(data.articulos);
  };

  const actualizarProductos = (nuevosArticulos) => {
    setArticulos(nuevosArticulos);
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  return (
    <ProductosContext.Provider value={{ articulos, actualizarProductos }}>
      {children}
    </ProductosContext.Provider>
  );
};
