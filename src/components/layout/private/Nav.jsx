import { NavLink } from "react-router-dom";
import logo1 from "../../../assets/img/user.png";

export const Nav = () => {
  return (
    <nav className="navbar__container-lists">
      <ul className="container-lists__menu-list">
        <li className="menu-list__item">
          <NavLink to="/" className="menu-list__link">
            <i className="fa-solid fa-house"></i>
            <span className="menu-list__title">WebSite</span>
          </NavLink>
        </li>
        <li className="menu-list__item">
          <NavLink to="/admin/ventas" className="menu-list__link">
            <i className="fa-solid fa-plus"></i>
            <span className="menu-list__title">Crear</span>
          </NavLink>
        </li>
        <li className="menu-list__item">
          <a href="#" className="menu-list__link">
            <i className="fa-solid fa-list"></i>
            <span className="menu-list__title">Editar</span>
          </a>
        </li>

        <li className="menu-list__item">
          <a href="#" className="menu-list__link">
            <i className="fa-solid fa-trash"></i>
            <span className="menu-list__title">Borrar</span>
          </a>
        </li>
      </ul>

      <ul className="container-lists__list-end">
        <li className="list-end__item">
          <a href="#" className="list-end__link-image">
            <img src={logo1} className="list-end__img" alt="Imagen de perfil" />
          </a>
        </li>

        <li className="list-end__item">
          <NavLink to="/admin" className="list-end__link">
            <span className="list-end__name">Admin</span>
            <i className="fa-solid fa-gear"></i>
          </NavLink>
        </li>
        <li className="list-end__item">
          <NavLink to="/admin/logout" className="list-end__link">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            <span className="list-end__name">Cerrar sesión</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
