import { NavLink } from "react-router-dom";
import logo from "../../assets/img/Logos/logosinsombra.png";

export const Footer = () => {
  return (
    <div className="todo-footer">
      <div className="contenedor-footer">
        <article className="tarjeta-footer">
          <img src={logo} alt="" />
        </article>
        <article className="tarjeta-footer">
          <h3 className="titulo-red">Redes sociales</h3>
          <div className="iconos-redes-footer">
            <i className="fa-brands fa-square-instagram  fa-2xl"></i>
            <i className="fa-brands fa-tiktok  fa-2xl"></i>
            <i className="fa-brands  fa-square-whatsapp fa-2xl"></i>
            <i className="fa-brands fa-facebook  fa-2xl"></i>
          </div>
        </article>
        <article className="tarjeta-footer">
          <h3 className="titulo-ubicacion">Ubicación</h3>
          <a
            href="https://goo.gl/maps/2ittAuTAXnQhBv356"
            target="_blanck"
            rel="noreferrer"
          >
            <i className="fa-solid fa-location-dot  fa-l">visitanos</i>
          </a>
        </article>
        <article className="tarjeta-footer">
          <h3 className="titulo-links">Links</h3>
          <div className="links-footer">
            <NavLink to="/">
              <i className="fa-solid fa-house"></i>
            </NavLink>
            <NavLink to="/carrito">
              <i className="fa-solid fa-cart-shopping"></i>
            </NavLink>
            <NavLink to="/productos">
              <i className="fa-solid fa-shop"></i>
            </NavLink>
          </div>
        </article>
      </div>
      <h4 className="copyright">Copyright by DiegoPico 2023</h4>
    </div>
  );
};
