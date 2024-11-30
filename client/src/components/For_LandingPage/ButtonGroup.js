import React from 'react';

const ButtonGroup = ({ buttons }) => {
  return (
    <div className="button-group d-flex justify-content-center">
      {buttons.map((button, index) => (
        <button
          key={index}
          className="btn btn-outline-primary mx-2"
          onClick={button.onClick}
        >
          {button.text}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
