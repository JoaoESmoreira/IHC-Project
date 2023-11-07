
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Start from './views/Start';
import Start2 from './views/Start2';
import Menu from './views/Menu';
import Map from './views/Map';
import Home2 from './views/Home2';
import Home3 from './views/Home3';
import './App.css'


function App() {

    return (
        <>
            <Router>
                <Link to="/" >Start Page</Link>
                <Link to="/start2" >Start2</Link>
                <Link to="/menu" >Menu</Link>
                <Link to="/map" >Game</Link>
                <Link to="/home2" >Home2</Link>
                <Link to="/home3" >Home3</Link>

                <Switch>

                    <Route path="/" exact component={Start} />
                    <Route path="/start2/:selectedOption" component={Start2} />

                    <Route path="/menu/:selectedOption/:animalName" component={Menu} />

                    <Route path='/map'>
                        <Map />
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
