import React, { useState } from 'react';
import './MiniMap.css';
import planImage from '../images/plan.png';

const MiniMap = ({ onHotspotClick, currentSceneKey }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen && (
        <button className="toggle-map-button" onClick={() => setIsOpen(true)} title="Abrir plano">
          🗺️
        </button>
      )}

      <div className={`mini-map-container ${isOpen ? 'open' : 'closed'}`}>
        <img src={planImage} alt="Plano del barco" className="map-image" />

        <button
          className={`mini-hotspot ${currentSceneKey === 'insideOne' ? 'active' : ''}`}
          style={{ top: '30%', left: '40%' }}
          onClick={() => onHotspotClick('insideOne')}
          title="Interior uno"
        />
        <button
          className={`mini-hotspot ${currentSceneKey === 'insideTwo' ? 'active' : ''}`}
          style={{ top: '60%', left: '70%' }}
          onClick={() => onHotspotClick('insideTwo')}
          title="Interior dos"
        />
        <button
          className={`mini-hotspot ${currentSceneKey === 'insideThree' ? 'active' : ''}`}
          style={{ top: '50%', left: '20%' }}
          onClick={() => onHotspotClick('insideThree')}
          title="Interior tres"
        />
        <button
          className={`mini-hotspot ${currentSceneKey === 'insideFour' ? 'active' : ''}`}
          style={{ top: '40%', left: '70%' }}
          onClick={() => onHotspotClick('insideFour')}
          title="Interior cuatro"
        />
          <button
          className={`mini-hotspot ${currentSceneKey === 'insideFive' ? 'active' : ''}`}
          style={{ top: '10%', left: '50%' }}
          onClick={() => onHotspotClick('insideFive')}
          title="Interior cinco"
        />

        <button className="close-map-button" onClick={() => setIsOpen(false)} title="Cerrar">✖</button>
      </div>
    </>
  );
};

export default MiniMap;

