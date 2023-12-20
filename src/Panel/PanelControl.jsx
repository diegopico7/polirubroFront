import { NavLink } from "react-router-dom";
import create from "../assets/img/Logos/logoRectangular/20.png";

export const PanelControl = () => {
  return (
    <>
      <section className="contenedor-panel">
        <div className="card-panel">
          <img src={create} alt="crear articulo" />
          <div>
            <h2>Crear Producto</h2>
            <p>
              Aqui vas a poder crear tus productos y actualizarlos al instante
              en la WebSite
            </p>
            <NavLink to="/admin/crear">
              <button>Crear</button>
            </NavLink>
          </div>
        </div>

        <div className="card-panel">
          <img src={create} alt="crear articulo" />
          <div>
            <h2>Editar Producto</h2>
            <p>
              Aqui vas a poder editar tus productos y actualizarlos al instante
              en la WebSite
            </p>
            <NavLink to="/admin/editar">
              <button>Editar</button>
            </NavLink>
          </div>
        </div>

        <div className="card-panel">
          <img src={create} alt="crear articulo" />
          <div>
            <h2>Borrar Producto</h2>
            <p>
              Aqui vas a poder borrar tus productos y actualizarlos al instante
              en la WebSite
            </p>

            <NavLink to="/admin/borrar">
              <button>Borrar</button>
            </NavLink>
          </div>
        </div>

        <div className="card-panel">
          <img src={create} alt="crear articulo" />
          <div className="cont-card-text">
            <h2>Ayuda</h2>
            <p>Guia para el panel de control.</p>

            <NavLink to="/admin/ayuda">
              <button>Ayuda</button>
            </NavLink>
          </div>
        </div>
        <div className="card-panel">
          <img src={create} alt="crear articulo" />
          <div className="cont-card-text">
            <h2>Sitio Web</h2>
            <p>Volver al sitio web</p>

            <NavLink to="/">
              <button>WebSite</button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};
