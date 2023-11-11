
import { useState, useEffect } from 'react'

import MapViewer from '../components/MapViewer';
import Move from '../components/Move';
import GPS from '../components/GPS';
import Popup from '../components/Popup';

import {blueHat, pinkHat, whiteHat} from '../constants/items'
import './Map.css'


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


function Map({numberRewards, setNumberRewards, level, setLevel, availablePoints, setAvailablePoints, pet}) {
    const deiCoordinates = [40.186390, -8.416174];
    const cantineCoordinates = [40.186296, -8.413942];
    const deecCoordinates = [40.186648, -8.416426];
    const residenceCoordinates = [40.186816, -8.414771];
    const auditoriumCoordinates = [40.186373, -8.412231];
    const civilCoordinates = [40.185357, -8.415305];
    const chemistryCoordinates = [40.186373, -8.417735];
    const mechanicCoordinates = [40.184472, -8.412236];
    const interestPoints = [deiCoordinates, deecCoordinates, cantineCoordinates, residenceCoordinates, 
        auditoriumCoordinates, civilCoordinates, chemistryCoordinates, mechanicCoordinates];
    const messages = ["I am hungry", "I need to go to the bathroom", "I need to study"];
    const rewardsVector = [blueHat, pinkHat, whiteHat, blueHat, pinkHat, whiteHat];

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


    return(
        <div className='Map'>
            <h1>AR Maps</h1>
            {/*
            // Uncomment to get current position
            <GPS setPosition={setPosition} />
            */}
            {
                newTargetAvailable ? (
                    <Popup trigger={true} setPopup={setNewTargetAvailable}>
                        <h1>A New Interest Point is Available</h1>
                        <MapViewer className="map-container" 
                                    position={position} 
                                    availablePoints={availablePoints} 
                                    interestPoints={interestPoints} 
                                    targetIndex={availablePoints-1} 
                                    isPopup={true}
                                    pet={pet}
                                    />
                    </Popup>
                ) : ""
            }
            {
                newRewardAvailable ? (
                    <Popup trigger={true} setPopup={setNewRewardAvailable}>
                        <h1>Congrats!!</h1>
                        <p>The new reward!</p>
                        <img src={rewardsVector[numberRewards-1]} alt="reward" />
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

            <h1>Status</h1>

            <div>
                <p className="level">
                    Steps equals to Level: {level}
                </p>
                <p className="level">
                    Available Points: {availablePoints}
                </p>
                <p className="level">
                    Number of Available Rewards: {numberRewards}
                </p>
                <p className="level">
                    Target: {targetIndex}
                </p>
            </div>

            <Move setPosition={setPosition} />
        </div>
    )
}

export default Map;
