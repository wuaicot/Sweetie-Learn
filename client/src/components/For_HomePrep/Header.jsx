import React from "react";
import { Link } from "react-router-dom";
import "../../StylesFor_components/Header.css"; // Archivo opcional para estilos personalizados

const Header = ({ onBack, showBackButton = false }) => {
  return (
    <header className="d-flex justify-content-between align-items-center p-3">
      {/* Botón de regresar */}
      {showBackButton && (
        <button className="btn btn-link text-dark" onClick={onBack}>
          <i className="bi bi-arrow-left"></i> Atrás
        </button>
      )}

      {/* Logo */}
      <div className="logo">
        <img
          src="path/to/logo.png" // Reemplaza con la ruta real de tu logo
          alt="Logo"
          className="img-fluid"
          style={{ height: "50px", width: "50px" }}
        />
      </div>

      {/* Botones de navegación */}
      <div className="d-flex gap-3">
        <Link to="/postres" className="btn btn-outline-secondary">
          Postres
        </Link>
        <Link to="/bebidas" className="btn btn-outline-secondary">
          Bebidas
        </Link>
      </div>
    </header>
  );
};

export default Header;
