
import React from 'react';
import '../../Styles/LandingPage.css';




const LandingPage = () => {
  return (
    <div className="container-fluid landing-page text-center">
      {/* Header con imagen */}
      <header className="py-3 ">
        <img
          src="https://via.placeholder.com/300x100" // Reemplaza con la URL del logo.
          alt="Brussels Heart of Chocolate"
          className="img-fluid logo"
        />
      </header>

      {/* Título y subtítulo */}
      <main className="content">
        <h1 className="title  pb-2">Bienvenido a la App Dulcito</h1>
        <p className="subtitle pb-5">
          Donde aprenderás a ser el mejor en cada área. Elija una opción:
        </p>

        {/* Botones de navegación */}
        <div className="button-group d-flex justify-content-center">
        <button className="btn btn-outline-primary mx-4 my-1 ">Limpieza</button>
        <button className="btn btn-outline-primary mx-4 my-1">Preparaciones</button>
        </div>
      </main>

      {/* Spinner de carga */}
      <footer className="giro">
        <div className="spinner-border  text-dark" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
