import React, { useState, useEffect } from 'react';
import rotateAnim from '../images/rotate.png'; 
import './RotateWarning.css';

function RotateWarning() {
  const [isPortrait, setIsPortrait] = useState(window.matchMedia("(orientation: portrait)").matches);

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.matchMedia("(orientation: portrait)").matches);
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return (
    <div className={`rotate-warning ${isPortrait ? 'show' : 'hide'}`}>
      <img src={rotateAnim} alt="Gira tu dispositivo" className="rotate-icon" />
      <p>Por favor, gira tu dispositivo para ver mejor el recorrido 360°</p>
    </div>
  );
}

export default RotateWarning;
