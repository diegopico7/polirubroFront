// import { Link } from "react-router-dom";
import { Nav } from "./Nav";

export const Header = () => {
  return (
    <header className="layout__navbar">
      {/* <div className="navbar__header">
        <Link to={"/"} className="navbar__title">
          Polirubro
        </Link>
      </div> */}
      <Nav />
    </header>
  );
};
