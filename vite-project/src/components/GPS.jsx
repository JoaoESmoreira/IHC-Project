
import { useState } from "react";


function GPS({setPosition}) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (geoLocation) => {
                const {latitude, longitude} = geoLocation.coords;
                setPosition([latitude, longitude]);
            }
        )
    }
}

export default GPS;
