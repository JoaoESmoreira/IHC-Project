
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Rewards.css"

import image from "../assets/Cat_chewing/cat_chewing_1.png"

function Rewards({rewards}) {
    const rewardsVector = [image, image, image, image, image, image, image, image, image, image];
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

    return (
        <div>
            <h1>reward</h1>
                <div className="item">
                    <img src={image} alt="pet" />
                </div>
            <Carousel responsive={responsive}>
                {
                    rewardsVector.map((imageReward, index) => (
                        <div className="item">
                            <img src={imageReward} alt="reward" key={index} />
                        </div>
                    )).slice(0,rewards)
                }
            </Carousel>
        </div>
    );
}

export default Rewards;
