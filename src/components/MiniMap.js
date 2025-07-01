import React, { useState } from 'react';
import '../styles/MiniMap.css';
import planV1 from '../images/planoV1.png';
import planV2 from '../images/planoV2.png';

const MiniMap = ({ onHotspotClick, currentSceneKey }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePlan, setActivePlan] = useState('planV1');

  const renderHotspots = () => {
    if (activePlan === 'planV1') {
      return (
        <>
          <button
            className={`mini-hotspot ${currentSceneKey === 'insideOne' ? 'active' : ''}`}
            style={{ top: '22%', left: '55%' }}
            onClick={() => onHotspotClick('insideOne')}
            title="Interior uno"
          />
          <button
            className={`mini-hotspot ${currentSceneKey === 'insideTwo' ? 'active' : ''}`}
            style={{ top: '40%', left: '20%' }}
            onClick={() => onHotspotClick('insideTwo')}
            title="Interior dos"
          />
          <button
            className={`mini-hotspot ${currentSceneKey === 'insideThree' ? 'active' : ''}`}
            style={{ top: '33%', left: '88%' }}
            onClick={() => onHotspotClick('insideThree')}
            title="Interior tres"
          />
            <button
            className={`mini-hotspot ${currentSceneKey === 'insideNine' ? 'active' : ''}`}
            style={{ top: '55%', left: '46%' }}
            onClick={() => onHotspotClick('insideNine')}
            title="Interior nueve"
          />
            <button
            className={`mini-hotspot ${currentSceneKey === 'insideTen' ? 'active' : ''}`}
            style={{ top: '64%', left: '46%' }}
            onClick={() => onHotspotClick('insideTen')}
            title="Interior diez"
          />
            <button
            className={`mini-hotspot ${currentSceneKey === 'insideEleven' ? 'active' : ''}`}
            style={{ top: '25%', left: '15%' }}
            onClick={() => onHotspotClick('insideEleven')}
            title="Interior once"
          />

            <button
            className={`mini-hotspot ${currentSceneKey === 'insideSixteen' ? 'active' : ''}`}
            style={{ top: '10%', left: '15%' }}
            onClick={() => onHotspotClick('insideSixteen')}
            title="Interior dieciseis"
          />

            <button
            className={`mini-hotspot ${currentSceneKey === 'insideSeventeen' ? 'active' : ''}`}
            style={{ top: '5%', left: '5%' }}
            onClick={() => onHotspotClick('insideSeventeen')}
            title="Interior diecisiete"
          />

            <button
            className={`mini-hotspot ${currentSceneKey === 'insideEighteen' ? 'active' : ''}`}
            style={{ top: '90%', left: '30%' }}
            onClick={() => onHotspotClick('insideEighteen')}
            title="Interior dieciocho"
          />

            <button
            className={`mini-hotspot ${currentSceneKey === 'insideNineteen' ? 'active' : ''}`}
            style={{ top: '50%', left: '60%' }}
            onClick={() => onHotspotClick('insideNineteen')}
            title="Interior diecinueve"
          />
              
            <button
            className={`mini-hotspot ${currentSceneKey === 'insideEight' ? 'active' : ''}`}
            style={{ top: '60%', left: '23%' }}
            onClick={() => onHotspotClick('insideEight')}
            title="Interior ocho"
          />   
              
        </>
      );
    } else {
      return (
        <>
          <button
            className={`mini-hotspot ${currentSceneKey === 'insideFour' ? 'active' : ''}`}
            style={{ top: '30%', left: '70%' }}
            onClick={() => onHotspotClick('insideFour')}
            title="Interior cuatro"
          />
          <button
            className={`mini-hotspot ${currentSceneKey === 'insideFive' ? 'active' : ''}`}
            style={{ top: '15%', left: '50%' }}
            onClick={() => onHotspotClick('insideFive')}
            title="Interior cinco"
          />
            <button
            className={`mini-hotspot ${currentSceneKey === 'insideSix' ? 'active' : ''}`}
            style={{ top: '30%', left: '20%' }}
            onClick={() => onHotspotClick('insideSix')}
            title="Interior seis"
          />
            <button
            className={`mini-hotspot ${currentSceneKey === 'insideSeven' ? 'active' : ''}`}
            style={{ top: '10%', left: '20%' }}
            onClick={() => onHotspotClick('insideSeven')}
            title="Interior siete"
          />

            <button
            className={`mini-hotspot ${currentSceneKey === 'insideTwelve' ? 'active' : ''}`}
            style={{ top: '35%', left: '25%' }}
            onClick={() => onHotspotClick('insideTwelve')}
            title="Interior doce"
          />
            <button
            className={`mini-hotspot ${currentSceneKey === 'insideThirteen' ? 'active' : ''}`}
            style={{ top: '10%', left: '25%' }}
            onClick={() => onHotspotClick('insideThirteen')}
            title="Interior trece"
          />

           <button
            className={`mini-hotspot ${currentSceneKey === 'insideFourteen' ? 'active' : ''}`}
            style={{ top: '70%', left: '20%' }}
            onClick={() => onHotspotClick('insideFourteen')}
            title="Interior catorce"
          />

            <button
            className={`mini-hotspot ${currentSceneKey === 'insideFifteen' ? 'active' : ''}`}
            style={{ top: '10%', left: '30%' }}
            onClick={() => onHotspotClick('insideFifteen')}
            title="Interior quince"
          />
              
        </>
      );
    }
  };

  return (
    <>
      {!isOpen && (
        <button className="toggle-map-button" onClick={() => setIsOpen(true)} title="Abrir plano">
          🗺️
        </button>
      )}

      <div className={`mini-map-container ${isOpen ? 'open' : 'closed'}`}>
        <div className="map-wrapper">
          <img
            src={activePlan === 'planV1' ? planV1 : planV2}
            alt="Plano del barco"
            className="map-image"
          />
          {renderHotspots()}
        </div>

        <div className="map-switch-buttons">
          <button
            className={`switch-button ${activePlan === 'planV1' ? 'active' : ''}`}
            onClick={() => setActivePlan('planV1')}
          >
            Vista 1
          </button>
          <button
            className={`switch-button ${activePlan === 'planV2' ? 'active' : ''}`}
            onClick={() => setActivePlan('planV2')}
          >
            Vista 2
          </button>
        </div>

        <button className="close-map-button" onClick={() => setIsOpen(false)} title="Cerrar">✖</button>
      </div>
    </>
  );
};

export default MiniMap;

