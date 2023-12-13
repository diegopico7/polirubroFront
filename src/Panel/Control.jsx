import { NavLink } from "react-router-dom";

export const Control = () => {
  return (
    <section className="contenedor-control">
      <article>
        <NavLink to="/admin/crear">
          <h2>Crear articulo</h2>{" "}
        </NavLink>
        <NavLink to="/admin/editar">
          <h2>Editar articulo</h2>{" "}
        </NavLink>
        <NavLink to="/admin/borrar">
          <h2>Borrar Articulo</h2>{" "}
        </NavLink>
      </article>
    </section>
  );
};
