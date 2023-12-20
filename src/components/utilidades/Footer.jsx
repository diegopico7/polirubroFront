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
            <NavLink
              to="https://www.instagram.com/polirubroaconquija/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
              rel="noreferrer"
              className="link-red"
            >
              <i className="fa-brands fa-instagram  fa-xl"></i>
            </NavLink>
            <NavLink
              to="https://www.tiktok.com/@flovilaro25?is_from_webapp=1&sender_device=pc"
              target="_blank"
              className="link-red"
              rel="noreferrer"
            >
              <i className="fa-brands fa-tiktok  fa-xl"></i>
            </NavLink>
            <NavLink
              to="https://api.whatsapp.com/send?phone=54938113368111"
              target="_blank"
              className="link-red"
            >
              <i className="fa-brands fa-whatsapp  fa-xl"></i>
            </NavLink>
            <div>
              <i className="fa-brands fa-facebook  fa-xl"></i>
            </div>
          </div>
        </article>
        {/* <article className="tarjeta-footer">
          <h3 className="titulo-ubicacion">Ubicación</h3>
          <a
            href="https://goo.gl/maps/2ittAuTAXnQhBv356"
            target="_blanck"
            rel="noreferrer"
            className="link-red"
          >
            <i className="fa-solid fa-location-dot  fa-l">visitanos</i>
          </a>
        </article> */}
        <article className="tarjeta-footer">
          <h3 className="titulo-links">Links</h3>
          <div className="links-footer">
            <NavLink to="/" className="link-red">
              <i className="fa-solid fa-house"></i>
            </NavLink>
            <NavLink to="/carrito" className="link-red">
              <i className="fa-solid fa-cart-shopping"></i>
            </NavLink>
            <NavLink to="/productos" className="link-red">
              <i className="fa-solid fa-shop"></i>
            </NavLink>
          </div>
        </article>
      </div>
      <h4 className="copyright">Copyright by DiegoPico 2023</h4>
    </div>
  );
};
