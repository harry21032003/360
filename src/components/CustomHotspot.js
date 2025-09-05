import React, { useState } from 'react';
import './CustomHotspot.css';

export default function CustomHotspot({ previewImage, label, action = 'move', file, onInfoClick, onMove }) {
  const [isActive, setActive] = useState(false);

  // Determinar clases según la acción
  const hotspotClass =
    action === 'info' ? 'hotSpotElement' :
    action === 'download' ? 'hotSpotDownload' :
    'moveScene';

  const handleClick = () => {
    if (action === 'download') {
      if (!file) {
        console.error("No se definió ningún archivo para descargar.");
        return;
      }
      // Crear y disparar descarga
      const link = document.createElement('a');
      link.href = file;
      link.download = file.split('/').pop(); // nombre del archivo
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } 
    else if (action === 'info') {
      if (onInfoClick) {
        onInfoClick();
      } else {
        console.log('Abrir modal de información');
      }
    } 
    else if (action === 'move') {
      if (onMove) {
        onMove();
      } else {
        console.log('Mover a otra escena');
      }
    }
  };

  return (
    <div
      className={`hotSpotElementCustom ${isActive ? 'active' : ''}`}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onTouchStart={() => setActive(true)}
      onTouchEnd={() => setActive(false)}
    >
      {/* Hotspot base con click */}
      <div className={hotspotClass} onClick={handleClick}>
        <div className="out">
          <div className="in"></div>
        </div>
      </div>

      {/* Preview solo si es info (no para descarga) */}
      {previewImage && action === 'info' && (
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
