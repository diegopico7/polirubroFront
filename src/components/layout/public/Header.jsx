import { Link } from "react-router-dom";
import { Nav } from "./Nav";
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
      <Nav />
      <NavBar></NavBar>
    </header>
  );
};
