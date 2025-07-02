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
            className={`mini-hotspot ${currentSceneKey === 'insideThirteen' ? 'active' : ''}`}
            style={{ top: '78%', left: '40%' }}
            onClick={() => onHotspotClick('insideThirteen')}
            title="Interior trece"
          />

          <button
            className={`mini-hotspot ${currentSceneKey === 'insideTwo' ? 'active' : ''}`}
            style={{ top: '24%', left: '77%' }}
            onClick={() => onHotspotClick('insideTwo')}
            title="Interior dos"
          />
 
            <button
            className={`mini-hotspot ${currentSceneKey === 'insideNine' ? 'active' : ''}`}
            style={{ top: '56.5%', left: '45%' }}
            onClick={() => onHotspotClick('insideNine')}
            title="Interior nueve"
          />
            <button
            className={`mini-hotspot ${currentSceneKey === 'insideTen' ? 'active' : ''}`}
            style={{ top: '64%', left: '45%' }}
            onClick={() => onHotspotClick('insideTen')}
            title="Interior diez"
          />
            <button
            className={`mini-hotspot ${currentSceneKey === 'insideEleven' ? 'active' : ''}`}
            style={{ top: '24%', left: '72%' }}
            onClick={() => onHotspotClick('insideEleven')}
            title="Interior once"
          />

            <button
            className={`mini-hotspot ${currentSceneKey === 'insideSixteen' ? 'active' : ''}`}
            style={{ top: '93.5%', left: '51%' }}
            onClick={() => onHotspotClick('insideSixteen')}
            title="Interior dieciseis"
          />

            <button
            className={`mini-hotspot ${currentSceneKey === 'insideSeventeen' ? 'active' : ''}`}
            style={{ top: '85.3%', left: '21%' }}
            onClick={() => onHotspotClick('insideSeventeen')}
            title="Interior diecisiete"
          />

            <button
            className={`mini-hotspot ${currentSceneKey === 'insideEighteen' ? 'active' : ''}`}
            style={{ top: '80.5%', left: '14%' }}
            onClick={() => onHotspotClick('insideEighteen')}
            title="Interior dieciocho"
          />

            <button
            className={`mini-hotspot ${currentSceneKey === 'insideNineteen' ? 'active' : ''}`}
            style={{ top: '90%', left: '14%' }}
            onClick={() => onHotspotClick('insideNineteen')}
            title="Interior diecinueve"
          />

           <button
            className={`mini-hotspot ${currentSceneKey === 'insideFourteen' ? 'active' : ''}`}
            style={{ top: '76.7%', left: '51%' }}
            onClick={() => onHotspotClick('insideFourteen')}
            title="Interior catorce"
          />

            <button
            className={`mini-hotspot ${currentSceneKey === 'insideFifteen' ? 'active' : ''}`}
            style={{ top: '85%', left: '60%' }}
            onClick={() => onHotspotClick('insideFifteen')}
            title="Interior quince"
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
            style={{ top: '82.5%', left: '60%' }}
            onClick={() => onHotspotClick('insideFour')}
            title="Interior cuatro"
          />        
          <button
            className={`mini-hotspot ${currentSceneKey === 'insideOne' ? 'active' : ''}`}
            style={{ top: '61.5%', left: '82%' }}
            onClick={() => onHotspotClick('insideOne')}
            title="Interior uno"
          />
          <button
            className={`mini-hotspot ${currentSceneKey === 'insideFive' ? 'active' : ''}`}
            style={{ top: '91%', left: '60%' }}
            onClick={() => onHotspotClick('insideFive')}
            title="Interior cinco"
          />
            <button
            className={`mini-hotspot ${currentSceneKey === 'insideSix' ? 'active' : ''}`}
            style={{ top: '95%', left: '40%' }}
            onClick={() => onHotspotClick('insideSix')}
            title="Interior seis"
          />
            <button
            className={`mini-hotspot ${currentSceneKey === 'insideSeven' ? 'active' : ''}`}
            style={{ top: '78.5%', left: '40%' }}
            onClick={() => onHotspotClick('insideSeven')}
            title="Interior siete"
          />

            <button
            className={`mini-hotspot ${currentSceneKey === 'insideTwelve' ? 'active' : ''}`}
            style={{ top: '57%', left: '30%' }}
            onClick={() => onHotspotClick('insideTwelve')}
            title="Interior doce"
          />




         <button
            className={`mini-hotspot ${currentSceneKey === 'insideThree' ? 'active' : ''}`}
            style={{ top: '61.5%', left: '26.9%' }}
            onClick={() => onHotspotClick('insideThree')}
            title="Interior tres"
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
            plano sup
          </button>
          <button
            className={`switch-button ${activePlan === 'planV2' ? 'active' : ''}`}
            onClick={() => setActivePlan('planV2')}
          >
            plano inf
          </button>
        </div>

        <button className="close-map-button" onClick={() => setIsOpen(false)} title="Cerrar">✖</button>
      </div>
    </>
  );
};

export default MiniMap;

