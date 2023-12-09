/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "../../assets/css/card.css";
import { Global } from "../../helpers/Global";

export const Card = ({
  imagen,
  titulo,
  descripcion,
  categoria,
  precio,
  handleAgregar,
  handleQuitar,
  handleAumentar,
  handleDisminuir,
}) => {
  const [added, setAdded] = useState(false);

  const clickAgregar = () => {
    handleAgregar();
    setAdded(true);
  };
  const clickQuitar = () => {
    handleQuitar();
    setAdded(false);
  };

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
      <p className="">{precio}</p>

      {added ? (
        <button type="button" className="boton-quitar" onClick={clickQuitar}>
          Quitar del Carrito
        </button>
      ) : (
        <button type="button" className="boton-agregar" onClick={clickAgregar}>
          Agregar Carrito
        </button>
      )}
    </div>
  );
};
