import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link ,useHistory} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import DogAnimation from '../DogAnimation'; // Importar o novo componente
import CatAnimation from '../CatAnimation'; // Importar o novo componente

import clickSound from '/music/sound_button.mp3';

import BackToHomeButton3 from '../components/BackToHomeButton3';

function Menu({ selectedOption, animalName }) {
    const [clickAudio] = useState(new Audio(clickSound));
    const history = useHistory();

    const handleButtonClick1 = () => {
      // Reproduzir o som de clique
      clickAudio.play();
      // Adicione um pequeno atraso antes de redirecionar para garantir que o áudio tenha tempo de começar
      setTimeout(() => {
        history.push('/map2');
      }, 300); // Ajuste o valor do atraso conforme necessário
    };

    const handleButtonClick2 = () => {
      // Reproduzir o som de clique
      clickAudio.play();
      // Adicione um pequeno atraso antes de redirecionar para garantir que o áudio tenha tempo de começar
      setTimeout(() => {
        history.push('/rewards');
      }, 300); // Ajuste o valor do atraso conforme necessário
    };

    if (selectedOption === '' || animalName === '') {
        // Replace '/start' with the actual route to your Start view
        window.location.replace('/');
      }
    else{

      const dogAnimationFrames2 = [
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

    const catAnimationFrames2 = [
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
    
      const dogAnimationFrames = [
        '/dog_walking/dog_walking_1.png',
        '/dog_walking/dog_walking_2.png',
        '/dog_walking/dog_walking_3.png',
        '/dog_walking/dog_walking_4.png',
        '/dog_walking/dog_walking_5.png',
        '/dog_walking/dog_walking_6.png',
        '/dog_walking/dog_walking_7.png',
        '/dog_walking/dog_walking_8.png',
        '/dog_walking/dog_walking_9.png',
        '/dog_walking/dog_walking_10.png',
        '/dog_walking/dog_walking_11.png',
        '/dog_walking/dog_walking_13.png',
        '/dog_walking/dog_walking_14.png',
        '/dog_walking/dog_walking_15.png',
        '/dog_walking/dog_walking_16.png',
        '/dog_walking/dog_walking_17.png',
        '/dog_walking/dog_walking_18.png',
        '/dog_walking/dog_walking_19.png',
        '/dog_walking/dog_walking_20.png',
        '/dog_walking/dog_walking_21.png',
        '/dog_walking/dog_walking_22.png',
        '/dog_walking/dog_walking_23.png',
        '/dog_walking/dog_walking_24.png',
        '/dog_walking/dog_walking_25.png',

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
          <div style={{  zIndex: '999' }}>
            <BackToHomeButton3 />
          </div>
          <h1 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginTop:'30px'}}>Menu</h1>
      
          <div>
            <Link to="#" onClick={handleButtonClick1} style={{ textDecoration: 'none' }}>
              <button
                style={{
                  border: '10px solid rgb(255, 165, 0)',
                  backgroundColor: 'rgba(255,100,0,0.2)', // Set background to transparent
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
                  {selectedOption === 'cão' && (
                    <DogAnimation frames={dogAnimationFrames} width={300} height={215} />
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
            <Link to="#" onClick={handleButtonClick2} style={{ textDecoration: 'none' }}>
              <button
                style={{
                  border: '10px solid rgb(255, 165, 0)',
                  backgroundColor: 'rgba(255,100,0,0.2)', // Set background to transparent
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
                    <CatAnimation frames={catAnimationFrames2} width={300} height={215} />
                  )}
                  {selectedOption === 'cão' && (
                    <DogAnimation frames={dogAnimationFrames2} width={300} height={215} />
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