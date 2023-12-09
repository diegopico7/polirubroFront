import { NavLink } from "react-router-dom";
import card1 from "../../assets/img/Logos/LOGOPOLI.jpg";
import card2 from "../../assets/img/Logos/logosinsombra.jpg";
import card3 from "../../assets/img/Logos/LOGOSPOLI1.jpg";

export const Productos = () => {
  return (
    <>
      <h2 className="titulo-productos">Nuestros Productos</h2>
      <section className="productos-contenedor">
        <div className="gallery">
          <NavLink to="/productos" className="card">
            <figure>
              <img src={card1} alt="carta1" />
              <figcaption>
                <h3 className="card-text">Jugueteria</h3>
              </figcaption>
            </figure>
          </NavLink>
          <NavLink to="/productos" className="card">
            <figure>
              <img src={card2} alt="carta2" />
              <figcaption>
                <h3 className="card-text">Libreria</h3>
              </figcaption>
            </figure>
          </NavLink>
          <NavLink to="/productos" className="card">
            <figure>
              <img src={card3} alt="carta3" />
              <figcaption>
                <h3 className="card-text">Maquillaje</h3>
              </figcaption>
            </figure>
          </NavLink>
          <NavLink to="/productos" className="card">
            <figure>
              <img src={card3} alt="carta3" />
              <figcaption>
                <h3 className="card-text">Varios</h3>
              </figcaption>
            </figure>
          </NavLink>
        </div>
      </section>
    </>
  );
};
