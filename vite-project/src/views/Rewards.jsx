
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Rewards.css"

import {catBlueHat, catPinkHat, catWhiteHat, cat, dogBlueHat, dogPinkHat, dogWhiteHat, dog, blueHat, pinkHat, whiteHat, noHat} from '../constants/items'

import BackToMenuButton from '../components/BackToMenuButton';

function Rewards({rewards,pet, setPet, selectedOption}) {
    const CatequipedReward = [cat, catBlueHat, catPinkHat, catWhiteHat, catBlueHat, catPinkHat, catWhiteHat, catBlueHat, catPinkHat, catWhiteHat];
    const DogequipedReward = [dog, dogBlueHat, dogPinkHat, dogWhiteHat, dogBlueHat, dogPinkHat, dogWhiteHat, dogBlueHat, dogPinkHat, dogWhiteHat];
    const rewardsVector = [noHat, blueHat, pinkHat, whiteHat, blueHat, pinkHat, whiteHat, blueHat, pinkHat, whiteHat, blueHat, pinkHat, whiteHat];
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
        if (selectedOption === 'gato') {
            setPet(CatequipedReward[key]);
        } else if (selectedOption === 'cão') {
            setPet(DogequipedReward[key]);
        }
    };


    return (
        <div>
            <div>
            <BackToMenuButton />
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
