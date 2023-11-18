
import { 
    MapContainer,
    TileLayer,
    Marker,
    useMap,
} from "react-leaflet";

import {blueIcon, redIcon, greyIcon} from '../constants/icon'
import {React, useEffect, useRef} from "react";

import {bath_icon, food_icon, play_icon, read_icon} from '../constants/items'

import './MapViewer.css'

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


function MapViewer({position, availablePoints, interestPoints, targetIndex, newTargetAvailable, newRewardAvailable, isPopup, message, pet, zoom}) {

    const iconsMap = [read_icon, bath_icon, food_icon, play_icon, food_icon, bath_icon, play_icon, read_icon];

    const petIcon = L.icon({
        iconSize: [42, 30],
        iconAnchor: [21, 41],
        popupAnchor: [2, -40],
        iconUrl: pet,
    });

    const greyIcon2 = L.divIcon({
        className: 'custom-icon5',
        iconSize: [20, 20],
        iconAnchor: [15, 20],
        popupAnchor: [0, -30],
    });
    
    const getClassForIndex = (index) => {
        if (index === 1 || index === 5) {
            return 'custom-icon1';
        } else if (index === 0 || index === 7) {
            return 'custom-icon2';
        } else if (index === 2 || index === 4) {
            return 'custom-icon3';
        } else if (index === 3 || index === 6) {
            return 'custom-icon4';
        }
        // Se o índice não se encaixar em nenhum dos casos, retorne uma classe padrão ou vazia, dependendo dos requisitos.
        return '';
    };

    const mapIcon = L.icon({
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30],
        className: getClassForIndex(targetIndex),
        iconUrl: iconsMap[targetIndex],
    });

    if (!zoom) {
        zoom = 17;
    }

    return newRewardAvailable || newTargetAvailable ? (
        ""
    ) : (
        <div>
            <MapContainer
                center={position} zoom={zoom} style={{width: '100%', height: '50vh'}}
            >
                <TileLayer
                    url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                    /* attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' */
                    recenter={position}
                />
                {
                    isPopup ? (
                        interestPoints.map((coord, index) =>(
                            index < availablePoints ? (
                                index === targetIndex  ? (
                                    <Marker position={coord} key={index} icon={mapIcon} />
                                ) : (
                                    <Marker position={coord} key={index} icon={greyIcon2} />
                                )
                            ) : ""
                        ))
                    ) : (
                        <Marker position={interestPoints[targetIndex]} icon={mapIcon} >
                            {/* <OpenPopup position={[interestPoints[targetIndex][0]+0.00025, interestPoints[targetIndex][1]]} message={message}/> */}
                        </Marker>
                    )
                }
                <Marker position={position} icon={petIcon} />
                <ResetLocation position={position} />
            </MapContainer>
        </div>
    )
}

export default MapViewer;
