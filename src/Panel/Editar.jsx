/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { Peticion } from "../helpers/Peticion";
import { Global } from "@emotion/react";
import { ListadoEditar } from "../components/utilidades/ListadoEditar";
import { ProductosContext } from "../context/ProductosContext";

export const Editar = () => {
  // const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const { articulos, setArticulos } = useContext(ProductosContext);

  useEffect(() => {
    conseguirArticulos();
  }, []);

  const conseguirArticulos = async () => {
    const { datos } = await Peticion(Global.url + "articulos", "GET");
    if (datos.status === "success") {
      setArticulos(datos.articulos);
    }
    console.log(datos.articulos);
    setCargando(false);
  };
  return (
    <div>
      <div>
        <h2 className="titulo-maquillaje">Editar Articulos</h2>
        <h4 className="titulo-maquillaje">Elija el articulo a editar</h4>
      </div>
      <div className="contenedor-todos">
        <div className="card-editar">
          {articulos.length >= 1 ? (
            <ListadoEditar articulos={articulos} />
          ) : (
            <h2>No hay articulos para mostrar</h2>
          )}
        </div>
      </div>
    </div>
  );
};
