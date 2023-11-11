
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Rewards.css"

import {catBlueHat, catPinkHat, catWhiteHat, blueHat, pinkHat, whiteHat} from '../constants/items'

function Rewards({rewards, pet, setPet}) {
    const equipedReward = [catBlueHat, catPinkHat, catWhiteHat, catBlueHat, catPinkHat, catWhiteHat];
    const rewardsVector = [blueHat, pinkHat, whiteHat, blueHat, pinkHat, whiteHat];
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
        setPet(equipedReward[key])
    };


    return (
        <div>
            <h1>AR Maps</h1>
                <div className="pet">
                    <img src={pet} alt="pet" />
                </div>
            <Carousel responsive={responsive}>
                {
                    rewardsVector.map((imageReward, index) => (
                        <div className="item" key={index}>
                            <img src={imageReward} alt="reward" />
                            <button className="equip-button" onClick={() => handleClick(index)}>Equipar</button>
                        </div>
                    )).slice(0,rewards)
                }
            </Carousel>
        </div>
    );
}

export default Rewards;
