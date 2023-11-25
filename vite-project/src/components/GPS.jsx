import { useState, useEffect } from "react";

function GPS({ setPosition }) {
  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (geoLocation) => {
        const { latitude, longitude } = geoLocation.coords;
        setPosition([latitude, longitude]);
      },
      (error) => {
        console.error("Erro ao obter localização:", error);
      }
    );

    // Cleanup: Parar de assistir à posição quando o componente for desmontado
    return () => navigator.geolocation.clearWatch(watchId);
  }, [setPosition]);

  return null; // Este componente não renderiza nada diretamente
}

export default GPS;