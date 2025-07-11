import React, { useState } from 'react';
import './CustomHotspot.css';

export default function CustomHotspot({ previewImage, label }) {
  const [isActive, setActive] = useState(false);

  return (
    <div
      className={`hotSpotOverlay ${isActive ? 'active' : ''}`}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onTouchStart={() => setActive(true)}
      onTouchEnd={() => setActive(false)}
    >
      {/* Imagen preview que aparece solo al hacer hover */}
      <img className="hotspot-preview" src={previewImage || ''} alt="Preview" />

      {/* Texto que aparece solo al hacer hover */}
      <div className="hotspot-label">{label}</div>
    </div>
  );
}



