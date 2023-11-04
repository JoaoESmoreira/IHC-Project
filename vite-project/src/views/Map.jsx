
import { useState, useEffect } from 'react'

import MapViewer from '../components/MapViewer';
import Move from '../components/Move';
import GPS from '../components/GPS';

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
    return EuclidianDistance(position1, position2) <= 0.00005;
}

function CloseToTarget(position, interestPoints) {
    /**
     * Returns true if there is an element on interestPoints next to position.
     */
    for (let i = 0; i < interestPoints.length; i++) {
        if (IsClose(position, interestPoints[i])) {
            return interestPoints[i];
        }
    }
    return null;
}


function Map() {
    const [position, setPosition] = useState([40.186156,-8.416319]);

    const deiCoordinates = [40.186513, -8.416024];
    const cantineCoordinates = [40.186296, -8.413942];
    const deecCoordinates = [40.186648, -8.416426];
    const interestPoints = [deiCoordinates, cantineCoordinates, deecCoordinates];

    const [level, setLevel] = useState(1);
    const [lastTarget, setLastTarget] = useState([]);

    // ckeck if the person through by a checkpoint
    useEffect(() => {
        const tTarget = CloseToTarget(position, interestPoints);
        // animaçao

        if (tTarget !== null && JSON.stringify(lastTarget) !== JSON.stringify(tTarget)) {
            console.log(level);
            setLastTarget(tTarget);
            setLevel(level + 1);
        }
      }, [position]);

    return(
        <div className='Map'>
            <h1>AR Maps</h1>
            {/*
            // Uncomment to get current position
            <GPS setPosition={setPosition} />
            */}
            <MapViewer position={position} interestPoints={interestPoints} level={level} />
            <h1>Status</h1>

            <div>
                <p className="level">
                    Steps equals to Level: {level}
                </p>
            </div>

            <Move setPosition={setPosition} />
        </div>
    )
}

export default Map;
