import React, { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

import DogAnimation from '../DogAnimation'; // Importar o novo componente
import CatAnimation from '../CatAnimation'; // Importar o novo componente

function Start2({selectedOption, animalName, setAnimalName}) {

    const history = useHistory();

    const dogAnimationFrames = [
        '/Cat_talking/cat_talking_1.png',
        '/Cat_talking/cat_talking_2.png',
        '/Cat_talking/cat_talking_3.png',
        '/Cat_talking/cat_talking_4.png',
        '/Cat_talking/cat_talking_5.png',
        '/Cat_talking/cat_talking_6.png',
        '/Cat_talking/cat_talking_7.png',
        '/Cat_talking/cat_talking_8.png',
        '/Cat_talking/cat_talking_9.png',
        '/Cat_talking/cat_talking_10.png',
        // Adicione mais caminhos conforme necessário
      ];
    
      const catAnimationFrames = [
        '/Cat_talking/cat_talking_1.png',
        '/Cat_talking/cat_talking_2.png',
        '/Cat_talking/cat_talking_3.png',
        '/Cat_talking/cat_talking_4.png',
        '/Cat_talking/cat_talking_5.png',
        '/Cat_talking/cat_talking_6.png',
        '/Cat_talking/cat_talking_7.png',
        '/Cat_talking/cat_talking_8.png',
        '/Cat_talking/cat_talking_9.png',
        '/Cat_talking/cat_talking_10.png',
        // Adicione mais caminhos conforme necessário
      ];

    const handleNameChange = (event) => {
        setAnimalName(event.target.value);
    };

    const navigateToMenu = () => {
        if (animalName) {
            history.push(`/menu/${selectedOption}/${animalName}`);
        } else {
            alert('Please enter the name of the animal.');
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', height: '100vh' }}>
            

            {selectedOption === 'cat' && (
                <div style={{ marginTop: '50px' }}>
                    <CatAnimation frames={catAnimationFrames} width={350} height={250} />
                </div>
            )}
            
            <p style={{ fontSize: '22px' }}>Introduza o nome do {selectedOption}:</p>
            <input
                type="text"
                value={animalName}
                onChange={handleNameChange}
                style={{ height: '40px', fontSize: '20px' }} // Ajuste a altura e o tamanho da fonte conforme necessário
            />


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
                onClick={navigateToMenu}
            >
                <Link
                    to={`/menu`}
                    style={{ textDecoration: 'none', color: 'white', fontSize: '25px'  }}
                >
                    Continuar
                </Link>
            </button>
        </div>
    );
}

export default Start2;


