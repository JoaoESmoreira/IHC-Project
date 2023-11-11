import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import DogAnimation from '../DogAnimation'; // Importar o novo componente
import CatAnimation from '../CatAnimation'; // Importar o novo componente

function Menu({ selectedOption, animalName }) {

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
        
            <p style={{ fontSize: '22px' }}>Menu</p>

            <div>
            <Link to={`/map`}>
                <button
                    style={{
                        backgroundColor: 'rgb(255, 165, 0)',
                        borderRadius: '5px',
                        padding: '40px 10px',
                        border: 'none',
                        cursor: 'pointer',
                        position: 'relative', // or 'absolute'
                        top: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    {selectedOption === 'cat' && (
                            <CatAnimation frames={catAnimationFrames} width={300} height={215} style={{ top: '-20px' }}/>
                    )}
                    <span
                        style={{
                            color: 'white',
                            position: 'absolute', // Position the text absolutely within the button
                            left: '50%', // Move the text horizontally to the center of the button
                            top: '70%', // Move the text vertically to the center of the button
                            transform: 'translate(-50%, 50%)', // Offset to move the text down
                        }}
                    >
                        Click to walk with {animalName}
                    </span>
                </button>
            </Link>

            </div>
            <div>
            <Link to={`/`}>
                <button
                    style={{
                        backgroundColor: 'rgb(255, 165, 0)',
                        borderRadius: '5px',
                        padding: '40px 10px',
                        border: 'none',
                        cursor: 'pointer',
                        position: 'relative', // or 'absolute'
                        top: '30px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                     
                        {selectedOption === 'cat' && (
                            <CatAnimation frames={catAnimationFrames} width={300} height={215} style={{ top: '-20px' }}/>
                    )}

                    
                    <span
                        style={{
                            color: 'white',
                            position: 'absolute', // Position the text absolutely within the button
                            left: '50%', // Move the text horizontally to the center of the button
                            top: '70%', // Move the text vertically to the center of the button
                            transform: 'translate(-50%, 50%)', // Offset to move the text down
                        }}
                    >
                        Click to Start
                    </span>
                </button>
            </Link>

            </div>

        </div>
    );
}

export default Menu;