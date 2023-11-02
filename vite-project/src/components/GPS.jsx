
import { useState } from "react";


function GPS({setPosition}) {
    const [flag, setFlag] = useState(true);
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
