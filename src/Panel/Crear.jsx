import { useState } from "react";
import { useForm } from "../hooks/useForm";
import { Peticion } from "../helpers/Peticion";
import { Global } from "../helpers/Global";
import avatar12 from "../assets/img/Logos/logoRectangular/3.png";

export const Crear = () => {
  const { form, changed } = useForm({ categoria: "libreria" });
  const [resultado, setResultado] = useState("no creaste nada");
  const [imagenPreview, setImagenPreview] = useState(null);

  const limpiarFormulario = () => {
    setResultado("no creaste nada");
    setImagenPreview(null);
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
      setImagenPreview(URL.createObjectURL(fileInput.files[0]));
    } else {
      setResultado("error");
    }
  };
  return (
    <>
      <div className="contenedor-carga-gral">
        <h1>Crea tus productos</h1>

        <div className="contenedor-carga">
          <article className="prev-carga">
            <div className="articulo-contenedor prev-carga-card ">
              <h1>Vista del Artículo</h1>
              <br />
              <h2 className="prev-card">{form.titulo}</h2>
              <h5 className="prev-card">{form.descripcion}</h5>
              <h3 className="prev-card">{form.categoria}</h3>
              <h3 className="prev-card">${form.precio}</h3>
              {imagenPreview && <img src={imagenPreview} alt="Preview" />}
            </div>
          </article>
          <div className="nuevo-form">
            <div className="login-nuevo">
              <div className="avatar">
                <img src={avatar12} alt="avatar" />
              </div>
              <h3>Crear Productos</h3>
              <form className="login-form" onSubmit={guardarArticulo}>
                <div className="textbox">
                  <input
                    type="text"
                    name="titulo"
                    placeholder=" Titulo"
                    onChange={changed}
                  />
                </div>
                <div className="textbox">
                  <input
                    type="text"
                    name="descripcion"
                    placeholder=" Descripcion"
                    onChange={changed}
                  />
                </div>
                <div className="textbox">
                  <select name="categoria" onChange={changed}>
                    <option value="libreria">libreria</option>
                    <option value="juguetes">juguetes</option>
                    <option value="bijouterie">bijouterie</option>
                    <option value="maquillaje">maquillaje</option>
                    <option value="varios">varios</option>
                  </select>
                </div>
                <div className="textbox">
                  <input
                    type="number"
                    name="precio"
                    placeholder=" $precio"
                    onChange={changed}
                  />
                </div>
                <div className="texbox">
                  <input type="file" name="file0" id="file" />
                </div>
                <div className="cont-btn-crear">
                  <input
                    type="submit"
                    value="  Crear  "
                    className="btn-crear "
                  />
                  <input
                    type="reset"
                    value=" Reestrablecer "
                    onClick={limpiarFormulario}
                    className="btn-crear btn-reestablecer"
                  />
                </div>
                <h3 className="result-edit">
                  {resultado === "guardado" ? "Articulo guardado" : ""}
                </h3>
                <h3 className="result-edit-negativo">
                  {resultado === "error" ? "Articulo no guardado" : ""}
                </h3>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
