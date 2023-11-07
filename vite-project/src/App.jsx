
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Start from './views/Start';
import Map from './views/Map';
import Home2 from './views/Home2';
import Home3 from './views/Home3';
import './App.css'


function App() {
    const [numberRewards, setNumberRewards] = useState(0);

    return (
        <>
            <Router>
                <Link to="/" >Start Page</Link>
                <Link to="/map" >Game</Link>
                <Link to="/home2" >Home2</Link>
                <Link to="/home3" >Home3</Link>

                <Switch>
                    <Route exact path='/'>
                        <Start />
                    </Route>
                    <Route path='/map'>
                        <Map numberRewards={numberRewards} setNumberRewards={setNumberRewards} />
                    </Route>
                    <Route path='/home2'>
                        <Home2 />
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
