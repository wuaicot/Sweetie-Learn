import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../../StylesFor_components/FooterNavigation.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const FooterNavigation = () => {
  const navigate = useNavigate();

  // Estados para manejar la visibilidad de los modales
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  // Handlers para abrir y cerrar los modales
  const handleShowSuggestions = () => setShowSuggestions(true);
  const handleCloseSuggestions = () => setShowSuggestions(false);

  const handleShowQuestions = () => setShowQuestions(true);
  const handleCloseQuestions = () => setShowQuestions(false);

  const handleShowHelp = () => setShowHelp(true);
  const handleCloseHelp = () => setShowHelp(false);

  return (
    <>
      {/* Footer Navigation */}
      <div className="footer-nav d-flex justify-content-around mt-5">
        <div onClick={handleShowHelp}>
          <i className="bi bi-person"></i>
          <p>Ayuda</p>
        </div>
        <div onClick={handleShowQuestions}>
          <i className="bi bi-emoji-smile"></i>
          <p>Dudas</p>
        </div>
        <div onClick={handleShowSuggestions}>
          <i className="bi bi-lightbulb"></i>
          <p>Sugerencias</p>
        </div>
        <div onClick={() => navigate('/')}>
          <i className="bi bi-arrow-left"></i>
          <p>Atrás</p>
        </div>
      </div>

      {/* Modal para Sugerencias */}
      <Modal show={showSuggestions} onHide={handleCloseSuggestions}>
        <Modal.Header closeButton>
          <Modal.Title>Sugerencias</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="suggestions">Escribe tu sugerencia:</label>
              <textarea
                id="suggestions"
                className="form-control"
                rows="4"
                placeholder="Deja tus sugerencias aquí..."
              ></textarea>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseSuggestions}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleCloseSuggestions}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal para Dudas */}
      <Modal show={showQuestions} onHide={handleCloseQuestions}>
        <Modal.Header closeButton>
          <Modal.Title>Dudas Frecuentes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>
              <strong>¿Cómo puedo navegar en la app?</strong>
              <p>Usa los botones y menús para acceder a diferentes secciones.</p>
            </li>
            <li>
              <strong>¿Qué hago si tengo problemas técnicos?</strong>
              <p>Contacta con el soporte en la sección de ayuda.</p>
            </li>
            <li>
              <strong>¿Cómo envío sugerencias?</strong>
              <p>Usa la sección de sugerencias en este pie de página.</p>
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseQuestions}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal para Ayuda */}
      <Modal show={showHelp} onHide={handleCloseHelp}>
        <Modal.Header closeButton>
          <Modal.Title>Ayuda</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Aquí hay algunos consejos para usar esta aplicación:</p>
          <ul>
            <li>Navega utilizando los botones principales.</li>
            <li>Revisa las secciones para encontrar contenido educativo.</li>
            <li>Si necesitas soporte, no dudes en contactarnos.</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseHelp}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FooterNavigation;
