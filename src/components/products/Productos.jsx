import { NavLink } from "react-router-dom";
import jugueteria from "../../assets/img/Logos/tarjetas/2.png";
import libreria from "../../assets/img/Logos/tarjetas/1.png";
import maquillaje from "../../assets/img/Logos/tarjetas/3.png";
import bijouterie from "../../assets/img/Logos/tarjetas/4.png";
import varios from "../../assets/img/Logos/tarjetas/5.png";

export const Productos = () => {
  return (
    <>
      <h2 className="titulo-productos">Nuestros Productos</h2>
      <section className="productos-contenedor">
        <div className="gallery">
          <NavLink to="/productos" className="card">
            <figure>
              <img src={jugueteria} alt="carta1" />
              <figcaption className="fig-productos">
                <h3 className="card-text">Jugueteria</h3>
              </figcaption>
            </figure>
          </NavLink>
          <NavLink to="/productos" className="card">
            <figure>
              <img src={libreria} alt="carta2" />
              <figcaption className="fig-productos">
                <h3 className="card-text">Libreria</h3>
              </figcaption>
            </figure>
          </NavLink>
          <NavLink to="/productos" className="card">
            <figure>
              <img src={maquillaje} alt="carta3" />
              <figcaption className="fig-productos">
                <h3 className="card-text">Maquillaje</h3>
              </figcaption>
            </figure>
          </NavLink>
          <NavLink to="/productos" className="card">
            <figure>
              <img src={bijouterie} alt="carta3" />
              <figcaption className="fig-productos">
                <h3 className="card-text">Bijouterie</h3>
              </figcaption>
            </figure>
          </NavLink>{" "}
          <NavLink to="/productos" className="card">
            <figure>
              <img src={varios} alt="carta3" />
              <figcaption className="fig-productos">
                <h3 className="card-text">Varios</h3>
              </figcaption>
            </figure>
          </NavLink>
        </div>
      </section>
    </>
  );
};
