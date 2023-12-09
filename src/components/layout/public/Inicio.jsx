import logoPrincipal from "../../../assets/img/Logos/LOGOPOLI.jpg";
import { Productos } from "../../products/Productos";
import Banner from "../../utilidades/Banner";
import { Contacto } from "../../utilidades/Contacto";

import { Nosotros } from "../../utilidades/Nosotros";

export const Inicio = () => {
  return (
    <>
      <div></div>
      <div className="contenedor-inicio">
        <h1 className="titulo-principal">Polirubro Aconquija</h1>
        <img
          src={logoPrincipal}
          alt="logo empresa"
          className="logo-principal"
        />
      </div>
      <div>
        <Banner></Banner>
      </div>

      <div>
        <Productos></Productos>
      </div>

      <Nosotros />
      <Contacto />
    </>
  );
};
