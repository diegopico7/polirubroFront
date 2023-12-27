/* eslint-disable react/no-unescaped-entities */
import panel1 from "../assets/img/ayuda/panelcontrol1.png";
import crear1 from "../assets/img/ayuda/crear-carta.png";
import crear2 from "../assets/img/ayuda/crear1.png";
import crear3 from "../assets/img/ayuda/prevCrear.png";
import crear4 from "../assets/img/ayuda/crearCompleto.png";
import noCrear from "../assets/img/ayuda/articulo-nocreado.png";
import editar from "../assets/img/ayuda/edtar.png";
import paginaEditar from "../assets/img/ayuda/paginaEditar.png";
import editar1 from "../assets/img/ayuda/edicion1.png";
import editarNo from "../assets/img/ayuda/edicionNo.png";
import editarSi from "../assets/img/ayuda/editadoSi.png";
import borrar from "../assets/img/ayuda/borrar.png";
import listBorrar from "../assets/img/ayuda/listadoBorrar.png";
import flechaArriba from "../assets/img/flechaarriba.gif";
import pdf from "../assets/ayuda.pdf";

export const Ayuda = () => {
  return (
    <div className="contenedor-ayuda">
      <h1 className="ayuda-titulo">
        Guia panel de control Polirubro Aconquija
      </h1>

      <h4 className="titulo-indice">Indice</h4>
      <article className="temario">
        <ul className="lista-indice">
          <li>Introducción</li>
          <li>
            <a href="#crear">Crear articulo</a>
          </li>
          <li>
            <a href="#editar">Editar Articulo</a>
          </li>
          <li>
            <a href="#borrar">Borrar Articulo</a>
          </li>
          <li>
            <a href="">PDF</a>
          </li>
        </ul>
      </article>
      <article className="contenedor-secciones-ayuda">
        <h3 id="introduccion">Introducción</h3>
        <p>
          En esta guia vas a encontrar como usar el panel de control, desde
          crear, editar, borrar productos y cualquier otra funcionalidad que
          tenga tu sitio web, recuerda que dependiendo la funcionalidad que
          requiera o tenga tu sitio vamos a adaptar la guia para tu comodidad y
          mejor entendimiento. Si no encontras tu solución aqui, no dudes en
          contactar con algún representante, con gusto vamos a ayudarte. Ahora
          si podemos comenzar
        </p>
        <p>
          Recorramos un poco el panel de control, donde nos vamos a encontrar
          con las tarjetas correspondientes a cada funcionalidad de nuestro
          sitioWeb en este caso tenemos las tarjetas de crear, editar, borrar,
          ayuda y sitioWeb. (imagen a.0)
        </p>
        <figure>
          <img
            src={panel1}
            alt="panel de control"
            className="img-ayuda-panel"
          />
          <figcaption className="figcaption-ayuda">imagen a.0</figcaption>
        </figure>
      </article>
      <article className="contenedor-secciones-ayuda">
        <h3 id="crear">1- Crear Artículo</h3>
        <p>
          1.1 Para crear un artículo nos dirigmos a la carta de crear(imágen
          a.1)
        </p>
        <figure className="figure-ayuda">
          <img src={crear1} alt="carta-crear" />
          <figcaption className="figcaption-ayuda">
            <h5> Imagen a.1 </h5>
          </figcaption>
        </figure>
        <p>
          1.2 Accedemos al panel de crear artículo(imagen a.2) donde vamos a
          completar el formulario con todos los datos requiridos,{" "}
          <span className="recordatorio-ayuda">
            "recuerda muy importante completar todos los campos del formulario"
          </span>{" "}
          de lo contrario no se creará el art.
        </p>

        <figure className="figure-ayuda">
          <img src={crear2} alt="" className="img-large" />
          <figcaption className="figcaption-ayuda">
            <h5>imagen a.2</h5>
          </figcaption>
        </figure>
        <p>
          1.3 En el panel de crear tambien tenemos una vista previa del artículo
          recuerda que solo el texto carga automáticamente mientras rellenamos
          los campos del form, la imágen se cargará luego de creado el
          artículo(imágen a.3)
        </p>
        <figure className="figure-ayuda">
          <img src={crear3} alt="form-crear" className="img-large" />
          <figcaption className="figcaption-ayuda">
            <h5>imágen a.3</h5>
          </figcaption>
        </figure>
        <p>
          1.3 Una vez que hagams click en el botón de crear se cargará la imagen
          y nos mostrara un mensaje de articulo creado(imagen a.4), si hay un
          error nos mostrara un mensaje de articulo no creado(imagen a.5)
        </p>
        <figure className="figure-ayuda">
          <img src={crear4} alt="art-creado" className="img-large" />
          <figcaption className="figcaption-ayuda">
            <h5>imagen a.4</h5>
          </figcaption>
          <img src={noCrear} alt="art-no-Creado" className="img-large" />
          <figcaption className="figcaption-ayuda">
            <h5>imagen a.5</h5>
          </figcaption>
        </figure>
        <h4>
          1.4 Siguiendo estos pasos ya puedes crear tu artículo y recuerda que
          se actualiza automáticamente la website.
        </h4>
      </article>
      <article className="contenedor-secciones-ayuda">
        <h3 id="editar">2- Editar Artículo</h3>
        <p>
          2.1 Para editar un producto nos dirigimos a la carta editar (imagen
          a.6)
        </p>
        <figure className="figure-ayuda">
          <img src={editar} alt="carta-crear" />
          <figcaption className="figcaption-ayuda">
            <h5> Imagen a.6 </h5>
          </figcaption>
        </figure>
        <p>
          2.2 Accedemos al listado de todos los productos donde vamos a
          seleccionar el artículo que vamos a editar (imagen a.7)
        </p>

        <figure className="figure-ayuda">
          <img
            src={paginaEditar}
            alt="listado completo editar"
            className="img-large"
          />
          <figcaption className="figcaption-ayuda">
            <h5>imagen a.7</h5>
          </figcaption>
        </figure>
        <p>
          2.3 Una vez que seleccionamos el artículo vamos a abrir el panel de
          edición(imagen a.8), donde tenemos la vista previa del articulo
          seleccionado.
        </p>
        <figure className="figure-ayuda">
          <img src={editar1} alt="form-editar" className="img-large" />
          <figcaption className="figcaption-ayuda">
            <h5>imágen a.8</h5>
          </figcaption>
        </figure>
        <p>
          2.4 Recuerda completar todos los datos del formulario, y también debes
          incluir un formato de imagen válido(jpg, png) si seguimos los pasos
          correspondientes nos mostrara un mensaje de Articulo editado(imagen
          a.9) de lo contrario nos dará un mensaje de error(imagen a.10)
        </p>
        <figure className="figure-ayuda">
          <img src={editarSi} alt="art-editado" className="img-large" />
          <figcaption className="figcaption-ayuda">
            <h5>imagen a.9</h5>
          </figcaption>
          <img src={editarNo} alt="art-no-editado" className="img-large" />
          <figcaption className="figcaption-ayuda">
            <h5>imagen a.10</h5>
          </figcaption>
        </figure>
        <h4>
          1.4 Siguiendo estos pasos ya puedes editar tu artículo y recuerda que
          se actualiza automáticamente la website.
        </h4>
      </article>
      <div className="volver-ayuda">
        <a href="#introduccion" className="link-volver-ayuda">
          <i className="fa-solid fa-up-long"></i> Inicio
        </a>
      </div>
      <article className="contenedor-secciones-ayuda">
        <h3 id="borrar">3- Borrar Artículo</h3>
        <p>
          3.1 Para borrar un producto nos dirigimos a la carta borrar (imagen
          a.11)
        </p>
        <figure className="figure-ayuda">
          <img src={borrar} alt="carta-borrar" />
          <figcaption className="figcaption-ayuda">
            <h5 className="image-number"> Imagen a.11 </h5>
          </figcaption>
        </figure>
        <p>
          3.1 Luego accedemos al listado completo de productos donde con solo
          hacer click en el boton de Eliminar se borrara el artículo
          seleccionado(imagen a.12)
          <span className="recordatorio-ayuda">
            ¡Recuerda que una vez borrado el artículo este ya no se puede
            recuperar!
          </span>
        </p>
        <figure className="figure-ayuda">
          <img
            src={listBorrar}
            alt="listado de art a borrar"
            className="img-large"
          />
          <figcaption className="figcaption-ayuda">
            <h5>imagen a.12</h5>
          </figcaption>
        </figure>
      </article>
      <article className="contenedor-secciones-ayuda">
        <h4 className="descarga-titulo">
          Puedes descargar en formato pdf el manual de ayuda
        </h4>
        <button className="boton-temario">
          <a
            className="temario-pdf"
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            download="ayuda.pdf"
          >
            Descarga PDF completo
          </a>
        </button>
      </article>

      <div className="flecha-inicio">
        <a href="#introduccion" className="flecha-inicio-link">
          <img src={flechaArriba} alt="flecha-arriba" />
          <p>Volver Inicio</p>
        </a>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};
