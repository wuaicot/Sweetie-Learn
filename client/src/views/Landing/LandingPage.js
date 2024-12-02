import React from 'react';
import { useNavigate } from "react-router-dom";
import Spinner from '../../components/For_LandingPage/Spinner';
import ButtonGroup from '../../components/For_LandingPage/ButtonGroup';
import '../../StylesViews/LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const buttons = [
    { text: 'Limpieza', onClick: () => alert('Registrarse para Limpieza') },
    { text: 'Preparaciones', onClick: () => navigate('/home-prep') }, // Redirige a HomePrep
  ];

  return (
    <div className="container-fluid landing-page text-center">
      {/* Contenido principal */}
      <main className="content">
        <h1 className="title mt-5">Bienvenido a la App Dulcito</h1>
        <p className="subtitle mt-5">
          Donde aprenderás a ser el mejor en cada área. Elije una opción:
        </p>
        <br/>
        <br/>
        <br/>
        <br/>
        

        {/* Botones */}
        <ButtonGroup buttons={buttons} />
      </main>

      {/* Spinner */}
      <footer className="py-5 mb-5">
        <Spinner />
      </footer>
    </div>
  );
};

export default LandingPage;
