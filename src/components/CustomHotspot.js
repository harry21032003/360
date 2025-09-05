
import React, { useState } from 'react';
import './CustomHotspot.css';

export default function CustomHotspot({ previewImage, label, type = 'move' }) {
  const [isActive, setActive] = useState(false);
  
  // Determinar las clases según el tipo de hotspot
  const hotspotClass = type === 'info' ? 'hotSpotElement' : 'moveScene';
  
  return (
    <div
      className={`hotSpotElementCustom ${isActive ? 'active' : ''}`}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onTouchStart={() => setActive(true)}
      onTouchEnd={() => setActive(false)}
    >
      {/* Hotspot base con las clases correctas */}
      <div className={hotspotClass}>
        <div className="out">
          <div className="in"></div>
        </div>
      </div>
      
      {/* Imagen preview */}
      {previewImage && (
        <img 
          className="hotspot-preview" 
          src={previewImage} 
          alt="Preview"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      )}
      
      {/* Texto */}
      {label && <div className="hotspot-label">{label}</div>}
    </div>
  );
}




