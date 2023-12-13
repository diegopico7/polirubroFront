import { Peticion } from "../../helpers/Peticion";
import { Global } from "../../helpers/Global";

export const ListadoArtBorrar = ({ articulos, setArticulos }) => {
  const eliminar = async (id) => {
    let { datos } = await Peticion(Global.url + "articulo/" + id, "DELETE");
    if (datos.status === "Succes") {
      let articulosActualizados = articulos.filter(
        (articulo) => articulo._id !== id
      );
      setArticulos(articulosActualizados);
    }
  };

  return articulos.map((articulo) => {
    return (
      <>
        <article key={articulo._id} className="articulo-contenedor">
          {articulo.imagen != "default.png" && (
            <img
              src={Global.url + "imagen/" + articulo.imagen}
              className="img-productos"
            />
          )}
          {articulo.imagen == "default.png" && (
            <img
              src="http://www.tucprogram.online/img/muestras/organizacion.png"
              alt=""
              className="img-productos"
            />
          )}
          <h4>{articulo.titulo}</h4>
          <p>{articulo.descripcion}</p>
          <p>{articulo.categoria}</p>
          <p>${articulo.precio}</p>

          <button
            type="button"
            onClick={() => {
              eliminar(articulo._id);
            }}
          >
            Eliminar
          </button>
        </article>
      </>
    );
  });
};
