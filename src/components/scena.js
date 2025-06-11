import React, {useState } from 'react';
import { Pannellum } from 'pannellum-react';
import dataScene from '../helpers/dataScene' ;

export default function Scene() {

        const [scene, setScene] = useState(dataScene['insideOne']);

      const hotSpots = (element, i)=>{
        if(element.cssClass === 'hotSpotElement') return (
         <Pannellum.hotSpot key= {i} type = {element.type} yaw = {element.yaw} pitch = {element.pitch} cssClass= {element.cssClass} handleClick = {() => alert('cliick') }/>
        ); 
        else if (element.cssClass == 'moveScene') return (
         <Pannellum.hotSpot key= {i} type = {element.type} yaw = {element.yaw} pitch = {element.pitch} cssClass= {element.cssClass} handleClick = {() => setScene(dataScene[element.scene])}/> 
        )
  
      }

    return (
<>
  <Pannellum
                width={'100%'}
                height={'100vh'}
                title= {scene.title}
                image={scene.image}
                pitch={scene.pitch}
                yaw={scene.yaw}
                hfov={130}  
                autoLoad
                showFullscreenCtrl={false}
                showZoomCtrl={false}
                hotspotDebug={true}     
    >
           {Object.values(scene.hotSpots).map((element,i) => hotSpots(element,i) )}

    </Pannellum>

  </>

 );
   
}