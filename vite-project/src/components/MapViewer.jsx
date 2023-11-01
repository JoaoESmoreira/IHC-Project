
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Marker,
  useMap,
} from 'react-leaflet'


function ResetLocation({position}) {
  const map = useMap();
  if (map) {
    map.setView(position, map.getZoom());
  }
  return null;
}

function MapViewer({position}) {
  const deiCoordinates = [40.186513, -8.416024];

    return(
      <div>
        <MapContainer center={position} zoom={17} style={{width:'100%', height:'70vh'}}>
          <TileLayer 
            url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            recenter={position}
          />
          <Marker position={deiCoordinates} />
          <CircleMarker center={position} pathOptions={{ color: 'red' }} radius={6} />
          <ResetLocation position={position} />
        </MapContainer>
      </div>
    )
}

export default MapViewer;
