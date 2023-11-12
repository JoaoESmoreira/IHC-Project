import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import DogAnimation from '../DogAnimation'; // Importar o novo componente
import CatAnimation from '../CatAnimation'; // Importar o novo componente

function Menu({ selectedOption, animalName }) {

    if (selectedOption === '' || animalName === '') {
        // Replace '/start' with the actual route to your Start view
        window.location.replace('/start');
      }
    else{

    const dogAnimationFrames = [
        '/Cat_tilting/cat_tilting_1.png',
        '/Cat_tilting/cat_tilting_2.png',
        '/Cat_tilting/cat_tilting_3.png',
        '/Cat_tilting/cat_tilting_4.png',
        '/Cat_tilting/cat_tilting_5.png',
        '/Cat_tilting/cat_tilting_6.png',
        '/Cat_tilting/cat_tilting_7.png',
        '/Cat_tilting/cat_tilting_8.png',
        '/Cat_tilting/cat_tilting_9.png',
        '/Cat_tilting/cat_tilting_10.png',
        '/Cat_tilting/cat_tilting_11.png',
        '/Cat_tilting/cat_tilting_12.png',

        // Adicione mais caminhos conforme necessário
      ];
    
      const catAnimationFrames = [
        '/Cat_tilting/cat_tilting_1.png',
        '/Cat_tilting/cat_tilting_2.png',
        '/Cat_tilting/cat_tilting_3.png',
        '/Cat_tilting/cat_tilting_4.png',
        '/Cat_tilting/cat_tilting_5.png',
        '/Cat_tilting/cat_tilting_6.png',
        '/Cat_tilting/cat_tilting_7.png',
        '/Cat_tilting/cat_tilting_8.png',
        '/Cat_tilting/cat_tilting_9.png',
        '/Cat_tilting/cat_tilting_10.png',
        '/Cat_tilting/cat_tilting_11.png',
        '/Cat_tilting/cat_tilting_12.png',

        // Adicione mais caminhos conforme necessário
      ];

      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', height: '100vh' }}>
          <h1 style={{ fontSize: '28px' }}>Menu</h1>
      
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