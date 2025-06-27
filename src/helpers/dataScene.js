import insideOne from '../images/PuenteDeGobierno.jpg'
import insideTwo from '../images/CubiertaBoteCrujiaProa.jpg'
import insideThree from '../images/CubiertaBoteCrujiaProaBabor.jpg'; 
import insideFour from '../images/ProaCostadoBabor.jpg'; 
import insideFive from '../images/ProaCostadoEstribor.jpg'; 
import insideSix from '../images/CubiertaPrincipalCostadoBabor.jpg'; 
import insideSeven from '../images/CubiertaPrincipalCostadoEstribor.jpg'; 

const Scene = {
    
    insideOne:{
        title:'interior uno',
        image: insideOne,
        pitch: -1.22,
        yaw: 1.17,
        
        hotSpots:{
            caja1:{
                type: 'custom',
                pitch: 18.28,
                yaw: 40.12,
                cssClass: 'hotSpotElement',
            },
            caja2:{
                type: 'custom',
                pitch: 25.77,
                yaw: 159.30,
                cssClass: 'hotSpotElement',           
            },
            cajaroja:{
                type: 'custom',
                pitch: 26.05,
                yaw: 98.77,
                cssClass: 'hotSpotElement',
            },

            nextScene:{
                type: 'custom',
                pitch: -14.6,
                yaw: 0.5,
                cssClass: 'moveScene',
                scene: 'insideTwo'
            },

            nextScene1:{
                type: 'custom',
                pitch: -9.46,
                yaw: 179.2,
                cssClass: 'moveScene',
                scene: 'insideThree'
            }
            
        }
    },

        insideTwo:{
        title:'interior dos',
        image: insideTwo,
        pitch: -0.85,
        yaw: -8.3,
        hotSpots:{

            nextScene:{
                type: 'custom',
                pitch: -31.3,
                yaw: 29.4,
                cssClass: 'moveScene',
                scene: 'insideFive'
            },
            nextScene1:{
                type: 'custom',
                pitch: -29.3,
                yaw: -59.9,
                cssClass: 'moveScene',
                scene: 'insideFour'
            },
            nextScene2:{
                type: 'custom',
                pitch:  11.96,
                yaw: -178.1,
                cssClass: 'moveScene',
                scene: 'insideOne'
            }
        }
    },

    insideThree: {
  title: 'interior tres',
  image: insideThree,
  pitch: -8.70,
  yaw: -173,
  hotSpots: {
   
    nextScene: {
      type: 'custom',
      pitch: 5.0,
      yaw: 30.0,
      cssClass: 'moveScene',
      scene: 'insideOne', 
     }
     
   }
 },

     insideFour:{
        title:'interior cuatro',
        image: insideFour,
        pitch: 18.30,
        yaw: 40.12,
        hotSpots:{
            
            nextScene:{
                type: 'custom',
                pitch: 25.5,
                yaw: 141.7,
                cssClass: 'moveScene',
                scene: 'insideTwo'
            },
            
            nextScene1:{
                type: 'custom',
                pitch: -0.61,
                yaw: 105.9,
                cssClass: 'moveScene',
                scene: 'insideFive'
            },
            
            nextScene2:{
                type: 'custom',
                pitch: -8.13,
                yaw: -138.0,
                cssClass: 'moveScene',
                scene: 'insideSeven'
            }
            
        }
    },

         insideFive:{
        title:'interior cinco',
        image: insideFive,
        pitch: 17.7,
        yaw:  10.1,
        hotSpots:{
            
            nextScene:{
                type: 'custom',
                pitch: 22.4,
                yaw: -129,
                cssClass: 'moveScene',
                scene: 'insideTwo'
            },
            
            nextScene1:{
                type: 'custom',
                pitch: -3.81,
                yaw: -89.0,
                cssClass: 'moveScene',
                scene: 'insideFour'
            },
            
            nextScene2:{
                type: 'custom',
                pitch:  -10.0,
                yaw: 155.5,
                cssClass: 'moveScene',
                scene: 'insideSix'
            }
            
        }
    },
    
         insideSix:{
        title:'interior seis',
        image: insideSix,
        pitch: 18.30,
        yaw: 40.12,
        hotSpots:{
            
            nextScene:{
                type: 'custom',
                pitch: 25.5,
                yaw: 141.7,
                cssClass: 'moveScene',
                scene: 'insideTwo'
            },
            
            nextScene1:{
                type: 'custom',
                pitch: -0.61,
                yaw: 105.9,
                cssClass: 'moveScene',
                scene: 'insideFive'
            }
            
        }
    },

             insideSeven:{
        title:'interior siete',
        image: insideSeven,
        pitch: 9.42,
        yaw: 14.33,
        hotSpots:{
            
            nextScene:{
                type: 'custom',
                pitch: 0.65,
                yaw: -164.2,
                cssClass: 'moveScene',
                scene: 'insideFour'
            }  
        }
    },
    
}
export default Scene;
