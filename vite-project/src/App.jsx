
import { useState } from 'react'
import MapViewer from './components/MapViewer';
import Move from './components/Move';
import './App.css'


function App() {
  const [level, setLevel] = useState(0);
  const [position, setPosition] = useState([40.186156,-8.416319]);
  const [location, setLocation] = useState({});
  const [flag, setFlag] = useState(true);

  if (flag && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (geoLocation) => {
        const {latitude, longitude} = geoLocation.coords;
        // setLocation({latitude, longitude});
        setPosition([latitude, longitude]);
        setFlag(false);
      }
    )
  };

  console.log(position);

  return (
    <>
      <h1>AR Maps</h1>

      <MapViewer position={position}></MapViewer>
      <Move position={position} setPosition={setPosition}></Move>

      <div>
          <label className="level">
              Steps equals to Level: {level}
          </label>
      </div>
    </>
  )
}

export default App
