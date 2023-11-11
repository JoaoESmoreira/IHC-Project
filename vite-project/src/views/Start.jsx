import React, { useState } from 'react';

import DogAnimation from '../DogAnimation'; // Importar o novo componente
import CatAnimation from '../CatAnimation'; // Importar o novo componente

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function Start() {
    const [selectedOption, setSelectedOption] = useState('');

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
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '24px', marginTop: '10px' }}>Choose an animal:</p>
          </div>
          <div>
            <button
              style={{
                backgroundColor: selectedOption === 'dog' ? 'rgb(255, 165, 0)' : 'white',
                color: selectedOption === 'dog' ? 'white' : 'rgb(255, 165, 0)',
                borderRadius: '5px',
                padding: '10px',
                border: 'none',
                cursor: 'pointer',
                marginTop: '20px',
              }}
              onClick={() => handleOptionChange('dog')}
            >
              <DogAnimation frames={dogAnimationFrames} width={300} height={215} />
            </button>
          </div>
          <div>
            <button
              style={{
                backgroundColor: selectedOption === 'cat' ? 'rgb(255, 165, 0)' : 'white',
                color: selectedOption === 'cat' ? 'white' : 'rgb(255, 165, 0)',
                borderRadius: '5px',
                padding: '10px',
                border: 'none',
                cursor: 'pointer',
                marginTop: '20px', // Adiciona espaço entre os botões
              }}
              onClick={() => handleOptionChange('cat')}
            >
              <CatAnimation frames={catAnimationFrames} width={300} height={215} />
            </button>
          </div>
          <div>
            <button
              style={{
                backgroundColor: 'rgb(255, 165, 0)',
                color: 'white',
                borderRadius: '5px',
                padding: '20px 40px',
                border: 'none',
                cursor: 'pointer',
                marginTop: '30px', // Adiciona espaço entre os botões
              }}
            >
              <Link
                to={`/Start2/${selectedOption}`}
                style={{ textDecoration: 'none', color: 'white', fontSize: '25px'  }}
              >
                Continuar
              </Link>
            </button>
          </div>
        </div>
      );
}

export default Start;
