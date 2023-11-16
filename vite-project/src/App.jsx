
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Logo from './views/Logo';
import Start from './views/Start';
import Start2 from './views/Start2';
import Menu from './views/Menu';
import Map from './views/Map';
import Map2 from './views/Map2';
import Rewards from './views/Rewards';
import Home3 from './views/Home3';
import './App.css'


function App() {
    const [numberRewards, setNumberRewards] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [animalName, setAnimalName] = useState('');
    const [petImage, setPetImage] = useState(null);
    const [level, setLevel] = useState(0);
    const [availablePoints, setAvailablePoints] = useState(2);
 

    return (
        <>
            <Router>
                {/* <Link to="/" >Logo</Link>
                <Link to="/start" >Start Page</Link>
                <Link to="/start2" >Start2</Link>
                <Link to="/menu" >Menu</Link>
                <Link to="/map" >Game</Link>
                <Link to="/rewards" >rewards</Link>
                <Link to="/home3" >Home3</Link> */}

                <Switch>
                    <Route
                    path="/"
                    exact
                    render={(props) => (
                    <Logo {...props} selectedOption={selectedOption} animalName= {animalName} />
                    )}
                    />

                    <Route
                    path="/start"
                    exact
                    render={(props) => (
                    <Start {...props} selectedOption={selectedOption} setSelectedOption={setSelectedOption} setPet={setPetImage} />
                    )}
                    />
                    <Route
                    path="/start2"
                    render={(props) => (
                    <Start2 {...props} selectedOption={selectedOption}  animalName= {animalName} setAnimalName={setAnimalName} setPet={setPetImage}/>
                    )}
                    />
                    <Route
                    path="/menu"
                    render={(props) => (
                    <Menu {...props} selectedOption={selectedOption}  animalName= {animalName} />
                    )}
                    />

                    <Route path='/map'>

                        <Map numberRewards={numberRewards} 
                        setNumberRewards={setNumberRewards} 
                        level={level}
                        setLevel={setLevel}
                        availablePoints={availablePoints}
                        setAvailablePoints={setAvailablePoints}
                        pet={petImage}
                        setPet={setPetImage}
                        selectedOption={selectedOption}
                        />

                    </Route>

                    <Route path='/map2'>

                        <Map2 numberRewards={numberRewards} 
                        setNumberRewards={setNumberRewards} 
                        level={level}
                        setLevel={setLevel}
                        availablePoints={availablePoints}
                        setAvailablePoints={setAvailablePoints}
                        pet={petImage}
                        setPet={setPetImage}
                        selectedOption={selectedOption}
                        />

                    </Route>

                    <Route path='/rewards'>

                        <Rewards rewards={numberRewards} pet= {petImage} setPet={setPetImage} selectedOption={selectedOption} />

                    </Route>

                    <Route path='/home3'>
                        <Home3 />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App
