import React, { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

import DogAnimation from '../DogAnimation'; // Importar o novo componente
import CatAnimation from '../CatAnimation'; // Importar o novo componente

import BackToHomeButton2 from '../components/BackToHomeButton2';

// import cat from '/Cat_tilting_color/cat_tilting_1.png';
// import dog from '/dog_tilting/dog_tilting_1.png';

function Start2({selectedOption, animalName, setAnimalName, setPet}) {

    const history = useHistory();

    // useEffect(() => {
    //    if (selectedOption === '') {
    //      // Replace '/start' with the actual route to your Start view
    //      window.location.replace('/start');
    //    } else {
    //        if (selectedOption === 'gato') {
    //            setPet(cat);
    //        } else {
    //            setPet(dog);
    //        }
    //    }
    // }, [selectedOption]);

    const dogAnimationFrames = [
        '/dog_talking/dog_talking_1.png',
        '/dog_talking/dog_talking_2.png',
        '/dog_talking/dog_talking_3.png',
        '/dog_talking/dog_talking_4.png',
        '/dog_talking/dog_talking_5.png',
        '/dog_talking/dog_talking_6.png',
        '/dog_talking/dog_talking_7.png',
        '/dog_talking/dog_talking_8.png',
        '/dog_talking/dog_talking_9.png',
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

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && animalName.trim() !== '') {
          history.push(`/menu`);
        }
      };

    const navigateToMenu = () => {
        if (animalName) {
            history.push(`/menu`);
        } else {
            alert('Please enter the name of the animal.');
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', height: '100vh' }}>
            <div>
                <BackToHomeButton2 />
            </div>

            {selectedOption === 'gato' && (
                <div style={{ marginTop: '70px' }}>
                    <CatAnimation frames={catAnimationFrames} width={350} height={250} />
                </div>
            )}
            {selectedOption === 'cão' && (
                <div style={{ marginTop: '70px' }}>
                    <DogAnimation frames={dogAnimationFrames} width={350} height={250} />
                </div>
            )}
            
            <h1 style={{ fontSize: '22px',marginTop: '20px'}}>Introduza o nome do {selectedOption}:</h1>
            <input
                type="text"
                value={animalName}
                onChange={handleNameChange}
                onKeyDown={handleKeyDown}
                style={{ 
                    height: '40px', 
                    fontSize: '20px', 
                    backgroundColor: 'transparent',
                    marginTop: '20px', 
                    border: '5px solid rgb(255, 165, 0)',
                    borderRadius: '5px',

                }} // Ajuste a altura e o tamanho da fonte conforme necessário
            />


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
                    to={`/menu`}
                    style={{ textDecoration: 'none', color: 'white', fontSize: '15px'  }}
                >
                    <h1>Continuar</h1>
                </Link>
            </button>
        </div>
    );
}

export default Start2;