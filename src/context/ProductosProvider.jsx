/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { ProductosContext } from "./ProductosContext";

export const ProductosProvider = ({ children }) => {
  const [articulos, setArticulos] = useState([]);

  const fetchProductos = async () => {
    const response = await fetch("http://localhost:3900/articulos");
    const data = await response.json();

    setArticulos(data.articulos);
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  return (
    <ProductosContext.Provider value={{ articulos }}>
      {children}
    </ProductosContext.Provider>
  );
};
