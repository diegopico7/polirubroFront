import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import emailjs from "emailjs-com";
import "react-whatsapp-widget/dist/index.css";

export const Carrito = () => {
  const { listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra } =
    useContext(CarritoContext);
  const initialState = {
    cantidades: {},
    precio: {},
    contacto: {
      nombre: "",
      telefono: "",
      email: "",
      comentario: "",
    },
  };

  const calcularTotal = () => {
    return listaCompras
      .reduce((total, item) => total + item.precio * item.cantidad, 0)
      .toFixed(2);
  };

  const [formState, setFormState] = useState(initialState);

  const handleImpresion = () => {
    print();
  };

  // const handleContacto = (e) => {
  //   e.preventDefault();
  // };

  const handleContactoChange = (e) => {
    const { id, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      contacto: { ...prevState.contacto, [id]: value },
    }));
  };
  let tablaCompras;
  const sendEmail = (e) => {
    e.preventDefault();

    tablaCompras = listaCompras
      .map((item) => {
        return `${item.titulo} - ${item.cantidad}  -${item.precio} \n`;
      })
      .join("\n");
    let tablaTotal = calcularTotal();
    const templateParams = {
      from_name: formState.contacto.nombre,
      to_name: "dgpicasso@hotmail.com",
      message: `Pedido de Compras:\n\n Producto- cantidad  -precio  \n\n  ${tablaCompras}  \n\n -total del pedido=$   ${tablaTotal}  \n\n  email del cliente: ${formState.contacto.email} \n\n teléfono: ${formState.contacto.telefono} \n\nComentario: ${formState.contacto.comentario}`,
      titulos: listaCompras.map((item) => item.titulo),
      cantidades: listaCompras.map((item) => item.cantidad),
      precio: listaCompras.map((item) => item.precio),
    };

    emailjs
      .send(
        "service_bcki4zc",
        "pedidosPolirubro",
        templateParams,
        "ssSt-cPW-NpzAbyfZ"
      )
      .then(
        (result) => {
          console.log("Correo enviado:", result.text);
          alert(
            "Correo enviado: En breve nos comunicaremos con usted. Muchas gracias!"
          );
          listaCompras.forEach((item) => {
            eliminarCompra(item._id);
          });
          setFormState(initialState);
        },
        (error) => {
          console.error("Error al enviar el correo:", error.text);
        }
      );
  };
  return (
    <>
      <h1 className="titulo-carrito hide-print">Polirubro Aconquija</h1>

      <h3 className="tus-productos">Tus productos: </h3>
      <div className="contenedor-total-carrito">
        <section className="tabla-contenedora" id="content">
          <table className="table">
            <thead>
              <tr className="titulo-tabla">
                <th>Nombre</th>
                <th>Categoria</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th></th>
                <th>Eliminar</th>
              </tr>
            </thead>

            <tbody className="body-tabla">
              {listaCompras.map((item) => (
                <tr key={item._id}>
                  <td>{item.titulo}</td>
                  <td>{item.categoria}</td>
                  <td>${item.precio}</td>
                  <td className="td-cantidad">
                    <button
                      className="btn-cant"
                      onClick={() => disminuirCantidad(item._id)}
                    >
                      <i className="fa-solid fa-minus fa-2xs "></i>
                    </button>
                    <button className="btn-cant">{item.cantidad}</button>
                    <button
                      className="btn-cant"
                      onClick={() => aumentarCantidad(item._id)}
                    >
                      <i className="fa-solid fa-plus fa-2xs "></i>
                    </button>
                  </td>
                  <td className="td-vacia"></td>
                  <td className="btn-eliminar-td">
                    <button
                      type="button"
                      className="btn-eliminar"
                      onClick={() => {
                        eliminarCompra(item._id);
                      }}
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}

              <tr className="titulo-tabla">
                <th colSpan="4">Contacto</th>
              </tr>
              <tr>
                <td>Nombre</td>
                <td>Teléfono</td>
                <td>Email</td>
                <td>Comentario</td>
              </tr>
              <tr>
                <td>{formState.contacto.nombre}</td>
                <td>{formState.contacto.telefono}</td>
                <td>{formState.contacto.email}</td>
                <th>
                  <b>TOTAL: </b>
                </th>
                <td></td>

                <td className="td-total">${calcularTotal()}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <article className="btn-compras">
            <button className="btn-comprar hide-print">
              <Link className="seguir-compra" to="/productos">
                Agregar más productos
              </Link>
            </button>

            <button
              id="print"
              className="btn-comprar hide-print"
              onClick={handleImpresion}
              disabled={listaCompras < 1}
            >
              Imprimir Pedido
            </button>
            <button
              id="print"
              className="btn-comprar hide-print"
              onClick={sendEmail}
              disabled={listaCompras < 1}
            >
              Enviar por Email
            </button>
          </article>
        </section>

        <div className="hide-print contenedor-form-contacto">
          <div className="contenedor-datos">
            <h2 className="titulo-datos">Formulario de Contacto</h2>
            <form>
              <div className="form-group1">
                <label htmlFor="user_name">Nombre Completo</label>
                <input
                  className="formulario-carrito"
                  type="text"
                  id="nombre"
                  name="user_name"
                  value={formState.contacto.nombre}
                  onChange={handleContactoChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="telefono">Teléfono</label>
                <input
                  className="formulario-carrito"
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formState.contacto.telefono}
                  onChange={handleContactoChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="user_email">Email</label>
                <input
                  className="formulario-carrito"
                  type="email"
                  id="email"
                  name="user_email"
                  value={formState.contacto.email}
                  onChange={handleContactoChange}
                  required
                />
              </div>
              <div className="form-group hide-print">
                <label htmlFor="comentario">Dudas o Comentarios</label>
                <textarea
                  className="form-post__textarea"
                  id="comentario"
                  name="comentario"
                  value={formState.contacto.comentario}
                  onChange={handleContactoChange}
                  rows="4"
                  maxLength={150}
                  placeholder="maximo 150 letras"
                ></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
