export const Contacto = () => {
  return (
    <div className="contacto-contenedor">
      <h3 className="titulo-contacto">Contáctanos</h3>

      <div className="tarjetas-contenedor">
        <article className="tarjeta-contacto">
          <i className="fa-solid fa-thumbs-up fa-2xl"></i>
          <h4>Redes Sociales</h4>
          <p>
            Seguinos en nuestras redes sociales y enterate de todas nuestras
            novedades
          </p>
          <div className="iconos-redes">
            <i className="fa-brands fa-square-instagram  fa-2xl"></i>
            <i className="fa-brands fa-tiktok  fa-2xl"></i>
            <i className="fa-brands  fa-square-whatsapp fa-2xl"></i>
            <i className="fa-brands fa-facebook  fa-2xl"></i>
          </div>
        </article>

        <article className="tarjeta-contacto">
          <i className="fa-solid fa-house   fa-2xl"></i>
          <h4>Visítanos</h4>
          <p>
            Visítanos en nuestro local en Av Aconquija 2076 Yerba Buena -
            Tucumán
          </p>
          <div className="iconos-redes">
            <i className="fa-solid fa-location-dot  fa-2xl"></i>
          </div>
        </article>

        <article className="tarjeta-contacto">
          <i className="fa-solid fa-comment-sms fa-beat  fa-2xl"></i>
          <h4>Chat en vivo</h4>
          <p>Dejanos tu mensaje y nos comunicaremos contigo a la brevedad</p>
          <div className="iconos-redes">
            <i className="fa-brands fa-square-whatsapp  fa-2xl"></i>
          </div>
        </article>
      </div>
    </div>
  );
};
