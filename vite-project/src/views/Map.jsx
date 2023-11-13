
import { useState, useEffect } from 'react'

import MapViewer from '../components/MapViewer';
import Move from '../components/Move';
import GPS from '../components/GPS';
import Popup from '../components/Popup';

import {catBlueHat, catPinkHat, catWhiteHat, cat, dogBlueHat, dogPinkHat, dogWhiteHat, dog, blueHat, pinkHat, whiteHat} from '../constants/items'
import './Map.css'
import './Rewards.css'

import BackToMenuButton from '../components/BackToMenuButton';


function EuclidianDistance(position1, position2) {
    /**
     * Returns the euclidian distance.
     */
    const x1 = position1[0];
    const x2 = position2[0];
    const y1 = position1[1];
    const y2 = position2[1];
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    const distance = Math.sqrt(
        deltaX*deltaX + deltaY*deltaY
    );
    return distance;
}

function IsClose(position1, position2) {
    /**
     * Returns true if position1 is next to position2, false otherwise.
     */
    return EuclidianDistance(position1, position2) <= 0.00009;
}

function randomNumber(min, max, excludeValue) {
    /**
     * Returns a random value between min and max different from exclude value.
     */
    let randomValue = Math.floor(Math.random() * (max - min )) + min; 
    do {
        randomValue = Math.floor(Math.random() * (max - min)) + min; 
    } while(randomValue === excludeValue)
    return randomValue;
}


function Map({numberRewards, setNumberRewards, level, setLevel, availablePoints, setAvailablePoints, pet, setPet, selectedOption}) {
    const deiCoordinates = [40.186390, -8.416174];
    const cantineCoordinates = [40.186296, -8.413942];
    const deecCoordinates = [40.186648, -8.416426];
    const residenceCoordinates = [40.186816, -8.414771];
    const auditoriumCoordinates = [40.186373, -8.412231];
    const civilCoordinates = [40.185357, -8.415305];
    const chemistryCoordinates = [40.186373, -8.417735];
    const mechanicCoordinates = [40.184472, -8.412236];
    const interestPoints = [deiCoordinates, deecCoordinates, cantineCoordinates, residenceCoordinates, 
        civilCoordinates, chemistryCoordinates, mechanicCoordinates, auditoriumCoordinates];
    const messages = ["Eu tenho fome!", "Eu preciso de ir à casa de banho!", "Eu preciso de estudar!", "Eu queria ir ao parque de diversões!"];
    const rewardsVector = [blueHat, pinkHat, whiteHat, blueHat, pinkHat, whiteHat, blueHat, pinkHat, whiteHat];
    const CatequipedReward = [cat, catBlueHat, catPinkHat, catWhiteHat, catBlueHat, catPinkHat, catWhiteHat, catBlueHat, catPinkHat, catWhiteHat];
    const DogequipedReward = [dog, dogBlueHat, dogPinkHat, dogWhiteHat, dogBlueHat, dogPinkHat, dogWhiteHat, dogBlueHat, dogPinkHat, dogWhiteHat];

    const [needs, setNeeds]                           = useState(0);
    const [position, setPosition]                     = useState([40.186156,-8.416319]);
    const [targetIndex, setTargetIndex]               = useState(0);
    const [newTargetAvailable, setNewTargetAvailable] = useState(false);
    const [newRewardAvailable, setNewRewardAvailable] = useState(false);

    // ckeck if the person is next to target
    useEffect(() => {
        if (IsClose(position, interestPoints[targetIndex])) {
            setLevel(level + 1);
            
            // reward and target system
            if ((level+1)%3 === 0) {
                setAvailablePoints(availablePoints + 1);
                setNewTargetAvailable(true);
            } else {
                setNumberRewards(numberRewards + 1);
                setNewRewardAvailable(true);
            }
        }
    }, [position]);

    // update target to achieve
    useEffect(() => {
        var randomValue = randomNumber(0, availablePoints, targetIndex);
        setTargetIndex(randomValue);
        randomValue = randomNumber(0, messages.length, -1);
        setNeeds(randomValue);
    }, [level]);

    // equip item
    const handleClick = (key) => {
        if (selectedOption === 'gato') {
            setPet(CatequipedReward[key]);
        } else if (selectedOption === 'cão') {
            setPet(DogequipedReward[key]);
        }
        setNewRewardAvailable(false);
    };

    return(
        <div className='Map' >
            <div>
            <BackToMenuButton />
            {/* Conteúdo da sua view */}
            </div>
            <h1 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginTop:'30px'}}>Mapa</h1>
            {
            // Uncomment to get current position
            //<GPS setPosition={setPosition} />
            }
            {
                newTargetAvailable ? (
                    <Popup trigger={true} setPopup={setNewTargetAvailable}>
                        <div className="popup-content">
                        <h1>Um novo ponto de interesse!</h1>
                        </div>
                        <MapViewer className="map-container" 
                                    position={position} 
                                    availablePoints={availablePoints} 
                                    interestPoints={interestPoints} 
                                    targetIndex={availablePoints-1} 
                                    isPopup={true}
                                    pet={pet}
                                    zoom={16}
                                    />
                    </Popup>
                ) : ""
            }
            {
                newRewardAvailable ? (
                    <Popup trigger={true} setPopup={setNewRewardAvailable}>
                        <div className="popup-content">
                            <h1>Parabéns!!</h1>
                            <p>Um novo Chapéu!</p>
                            <img src={rewardsVector[numberRewards-1]} alt="reward" />
                            <button
                                style={{
                                    backgroundColor: 'rgb(255, 165, 0)',
                                    color: 'white',
                                    borderRadius: '10px',
                                    padding: '10px 20px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    marginTop: '30px', // Adiciona espaço entre os botões
                                    width: 'fit-content',
                                    alignSelf: 'center',
                            }}       
                            onClick={() => handleClick(numberRewards)}                    
                            >
                                <h1 style={{ textDecoration: 'none', color: 'white', fontSize: '20px'  }}>Equipar</h1>

                            </button>
                        </div>
                    </Popup>
                ) : ""
            }
            <MapViewer className="map-container"
                        position={position} 
                        availablePoints={availablePoints} 
                        interestPoints={interestPoints} 
                        targetIndex={targetIndex} 
                        newTargetAvailable={newTargetAvailable} 
                        newRewardAvailable={newRewardAvailable} 
                        message={messages[needs]}
                        pet={pet}
                        />

            <h1 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', fontSize: '23px'}}>Progresso</h1>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start'}}>
                <p className="level">
                    Número de interações: {level}
                </p>
                <p className="level">
                    Pontos de interesse desbloqueados: {availablePoints}
                </p>
                <p className="level">
                    Número de prémios coletados: {numberRewards}
                </p>
                {/* <p className="level">
                    Objetivo: {targetIndex}
                </p> */}
            </div>

            <Move setPosition={setPosition} />
        </div>
    )
}

export default Map;
