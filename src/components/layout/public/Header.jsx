import { Link, NavLink } from "react-router-dom";

import logo11 from "../../../assets/img/Logos/logosinsombra.png";
import NavBar from "./NavBar";

export const Header = () => {
  return (
    <header className="layout__navbar">
      <div className="navbar__header">
        <Link to={"/"} className="navbar__title">
          <img src={logo11} alt="" width="70px" />
        </Link>
      </div>

      <NavBar></NavBar>

      <NavLink to="/admin" className="menu-list__link">
        <i className="fa-solid fa-gear"></i>
        <span className="menu-list__title">Admin</span>
      </NavLink>
    </header>
  );
};
