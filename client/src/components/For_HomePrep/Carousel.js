import React from 'react';
import '../../StylesFor_components/Carousel.css';

const Carousel = ({ items }) => {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            {item.type === 'image' && (
              <img src={item.content} className="d-block w-100" alt={item.alt} />
            )}
            {item.type === 'video' && (
              <video className="d-block w-100" controls>
                <source src={item.content} type="video/mp4" />
                Tu navegador no soporta videos.
              </video>
            )}
            {item.type === 'text' && (
              <div className="carousel-text">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
};

export default Carousel;
