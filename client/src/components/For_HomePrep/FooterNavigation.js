import React from 'react';
import '../../StylesFor_components/FooterNavigation.css';

const FooterNavigation = () => {
  return (
    <div className="footer-nav d-flex justify-content-around mt-5">
      <div>
        <i className="bi bi-person"></i>
        <p>Ayuda</p>
      </div>
      <div>
        <i className="bi bi-emoji-smile"></i>
        <p>Dudas</p>
      </div>
      <div>
        <i className="bi bi-lightbulb"></i>
        <p>Sugerencias</p>
      </div>
      <div>
        <i className="bi bi-arrow-left"></i>
        <p>Atrás</p>
      </div>
    </div>
  );
};

export default FooterNavigation;
