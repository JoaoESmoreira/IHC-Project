import React, { useState, useEffect } from 'react';

const CatAnimation = ({ frames }) => {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((currentFrame + 1) % frames.length);
    }, 100); // Ajuste o intervalo conforme necessário

    return () => clearInterval(interval);
  }, [currentFrame, frames.length]);

  return <img src={frames[currentFrame]} alt="Cat Animation" />;
};

export default CatAnimation;