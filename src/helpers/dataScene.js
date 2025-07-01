import insideOne from '../images/PuenteDeGobierno.jpg'
import insideTwo from '../images/CubiertaBoteCrujiaProa.jpg'
import insideThree from '../images/CubiertaBoteCrujiaProaBabor.jpg'; 
import insideFour from '../images/ProaCostadoBabor.jpg'; 
import insideFive from '../images/ProaCostadoEstribor.jpg'; 
import insideSix from '../images/CubiertaPrincipalCostadoBabor.jpg'; 
import insideSeven from '../images/CubiertaPrincipalCostadoEstribor.jpg'; 
import insideEight from '../images/CubiertaDeTrabajo.jpg'; 
import insideNine from '../images/CabrestanteCostadoBabor.jpg'; 
import insideTen from '../images/CabrestanteCostadoEstribor.jpg'; 
import insideEleven from '../images/CubiertaBoteCostadoBaborProa.jpg';
import insideTwelve from '../images/CubiertaBoteCostadoBabor.jpg';

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
            },
                nextScene3:{
                type: 'custom',
                pitch:  -6.95,
                yaw: -150,
                cssClass: 'moveScene',
                scene: 'insideEleven'
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
     },
    
      nextScene1: {
      type: 'custom',
      pitch: -28.79,
      yaw: 179,
      cssClass: 'moveScene',
      scene: 'insideEight', 
     },

    nextScene2: {
      type: 'custom',
      pitch:  -48.5,
      yaw:136,
      cssClass: 'moveScene',
      scene: 'insideTen', 
     },

    nextScene3: {
      type: 'custom',
      pitch:  -43.1,
      yaw:-135,
      cssClass: 'moveScene',
      scene: 'insideTwelve', 
     },
     
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
        pitch: 2.34,
        yaw: -0.25,
        hotSpots:{
            
            nextScene1:{
                type: 'custom',
                pitch: -0.08,
                yaw: 163,
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

              insideEight:{
        title:'interior ocho',
        image: insideEight,
        pitch:11.70,
        yaw: 156,
        hotSpots:{
            
            nextScene:{
                type: 'custom',
                pitch: 27.6,
                yaw: 176,
                cssClass: 'moveScene',
                scene: 'insideThree'
            },
                        nextScene1:{
                type: 'custom',
                pitch:7.60,
                yaw: -167,
                cssClass: 'moveScene',
                scene: 'insideTen'
            } ,
                        nextScene2:{
                type: 'custom',
                pitch: 7.22,
                yaw: 164,
                cssClass: 'moveScene',
                scene: 'insideNine'
            } ,
                        nextScene3:{
                type: 'custom',
                pitch:19.33,
                yaw: 161,
                cssClass: 'moveScene',
                scene: 'insideTwelve'
            }, 
                        nextScene4:{
                type: 'custom',
                pitch: 4.82,
                yaw: 81.9,
                cssClass: 'moveScene',
                scene: 'insideThree'
            } 
        }
    },

                  insideNine:{
        title:'interior nueve',
        image: insideNine,
        pitch: 9.42,
        yaw: 14.33,
        hotSpots:{
            
            nextScene:{
                type: 'custom',
                pitch: 1.65,
                yaw: -11.44,
                cssClass: 'moveScene',
                scene: 'insideTen'
            }  
        }
    },

                  insideTen:{
        title:'interior diez',
        image: insideTen,
        pitch:4.97,
        yaw: -111,
        hotSpots:{
            
            nextScene:{
                type: 'custom',
                pitch: 48.7,
                yaw:57.4,
                cssClass: 'moveScene',
                scene: 'insideThree'
            },  
                        
            nextScene1:{
                type: 'custom',
                pitch: -2.65,
                yaw:-88,
                cssClass: 'moveScene',
                scene: 'insideEight'
            },

            nextScene2:{
                type: 'custom',
                pitch: 9.64,
                yaw:36.1,
                cssClass: 'moveScene',
                scene: 'insideNine'
            } ,

                        nextScene3:{
                type: 'custom',
                pitch: -6.58,
                yaw:-132,
                cssClass: 'moveScene',
                scene: 'insideOne'
            }  
        }
    },   

                      insideEleven:{
        title:'interior once',
        image: insideEleven,
        pitch: 9.42,
        yaw: 14.33,
        hotSpots:{
            
            nextScene:{
                type: 'custom',
                pitch: -5.97,
                yaw:-113,
                cssClass: 'moveScene',
                scene: 'insideTwo'
            },  
                        
            nextScene1:{
                type: 'custom',
                pitch: 36.4,
                yaw:-54.2,
                cssClass: 'moveScene',
                scene: 'insideOne'
            }  
        }
    }, 

                          insideTwelve:{
        title:'interior doce',
        image: insideTwelve,
        pitch:3.95,
        yaw: 156,
        hotSpots:{
            
            nextScene:{
                type: 'custom',
                pitch: -18.7,
                yaw:159,
                cssClass: 'moveScene',
                scene: 'insideEight'
            },  
                        
            nextScene1:{
                type: 'custom',
                pitch: 19.71,
                yaw: 54.7,
                cssClass: 'moveScene',
                scene: 'insideThree'
            },
            
            nextScene2:{
                type: 'custom',
                pitch: -21,
                yaw: 84.4,
                cssClass: 'moveScene',
                scene: 'insideTen'
            }  
            
        }
    }, 

   
}
export default Scene;
