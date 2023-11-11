import React, { useState, useEffect } from 'react';

const DogAnimation = ({ frames, width, height }) => {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((currentFrame + 1) % frames.length);
    }, 100); // Ajuste o intervalo conforme necessário

    return () => clearInterval(interval);
  }, [currentFrame, frames.length]);

  return <img src={frames[currentFrame]} alt="Dog Animation" style={{ width, height }} />;
};

export default DogAnimation;