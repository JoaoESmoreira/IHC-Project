
import { useState, useEffect } from 'react'

import MapViewer from '../components/MapViewer';
import MapViewer2 from '../components/MapViewer2';
import Move from '../components/Move';
import GPS from '../components/GPS';
import Popup from '../components/Popup';

import {catBlueHat, catPinkHat, catWhiteHat, cat, dogBlueHat, dogPinkHat, dogWhiteHat, dog, blueHat, pinkHat, whiteHat, noHat, 
    kerchief_purpleHat, kerchief_redHat, kerchief_green_whiteHat, kerchief_red_whiteHat, 
    catkerchief_purpleHat, catkerchief_redHat, catkerchief_green_whiteHat, catkerchief_red_whiteHat, 
    dogkerchief_purpleHat, dogkerchief_redHat, dogkerchief_green_whiteHat, dogkerchief_red_whiteHat,
    bath_icon, food_icon, play_icon, read_icon} from '../constants/items'
import './Map2.css'
import './Rewards.css'

import BackToMenuButton from '../components/BackToMenuButton';
import SpeechBubble from '../components/SpeechBubble';


import DogAnimation from '../DogAnimation'; // Importar o novo componente
import CatAnimation from '../CatAnimation'; // Importar o novo componente


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

function isPetInCondition(pet, equippedRewards) {
    // Verifica se o pet está nos índices 0, 1, 3 ou 5 dos equippedRewards
    const petIndex = equippedRewards.indexOf(pet);
    return [0, 1, 3, 5].includes(petIndex);
}


