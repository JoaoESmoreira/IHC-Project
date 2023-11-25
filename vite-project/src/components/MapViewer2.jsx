
import { 
    MapContainer,
    TileLayer,
    Marker,
    useMap,
} from "react-leaflet";

import {React, useEffect, useRef} from "react";


function ResetLocation({position}) {
    const map = useMap();
    if (map) {
        map.setView(position, map.getZoom());
    }
    return null;
}



function MapViewer2({position, newTargetAvailable, newRewardAvailable, pet, zoom}) {


    const petIcon = L.icon({
        iconSize: [42, 30],
        iconAnchor: [21, 41],
        popupAnchor: [2, -40],
        iconUrl: pet,
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
                    url='https://api.maptiler.com/maps/topo-v2/256/{z}/{x}/{y}.png?key=RmY5auDo9agHVZkhjMoU'
                    /* attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' */
                    recenter={position}
                />
                
                <Marker position={position} icon={petIcon} />
                <ResetLocation position={position} />
            </MapContainer>
        </div>
    )
}

export default MapViewer2;
