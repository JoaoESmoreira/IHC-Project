import React, { useState } from 'react';

import DogAnimation from '../DogAnimation'; // Importar o novo componente
import CatAnimation from '../CatAnimation'; // Importar o novo componente

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Logo({selectedOption, animalName}) {
      const isDataValid = selectedOption !== '' && animalName !== '';


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
        '/Cat_tilting_color/cat_tilting_1.png',
        '/Cat_tilting_color/cat_tilting_2.png',
        '/Cat_tilting_color/cat_tilting_3.png',
        '/Cat_tilting_color/cat_tilting_4.png',
        '/Cat_tilting_color/cat_tilting_5.png',
        '/Cat_tilting_color/cat_tilting_6.png',
        '/Cat_tilting_color/cat_tilting_7.png',
        '/Cat_tilting_color/cat_tilting_8.png',
        '/Cat_tilting_color/cat_tilting_9.png',
        '/Cat_tilting_color/cat_tilting_10.png',
        '/Cat_tilting_color/cat_tilting_11.png',
        '/Cat_tilting_color/cat_tilting_12.png',
        // Adicione mais caminhos conforme necessário
      ];

      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', height: '100vh'}}>
          
          <h1 style={{ fontSize: '40px' , marginTop: '50px'}}>AR Maps</h1>
          <div
          style={{ marginTop: '40px'}}
          >
              <DogAnimation frames={catAnimationFrames} width={300} height={215} /> 
          </div>
          
          <div>
            <Link to={isDataValid ? '/menu' : '/start'} style={{ textDecoration: 'none' }}>
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
                <h1>Clique para iniciar</h1>
            </button>
            </Link>
          </div>
        </div>
      );
}

export default Logo;
