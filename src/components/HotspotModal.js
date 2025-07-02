import React from 'react';
import './HotspotModal.css';

const HotspotModal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        {content.image && <img src={content.image} alt="info" />}
        <p>{content.text}</p>
      </div>
    </div>
  );
};

export default HotspotModal;