function Map2({numberRewards, setNumberRewards, level, setLevel, availablePoints, setAvailablePoints, pet, setPet, selectedOption}) {

    if (selectedOption === '') {
        // Replace '/start' with the actual route to your Start view
        window.location.replace('/');
      }

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
    const messages = ["Eu preciso de estudar!", "Eu preciso de tomar banho!",  "Eu tenho fome!", "Eu queria jogar à bola!",
                    "Eu tenho fome!", "Eu preciso de tomar banho!", "Eu queria jogar à bola!", "Eu preciso de estudar!"];
    const iconsMap = [read_icon, bath_icon, food_icon, play_icon, food_icon, bath_icon, play_icon, read_icon];
    const rewardsVector = [blueHat, kerchief_purpleHat, pinkHat, kerchief_redHat, whiteHat, kerchief_green_whiteHat, kerchief_red_whiteHat];
    const CatequipedReward = [cat, catBlueHat, catkerchief_purpleHat, catPinkHat, catkerchief_redHat, catWhiteHat, catkerchief_green_whiteHat, catkerchief_red_whiteHat];
    const DogequipedReward = [dog, dogBlueHat, dogkerchief_purpleHat, dogPinkHat, dogkerchief_redHat, dogWhiteHat, dogkerchief_green_whiteHat, dogkerchief_red_whiteHat];

    const [needs, setNeeds]                           = useState(0);
    const [position, setPosition]                     = useState([40.186156,-8.416319]);
    const [targetIndex, setTargetIndex]               = useState(0);
    const [previousTargetIndex, setPreviousTargetIndex] = useState(null);
    const [newTargetAvailable, setNewTargetAvailable] = useState(false);
    const [newRewardAvailable, setNewRewardAvailable] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const dogAnimationFrames = [
        '/dog_talking/dog_talking_1.png',
        '/dog_talking/dog_talking_2.png',
        '/dog_talking/dog_talking_3.png',
        '/dog_talking/dog_talking_4.png',
        '/dog_talking/dog_talking_5.png',
        '/dog_talking/dog_talking_6.png',
        '/dog_talking/dog_talking_7.png',
        '/dog_talking/dog_talking_8.png',
        '/dog_talking/dog_talking_9.png',
        // Adicione mais caminhos conforme necessário
      ];
    
      const catAnimationFrames = [
        '/Cat_talking/cat_talking_1.png',
        '/Cat_talking/cat_talking_2.png',
        '/Cat_talking/cat_talking_3.png',
        '/Cat_talking/cat_talking_4.png',
        '/Cat_talking/cat_talking_5.png',
        '/Cat_talking/cat_talking_6.png',
        '/Cat_talking/cat_talking_7.png',
        '/Cat_talking/cat_talking_8.png',
        '/Cat_talking/cat_talking_9.png',
        '/Cat_talking/cat_talking_10.png',
        // Adicione mais caminhos conforme necessário
      ];

      const dogAnimationFramesEat = [
        '/dog_chewing/dog_chewing1.png',
        '/dog_chewing/dog_chewing2.png',
        '/dog_chewing/dog_chewing3.png',
        '/dog_chewing/dog_chewing4.png',
        '/dog_chewing/dog_chewing5.png',
        '/dog_chewing/dog_chewing6.png',
        '/dog_chewing/dog_chewing7.png',
        '/dog_chewing/dog_chewing8.png',
        '/dog_chewing/dog_chewing9.png',
        '/dog_chewing/dog_chewing10.png',
        // Adicione mais caminhos conforme necessário
      ];
    
      const catAnimationFramesEat = [
        '/Cat_chewing/cat_chewing_1.png',
        '/Cat_chewing/cat_chewing_2.png',
        '/Cat_chewing/cat_chewing_3.png',
        '/Cat_chewing/cat_chewing_4.png',
        '/Cat_chewing/cat_chewing_5.png',
        '/Cat_chewing/cat_chewing_6.png',
        '/Cat_chewing/cat_chewing_7.png',
        '/Cat_chewing/cat_chewing_8.png',
        '/Cat_chewing/cat_chewing_9.png',
        '/Cat_chewing/cat_chewing_10.png',
        // Adicione mais caminhos conforme necessário
      ];

      const dogAnimationFramesShower = [
        '/dog_shower/dog_shower1.png',
        '/dog_shower/dog_shower2.png',
        '/dog_shower/dog_shower3.png',
        '/dog_shower/dog_shower4.png',
        '/dog_shower/dog_shower5.png',
        '/dog_shower/dog_shower6.png',
        '/dog_shower/dog_shower7.png',
        '/dog_shower/dog_shower8.png',
        '/dog_shower/dog_shower9.png',
        '/dog_shower/dog_shower10.png',
        '/dog_shower/dog_shower11.png',
        '/dog_shower/dog_shower12.png',
        '/dog_shower/dog_shower13.png',
        '/dog_shower/dog_shower14.png',
        '/dog_shower/dog_shower15.png',
        '/dog_shower/dog_shower16.png',
        '/dog_shower/dog_shower17.png',
        '/dog_shower/dog_shower18.png',
        // Adicione mais caminhos conforme necessário
      ];
    
      const catAnimationFramesShower = [
        '/cat_shower/cat_shower1.png',
        '/cat_shower/cat_shower2.png',
        '/cat_shower/cat_shower3.png',
        '/cat_shower/cat_shower4.png',
        '/cat_shower/cat_shower5.png',
        '/cat_shower/cat_shower6.png',
        '/cat_shower/cat_shower7.png',
        '/cat_shower/cat_shower8.png',
        '/cat_shower/cat_shower9.png',
        '/cat_shower/cat_shower10.png',
        '/cat_shower/cat_shower11.png',
        '/cat_shower/cat_shower12.png',
        '/cat_shower/cat_shower13.png',
        '/cat_shower/cat_shower14.png',
        '/cat_shower/cat_shower15.png',
        '/cat_shower/cat_shower16.png',
        '/cat_shower/cat_shower17.png',
        '/cat_shower/cat_shower18.png',
        // Adicione mais caminhos conforme necessário
      ];

      const presentAnimationFrames = [
        '/present_animation/present_animation_1.png',
        '/present_animation/present_animation_2.png',
        '/present_animation/present_animation_3.png',
        '/present_animation/present_animation_4.png',
        '/present_animation/present_animation_5.png',
        '/present_animation/present_animation_6.png',
        '/present_animation/present_animation_7.png',
        '/present_animation/present_animation_8.png',
        '/present_animation/present_animation_9.png',
        '/present_animation/present_animation_10.png',
        // Adicione mais caminhos conforme necessário
      ];


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
        setPreviousTargetIndex(targetIndex);
        setTargetIndex(randomValue);
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
        setShowPopup(false);
    };
    const handleClick2 = (key) => {
        setNewTargetAvailable(false);
        setShowPopup(false);
    };
    const handleClick3 = (key) => {
        setNewRewardAvailable(false);
        setShowPopup(false);
    };

    const cutImageStyle1 = {
        width: '300px',
        height: '215px',
        position: 'relative',
        top: '-220px',  // Ajuste este valor conforme necessário para mover mais para cima
        clipPath: 'polygon(0 0, 100% 0, 100% 30%, 0% 30%)',
      };
    const cutImageStyle2 = {
        width: '300px',
        height: '215px',
        position: 'relative',
        top: '-220px',  // Ajuste este valor conforme necessário para mover mais para cima
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 51%, 0% 51%)',
      };

      const petImageStyle = isPetInCondition(pet, selectedOption === 'gato' ? CatequipedReward : DogequipedReward)
        ? cutImageStyle1
        : cutImageStyle2;

    return(
        <div className='Map' >
            <div>
            <BackToMenuButton />
            {/* Conteúdo da sua view */}
            </div>
            
            {
            // Uncomment to get current position
            //<GPS setPosition={setPosition} />
            }

            

            {/* {
                newTargetAvailable && (
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
                )
            }
            {
                newRewardAvailable && (
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
                )
            } */}

                {
                newTargetAvailable && (
                    <>
                    
                    <h1 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginTop:'30px'}}>Mapa</h1>
                    <MapViewer2 className="map-container"
                        position={position} 
                        pet={pet}
                        zoom={16}
                        />

                    {selectedOption === 'gato' && (
                        <div style={{ display: 'flex', marginTop: '10px', width: '350px', height: '250px', margin: '0 -70px' }}>

                                {previousTargetIndex === 1 || previousTargetIndex === 5 ? (
                                    /* Renderizar a animação correspondente ao targetIndex 1 ou 5 */
                                    <CatAnimation frames={catAnimationFramesShower} width={300} height={215} />
                                ) : previousTargetIndex === 2 || previousTargetIndex === 4 ? (
                                    <div>
                                        <CatAnimation frames={catAnimationFramesEat} width={300} height={215} />
                                        <img src={pet} alt="reward" style={petImageStyle} />
                                </div>
                                ) : (
                                    <div>
                                        <CatAnimation frames={catAnimationFrames} width={300} height={215} />
                                        <img src={pet} alt="reward" style={petImageStyle} />
                                </div>
                                )}

                            <button
                                style={{
                                    backgroundColor: 'transparent',
                                    color: 'white',
                                    borderRadius: '10px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    marginTop: '-40px',
                                    left : '-30px',
                                    width: 'fit-content',
                                    alignSelf: 'center',
                                    marginLeft: '-70px',
                                    clipPath: 'polygon(0% 100%, 80% 100%, 80% 0%, 0% 0%)',
                                    }}
                                onClick={() => setShowPopup(true)}
                            >
                                {/* <h1 style={{ textDecoration: 'none', color: 'white', fontSize: '20px' }}>Presente</h1> */}
                                <DogAnimation frames={presentAnimationFrames} width={210} height={150} />
                            </button>
                        </div>
                    )}

                    {selectedOption === 'cão' && (
                        <div style={{ display: 'flex', marginTop: '10px', width: '350px', height: '250px', margin: '0 -70px' }}>
                            {previousTargetIndex === 1 || previousTargetIndex === 5 ? (
                                    /* Renderizar a animação correspondente ao targetIndex 1 ou 5 */
                                    <DogAnimation frames={dogAnimationFramesShower} width={300} height={215} />
                                ) : previousTargetIndex === 2 || previousTargetIndex === 4 ? (
                                    <div>
                                        <DogAnimation frames={dogAnimationFramesEat} width={300} height={215} />
                                        <img src={pet} alt="reward" style={petImageStyle} />
                                </div>
                                ) : (
                                    <div>
                                        <DogAnimation frames={dogAnimationFrames} width={300} height={215} />
                                        <img src={pet} alt="reward" style={petImageStyle} />
                                </div>
                                )}
                            <button
                                style={{
                                    backgroundColor: 'transparent',
                                    color: 'white',
                                    borderRadius: '10px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    marginTop: '-40px',
                                    left : '-30px',
                                    width: 'fit-content',
                                    alignSelf: 'center',
                                    marginLeft: '-70px',
                                    clipPath: 'polygon(0% 100%, 80% 100%, 80% 0%, 0% 0%)',
                                    }}
                                onClick={() => setShowPopup(true)}
                            >
                                {/* <h1 style={{ textDecoration: 'none', color: 'white', fontSize: '20px' }}>Presente</h1> */}
                                <DogAnimation frames={presentAnimationFrames} width={210} height={150} />
                            </button>
                        </div>
                    )}

                    <Move setPosition={setPosition} />


                    {/* Popup que é mostrado quando o botão é clicado */}
                    {showPopup && (
                        <Popup trigger={true} setPopup={() => {setShowPopup(false); setPresentClicked(false);}}>
                        <div className="popup-content">
                            <h1>Um novo ponto de interesse!</h1>
                        </div>
                        <MapViewer
                            className="map-container"
                            position={position}
                            availablePoints={availablePoints}
                            interestPoints={interestPoints}
                            targetIndex={availablePoints - 1}
                            isPopup={true}
                            pet={pet}
                            zoom={16}
                        />
                        <button
                            style={{
                                backgroundColor: 'rgb(255, 165, 0)',
                                color: 'white',
                                borderRadius: '10px',
                                padding: '10px 20px',
                                border: 'none',
                                cursor: 'pointer',
                                marginTop: '30px', // Adiciona espaço entre os botões
                                /* width: 'fit-content', */
                                /* alignSelf: 'flex-end', // Alinha o botão à direita
                                marginRight: '10px', // Adiciona margem à direita */
                                margin: 'auto',
                                display: 'block',
                                width: '38%',
                        }} 
                            onClick={() => handleClick2(numberRewards)}
                        >
                            <h1 style={{ textDecoration: 'none', color: 'white', fontSize: '20px' }}>Ok</h1>
                        </button>
                        </Popup>
                    )}
                </>
                )
            }
            {
                newRewardAvailable && (
                    <>
                    <h1 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginTop:'30px'}}>Mapa</h1>
                    <MapViewer2 className="map-container"
                        position={position} 
                        pet={pet}
                        zoom={16}
                        />

                    {selectedOption === 'gato' && (
                        <div style={{ display: 'flex', marginTop: '10px', width: '350px', height: '250px', margin: '0 -70px' }}>
                            {previousTargetIndex === 1 || previousTargetIndex === 5 ? (
                                    /* Renderizar a animação correspondente ao targetIndex 1 ou 5 */
                                    <CatAnimation frames={catAnimationFramesShower} width={300} height={215} />
                                ) : previousTargetIndex === 2 || previousTargetIndex === 4 ? (
                                    <div>
                                        <CatAnimation frames={catAnimationFramesEat} width={300} height={215} />
                                        <img src={pet} alt="reward" style={petImageStyle} />
                                </div>
                                ) : (
                                    <div>
                                        <CatAnimation frames={catAnimationFrames} width={300} height={215} />
                                        <img src={pet} alt="reward" style={petImageStyle} />
                                </div>
                                )}
                            <button
                                style={{
                                    backgroundColor: 'transparent',
                                    color: 'white',
                                    borderRadius: '10px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    marginTop: '-40px',
                                    left : '-30px',
                                    width: 'fit-content',
                                    alignSelf: 'center',
                                    marginLeft: '-70px',
                                    clipPath: 'polygon(0% 100%, 80% 100%, 80% 0%, 0% 0%)',
                                    }}
                                onClick={() => setShowPopup(true)}
                            >
                                {/* <h1 style={{ textDecoration: 'none', color: 'white', fontSize: '20px' }}>Presente</h1> */}
                                <DogAnimation frames={presentAnimationFrames} width={210} height={150} />
                            </button>
                        </div>
                    )}

                    {selectedOption === 'cão' && (
                        <div style={{ display: 'flex', marginTop: '10px', width: '350px', height: '250px', margin: '0 -70px' }}>
                             {previousTargetIndex === 1 || previousTargetIndex === 5 ? (
                                    /* Renderizar a animação correspondente ao targetIndex 1 ou 5 */
                                    <DogAnimation frames={dogAnimationFramesShower} width={300} height={215} />
                                ) : previousTargetIndex === 2 || previousTargetIndex === 4 ? (
                                    <div>
                                        <DogAnimation frames={dogAnimationFramesEat} width={300} height={215} />
                                        <img src={pet} alt="reward" style={petImageStyle} />
                                </div>
                                ) : (
                                    <div>
                                        <DogAnimation frames={dogAnimationFrames} width={300} height={215} />
                                        <img src={pet} alt="reward" style={petImageStyle} />
                                </div>
                                )}
                            <button
                                style={{
                                    backgroundColor: 'transparent',
                                    color: 'white',
                                    borderRadius: '10px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    marginTop: '-40px',
                                    left : '-30px',
                                    width: 'fit-content',
                                    alignSelf: 'center',
                                    marginLeft: '-70px',
                                    clipPath: 'polygon(0% 100%, 80% 100%, 80% 0%, 0% 0%)',
                                    }}
                                onClick={() => setShowPopup(true)}
                            >
                                {/* <h1 style={{ textDecoration: 'none', color: 'white', fontSize: '20px' }}>Presente</h1> */}
                                <DogAnimation frames={presentAnimationFrames} width={210} height={150} />
                            </button>
                        </div>
                    )}

                    <Move setPosition={setPosition} />

                    {/* Popup que é mostrado quando o botão é clicado */}
                    {showPopup && (
                    <Popup trigger={true} setPopup={() => {setShowPopup(false); setPresentClicked(false);}}>
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
                            <button
                                style={{
                                    backgroundColor: 'rgb(255, 165, 0)',
                                    color: 'white',
                                    borderRadius: '10px',
                                    padding: '5px 10px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    marginTop: '30px', // Adiciona espaço entre os botões
                                    width: 'fit-content',
                                    alignSelf: 'center',
                            }}       
                            onClick={() => handleClick3(numberRewards)}                    
                            >
                                <h1 style={{ textDecoration: 'none', color: 'white', fontSize: '15px'  }}>Não Equipar</h1>

                            </button>
                        </div>
                    </Popup>
                    )}
                </>
                )
            }
            
            {(!newTargetAvailable && !newRewardAvailable) && (
                <>
                    <h1 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginTop:'30px'}}>Mapa</h1>
                    <MapViewer className="map-container"
                        position={position} 
                        availablePoints={availablePoints} 
                        interestPoints={interestPoints} 
                        targetIndex={targetIndex} 
                        newTargetAvailable={newTargetAvailable} 
                        newRewardAvailable={newRewardAvailable} 
                        message={messages[needs]}
                        pet={pet}
                        zoom={16}
                        />
                    {selectedOption === 'gato' && (
                        <div style={{ display: 'flex', marginTop: '10px', width: '350px', height: '250px', margin: '0 -70px' }}>
                            <div>
                                <CatAnimation frames={catAnimationFrames} width={300} height={215} />
                                <img src={pet} alt="reward" style={petImageStyle} />
                            </div>
                            <div>
                                <SpeechBubble message={messages[needs]} />
                            </div>
                        </div>
                    )}

                    {selectedOption === 'cão' && (
                        <div style={{ display: 'flex', marginTop: '10px', width: '350px', height: '250px', margin: '0 -70px' }}>
                            <div>
                                <DogAnimation frames={dogAnimationFrames} width={300} height={215} />
                                <img src={pet} alt="reward" style={petImageStyle} />
                            </div>
                            <div>
                                <SpeechBubble message={messages[needs]} />
                            </div>
                        </div>
                    )}

                    <Move setPosition={setPosition} />
                </>
            )}

            

            
        </div>
    )
}

export default Map2;
