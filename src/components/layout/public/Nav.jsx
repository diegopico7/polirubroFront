import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CarritoContext } from "../../../context/CarritoContext";

export const Nav = () => {
  const { listaCompras } = useContext(CarritoContext);
  return (
    <nav className="navbar__container-lists">
      <ul className="container-lists__menu-list">
        <li className="menu-list__item">
          <NavLink to="/productos" className="menu-list__link">
            <i className="fa-solid fa-shop"></i>
            <span className="menu-list__title">Productos</span>
          </NavLink>
        </li>
        <li className="menu-list__item">
          <NavLink to="/carrito" className="menu-list__link">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="menu-list__title">Carrito</span>
          </NavLink>
        </li>
        <NavLink to="/carrito">
          <Badge badgeContent={listaCompras.length} color="success">
            <ShoppingCart color="action" />
          </Badge>
        </NavLink>
        <li className="menu-list__item"></li>
      </ul>
      <NavLink to="/admin" className="menu-list__link">
        <i className="fa-solid fa-gear"></i>
        <span className="menu-list__title">Admin</span>
      </NavLink>
    </nav>
  );
};
