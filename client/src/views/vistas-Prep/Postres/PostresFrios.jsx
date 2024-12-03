import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar el hook de navegación
import HomeIcon from '../../../components/For_Postres/Homeicon';
import { Modal, Button } from 'react-bootstrap'; // Bootstrap para el modal

const PostresFrios = () => {
  const [showInstructions, setShowInstructions] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const navigate = useNavigate(); // Hook de navegación

  // Datos de los postres
  const postres = [
    { title: 'PIE', subtitle: 'DE SNICKERS', image: '/path/to/image1.png', video: '/path/to/video1.mp4', instructions: 'Instrucciones del Pie de Snickers' },
    { title: 'CHEESECAKE', subtitle: 'OH COOKIES', image: '/path/to/image2.png', video: '/path/to/video2.mp4', instructions: 'Instrucciones del Cheesecake de Cookies' },
    { title: 'BROWNIE', subtitle: 'SIN AZÚCAR', image: '/path/to/image3.png', video: '/path/to/video3.mp4', instructions: 'Instrucciones del Brownie Sin Azúcar' },
    { title: 'PIE', subtitle: 'DE FERRERO', image: '/path/to/image4.png', video: '/path/to/video4.mp4', instructions: 'Instrucciones del Pie de Ferrero' },
    { title: 'CHEESECAKE', subtitle: 'VASCO', image: '/path/to/image5.png', video: '/path/to/video5.mp4', instructions: 'Instrucciones del Cheesecake Vasco' },
    { title: 'SWEET', subtitle: 'VALENTINE', image: '/path/to/image6.png', video: '/path/to/video6.mp4', instructions: 'Instrucciones del Sweet Valentine' },
  ];

  // Función para abrir el modal
  const handleShowModal = (content) => {
    setModalContent(content);
    setShowInstructions(true);
  };

  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #EAA669, #C29B7C)',
        padding: '20px',
        position: 'relative',
      }}
    >
      {/* Icono de Home */}
      <HomeIcon />

      {/* Título */}
      <h1 className="my-4" style={{ color: '#44392F', fontSize: '2rem', fontWeight: 'bold' }}>
        POSTRES FRIOS
      </h1>

      {/* Contenedor principal */}
      <div
        className="d-flex flex-wrap justify-content-center"
        style={{
          width: '100%',
          maxWidth: '900px',
          gap: '20px',
        }}
      >
        {postres.map((postre, index) => (
          <div
            key={index}
            className="d-flex align-items-center justify-content-between"
            style={{
              width: '100%',
              maxWidth: '800px',
              backgroundColor: '#FFFFFF',
              borderRadius: '15px',
              padding: '15px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            {/* Texto */}
            <div className="d-flex flex-column">
              <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 'bold' }}>{postre.title}</h3>
              <p style={{ margin: 0, color: '#6C757D', fontSize: '1rem' }}>{postre.subtitle}</p>
            </div>

            {/* Íconos */}
            <div className="d-flex align-items-center gap-3">
              {/* Ícono para abrir instrucciones */}
              <i
                className="bi bi-list"
                style={{ fontSize: '1.5rem', cursor: 'pointer', color: '#44392F' }}
                onClick={() => handleShowModal({ title: postre.title, content: postre.instructions })}
              ></i>

              {/* Ícono para abrir video */}
              <a href={postre.video} target="_blank" rel="noopener noreferrer">
                <i
                  className="bi bi-camera-video"
                  style={{ fontSize: '1.5rem', cursor: 'pointer', color: '#44392F' }}
                ></i>
              </a>

              {/* Imagen del postre */}
              <img
                src={postre.image}
                alt={postre.title}
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '8px',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modal para instrucciones */}
      <Modal show={showInstructions} onHide={() => setShowInstructions(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{modalContent.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{modalContent.content}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowInstructions(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Ícono de "flecha atrás" */}
      <div
        className="position-absolute"
        style={{
          bottom: '20px',
          left: '20px',
          cursor: 'pointer',
          color: '#44392F',
        }}
        onClick={() => navigate('/postres')} // Navegar a la vista "/home-prep"
      >
        <i className="bi bi-arrow-left-circle" style={{ fontSize: '2rem' }}></i>
      </div>
    </div>
  );
};

export default PostresFrios;

