import React from 'react';
import './RotateWarning.css';
import rotateIcon from '../images/rotate.png'; // <- coloca tu ícono aquí

function RotateWarning() {
  return (
    <div className="rotate-warning">
      <img src={rotateIcon} alt="Gira tu dispositivo" className="rotate-icon" />
      <p>Por favor, gira tu dispositivo para ver mejor el recorrido 360°</p>
    </div>
  );
}

export default RotateWarning;
