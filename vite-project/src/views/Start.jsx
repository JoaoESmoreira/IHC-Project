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
        <div>
            <div>
            <p>Choose an animal:</p>
            <button
                style={{
                    backgroundColor: selectedOption === 'dog' ? 'rgb(255, 165, 0)' : 'white',
                    color: selectedOption === 'dog' ? 'white' : 'rgb(255, 165, 0)',
                    borderRadius: '5px',
                        padding: '80px 80px',
                        border: 'none',
                        cursor: 'pointer',
                        position: 'relative', // or 'absolute'
                        left: '90px',
                        top: '10px',
                }}
                onClick={() => handleOptionChange('dog')}
            >
                <DogAnimation frames={dogAnimationFrames} />
            </button>
            </div>
            <div>
            <button
                style={{
                    backgroundColor: selectedOption === 'cat' ? 'rgb(255, 165, 0)' : 'white',
                    color: selectedOption === 'cat' ? 'white' : 'rgb(255, 165, 0)',


                    borderRadius: '5px',
                        padding: '80px 80px',
                        border: 'none',
                        cursor: 'pointer',
                        position: 'relative', // or 'absolute'
                        left: '92px',
                        top: '20px',
                }}
                onClick={() => handleOptionChange('cat')}
            >
                <CatAnimation frames={catAnimationFrames} />
            </button>
            </div>
            <div>
            <button
                style={{
                    backgroundColor: 'rgb(255, 165, 0)',
                    color: 'white',
                    borderRadius: '5px',
                    padding: '5px 10px',
                    border: 'none',
                    cursor: 'pointer',
                    position: 'relative',
                    left: '152px',
                    top: '40px',
                }}
            >
                <Link
                    to={`/Start2/${selectedOption}`}
                    style={{ textDecoration: 'none', color: 'white' }}
                >
                    Submit
                </Link>
            </button>
            </div>
        </div>
    );
}

export default Start;
