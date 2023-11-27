import React, { useState } from 'react';

import DogAnimation from '../DogAnimation'; // Importar o novo componente
import CatAnimation from '../CatAnimation'; // Importar o novo componente

import {cat,  dog} from '../constants/items'

import './Logo.css'
import { BrowserRouter as Router, Switch, Route, Link, useHistory} from 'react-router-dom';

import clickSound from '/music/sound_button.mp3';

import BackToHomeButton from '../components/BackToHomeButton';


function Start({selectedOption, setSelectedOption, setPet}) {
    const [clickAudio] = useState(new Audio(clickSound));
    const history = useHistory();

    const handleOptionChange = (option) => {
        setSelectedOption(option);
        option === 'cão' ? setPet(dog) : setPet(cat);
    };

    const handleButtonClick = () => {
      // Reproduzir o som de clique
      clickAudio.play();
      // Adicione um pequeno atraso antes de redirecionar para garantir que o áudio tenha tempo de começar
      setTimeout(() => {
        history.push('/start2');
      }, 300); // Ajuste o valor do atraso conforme necessário
    };

      const dogAnimationFrames = [
        '/dog_sleeping/dog_sleeping_1.png',
        '/dog_sleeping/dog_sleeping_2.png',
        '/dog_sleeping/dog_sleeping_3.png',
        '/dog_sleeping/dog_sleeping_4.png',
        '/dog_sleeping/dog_sleeping_5.png',
        '/dog_sleeping/dog_sleeping_6.png',
        '/dog_sleeping/dog_sleeping_7.png',
        '/dog_sleeping/dog_sleeping_8.png',
        '/dog_sleeping/dog_sleeping_9.png',
        '/dog_sleeping/dog_sleeping_10.png',
        '/dog_sleeping/dog_sleeping_11.png',
        '/dog_sleeping/dog_sleeping_12.png',
        '/dog_sleeping/dog_sleeping_13.png',
        '/dog_sleeping/dog_sleeping_14.png',
        '/dog_sleeping/dog_sleeping_15.png',
        '/dog_sleeping/dog_sleeping_16.png',
        // Adicione mais caminhos conforme necessário
      ];
    
      const catAnimationFrames = [
        '/cat_sleeping/cat_sleeping_1.png',
        '/cat_sleeping/cat_sleeping_2.png',
        '/cat_sleeping/cat_sleeping_3.png',
        '/cat_sleeping/cat_sleeping_4.png',
        '/cat_sleeping/cat_sleeping_5.png',
        '/cat_sleeping/cat_sleeping_6.png',
        '/cat_sleeping/cat_sleeping_7.png',
        '/cat_sleeping/cat_sleeping_8.png',
        '/cat_sleeping/cat_sleeping_9.png',
        '/cat_sleeping/cat_sleeping_10.png',
        '/cat_sleeping/cat_sleeping_11.png',
        '/cat_sleeping/cat_sleeping_12.png',
        '/cat_sleeping/cat_sleeping_13.png',
        '/cat_sleeping/cat_sleeping_14.png',
        '/cat_sleeping/cat_sleeping_15.png',
        '/cat_sleeping/cat_sleeping_16.png',
        // Adicione mais caminhos conforme necessário
      ];

      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start'}}>
          <div>
            <BackToHomeButton />
          </div>

          <div style={{ textAlign: 'center', fontFamily: 'Archivo, sans-serif' , color: '#754c24'}}>
            <h1 style={{ fontSize: '24px', marginTop: '70px' }}>Escolha Cão ou Gato:</h1>
          </div>

          <div>
            <Link to="#" onClick={handleButtonClick}>
              <button
                style={{
                  backgroundColor: 'rgba(255,100,0,0.2)', 
                  borderRadius: '10px',
                  padding: '5px',
                  border: '10px solid rgb(255, 165, 0)',
                  cursor: 'pointer',
                  marginTop: '20px', // Adiciona espaço entre os botões
                }}
                onClick={() => handleOptionChange('cão')}
              >
                <DogAnimation frames={dogAnimationFrames} width={300} height={215} />
              </button>
            </Link>
          </div>
          <div>
              <Link to="#" onClick={handleButtonClick}>
              <button
                style={{
                  backgroundColor: 'rgba(255,100,0,0.2)',
                  borderRadius: '10px',
                  padding: '5px',
                  border: '10px solid rgb(255, 165, 0)',
                  cursor: 'pointer',
                  marginTop: '20px', // Adiciona espaço entre os botões
                }}
                onClick={() => handleOptionChange('gato')}
              >
                <CatAnimation frames={catAnimationFrames} width={300} height={215} />
              </button>
            </Link>
          </div>
        </div>
      );
}

export default Start;
