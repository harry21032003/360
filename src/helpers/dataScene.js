import insideOne from '../images/sharedimage(3).jpg'
import insideTwo from '../images/sharedimage.jpg'

const Scene = {
    insideOne:{
        title:'interior uno',
        image: insideOne,
        pitch: 18.30,
        yaw: 40.12,
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
                pitch: 2.26,
                yaw: 124.72,
                cssClass: 'moveScene',
                scene: 'insideTwo'
            }
            
        }
    },

        insideTwo:{
        title:'interior dos',
        image: insideTwo,
        pitch: 10,
        yaw: 180,
        hotSpots:{

        }
    }
}
export default Scene;