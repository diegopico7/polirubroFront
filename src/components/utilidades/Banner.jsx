import { useEffect, useState } from "react";
import foto1 from "../../assets/img/Logos/logoRectangular/7.png";
import foto2 from "../../assets/img/Logos/logoRectangular/11.png";
import foto3 from "../../assets/img/Logos/logoRectangular/15.png";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const slider = document.querySelector(".slider");
    slider.style.transform = `translateX(${-currentSlide * 100}%)`;
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3);
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
