import React from 'react';
import './Footer.css'

const Footer = ({ distanciaTotal }) => {
  return (
    <div className="footer">
      <p>Distância Percorrida: {(distanciaTotal*111000).toFixed(0)} metros</p>
    </div>
  );
};

export default Footer;