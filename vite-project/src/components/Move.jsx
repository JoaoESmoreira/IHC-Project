
import React from "react";

function Move({position, setPosition}) {

    const updatePosition = (incr1, incr2) => {
        setPosition((prevPos) => [prevPos[0] + incr1, prevPos[1] + incr2]);
    }

    return (
        <div>
            <div>
                <button onClick={ () => updatePosition(0.00003, 0.0) }>
                    UP
                </button>
                <button onClick={ () => updatePosition(-0.00003, 0.0) }>
                    DOWN
                </button>
            </div>
            <div>
                <button onClick={ () => updatePosition(0.0, -0.00003) }>
                    LEFT
                </button>
                <button onClick={ () => updatePosition(0.0, 0.00003) }>
                    RIGHT
                </button>
            </div>
        </div>
    )
}

export default Move;
