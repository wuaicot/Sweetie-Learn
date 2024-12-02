import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeIcon = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate('/')}
      style={{
        position: 'relative',
        top: '15px',
        left: '-165px',
        
        cursor: 'pointer',
      }}
    >
      <i
        className="bi bi-house-fill"
        style={{
          fontSize: '2rem',
          color: '#EAA669',
        }}
      ></i>
    </div>
  );
};

export default HomeIcon;
