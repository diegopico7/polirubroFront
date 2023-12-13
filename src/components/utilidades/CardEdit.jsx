/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "../../assets/css/card.css";
import { Global } from "../../helpers/Global";
import { Link } from "react-router-dom";

export const CardEdit = ({
  imagen,
  titulo,
  descripcion,
  categoria,
  precio,
  articulos,
  setArticulos,
}) => {
  return (
    <div className="articulo-contenedor ">
      {imagen != "default.png" && (
        <img
          src={Global.url + "imagen/" + imagen}
          className="img-productos tarjeta-imagen"
        />
      )}
      {imagen == "default.png" && (
        <img
          src="http://www.tucprogram.online/img/muestras/organizacion.png"
          alt=""
          className="img-productos"
        />
      )}
      <h4 className="">{titulo}</h4>
      <p className="">{descripcion}</p>
      <p className="">{categoria}</p>
      <p className="">${precio}</p>

      <button>
        <Link to={"/admin/edicion/"} className="edit">
          Editar
        </Link>
      </button>
    </div>
  );
};
