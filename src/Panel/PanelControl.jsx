import { NavLink } from "react-router-dom";

export const PanelControl = () => {
  return (
    <>
      <div className="contenedor-panel">
        <div className="aside-contenedor">
          <ul className="links-aside">
            <NavLink>Edicion Productos</NavLink>
            <NavLink>Administración</NavLink>
            <NavLink>WebSite</NavLink>
          </ul>
        </div>
        <div className="titulo-panel1">
          <h1>Panel de control</h1>
          <h2>Polirubro Aconquija</h2>
        </div>
        <div className="contenedor-links-panel">
          <NavLink to="/admin/control">
            <button className="btn-panel-control">Edición de productos</button>
          </NavLink>
          <NavLink to="/admin/administracion">
            <button className="btn-panel-control">Administración</button>
          </NavLink>
          <NavLink to="/">
            <button className="btn-panel-control">WebSite</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};
