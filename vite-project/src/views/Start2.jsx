import React, { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

function Start2() {
    const { selectedOption } = useParams();
    const [animalName, setAnimalName] = useState('');
    const history = useHistory();

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
        <div>
            <p>Start2 Page</p>
            <p>Selected Animal: {selectedOption}</p>

            <p>Enter the name of the animal:</p>
            <input
                type="text"
                value={animalName}
                onChange={handleNameChange}
            />

            <button
                style={{
                    backgroundColor: 'rgb(255, 165, 0)',
                    color: 'white',
                    borderRadius: '5px',
                    padding: '5px 10px',
                    border: 'none',
                    cursor: 'pointer',
                    position: 'relative',
                    left: '10px',
                }}
                onClick={navigateToMenu}
            >
                <Link
                    to={`/menu/${selectedOption}/${animalName}`}
                    style={{ textDecoration: 'none', color: 'white' }}
                >
                    Submit
                </Link>
            </button>
        </div>
    );
}

export default Start2;


