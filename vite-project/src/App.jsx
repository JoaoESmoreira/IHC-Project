
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Start from './views/Start';
import Start2 from './views/Start2';
import Menu from './views/Menu';
import Map from './views/Map';
import Rewards from './views/Rewards';
import Home3 from './views/Home3';
import pet from "./assets/Cat_chewing/cat_chewing_1.png"
import './App.css'


function App() {
    const [numberRewards, setNumberRewards] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [animalName, setAnimalName] = useState('');
    const [petImage, setPetImage] = useState(pet);
    const [level, setLevel] = useState(0);
    const [availablePoints, setAvailablePoints] = useState(2);

    return (
        <>
            <Router>
                <Link to="/" >Start Page</Link>
                <Link to="/start2" >Start2</Link>
                <Link to="/menu" >Menu</Link>
                <Link to="/map" >Game</Link>
                <Link to="/rewards" >rewards</Link>
                <Link to="/home3" >Home3</Link>

                <Switch>

                    <Route
                    path="/"
                    exact
                    render={(props) => (
                    <Start {...props} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
                    )}
                    />
                    <Route
                    path="/start2"
                    render={(props) => (
                    <Start2 {...props} selectedOption={selectedOption}  animalName= {animalName} setAnimalName={setAnimalName}/>
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
                        />

                    </Route>
                    <Route path='/rewards'>

                        <Rewards rewards={numberRewards} pet={petImage} setPet={setPetImage} />

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
