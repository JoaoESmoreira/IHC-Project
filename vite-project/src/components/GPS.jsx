
import { useState } from "react";


function GPS({setPosition}) {
    const [flag, setFlag] = useState(true);     // dont use this flag to get updates of your locations
    if (flag && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (geoLocation) => {
                const {latitude, longitude} = geoLocation.coords;
                setPosition([latitude, longitude]);
                setFlag(false);
            }
        )
    }
}

export default GPS;
