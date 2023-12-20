import { Global } from "../helpers/Global";
import { Peticion } from "../helpers/Peticion";
import { NavLink, useParams } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { useState } from "react";
import { useEffect } from "react";

export const EditarForm = () => {
  const { form, changed } = useForm({});
  const [resultado, setResultado] = useState("");
  const [articulo, setArticulo] = useState({});

  const params = useParams();

  const conseguirArticulos = async () => {
    const { datos } = await Peticion(
      Global.url + "articulo/" + params.id,
      "GET"
    );
    console.log("Datos recibidos:", datos);
    if (datos.status === "success") {
      setArticulo(datos.articulo);
    }
  };

  useEffect(() => {
    conseguirArticulos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  const editarArticulo = async (e) => {
    e.preventDefault();

    let nuevoArticulo = form;
    console.log("Datos a enviar:", nuevoArticulo);
    const { datos } = await Peticion(
      Global.url + "articulo/" + params.id,
      "PUT",
      nuevoArticulo
    );
    console.log("Respuesta de la solicitud:", datos);
    // aqui ver si succes es mayus o  min
    if (datos.status === "success") {
      setResultado("guardado");

      //subir imagen
      const fileInput = document.querySelector("#file");
      const formData = new FormData();
      formData.append("file0", fileInput.files[0]);

      //peticion
      // eslint-disable-next-line no-unused-vars
      const respuestaSubida = await Peticion(
        Global.url + "subir/" + datos.articulo._id,
        "POST",
        formData,
        true
      );
      if (respuestaSubida.datos.status === "success") {
        setResultado("guardado");
      }
    } else {
      setResultado("error");
    }
  };

  return (
    <div className="contenedor-carga">
      <h1 className="titulo-carga">Editar Articulos</h1>
      <h2>Articulo que vamos a editar</h2>

      <article className="articulo-contenedor">
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
        <h3>{articulo.titulo}</h3>
        <h4>{articulo.descripcion}</h4>
        <h4>{articulo.precio}</h4>
        <h5>{articulo.categoria}</h5>
      </article>
      <pre>{JSON.stringify(form)}</pre>
      <h2>Formulario para editar:</h2>
      <h4>
        Recuerda llenar todos los campos del formulario con los datos nuevos
        sean o no cambiados
      </h4>

      <form className="formulario-carga" onSubmit={editarArticulo}>
        <label htmlFor="titulo">Titulo:</label>
        <input
          type="text"
          name="titulo"
          placeholder={articulo.titulo}
          onChange={changed}
          defaultValue={articulo.titulo}
        />
        <label htmlFor="descripcion">Descripción:</label>
        <input
          type="text"
          name="descripcion"
          placeholder=" descripcion articulo"
          onChange={changed}
          defaultValue={articulo.descripcion}
        />
        <label htmlFor="precio">Precio:</label>
        <input
          type="number"
          name="precio"
          placeholder=" precio:$"
          onChange={changed}
          defaultValue={articulo.precio}
        />

        <label htmlFor="categoria">Categoría:</label>
        <select name="categoria" onChange={changed}>
          <option value="libreria">librería</option>
          <option value="juguetes">juguetes</option>
          <option value="bijouterie">bijouterie</option>
          <option value="maquillaje">maquillaje</option>
          <option value="varios">varios</option>
        </select>

        <label htmlFor="file0">Imagen</label>
        <input type="file" name="file0" id="file" />

        <div className="contenedor-btn">
          <input type="submit" value="  Enviar  " />
          <input type="reset" value=" Reestrablecer " />
        </div>

        <strong>{resultado === "guardado" ? "Articulo guardado" : ""}</strong>
        <strong>{resultado === "error" ? "Articulo no guardado" : ""}</strong>
      </form>
      <div className="volver-editar">
        <NavLink to="/admin/editar">Seguir editando</NavLink>
      </div>
    </div>
  );
};
