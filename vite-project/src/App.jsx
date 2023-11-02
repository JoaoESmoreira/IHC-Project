
import { useState } from 'react'
import MapViewer from './components/MapViewer';
import Move from './components/Move';
import GPS from './components/GPS';
import './App.css'

function App() {
    const [level, setLevel] = useState(0);
    const [position, setPosition] = useState([40.186156,-8.416319]);

    console.log(position);

    return (
        <>
            <h1>AR Maps</h1>

            <GPS setPosition={setPosition} />
            <MapViewer position={position} />
            <Move position={position} setPosition={setPosition} />

            <div>
                <label className="level">
                    Steps equals to Level: {level}
                </label>
            </div>
        </>
    );
}

export default App
