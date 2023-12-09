import imagen from "../../assets/img/Logos/logosinsombra.png";

export const Nosotros = () => {
  return (
    <div className="contenedor-nosotros">
      <article className="imagen-contenedor">
        <img src={imagen} alt="nosotros" className="imagen-nosotros" />
      </article>
      <article className="historia-contenedor">
        <h3 className="titulo-historia">Nuestra historia</h3>
        <p className="descripcion-historia">
          Somos Polirubro Aconquija, una empresa familiar ubicada en la
          provincia de Tucumán, en el departamento Yerba Buena. Desde el año
          2006, nos dedicamos a la venta de productos de juguetería, librería,
          maquillaje, artículos varios de temporada, bijouterie, y más. Nuestra
          tienda se encuentra en la Av. Aconquija, en la zona céntrica de Yerba
          Buena.
        </p>
      </article>
    </div>
  );
};
