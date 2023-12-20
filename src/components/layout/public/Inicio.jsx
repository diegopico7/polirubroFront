import logoPrincipal from "../../../assets/img/Logos/logoRectangular/1.png";
import { Productos } from "../../products/Productos";
import Banner from "../../utilidades/Banner";
import { Contacto } from "../../utilidades/Contacto";
import { Footer } from "../../utilidades/Footer";

import { Nosotros } from "../../utilidades/Nosotros";
import { WhatsApp } from "../../utilidades/WhatsApp";

export const Inicio = () => {
  return (
    <>
      <div></div>
      <WhatsApp></WhatsApp>
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
      <Footer></Footer>
    </>
  );
};
