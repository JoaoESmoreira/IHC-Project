import React, { useState } from 'react';

import DogAnimation from '../DogAnimation'; // Importar o novo componente
import CatAnimation from '../CatAnimation'; // Importar o novo componente

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Logo({selectedOption, animalName}) {
      const isDataValid = selectedOption !== '' && animalName !== '';


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
            <Link to={isDataValid ? '/menu' : '/start'} style={{ textDecoration: 'none' }}>
            <button
              style={{
                backgroundColor: 'rgb(255, 165, 0)',
                color: 'white',
                borderRadius: '10px',
                padding: '10px',
                border: 'none',
                cursor: 'pointer',
                marginTop: '100px', // Adiciona espaço entre os botões
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
