import { useState } from "react";
import { useForm } from "../hooks/useForm";
import { Peticion } from "../helpers/Peticion";
import { Global } from "../helpers/Global";
import { NavLink } from "react-router-dom";

export const Crear = () => {
  const { form, changed } = useForm({ categoria: "libreria" });
  const [resultado, setResultado] = useState("no creaste nada");

  const limpiarFormulario = () => {
    setResultado("no creaste nada"); // Oculta el mensaje de "Artículo guardado"
  };

  const guardarArticulo = async (e) => {
    e.preventDefault();
    const nuevoArticulo = form;

    const { datos } = await Peticion(
      Global.url + "crear",
      "POST",
      nuevoArticulo
    );
    if (datos.status === "Succes") {
      setResultado("guardado");

      //subir imagen
      const fileInput = document.querySelector("#file");
      const formData = new FormData();
      formData.append("file0", fileInput.files[0]);
      //peticion
      // eslint-disable-next-line no-unused-vars
      const subida = await Peticion(
        Global.url + "subir/" + datos.articulo._id,
        "POST",
        formData,
        true
      );
    } else {
      setResultado("error");
    }
  };
  return (
    <>
      <div className="contenedor-carga">
        <h1 className="titulo-carga">Crea tus productos</h1>
        <pre>{JSON.stringify(form)}</pre>

        <form className="formulario-carga" onSubmit={guardarArticulo}>
          <label htmlFor="titulo">Titulo:</label>
          <input
            type="text"
            name="titulo"
            placeholder=" titulo articulo"
            onChange={changed}
          />
          <label htmlFor="descripcion">Descripción:</label>
          <input
            type="text"
            name="descripcion"
            placeholder=" descripcion articulo"
            onChange={changed}
          />

          <label htmlFor="categoria">Categoría:</label>
          <select name="categoria" onChange={changed}>
            <option value="libreria">libreria</option>
            <option value="juguetes">juguetes</option>
            <option value="bijouterie">bijouterie</option>
            <option value="maquillaje">maquillaje</option>
            <option value="varios">varios</option>
          </select>

          <label htmlFor="precio">Precio:</label>
          <input
            type="number"
            name="precio"
            placeholder=" $precio"
            onChange={changed}
          />

          <label htmlFor="file0">Imagen</label>
          <input type="file" name="file0" id="file" />

          <div className="contenedor-btn">
            <input type="submit" value="  Enviar  " />
            <input
              type="reset"
              value=" Reestrablecer "
              onClick={limpiarFormulario}
            />
          </div>

          <strong>{resultado === "guardado" ? "Articulo guardado" : ""}</strong>
          <strong>{resultado === "error" ? "Articulo no guardado" : ""}</strong>
        </form>
        <hr />
        <br />
        <NavLink to="/admin/control">Volver al menu Control</NavLink>
      </div>
    </>
  );
};
