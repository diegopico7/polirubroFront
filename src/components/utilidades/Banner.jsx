import { useState } from "react";
import foto1 from "../../assets/img/Logos/logosinsombra.jpg";
import foto2 from "../../assets/img/Logos/LOGOSPOLI1.jpg";
import foto3 from "../../assets/img/Logos/LOGOPOLI.jpg";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const showSlide = () => {
    const slider = document.querySelector(".slider");
    slider.style.transform = `translateX(${-currentSlide * 100}%)`;
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    showSlide();
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3);
    showSlide();
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <div className="slide" id="slide1">
          <img src={foto2} alt="Imagen 1" className="img-slider" />
        </div>
        <div className="slide" id="slide2">
          <img src={foto1} alt="Imagen 2" className="img-slider" />
        </div>
        <div className="slide" id="slide3">
          <img src={foto3} alt="Imagen 3" className="img-slider" />
        </div>
      </div>
      <button className="prev btn-slider" onClick={prevSlide}>
        <i className="fa-solid fa-backward"></i>
      </button>
      <button className="next btn-slider" onClick={nextSlide}>
        <i className="fa-solid fa-forward"></i>
      </button>
    </div>
  );
};

export default Banner;
