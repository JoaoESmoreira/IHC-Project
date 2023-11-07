import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Menu() {
    const { selectedOption, animalName } = useParams();

    return (
        <div>
        
            <p>Menu Page</p>

            <p>Selected Animal: {selectedOption}</p>
            <p>Animal Name: {animalName}</p>
            
            <p>Menu</p>
            <div>
            <Link to={`/map`}>
                <button
                    style={{
                        backgroundColor: 'rgb(255, 165, 0)',
                        borderRadius: '5px',
                        padding: '80px 80px',
                        border: 'none',
                        cursor: 'pointer',
                        position: 'relative', // or 'absolute'
                        left: '112px',
                        top: '10px',
                    }}
                >
                    <span
                        style={{
                            color: 'white',
                            position: 'absolute', // Position the text absolutely within the button
                            left: '50%', // Move the text horizontally to the center of the button
                            top: '70%', // Move the text vertically to the center of the button
                            transform: 'translate(-50%, 50%)', // Offset to move the text down
                        }}
                    >
                        Click to Map with {animalName}
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
                        padding: '80px 80px',
                        border: 'none',
                        cursor: 'pointer',
                        position: 'relative', // or 'absolute'
                        left: '112px',
                        top: '30px',
                    }}
                >
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