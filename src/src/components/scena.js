import React, { useState } from 'react';
import { Pannellum } from 'pannellum-react';
import dataScene from '../helpers/dataScene';
import MiniMap from './MiniMap';
import hotspotContent from '../helpers/hotspotContent';
import HotspotModal from './HotspotModal'; 

export default function Scene() {
  const [scene, setScene] = useState(dataScene['insideOne']);
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
          handleClick={() => setScene(dataScene[element.scene])}
        />
      );
    }
  };

  // ✅ NUEVO: cambia escena desde MiniMap
  const handleMiniMapClick = (sceneKey) => {
    if (dataScene[sceneKey]) {
      setScene(dataScene[sceneKey]);
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

      <MiniMap onHotspotClick={handleMiniMapClick} />

      {/* ✅ Modal informativo */}
      <HotspotModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        content={modalContent}
      />
    </>
  );
}

