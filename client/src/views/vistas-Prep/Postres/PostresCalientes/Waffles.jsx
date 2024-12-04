import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap'; // Bootstrap para el modal
import HomeIcon from '../../../../components/For_Postres/Homeicon';

const Waffles = () => {
  const [showInstructions, setShowInstructions] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const navigate = useNavigate();

  const waffles = [
    { title: 'Waffle', subtitle: 'Brussels', image: '/path/to/image1.png', video: '/path/to/video1.mp4', instructions: 'Instrucciones del Waffle Brussels' },
    { title: 'Waffle', subtitle: 'Clásico', image: '/path/to/image2.png', video: '/path/to/video2.mp4', instructions: 'Instrucciones del Waffle Clásico' },
    { title: 'Waffle', subtitle: 'Francés', image: '/path/to/image3.png', video: '/path/to/video3.mp4', instructions: 'Instrucciones del Waffle Francés' },
    { title: 'Waffle', subtitle: 'Banana Split', image: '/path/to/image4.png', video: '/path/to/video4.mp4', instructions: 'Instrucciones del Waffle Banana Split' },
    { title: 'Waffle', subtitle: 'B y N', image: '/path/to/image5.png', video: '/path/to/video5.mp4', instructions: 'Instrucciones del Waffle B y N' },
    { title: 'Waffle', subtitle: 'Tasting', image: '/path/to/image6.png', video: '/path/to/video6.mp4', instructions: 'Instrucciones del Waffle Tasting' },
  ];

  const handleShowModal = (content) => {
    setModalContent(content);
    setShowInstructions(true);
  };

  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{
        minHeight: '100vh',
        background: '',
        padding: '20px',
      }}
    >
       <HomeIcon />
       <br />


      {/* Filtros superiores e ícono Home */}
      <div className="d-flex align-items-center w-100 mb-4" >
        
         
        
        <div className="d-flex flex-wrap justify-content-around w-100">
          <button
            className="btn btn-light"
            style={{ fontWeight: 'bold', backgroundColor: '#FFFFFF', border: '1px solid #44392F', color: '#44392F' }}
            onClick={() => navigate('/view-waffles')}
          >
            Waffles
          </button>
          <button
            className="btn btn-light"
            style={{ fontWeight: 'bold', backgroundColor: '#EAA669', color: '#FFFFFF' }}
            onClick={() => navigate('/view-fondue')}
          >
            Fondue
          </button>
          <button
            className="btn btn-light"
            style={{ fontWeight: 'bold', backgroundColor: '#EAA669', color: '#FFFFFF' }}
            onClick={() => navigate('/view-calientes')}
          >
            Calientes
          </button>
          <button
            className="btn btn-light"
            style={{ fontWeight: 'bold', backgroundColor: '#EAA669', color: '#FFFFFF' }}
            onClick={() => navigate('/view-paraniños')}
          >
            Para Niños
          </button>
        </div>
      </div>

      {/* Contenedor principal */}
      <div
        className="d-flex flex-wrap justify-content-center"
        style={{
          width: '100%',
          maxWidth: '900px',
          gap: '15px',
        }}
      >
        {waffles.map((waffle, index) => (
          <div
            key={index}
            className="d-flex align-items-center justify-content-between"
            style={{
              width: '100%',
              maxWidth: '800px',
              backgroundColor: '#FFFFFF',
              borderRadius: '15px',
              padding: '10px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              height: '80px', // Reducimos altura de las cards
            }}
          >
            <div className="d-flex flex-column">
              <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 'bold' }}>{waffle.title}</h3>
              <p style={{ margin: 0, color: '#6C757D', fontSize: '0.9rem' }}>{waffle.subtitle}</p>
            </div>
            <div className="d-flex align-items-center gap-3">
              <i
                className="bi bi-list"
                style={{ fontSize: '1.5rem', cursor: 'pointer', color: '#44392F' }}
                onClick={() => handleShowModal({ title: waffle.title, content: waffle.instructions })}
              ></i>
              <a href={waffle.video} target="_blank" rel="noopener noreferrer">
                <i
                  className="bi bi-camera-video"
                  style={{ fontSize: '1.5rem', cursor: 'pointer', color: '#44392F' }}
                ></i>
              </a>
              <img
                src={waffle.image}
                alt={waffle.title}
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
        onClick={() => navigate('/postres')}
      >
        <i className="bi bi-arrow-left"></i> Caliente o Frío.
      </button>

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
    </div>
  );
};

export default Waffles;
