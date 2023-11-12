import React, { useState } from 'react';

import DogAnimation from '../DogAnimation'; // Importar o novo componente
import CatAnimation from '../CatAnimation'; // Importar o novo componente

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Logo({selectedOption, setSelectedOption}) {


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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', height: '100vh'}}>
          
          <h1 style={{ fontSize: '40px' , marginTop: '50px'}}>AR Maps</h1>
          <div
          style={{ marginTop: '40px'}}
          >
              <DogAnimation frames={dogAnimationFrames} width={300} height={215} /> 
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
                marginTop: '70px', // Adiciona espaço entre os botões
              }}
              
            >
              <Link
                to={`/start`}
                style={{ textDecoration: 'none', color: 'white', fontSize: '15px'  }}
              >
                <h1>Clique para iniciar</h1>
              </Link>
            </button>
          </div>
        </div>
      );
}

export default Logo;
