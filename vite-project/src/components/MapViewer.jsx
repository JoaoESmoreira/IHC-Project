
import { 
    MapContainer,
    TileLayer,
    Marker,
    useMap,
} from "react-leaflet";

import {blueIcon, redIcon, greyIcon} from '../constants/icon'
import {React, useEffect, useRef} from "react";


function ResetLocation({position}) {
    const map = useMap();
    if (map) {
        map.setView(position, map.getZoom());
    }
    return null;
}

function OpenPopup({position, message}) {
    const map = useMap();
    if (map) {
        L.popup()
            .setLatLng(position)
            .setContent(message)
            .openOn(map);
    }
    return null;
}


function MapViewer({position, availablePoints, interestPoints, targetIndex, newTargetAvailable, newRewardAvailable, isPopup, message, pet}) {

    const catIcon = L.icon({
        iconSize: [42, 30],
        iconAnchor: [21, 41],
        popupAnchor: [2, -40],
        iconUrl: pet,
    });


    return newRewardAvailable || newTargetAvailable ? (
        ""
    ) : (
        <div>
            <MapContainer
                center={position} zoom={17} style={{width: '100%', height: '50vh'}}
            >
                <TileLayer
                    url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                    attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    recenter={position}
                />
                {
                    isPopup ? (
                        interestPoints.map((coord, index) =>(
                            index < availablePoints ? (
                                index === targetIndex  ? (
                                    <Marker position={coord} key={index} icon={blueIcon} />
                                ) : (
                                    <Marker position={coord} key={index} icon={redIcon} />
                                )
                            ) : ""
                        ))
                    ) : (
                        <Marker position={interestPoints[targetIndex]} icon={blueIcon} >
                            <OpenPopup position={[interestPoints[targetIndex][0]+0.00025, interestPoints[targetIndex][1]]} message={message}/>
                        </Marker>
                    )
                }
                <Marker position={position} icon={catIcon} />
                <ResetLocation position={position} />
            </MapContainer>
        </div>
    )
}

export default MapViewer;
