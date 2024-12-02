import React from 'react';
import Header from '../../components/For_HomePrep/Header';
import Carousel from '../../components/For_HomePrep/Carousel';
import FooterNavigation from '../../components/For_HomePrep/FooterNavigation';
import '../../StylesFor_components/FooterNavigation.css'
import '../../StylesViews/HomePrep.css';
//import HomeIcon from '../../components/For_Postres/Homeicon';

const HomePrep = () => {
  // Datos para el carrusel
  const carouselItems = [
    { type: 'image', content: 'https://via.placeholder.com/300', alt: 'Imagen 1' },
    { type: 'video', content: 'https://www.w3schools.com/html/mov_bbb.mp4', alt: 'Video 1' },
    { type: 'text', content: '¡Bienvenidos al contenido del carrusel!', alt: 'Texto 1' },
  ];

  return (

      


    <div className="container-fluid pt-3 home-prep text-center">
      {/* Header con logo */}
      <Header  logoSrc="https://via.placeholder.com/50" altText="Logo Dulcito" />

      {/* <HomeIcon /> */}

      

      {/* Título */}
      <h1 className="mt-5 title text-black">Aquí va el Saludo!</h1>

      {/* Carrusel */}
      <div className="my-5">
        <Carousel items={carouselItems} />
      </div>

      {/* Navegación inferior */}
      <FooterNavigation className= ""  />

    </div>
  );
};

export default HomePrep;
