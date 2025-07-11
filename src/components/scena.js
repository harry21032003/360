import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Pannellum } from 'pannellum-react';
import dataScene from '../helpers/dataScene';
import MiniMap from './MiniMap';
import hotspotContent from '../helpers/hotspotContent';
import HotspotModal from './HotspotModal';
import CustomHotspot from './CustomHotspot';  
import '../styles/index.css';
import './CustomHotspot.css';


export default function Scene() {
  const [scene, setScene] = useState({ ...dataScene['insideOne'], key: 'insideOne' });
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const hotSpots = (element, i) => {
    if (element.cssClass === 'hotSpotElement') {
      return (
        <Pannellum.Hotspot
          key={i}
          type={element.type}
          yaw={element.yaw}
          pitch={element.pitch}
          cssClass={element.cssClass}

tooltip={(hotSpotDiv) => {
  const root = ReactDOM.createRoot(hotSpotDiv);
  root.render(
    <CustomHotspot previewImage={element.previewImage} label={element.label} />
  );
}}


          tooltipArg={element}
          handleClick={() => {
            const content = hotspotContent[element.key];
            if (content) {
              setModalContent(content);
              setModalOpen(true);
            }
          }}
        />
      );
    } else if (element.cssClass === 'moveScene') {
      return (
        <Pannellum.Hotspot
          key={i}
          type={element.type}
          yaw={element.yaw}
          pitch={element.pitch}
          cssClass={element.cssClass}

tooltip={(hotSpotDiv) => {
  const root = ReactDOM.createRoot(hotSpotDiv);
  root.render(
    <CustomHotspot previewImage={element.previewImage} label={element.label} />
  );
}}

          tooltipArg={element}
          handleClick={() => {
            setScene({ ...dataScene[element.scene], key: element.scene });
          }}
        />
      );
    }
  };

  const handleMiniMapClick = (sceneKey) => {
    if (dataScene[sceneKey]) {
      setScene({ ...dataScene[sceneKey], key: sceneKey });
    }
  };

  // Función para activar pantalla completa
  const handleFullScreen = () => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { // Firefox
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { // Chrome, Safari y Opera
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE/Edge
      elem.msRequestFullscreen();
    }
  };

  return (
    <>
      <Pannellum
        width={'100%'}
        height={'100vh'}
        title={scene.title}
        image={scene.image}
        pitch={scene.pitch}
        yaw={scene.yaw}
        hfov={130}
        autoLoad
        showFullscreenCtrl={false}
        showZoomCtrl={false}
        hotspotDebug={true}
      >
        {Object.entries(scene.hotSpots).map(([key, element], i) =>
          hotSpots({ ...element, key }, i)
        )}
      </Pannellum>

      <MiniMap onHotspotClick={handleMiniMapClick} currentSceneKey={scene.key} />

      <HotspotModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        content={modalContent}
      />

      {/* Botón para fullscreen solo en móvil */}
      <button
        className="fullscreen-button"
        onClick={handleFullScreen}
      >
        ⛶
      </button>
    </>
  );
}

