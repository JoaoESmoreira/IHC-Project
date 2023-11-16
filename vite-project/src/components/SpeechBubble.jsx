import React from 'react';

const SpeechBubble = ({ message }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '70%',
        left:'40%',
        backgroundColor: '#fff',
        padding: '10px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        maxWidth: '200px', // Defina o valor desejado para a largura máxima
      }}
    >
      <p style={{ margin: '0' }}>{message}</p>
    </div>
  );
};

export default SpeechBubble;