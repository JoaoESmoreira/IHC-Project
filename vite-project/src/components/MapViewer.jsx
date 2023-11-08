
import { 
    MapContainer,
    TileLayer,
    CircleMarker,
    Marker,
    useMap,
} from "react-leaflet";

import {blueIcon, redIcon, greyIcon} from '../constants/icon'


function ResetLocation({position}) {
    const map = useMap();
    if (map) {
        map.setView(position, map.getZoom());
    }
    return null;
}


function MapViewer({position, availablePoints, interestPoints, targetIndex, newTargetAvailable, newRewardAvailable}) {

    return newRewardAvailable || newTargetAvailable ? (
        ""
    ) : (
        <div>
            <MapContainer
                center={position} zoom={17} style={{width: '100%', height: '70vh'}}
            >
                <TileLayer
                    url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                    attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    recenter={position}
                />
                {
                    interestPoints.map((coord, index) =>(
                        index < availablePoints ? (
                            index === targetIndex  ? (
                                <Marker position={coord} key={index} icon={blueIcon} />
                            ) : (
                                <Marker position={coord} key={index} icon={redIcon} />
                            )
                        ) : (
                            <Marker position={coord} key={index} icon={greyIcon} />
                        )
                    ))
                }
                <CircleMarker center={position} pathOptions={{ color: 'red' }} radius={6} />
                <ResetLocation position={position} />
            </MapContainer>

        </div>
    )
}

export default MapViewer;
