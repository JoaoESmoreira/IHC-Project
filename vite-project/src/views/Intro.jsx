import React, { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

import clickSound from '/music/sound_button.mp3';

import DogAnimation from '../DogAnimation'; // Importar o novo componente
import CatAnimation from '../CatAnimation'; // Importar o novo componente

import BackToHomeButton5 from '../components/BackToHomeButton5';


// import cat from '/Cat_tilting_color/cat_tilting_1.png';
// import dog from '/dog_tilting/dog_tilting_1.png';

function Intro({selectedOption, animalName, setAnimalName, setPet}) {

    const history = useHistory();
    const [clickAudio] = useState(new Audio(clickSound));

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

    const handleButtonClick = () => {
        // Reproduzir o som de clique
        clickAudio.play();
        // Adicione um pequeno atraso antes de redirecionar para garantir que o áudio tenha tempo de começar
        setTimeout(() => {
          history.push('/start');
        }, 300); // Ajuste o valor do atraso conforme necessário
      };

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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
            <div>
                <BackToHomeButton5 />
            </div>

            <h1 style={{ marginTop: '100px', textDecoration: 'none', color: '#754c24', fontSize: '34px', fontFamily: 'Archivo, sans-serif' , textAlign: 'center' }}>
            Bem-vindo Jogador! 
            </h1>
            <h1 style={{ marginTop: '50px', textDecoration: 'none', color: '#754c24', fontSize: '25px', fontFamily: 'Archivo, sans-serif' , textAlign: 'center' }}>
            Neste jogo poderá ter o seu animal preferido.
            </h1>
            <h1 style={{ marginTop: '30px', textDecoration: 'none', color: '#754c24', fontSize: '25px', fontFamily: 'Archivo, sans-serif' , textAlign: 'center' }}>
            Caminhe com ele para cuidar das suas necessidades.
            </h1>
            <h1 style={{ marginTop: '30px', textDecoration: 'none', color: '#754c24', fontSize: '25px', fontFamily: 'Archivo, sans-serif' , textAlign: 'center' }}>
            Personalize-o com acessórios ganhos.
            </h1>
            

            <button
                style={{
                    backgroundColor: 'rgb(255, 165, 0)',
                    color: 'white',
                    borderRadius: '10px',
                    padding: '10px',
                    border: 'none',
                    cursor: 'pointer',
                    marginTop: '80px', // Adiciona espaço entre os botões
                }}
            >
                <Link to="#" onClick={handleButtonClick}
                    style={{textDecoration: 'none', color: 'white', fontSize: '15px'  }}
                >
                    <h1 style={{ fontSize: '24px', fontFamily: 'Archivo, sans-serif'}}>Continuar</h1>
                </Link>
            </button>
            
        </div>
    );
}

export default Intro;