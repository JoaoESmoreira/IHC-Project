
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Rewards.css"
import React, { useState } from 'react';

import {catBlueHat, catPinkHat, catWhiteHat, cat, dogBlueHat, dogPinkHat, dogWhiteHat, dog, blueHat, pinkHat, whiteHat, noHat, 
    kerchief_purpleHat, kerchief_redHat, kerchief_green_whiteHat, kerchief_red_whiteHat, 
    catkerchief_purpleHat, catkerchief_redHat, catkerchief_green_whiteHat, catkerchief_red_whiteHat, 
    dogkerchief_purpleHat, dogkerchief_redHat, dogkerchief_green_whiteHat, dogkerchief_red_whiteHat} from '../constants/items'

import BackToHomeButton from '../components/BackToHomeButton4';
import clickSound from '/music/sound_button.mp3';

function Rewards({rewards,pet, setPet, selectedOption}) {

    if (selectedOption === '') {
        // Replace '/start' with the actual route to your Start view
        window.location.replace('/');
      }

    const [clickAudio] = useState(new Audio(clickSound));
    const rewardsVector = [noHat, blueHat, kerchief_purpleHat, pinkHat, kerchief_redHat, whiteHat, kerchief_green_whiteHat, kerchief_red_whiteHat];
    const CatequipedReward = [cat, catBlueHat, catkerchief_purpleHat, catPinkHat, catkerchief_redHat, catWhiteHat, catkerchief_green_whiteHat, catkerchief_red_whiteHat];
    const DogequipedReward = [dog, dogBlueHat, dogkerchief_purpleHat, dogPinkHat, dogkerchief_redHat, dogWhiteHat, dogkerchief_green_whiteHat, dogkerchief_red_whiteHat];
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    // equip an item
    const handleClick = (key) => {
        clickAudio.play();
        setTimeout(() => {
        if (selectedOption === 'gato') {
            setPet(CatequipedReward[key]);
        } else if (selectedOption === 'cão') {
            setPet(DogequipedReward[key]);
        }
        }, 300);
    };


    return (
        <div>
            <div>
            <BackToHomeButton />
            </div>
            <h1 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginTop:'30px' }}>Personalizar</h1>
                <div className="pet">
                    <img src= {pet} alt="pet" />
                </div>
            <Carousel responsive={responsive}>
                {
                    rewardsVector.map((imageReward, index) => (
                        <div className="item" key={index}>
                            <img src={imageReward} alt="reward" />
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
                            onClick={() => handleClick(index)}                    
                            >
                                <h1 style={{ textDecoration: 'none', color: 'white', fontSize: '20px'  }}>Equipar</h1>

                            </button>
                        </div>
                    )).slice(0,rewards+1)
                }
            </Carousel>
        </div>
    );
}

export default Rewards;
