import React from 'react';
import './MiniMap.css'; // No olvides crear este archivo también
import planImage from '../images/plan.png'; // Asegúrate de tener esta imagen

const MiniMap = ({ onHotspotClick }) => {
  return (
    <div className="mini-map-container">
      <img src={planImage} alt="Plano del barco" className="map-image" />

      {/* Puntos interactivos */}
      <button
        className="mini-hotspot"
        style={{ top: '30%', left: '40%' }}
        onClick={() => onHotspotClick('insideOne')}
        title="Interior uno"
      />

      <button
        className="mini-hotspot"
        style={{ top: '60%', left: '70%' }}
        onClick={() => onHotspotClick('insideTwo')}
        title="Interior dos"
      />
    </div>
  );
};

export default MiniMap;

