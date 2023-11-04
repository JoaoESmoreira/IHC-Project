import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function Start() {

    return (
        <div>
            <p>Starting Page</p>
            <button>
                <Link to="/map" >click</Link>
            </button>
        </div>
    );
}

export default Start;
