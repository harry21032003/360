import React, { useState } from 'react';
import './CustomHotspot.css';

export default function CustomHotspot({ previewImage, label }) {
  const [isActive, setActive] = useState(false);

  return (
    <div
      className={`hotSpotElementCustom ${isActive ? 'active' : ''}`}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onTouchStart={() => setActive(true)}
      onTouchEnd={() => setActive(false)}
    >
      {/* Hotspot base */}
      <div className="hotSpotElement"></div>

      {/* Imagen preview */}
      <img className="hotspot-preview" src={previewImage || ''} alt="Preview" />

      {/* Texto */}
      <div className="hotspot-label">{label}</div>
    </div>
  );
}





