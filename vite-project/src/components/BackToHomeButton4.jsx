import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import buttonback from "/ButtonBack/buttonback.png"
import clickSound from '/music/sound_button.mp3';

const BackToHomeButton4 = () => {
  const [clickAudio] = useState(new Audio(clickSound));
  const history = useHistory();

  const handleButtonClick = () => {
        // Reproduzir o som de clique
        clickAudio.play();
        // Adicione um pequeno atraso antes de redirecionar para garantir que o áudio tenha tempo de começar
        setTimeout(() => {
          history.push('/menu');
        }, 300); // Ajuste o valor do atraso conforme necessário
      };
  return (
    <Link to="#" onClick={handleButtonClick} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{ position: 'fixed', top: '20px', left: '20px', cursor: 'pointer' }}>
        {/* Coloque o ícone desejado aqui */}
        <img src={buttonback} alt="Back Button" style={{ width: '40px', height: '40px' }} />
      </div>
    </Link>
  );
};

export default BackToHomeButton4;