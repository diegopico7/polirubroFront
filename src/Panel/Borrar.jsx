import { BorrarArticulo } from "./BorrarArticulo";

export const Borrar = () => {
  return (
    <>
      <h2 className="titulo-maquillaje">Borrar Articulos</h2>
      <h4 className="titulo-maquillaje">Elija el articulo a borrar</h4>
      <div className="contenedor-todos">
        <BorrarArticulo />
      </div>
    </>
  );
};
