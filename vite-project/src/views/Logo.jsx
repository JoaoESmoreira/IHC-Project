import React, { useState } from 'react';

import DogAnimation from '../DogAnimation'; // Importar o novo componente
import CatAnimation from '../CatAnimation'; // Importar o novo componente

import { BrowserRouter as Router, Switch, Route, Link, useHistory} from 'react-router-dom';

import clickSound from '/music/sound_button.mp3';

function Logo({selectedOption, animalName}) {
      const isDataValid = selectedOption !== '' && animalName !== '';
      const [clickAudio] = useState(new Audio(clickSound));
      const history = useHistory();
      

      const handleButtonClick = () => {
        // Reproduzir o som de clique
        clickAudio.play();
        // Adicione um pequeno atraso antes de redirecionar para garantir que o áudio tenha tempo de começar
        setTimeout(() => {
          history.push(isDataValid ? '/menu' : '/start');
        }, 300); // Ajuste o valor do atraso conforme necessário
      };

      const dogAnimationFrames = [
        '/dog_tilting/dog_tilting_1.png',
        '/dog_tilting/dog_tilting_2.png',
        '/dog_tilting/dog_tilting_3.png',
        '/dog_tilting/dog_tilting_4.png',
        '/dog_tilting/dog_tilting_5.png',
        '/dog_tilting/dog_tilting_6.png',
        '/dog_tilting/dog_tilting_7.png',
        '/dog_tilting/dog_tilting_8.png',
        '/dog_tilting/dog_tilting_9.png',
        '/dog_tilting/dog_tilting_10.png',
        '/dog_tilting/dog_tilting_11.png',
        '/dog_tilting/dog_tilting_12.png',
        '/dog_tilting/dog_tilting_13.png',
        '/dog_tilting/dog_tilting_14.png',
        // Adicione mais caminhos conforme necessário
      ];
    
      const catAnimationFrames = [
        '/cat_tilting/cat_tilting_1.png',
        '/cat_tilting/cat_tilting_2.png',
        '/cat_tilting/cat_tilting_3.png',
        '/cat_tilting/cat_tilting_4.png',
        '/cat_tilting/cat_tilting_5.png',
        '/cat_tilting/cat_tilting_6.png',
        '/cat_tilting/cat_tilting_7.png',
        '/cat_tilting/cat_tilting_8.png',
        '/cat_tilting/cat_tilting_9.png',
        '/cat_tilting/cat_tilting_10.png',
        '/cat_tilting/cat_tilting_11.png',
        '/cat_tilting/cat_tilting_12.png',
        '/cat_tilting/cat_tilting_13.png',
        '/cat_tilting/cat_tilting_14.png',
        // Adicione mais caminhos conforme necessário
      ];

      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', height: '100vh'}}>
          
          <h1 style={{ fontSize: '35px' , marginTop: '50px'}}>Pata-Caminhada</h1>
          <div style={{ position: 'relative', marginTop: '40px' }}>
            {(
              <div style={{ position: 'relative', top: 0, left: -75 }}>
                <CatAnimation frames={catAnimationFrames} width={300} height={215} />
              </div>
            )}

            {(
              <div style={{ position: 'absolute', top: 70, left:50 }}>
                <DogAnimation frames={dogAnimationFrames} width={300} height={215} />
              </div>
            )}
          </div>
          
          <div>
            <Link to="#" onClick={handleButtonClick}>
            <button
              onClick={handleButtonClick}
              style={{
                backgroundColor: 'rgb(255, 165, 0)',
                color: 'white',
                borderRadius: '10px',
                padding: '10px',
                border: 'none',
                cursor: 'pointer',
                marginTop: '110px', // Adiciona espaço entre os botões
              }}
              >
                <h1>Clique para iniciar</h1>
            </button>
            </Link>
          </div>
        </div>
      );
}

export default Logo;
