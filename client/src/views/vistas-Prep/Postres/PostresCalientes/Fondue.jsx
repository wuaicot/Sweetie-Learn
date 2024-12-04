import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '../../../../components/For_Postres/Homeicon';

const Fondue = () => {
  const navigate = useNavigate();

  const fondues = [
    { title: 'Fondue', subtitle: 'Para 1', image: '/path/to/image1.png', video: '/path/to/video1.mp4' },
    { title: 'Fondue', subtitle: 'Para 2', image: '/path/to/image2.png', video: '/path/to/video2.mp4' },
  ];

  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{
        minHeight: '100vh',
        background: '',
        padding: '30px',
      }}
    >
        <HomeIcon />
      {/* Filtros superiores e ícono Home */}
      <div className="d-flex align-items-center w-100 pt-5 mt-5 mb-5" style={{ gap: '10px' }}>
        
          
      

        <div className="d-flex flex-wrap justify-content-around w-100">
          <button
            className="btn btn-light"
            style={{
              fontWeight: 'bold',
              backgroundColor: '#EAA669',
              color: '#FFFFFF',
            }}
            onClick={() => navigate('/view-waffles')}
          >
            Waffles
          </button>
          <button
            className="btn btn-light"
            style={{
              fontWeight: 'bold',
              backgroundColor: '#FFFFFF',
              border: '1px solid #44392F',
              color: '#44392F',
            }}
            onClick={() => navigate('/view-fondue')}
          >
            Fondue
          </button>
          <button
            className="btn btn-light"
            style={{
              fontWeight: 'bold',
              backgroundColor: '#EAA669',
              color: '#FFFFFF',
            }}
            onClick={() => navigate('/view-calientes')}
          >
            Calientes
          </button>
          <button
            className="btn btn-light"
            style={{
              fontWeight: 'bold',
              backgroundColor: '#EAA669',
              color: '#FFFFFF',
            }}
            onClick={() => navigate('/view-paraniños')}
          >
            Para Niños
          </button>
        </div>
      </div>

      {/* Contenedor principal */}
      <div
        className="d-flex flex-column gap-3"
        style={{
          width: '100%',
          maxWidth: '900px',
        }}
      >
        {fondues.map((fondue, index) => (
          <div
            key={index}
            className="d-flex align-items-center justify-content-between"
            style={{
              width: '100%',
              backgroundColor: '#FFFFFF',
              borderRadius: '15px',
              padding: '10px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              height: '90px',
            }}
          >
            <div className="d-flex flex-column">
              <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 'bold' }}>{fondue.title}</h3>
              <p style={{ margin: 0, color: '#6C757D', fontSize: '0.9rem' }}>{fondue.subtitle}</p>
            </div>
            <div className="d-flex align-items-center gap-3">
              <i
                className="bi bi-list"
                style={{ fontSize: '1.5rem', cursor: 'pointer', color: '#44392F' }}
              ></i>
              <a href={fondue.video} target="_blank" rel="noopener noreferrer">
                <i
                  className="bi bi-camera-video"
                  style={{ fontSize: '1.5rem', cursor: 'pointer', color: '#44392F' }}
                ></i>
              </a>
              <img
                src={fondue.image}
                alt={fondue.title}
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '8px',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Botón de "Atrás" */}
      <button
        className="btn btn-link text-dark position-fixed"
        style={{ left: '20px', bottom: '20px', textDecoration: 'none', fontSize: '1rem' }}
        onClick={() => navigate('/home-prep')}
      >
        <i className="bi bi-arrow-left"></i> Menú.
      </button>
    </div>
  );
};

export default Fondue;
