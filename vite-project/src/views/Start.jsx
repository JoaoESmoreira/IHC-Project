import React, { useState } from 'react';

import DogAnimation from '../DogAnimation'; // Importar o novo componente
import CatAnimation from '../CatAnimation'; // Importar o novo componente

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import BackToHomeButton from '../components/BackToHomeButton';

function Start({selectedOption, setSelectedOption}) {


    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

      const dogAnimationFrames = [
        '/Cat_sleeping/cat_sleeping_1.png',
        '/Cat_sleeping/cat_sleeping_2.png',
        '/Cat_sleeping/cat_sleeping_3.png',
        '/Cat_sleeping/cat_sleeping_4.png',
        '/Cat_sleeping/cat_sleeping_5.png',
        '/Cat_sleeping/cat_sleeping_6.png',
        '/Cat_sleeping/cat_sleeping_7.png',
        '/Cat_sleeping/cat_sleeping_8.png',
        '/Cat_sleeping/cat_sleeping_9.png',
        '/Cat_sleeping/cat_sleeping_10.png',
        '/Cat_sleeping/cat_sleeping_11.png',
        '/Cat_sleeping/cat_sleeping_12.png',
        '/Cat_sleeping/cat_sleeping_13.png',
        '/Cat_sleeping/cat_sleeping_14.png',
        '/Cat_sleeping/cat_sleeping_15.png',
        '/Cat_sleeping/cat_sleeping_16.png',
        // Adicione mais caminhos conforme necessário
      ];
    
      const catAnimationFrames = [
        '/Cat_sleeping/cat_sleeping_1.png',
        '/Cat_sleeping/cat_sleeping_2.png',
        '/Cat_sleeping/cat_sleeping_3.png',
        '/Cat_sleeping/cat_sleeping_4.png',
        '/Cat_sleeping/cat_sleeping_5.png',
        '/Cat_sleeping/cat_sleeping_6.png',
        '/Cat_sleeping/cat_sleeping_7.png',
        '/Cat_sleeping/cat_sleeping_8.png',
        '/Cat_sleeping/cat_sleeping_9.png',
        '/Cat_sleeping/cat_sleeping_10.png',
        '/Cat_sleeping/cat_sleeping_11.png',
        '/Cat_sleeping/cat_sleeping_12.png',
        '/Cat_sleeping/cat_sleeping_13.png',
        '/Cat_sleeping/cat_sleeping_14.png',
        '/Cat_sleeping/cat_sleeping_15.png',
        '/Cat_sleeping/cat_sleeping_16.png',
        // Adicione mais caminhos conforme necessário
      ];

      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', height: '100vh' }}>
          <div>
            <BackToHomeButton />
            {/* Conteúdo da sua view */}
          </div>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '24px', marginTop: '20px'}}>Escolha o animal:</h1>
          </div>
          <div>
            <button
              style={{
                backgroundColor: selectedOption === 'cão' ? 'rgb(255, 165, 0)' : 'transparent',
                color: selectedOption === 'cão' ? 'white' : 'rgb(255, 165, 0)', 
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
          </div>
          <div>
            <button
              style={{
                backgroundColor: selectedOption === 'gato' ? 'rgb(255, 165, 0)' : 'transparent',
                color: selectedOption === 'gato' ? 'white' : 'rgb(255, 165, 0)', 
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
          </div>
          <div>
            <button
              style={{
                backgroundColor: 'rgb(255, 165, 0)',
                color: 'white',
                borderRadius: '10px',
                padding: '10px',
                border: 'none',
                cursor: 'pointer',
                marginTop: '30px', // Adiciona espaço entre os botões
              }}
              
            >
              <Link
                to={`/start2`}
                style={{ textDecoration: 'none', color: 'white', fontSize: '15px'  }}
              >
                <h1>Continuar</h1>
              </Link>
            </button>
          </div>
        </div>
      );
}

export default Start;
