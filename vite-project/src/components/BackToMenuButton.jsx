import React from 'react';
import { Link } from 'react-router-dom';
import buttonback from "/ButtonBack/buttonmenu.png"

const BackToMenuButton = () => {
  return (
    <Link to="/menu" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{ position: 'fixed', top: '20px', left: '20px', cursor: 'pointer' }}>
        {/* Coloque o ícone desejado aqui */}
        <img src={buttonback} alt="Back Button" style={{ width: '40px', height: '40px' }} />
      </div>
    </Link>
  );
};

export default BackToMenuButton;