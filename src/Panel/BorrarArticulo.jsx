import { useEffect, useState } from "react";
import { ListadoArtBorrar } from "../components/utilidades/ListadoArtBorrar";
import { Global } from "../helpers/Global";
import { Peticion } from "../helpers/Peticion";

export const BorrarArticulo = () => {
  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    conseguirArticulos();
  }, []);

  const conseguirArticulos = async () => {
    const { datos } = await Peticion(Global.url + "articulos", "GET");
    if (datos.status === "success") {
      setArticulos(datos.articulos);
    }

    setCargando(false);
  };

  return (
    <>
      {cargando ? (
        "Cargando articulos....."
      ) : articulos.length >= 1 ? (
        <ListadoArtBorrar articulos={articulos} setArticulos={setArticulos} />
      ) : (
        <h2>No hay articulos para mostrar</h2>
      )}
    </>
  );
};
