/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Peticion } from "../../helpers/Peticion";
import { Global } from "../../helpers/Global";
import { Link } from "react-router-dom";
import { ProductosContext } from "../../context/ProductosContext";

export const ListadoEditar = () => {
  const { articulos, setArticulos } = useContext(ProductosContext);

  const eliminar = async (id) => {
    const { datos } = await Peticion(Global.url + "articulos", "GET");

    if (datos.status === "success") {
      let articulosActualizados = articulos.filter(
        (articulo) => articulo._id !== id
      );
      setArticulos(articulosActualizados);
    }
  };

  return articulos.map((articulo) => (
    <React.Fragment key={articulo._id}>
      <article className="articulo-contenedor">
        {articulo.imagen !== "default.png" && (
          <img
            src={Global.url + "imagen/" + articulo.imagen}
            className="img-productos"
          />
        )}
        {articulo.imagen === "default.png" && (
          <img
            src="http://www.tucprogram.online/img/muestras/organizacion.png"
            alt=""
            className="img-productos"
          />
        )}
        <h4>{articulo.titulo}</h4>
        <p className="descrip-editar">{articulo.descripcion}</p>
        <p>{articulo.categoria}</p>
        <p>${articulo.precio}</p>
        <button>
          <Link to={`/admin/edicion/${articulo._id}`} className="edit">
            Editar
          </Link>
        </button>
      </article>

      <br />
    </React.Fragment>
  ));
};
