import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import DogAnimation from '../DogAnimation'; // Importar o novo componente
import CatAnimation from '../CatAnimation'; // Importar o novo componente

import BackToHomeButton3 from '../components/BackToHomeButton3';

function Menu({ selectedOption, animalName }) {

    if (selectedOption === '' || animalName === '') {
        // Replace '/start' with the actual route to your Start view
        window.location.replace('/');
      }
    else{

    const dogAnimationFrames = [
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
    
      const catAnimationFrames = [
        '/cat_walking/cat_walking_1.png',
        '/cat_walking/cat_walking_2.png',
        '/cat_walking/cat_walking_3.png',
        '/cat_walking/cat_walking_4.png',
        '/cat_walking/cat_walking_5.png',
        '/cat_walking/cat_walking_6.png',
        '/cat_walking/cat_walking_7.png',
        '/cat_walking/cat_walking_8.png',
        '/cat_walking/cat_walking_9.png',
        '/cat_walking/cat_walking_10.png',
        '/cat_walking/cat_walking_11.png',
        '/cat_walking/cat_walking_13.png',
        '/cat_walking/cat_walking_14.png',
        '/cat_walking/cat_walking_15.png',
        '/cat_walking/cat_walking_16.png',
        '/cat_walking/cat_walking_17.png',
        '/cat_walking/cat_walking_18.png',
        '/cat_walking/cat_walking_19.png',
        '/cat_walking/cat_walking_20.png',
        '/cat_walking/cat_walking_21.png',
        '/cat_walking/cat_walking_22.png',
        '/cat_walking/cat_walking_23.png',
        '/cat_walking/cat_walking_24.png',
        '/cat_walking/cat_walking_25.png',

        // Adicione mais caminhos conforme necessário
      ];

      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', height: '100vh' }}>
          <div>
            <BackToHomeButton3 />
            {/* Conteúdo da sua view */}
            </div>
          <h1 style={{ fontSize: '28px', marginTop:'30px'}}>Menu</h1>
      
          <div>
            <Link to={`/map`} style={{ textDecoration: 'none' }}>
              <button
                style={{
                  border: '10px solid rgb(255, 165, 0)',
                  backgroundColor: 'transparent', // Set background to transparent
                  borderRadius: '10px',
                  padding: '5px',
                  cursor: 'pointer',
                  position: 'relative',
                  top: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <div style={{ marginBottom: '10px' }}>
                  {selectedOption === 'gato' && (
                    <CatAnimation frames={catAnimationFrames} width={300} height={215} />
                  )}
                </div>
      
                <span
                  style={{
                    color: 'black',
                    fontSize: '10px',
                    textAlign: 'center',
                  }}
                >
                  <h1>Caminhar com <br /> {animalName}</h1>
                </span>
              </button>
            </Link>
          </div>
      
          <div>
            <Link to={`/rewards`} style={{ textDecoration: 'none' }}>
              <button
                style={{
                  border: '10px solid rgb(255, 165, 0)',
                  backgroundColor: 'transparent', // Set background to transparent
                  borderRadius: '10px',
                  padding: '5px',
                  cursor: 'pointer',
                  position: 'relative',
                  top: '50px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <div style={{ marginBottom: '10px' }}>
                  {selectedOption === 'gato' && (
                    <CatAnimation frames={dogAnimationFrames} width={300} height={215} />
                  )}
                </div>
      
                <span
                  style={{
                    color: 'black',
                    fontSize: '10px',
                    textAlign: 'center',
                  }}
                >
                  <h1>Personalizar<br /> {animalName}</h1>
                </span>
              </button>
            </Link>
          </div>
        </div>
      );
    }
}

export default Menu;