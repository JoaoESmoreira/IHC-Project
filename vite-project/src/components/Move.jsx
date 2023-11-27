
import React from "react";

function Move({setPosition}) {

    const updatePosition = (incr1, incr2) => {
        setPosition((prevPos) => [prevPos[0] + incr1, prevPos[1] + incr2]);
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '50px'}}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
                <button 
                
                onClick={ () => updatePosition(0.00003, 0.0) }>
                    UP
                </button>
                <div 
                    style={{
                            marginTop: '10px'
                        }}>
                        <button onClick={ () => updatePosition(0.0, -0.00003) }>
                            LEFT
                        </button>
                        <button onClick={ () => updatePosition(0.0, 0.00003) }>
                            RIGHT
                        </button>
                    </div>
                <button 
                style={{
                    marginTop: '10px'
                }}
                onClick={ () => updatePosition(-0.00003, 0.0) }>
                    DOWN
                </button>
            </div>
            
        </div>
    )
}

export default Move;
