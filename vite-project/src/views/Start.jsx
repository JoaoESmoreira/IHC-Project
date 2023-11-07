import React, { useState } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function Start() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

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
                Dog
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
                Cat
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
