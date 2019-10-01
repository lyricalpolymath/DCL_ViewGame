import utils from "../../node_modules/decentraland-ecs-utils/index"
import * as Globals from "../functions"
import { Level } from "./level"


export class LoadingScene extends Entity
{
    camera = Camera.instance
    events:EventManager
    boxShape:Entity
    constructor(events:EventManager)
    {
        super()
        this.events = events
        this.addComponentOrReplace(new Transform({
            position: new Vector3(0,0,0),
            scale: new Vector3(1,1,1)
        }))
        const floorBaseGrass_01 = new Entity()
        floorBaseGrass_01.setParent(this)
        const gltfShape = new GLTFShape('models/FloorBaseGrass_01.glb')
        floorBaseGrass_01.addComponentOrReplace(gltfShape)
        const transform_2 = new Transform({
          position: new Vector3(8, 0, 8),
          rotation: new Quaternion(0, 0, 0, 1),
          scale: new Vector3(1, 1, 1)
        })
        floorBaseGrass_01.addComponentOrReplace(transform_2)
        
        const floorBaseGrass_01_2 = new Entity()
        floorBaseGrass_01_2.setParent(this)
        floorBaseGrass_01_2.addComponentOrReplace(gltfShape)
        const transform_3 = new Transform({
          position: new Vector3(24, 0, 8),
          rotation: new Quaternion(0, 0, 0, 1),
          scale: new Vector3(1, 1, 1)
        })
        floorBaseGrass_01_2.addComponentOrReplace(transform_3)
        
        const floorBaseGrass_01_3 = new Entity()
        floorBaseGrass_01_3.setParent(this)
        floorBaseGrass_01_3.addComponentOrReplace(gltfShape)
        const transform_4 = new Transform({
          position: new Vector3(8, 0, 24),
          rotation: new Quaternion(0, 0, 0, 1),
          scale: new Vector3(1, 1, 1)
        })
        floorBaseGrass_01_3.addComponentOrReplace(transform_4)
        
        const floorBaseGrass_01_4 = new Entity()
        floorBaseGrass_01_4.setParent(this)
        floorBaseGrass_01_4.addComponentOrReplace(gltfShape)
        const transform_5 = new Transform({
          position: new Vector3(24, 0, 24),
          rotation: new Quaternion(0, 0, 0, 1),
          scale: new Vector3(1, 1, 1)
        })
        floorBaseGrass_01_4.addComponentOrReplace(transform_5)
        
        const neonLightTube_06 = new Entity()
        neonLightTube_06.setParent(this)
        const gltfShape_2 = new GLTFShape('models/NeonLightTube_06.glb')
        neonLightTube_06.addComponentOrReplace(gltfShape_2)
        const transform_6 = new Transform({
          position: new Vector3(31.5, 1.65, 1.5),
          rotation: new Quaternion(0, -0.7071067811865477, 0, 0.7071067811865478),
          scale: new Vector3(1, 1, 1)
        })
        neonLightTube_06.addComponentOrReplace(transform_6)
        
        const neonLightTube_06_2 = new Entity()
        neonLightTube_06_2.setParent(this)
        neonLightTube_06_2.addComponentOrReplace(gltfShape_2)
        const transform_7 = new Transform({
          position: new Vector3(31.5, 1.5, 3),
          rotation: new Quaternion(0, -0.7071067811865477, 0, 0.7071067811865478),
          scale: new Vector3(1, 1, 1)
        })
        neonLightTube_06_2.addComponentOrReplace(transform_7)
        
        const neonLightTube_06_3 = new Entity()
        neonLightTube_06_3.setParent(this)
        neonLightTube_06_3.addComponentOrReplace(gltfShape_2)
        const transform_8 = new Transform({
          position: new Vector3(31.5, 1.5, 4.5),
          rotation: new Quaternion(0, -0.7071067811865477, 0, 0.7071067811865478),
          scale: new Vector3(1, 1, 1)
        })
        neonLightTube_06_3.addComponentOrReplace(transform_8)
        
        const neonLightTube_06_4 = new Entity()
        neonLightTube_06_4.setParent(this)
        neonLightTube_06_4.addComponentOrReplace(gltfShape_2)
        const transform_9 = new Transform({
          position: new Vector3(31.5, 1.5, 6),
          rotation: new Quaternion(0, -0.7071067811865477, 0, 0.7071067811865478),
          scale: new Vector3(1, 1, 1)
        })
        neonLightTube_06_4.addComponentOrReplace(transform_9)
        
        const neonLightTube_06_5 = new Entity()
        neonLightTube_06_5.setParent(this)
        neonLightTube_06_5.addComponentOrReplace(gltfShape_2)
        const transform_10 = new Transform({
          position: new Vector3(31.5, 1.5, 7.5),
          rotation: new Quaternion(0, -0.7071067811865477, 0, 0.7071067811865478),
          scale: new Vector3(1, 1, 1)
        })
        neonLightTube_06_5.addComponentOrReplace(transform_10)
        
        const neonLightTube_06_6 = new Entity()
        neonLightTube_06_6.setParent(this)
        neonLightTube_06_6.addComponentOrReplace(gltfShape_2)
        const transform_11 = new Transform({
          position: new Vector3(31.5, 1.5, 9),
          rotation: new Quaternion(0, -0.7071067811865477, 0, 0.7071067811865478),
          scale: new Vector3(1, 1, 1)
        })
        neonLightTube_06_6.addComponentOrReplace(transform_11)
        
        const neonLightTube_06_7 = new Entity()
        neonLightTube_06_7.setParent(this)
        neonLightTube_06_7.addComponentOrReplace(gltfShape_2)
        const transform_12 = new Transform({
          position: new Vector3(31.5, 1.5, 10.5),
          rotation: new Quaternion(0, -0.7071067811865477, 0, 0.7071067811865478),
          scale: new Vector3(1, 1, 1)
        })
        neonLightTube_06_7.addComponentOrReplace(transform_12)
        
        const neonLightTube_06_8 = new Entity()
        neonLightTube_06_8.setParent(this)
        neonLightTube_06_8.addComponentOrReplace(gltfShape_2)
        const transform_13 = new Transform({
          position: new Vector3(31.5, 1.5, 12),
          rotation: new Quaternion(0, -0.7071067811865477, 0, 0.7071067811865478),
          scale: new Vector3(1, 1, 1)
        })
        neonLightTube_06_8.addComponentOrReplace(transform_13)
        
        const neonLightTube_06_9 = new Entity()
        neonLightTube_06_9.setParent(this)
        neonLightTube_06_9.addComponentOrReplace(gltfShape_2)
        const transform_14 = new Transform({
          position: new Vector3(31.5, 1.5, 13.5),
          rotation: new Quaternion(0, -0.7071067811865477, 0, 0.7071067811865478),
          scale: new Vector3(1, 1, 1)
        })
        neonLightTube_06_9.addComponentOrReplace(transform_14)
        
        const neonLightTube_06_10 = new Entity()
        neonLightTube_06_10.setParent(this)
        neonLightTube_06_10.addComponentOrReplace(gltfShape_2)
        const transform_15 = new Transform({
          position: new Vector3(31.5, 1.5, 15),
          rotation: new Quaternion(0, -0.7071067811865477, 0, 0.7071067811865478),
          scale: new Vector3(1, 1, 1)
        })
        neonLightTube_06_10.addComponentOrReplace(transform_15)
        
        const neonLightTube_06_11 = new Entity()
        neonLightTube_06_11.setParent(this)
        neonLightTube_06_11.addComponentOrReplace(gltfShape_2)
        const transform_16 = new Transform({
          position: new Vector3(31.5, 1.5, 16.5),
          rotation: new Quaternion(0, -0.7071067811865477, 0, 0.7071067811865478),
          scale: new Vector3(1, 1, 1)
        })
        neonLightTube_06_11.addComponentOrReplace(transform_16)
        
        const neonLightTube_06_12 = new Entity()
        neonLightTube_06_12.setParent(this)
        neonLightTube_06_12.addComponentOrReplace(gltfShape_2)
        const transform_17 = new Transform({
          position: new Vector3(31.5, 1.5, 19.5),
          rotation: new Quaternion(0, -0.7071067811865477, 0, 0.7071067811865478),
          scale: new Vector3(1, 1, 1)
        })
        neonLightTube_06_12.addComponentOrReplace(transform_17)
        
        const neonLightTube_06_13 = new Entity()
        neonLightTube_06_13.setParent(this)
        neonLightTube_06_13.addComponentOrReplace(gltfShape_2)
        const transform_18 = new Transform({
          position: new Vector3(31.5, 1.5, 18),
          rotation: new Quaternion(0, -0.7071067811865477, 0, 0.7071067811865478),
          scale: new Vector3(1, 1, 1)
        })
        neonLightTube_06_13.addComponentOrReplace(transform_18)
        
        const neonLightTube_06_14 = new Entity()
        neonLightTube_06_14.setParent(this)
        neonLightTube_06_14.addComponentOrReplace(gltfShape_2)
        const transform_19 = new Transform({
          position: new Vector3(31.5, 1.5, 21),
          rotation: new Quaternion(0, -0.7071067811865477, 0, 0.7071067811865478),
          scale: new Vector3(1, 1, 1)
        })
        neonLightTube_06_14.addComponentOrReplace(transform_19)
        
        const neonLightTube_06_15 = new Entity()
        neonLightTube_06_15.setParent(this)
        neonLightTube_06_15.addComponentOrReplace(gltfShape_2)
        const transform_20 = new Transform({
          position: new Vector3(31.5, 1.5, 22.5),
          rotation: new Quaternion(0, -0.7071067811865477, 0, 0.7071067811865478),
          scale: new Vector3(1, 1, 1)
        })
        neonLightTube_06_15.addComponentOrReplace(transform_20)
        
        const neonLightTube_06_16 = new Entity()
        neonLightTube_06_16.setParent(this)
        neonLightTube_06_16.addComponentOrReplace(gltfShape_2)
        const transform_21 = new Transform({
          position: new Vector3(31.5, 1.5, 24),
          rotation: new Quaternion(0, -0.7071067811865477, 0, 0.7071067811865478),
          scale: new Vector3(1, 1, 1)
        })
        neonLightTube_06_16.addComponentOrReplace(transform_21)
        
        const neonLightTube_06_17 = new Entity()
        neonLightTube_06_17.setParent(this)
        neonLightTube_06_17.addComponentOrReplace(gltfShape_2)
        const transform_22 = new Transform({
          position: new Vector3(31.5, 1.5, 25.5),
          rotation: new Quaternion(0, -0.7071067811865477, 0, 0.7071067811865478),
          scale: new Vector3(1, 1, 1)
        })
        neonLightTube_06_17.addComponentOrReplace(transform_22)
        
        const neonLightTube_06_18 = new Entity()
        neonLightTube_06_18.setParent(this)
        neonLightTube_06_18.addComponentOrReplace(gltfShape_2)
        const transform_23 = new Transform({
          position: new Vector3(31.5, 1.5, 27),
          rotation: new Quaternion(0, -0.7071067811865477, 0, 0.7071067811865478),
          scale: new Vector3(1, 1, 1)
        })
        neonLightTube_06_18.addComponentOrReplace(transform_23)
        
        const neonLightTube_06_19 = new Entity()
        neonLightTube_06_19.setParent(this)
        neonLightTube_06_19.addComponentOrReplace(gltfShape_2)
        const transform_24 = new Transform({
          position: new Vector3(31.5, 1.5, 28.5),
          rotation: new Quaternion(0, -0.7071067811865477, 0, 0.7071067811865478),
          scale: new Vector3(1, 1, 1)
        })
        neonLightTube_06_19.addComponentOrReplace(transform_24)
        
        const neonLightTube_06_20 = new Entity()
        neonLightTube_06_20.setParent(this)
        neonLightTube_06_20.addComponentOrReplace(gltfShape_2)
        const transform_25 = new Transform({
          position: new Vector3(31.5, 1.5, 30),
          rotation: new Quaternion(0, -0.7071067811865477, 0, 0.7071067811865478),
          scale: new Vector3(1, 1, 1)
        })
        neonLightTube_06_20.addComponentOrReplace(transform_25)



        const neonLightTube_06_21 = new Entity()
neonLightTube_06_21.setParent(this)
neonLightTube_06_21.addComponentOrReplace(gltfShape_2)
const transform_26 = new Transform({
  position: new Vector3(30.5, 1.5, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
neonLightTube_06_21.addComponentOrReplace(transform_26)

const neonLightTube_06_22 = new Entity()
neonLightTube_06_22.setParent(this)
neonLightTube_06_22.addComponentOrReplace(gltfShape_2)
const transform_27 = new Transform({
  position: new Vector3(29, 1.5, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
neonLightTube_06_22.addComponentOrReplace(transform_27)

const neonLightTube_06_23 = new Entity()
neonLightTube_06_23.setParent(this)
neonLightTube_06_23.addComponentOrReplace(gltfShape_2)
const transform_28 = new Transform({
  position: new Vector3(27.5, 1.5, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
neonLightTube_06_23.addComponentOrReplace(transform_28)

const neonLightTube_06_24 = new Entity()
neonLightTube_06_24.setParent(this)
neonLightTube_06_24.addComponentOrReplace(gltfShape_2)
const transform_29 = new Transform({
  position: new Vector3(26, 1.5, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
neonLightTube_06_24.addComponentOrReplace(transform_29)

const neonLightTube_06_25 = new Entity()
neonLightTube_06_25.setParent(this)
neonLightTube_06_25.addComponentOrReplace(gltfShape_2)
const transform_30 = new Transform({
  position: new Vector3(24.5, 1.5, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
neonLightTube_06_25.addComponentOrReplace(transform_30)

const neonLightTube_06_26 = new Entity()
neonLightTube_06_26.setParent(this)
neonLightTube_06_26.addComponentOrReplace(gltfShape_2)
const transform_31 = new Transform({
  position: new Vector3(23, 1.5, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
neonLightTube_06_26.addComponentOrReplace(transform_31)

const neonLightTube_06_27 = new Entity()
neonLightTube_06_27.setParent(this)
neonLightTube_06_27.addComponentOrReplace(gltfShape_2)
const transform_32 = new Transform({
  position: new Vector3(21.5, 1.5, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
neonLightTube_06_27.addComponentOrReplace(transform_32)

const neonLightTube_06_28 = new Entity()
neonLightTube_06_28.setParent(this)
neonLightTube_06_28.addComponentOrReplace(gltfShape_2)
const transform_33 = new Transform({
  position: new Vector3(20, 1.5, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
neonLightTube_06_28.addComponentOrReplace(transform_33)

const neonLightTube_06_29 = new Entity()
neonLightTube_06_29.setParent(this)
neonLightTube_06_29.addComponentOrReplace(gltfShape_2)
const transform_34 = new Transform({
  position: new Vector3(18.5, 1.5, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
neonLightTube_06_29.addComponentOrReplace(transform_34)

const neonLightTube_06_30 = new Entity()
neonLightTube_06_30.setParent(this)
neonLightTube_06_30.addComponentOrReplace(gltfShape_2)
const transform_35 = new Transform({
  position: new Vector3(17, 1.5, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
neonLightTube_06_30.addComponentOrReplace(transform_35)

const neonLightTube_06_31 = new Entity()
neonLightTube_06_31.setParent(this)
neonLightTube_06_31.addComponentOrReplace(gltfShape_2)
const transform_36 = new Transform({
  position: new Vector3(15.5, 1.5, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
neonLightTube_06_31.addComponentOrReplace(transform_36)

const neonLightTube_06_32 = new Entity()
neonLightTube_06_32.setParent(this)
neonLightTube_06_32.addComponentOrReplace(gltfShape_2)
const transform_37 = new Transform({
  position: new Vector3(14, 1.5, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
neonLightTube_06_32.addComponentOrReplace(transform_37)

const neonLightTube_06_33 = new Entity()
neonLightTube_06_33.setParent(this)
neonLightTube_06_33.addComponentOrReplace(gltfShape_2)
const transform_38 = new Transform({
  position: new Vector3(12.5, 1.5, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
neonLightTube_06_33.addComponentOrReplace(transform_38)

const neonLightTube_06_34 = new Entity()
neonLightTube_06_34.setParent(this)
neonLightTube_06_34.addComponentOrReplace(gltfShape_2)
const transform_39 = new Transform({
  position: new Vector3(11, 1.5, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
neonLightTube_06_34.addComponentOrReplace(transform_39)

const neonLightTube_06_35 = new Entity()
neonLightTube_06_35.setParent(this)
neonLightTube_06_35.addComponentOrReplace(gltfShape_2)
const transform_40 = new Transform({
  position: new Vector3(9.5, 1.5, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
neonLightTube_06_35.addComponentOrReplace(transform_40)

const neonLightTube_06_36 = new Entity()
neonLightTube_06_36.setParent(this)
neonLightTube_06_36.addComponentOrReplace(gltfShape_2)
const transform_41 = new Transform({
  position: new Vector3(8, 1.5, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
neonLightTube_06_36.addComponentOrReplace(transform_41)

const neonLightTube_06_37 = new Entity()
neonLightTube_06_37.setParent(this)
neonLightTube_06_37.addComponentOrReplace(gltfShape_2)
const transform_42 = new Transform({
  position: new Vector3(6.5, 1.5, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
neonLightTube_06_37.addComponentOrReplace(transform_42)

const neonLightTube_06_38 = new Entity()
neonLightTube_06_38.setParent(this)
neonLightTube_06_38.addComponentOrReplace(gltfShape_2)
const transform_43 = new Transform({
  position: new Vector3(5, 1.5, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
neonLightTube_06_38.addComponentOrReplace(transform_43)

const neonLightTube_06_39 = new Entity()
neonLightTube_06_39.setParent(this)
neonLightTube_06_39.addComponentOrReplace(gltfShape_2)
const transform_44 = new Transform({
  position: new Vector3(3.5, 1.5, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
neonLightTube_06_39.addComponentOrReplace(transform_44)

const neonLightTube_06_40 = new Entity()
neonLightTube_06_40.setParent(this)
neonLightTube_06_40.addComponentOrReplace(gltfShape_2)
const transform_45 = new Transform({
  position: new Vector3(2, 1.5, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
neonLightTube_06_40.addComponentOrReplace(transform_45)

    const neonLightTube_06_41 = new Entity()
    neonLightTube_06_41.setParent(this)
    neonLightTube_06_41.addComponentOrReplace(gltfShape_2)
    const transform_46 = new Transform({
      position: new Vector3(1.5, 1.5, 2),
      rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865477),
      scale: new Vector3(1, 1, 1)
    })
    neonLightTube_06_41.addComponentOrReplace(transform_46)
    
    const neonLightTube_06_42 = new Entity()
    neonLightTube_06_42.setParent(this)
    neonLightTube_06_42.addComponentOrReplace(gltfShape_2)
    const transform_47 = new Transform({
      position: new Vector3(1.5, 1.5, 3.5),
      rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865477),
      scale: new Vector3(1, 1, 1)
    })
    neonLightTube_06_42.addComponentOrReplace(transform_47)
    
    const neonLightTube_06_43 = new Entity()
    neonLightTube_06_43.setParent(this)
    neonLightTube_06_43.addComponentOrReplace(gltfShape_2)
    const transform_48 = new Transform({
      position: new Vector3(1.5, 1.5, 5),
      rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865477),
      scale: new Vector3(1, 1, 1)
    })
    neonLightTube_06_43.addComponentOrReplace(transform_48)
    
    const neonLightTube_06_44 = new Entity()
    neonLightTube_06_44.setParent(this)
    neonLightTube_06_44.addComponentOrReplace(gltfShape_2)
    const transform_49 = new Transform({
      position: new Vector3(1.5, 1.5, 6.5),
      rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865477),
      scale: new Vector3(1, 1, 1)
    })
    neonLightTube_06_44.addComponentOrReplace(transform_49)
    
    const neonLightTube_06_45 = new Entity()
    neonLightTube_06_45.setParent(this)
    neonLightTube_06_45.addComponentOrReplace(gltfShape_2)
    const transform_50 = new Transform({
      position: new Vector3(1.5, 1.5, 8),
      rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865477),
      scale: new Vector3(1, 1, 1)
    })
    neonLightTube_06_45.addComponentOrReplace(transform_50)
    
    const neonLightTube_06_46 = new Entity()
    neonLightTube_06_46.setParent(this)
    neonLightTube_06_46.addComponentOrReplace(gltfShape_2)
    const transform_51 = new Transform({
      position: new Vector3(1.5, 1.5, 9.5),
      rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865477),
      scale: new Vector3(1, 1, 1)
    })
    neonLightTube_06_46.addComponentOrReplace(transform_51)
    
    const neonLightTube_06_47 = new Entity()
    neonLightTube_06_47.setParent(this)
    neonLightTube_06_47.addComponentOrReplace(gltfShape_2)
    const transform_52 = new Transform({
      position: new Vector3(1.5, 1.5, 11),
      rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865477),
      scale: new Vector3(1, 1, 1)
    })
    neonLightTube_06_47.addComponentOrReplace(transform_52)
    
    const neonLightTube_06_48 = new Entity()
    neonLightTube_06_48.setParent(this)
    neonLightTube_06_48.addComponentOrReplace(gltfShape_2)
    const transform_53 = new Transform({
      position: new Vector3(1.5, 1.5, 12.5),
      rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865477),
      scale: new Vector3(1, 1, 1)
    })
    neonLightTube_06_48.addComponentOrReplace(transform_53)
    
    const neonLightTube_06_49 = new Entity()
    neonLightTube_06_49.setParent(this)
    neonLightTube_06_49.addComponentOrReplace(gltfShape_2)
    const transform_54 = new Transform({
      position: new Vector3(1.5, 1.5, 14),
      rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865477),
      scale: new Vector3(1, 1, 1)
    })
    neonLightTube_06_49.addComponentOrReplace(transform_54)
    
    const neonLightTube_06_50 = new Entity()
    neonLightTube_06_50.setParent(this)
    neonLightTube_06_50.addComponentOrReplace(gltfShape_2)
    const transform_55 = new Transform({
      position: new Vector3(1.5, 1.5, 15.5),
      rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865477),
      scale: new Vector3(1, 1, 1)
    })
    neonLightTube_06_50.addComponentOrReplace(transform_55)
    
    const neonLightTube_06_51 = new Entity()
    neonLightTube_06_51.setParent(this)
    neonLightTube_06_51.addComponentOrReplace(gltfShape_2)
    const transform_56 = new Transform({
      position: new Vector3(1.5, 1.5, 17),
      rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865477),
      scale: new Vector3(1, 1, 1)
    })
    neonLightTube_06_51.addComponentOrReplace(transform_56)
    
    const neonLightTube_06_52 = new Entity()
    neonLightTube_06_52.setParent(this)
    neonLightTube_06_52.addComponentOrReplace(gltfShape_2)
    const transform_57 = new Transform({
      position: new Vector3(1.5, 1.5, 18.5),
      rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865477),
      scale: new Vector3(1, 1, 1)
    })
    neonLightTube_06_52.addComponentOrReplace(transform_57)
    
    const neonLightTube_06_53 = new Entity()
    neonLightTube_06_53.setParent(this)
    neonLightTube_06_53.addComponentOrReplace(gltfShape_2)
    const transform_58 = new Transform({
      position: new Vector3(1.5, 1.5, 20),
      rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865477),
      scale: new Vector3(1, 1, 1)
    })
    neonLightTube_06_53.addComponentOrReplace(transform_58)
    
    const neonLightTube_06_54 = new Entity()
    neonLightTube_06_54.setParent(this)
    neonLightTube_06_54.addComponentOrReplace(gltfShape_2)
    const transform_59 = new Transform({
      position: new Vector3(1.5, 1.5, 21.5),
      rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865477),
      scale: new Vector3(1, 1, 1)
    })
    neonLightTube_06_54.addComponentOrReplace(transform_59)
    
    const neonLightTube_06_55 = new Entity()
    neonLightTube_06_55.setParent(this)
    neonLightTube_06_55.addComponentOrReplace(gltfShape_2)
    const transform_60 = new Transform({
      position: new Vector3(1.5, 1.5, 23),
      rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865477),
      scale: new Vector3(1, 1, 1)
    })
    neonLightTube_06_55.addComponentOrReplace(transform_60)
    
    const neonLightTube_06_56 = new Entity()
    neonLightTube_06_56.setParent(this)
    neonLightTube_06_56.addComponentOrReplace(gltfShape_2)
    const transform_61 = new Transform({
      position: new Vector3(1.5, 1.5, 24.5),
      rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865477),
      scale: new Vector3(1, 1, 1)
    })
    neonLightTube_06_56.addComponentOrReplace(transform_61)
    
    const neonLightTube_06_57 = new Entity()
    neonLightTube_06_57.setParent(this)
    neonLightTube_06_57.addComponentOrReplace(gltfShape_2)
    const transform_62 = new Transform({
      position: new Vector3(1.5, 1.5, 26),
      rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865477),
      scale: new Vector3(1, 1, 1)
    })
    neonLightTube_06_57.addComponentOrReplace(transform_62)
    
    const neonLightTube_06_58 = new Entity()
    neonLightTube_06_58.setParent(this)
    neonLightTube_06_58.addComponentOrReplace(gltfShape_2)
    const transform_63 = new Transform({
      position: new Vector3(1.5, 1.5, 27.5),
      rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865477),
      scale: new Vector3(1, 1, 1)
    })
    neonLightTube_06_58.addComponentOrReplace(transform_63)
    
    const neonLightTube_06_59 = new Entity()
    neonLightTube_06_59.setParent(this)
    neonLightTube_06_59.addComponentOrReplace(gltfShape_2)
    const transform_64 = new Transform({
      position: new Vector3(1.5, 1.5, 29),
      rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865477),
      scale: new Vector3(1, 1, 1)
    })
    neonLightTube_06_59.addComponentOrReplace(transform_64)
    
    const neonLightTube_06_60 = new Entity()
    neonLightTube_06_60.setParent(this)
    neonLightTube_06_60.addComponentOrReplace(gltfShape_2)
    const transform_65 = new Transform({
      position: new Vector3(1.5, 1.5, 30.5),
      rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865477),
      scale: new Vector3(1, 1, 1)
    })
    neonLightTube_06_60.addComponentOrReplace(transform_65)
    
    const neonLightTube_06_61 = new Entity()
    neonLightTube_06_61.setParent(this)
    neonLightTube_06_61.addComponentOrReplace(gltfShape_2)
    const transform_66 = new Transform({
      position: new Vector3(2.5, 1.5, 31.5),
      rotation: new Quaternion(0, 1, 0, 2.636779683484747e-16),
      scale: new Vector3(1, 1, 1)
    })
    neonLightTube_06_61.addComponentOrReplace(transform_66)
    
    const neonLightTube_06_62 = new Entity()
    neonLightTube_06_62.setParent(this)
    neonLightTube_06_62.addComponentOrReplace(gltfShape_2)
    const transform_67 = new Transform({
      position: new Vector3(4, 1.5, 31.5),
      rotation: new Quaternion(0, 1, 0, 2.636779683484747e-16),
      scale: new Vector3(1, 1, 1)
    })
    neonLightTube_06_62.addComponentOrReplace(transform_67)
    
    const neonLightTube_06_63 = new Entity()
    neonLightTube_06_63.setParent(this)
    neonLightTube_06_63.addComponentOrReplace(gltfShape_2)
    const transform_68 = new Transform({
      position: new Vector3(5.5, 1.5, 31.5),
      rotation: new Quaternion(0, 1, 0, 2.636779683484747e-16),
      scale: new Vector3(1, 1, 1)
    })
    neonLightTube_06_63.addComponentOrReplace(transform_68)
    
    const neonLightTube_06_64 = new Entity()
    neonLightTube_06_64.setParent(this)
    neonLightTube_06_64.addComponentOrReplace(gltfShape_2)
    const transform_69 = new Transform({
      position: new Vector3(7, 1.5, 31.5),
      rotation: new Quaternion(0, 1, 0, 2.636779683484747e-16),
      scale: new Vector3(1, 1, 1)
    })
    neonLightTube_06_64.addComponentOrReplace(transform_69)
    
    const neonLightTube_06_65 = new Entity()
    neonLightTube_06_65.setParent(this)
    neonLightTube_06_65.addComponentOrReplace(gltfShape_2)
    const transform_70 = new Transform({
      position: new Vector3(8.5, 1.5, 31.5),
      rotation: new Quaternion(0, 1, 0, 2.636779683484747e-16),
      scale: new Vector3(1, 1, 1)
    })
    neonLightTube_06_65.addComponentOrReplace(transform_70)
    
    const neonLightTube_06_66 = new Entity()
    neonLightTube_06_66.setParent(this)
    neonLightTube_06_66.addComponentOrReplace(gltfShape_2)
    const transform_71 = new Transform({
      position: new Vector3(10, 1.5, 31.5),
      rotation: new Quaternion(0, 1, 0, 2.636779683484747e-16),
      scale: new Vector3(1, 1, 1)
    })
    neonLightTube_06_66.addComponentOrReplace(transform_71)
    
    const neonLightTube_06_67 = new Entity()
    neonLightTube_06_67.setParent(this)
    neonLightTube_06_67.addComponentOrReplace(gltfShape_2)
    const transform_72 = new Transform({
      position: new Vector3(11.5, 1.5, 31.5),
      rotation: new Quaternion(0, 1, 0, 2.636779683484747e-16),
      scale: new Vector3(1, 1, 1)
    })
    neonLightTube_06_67.addComponentOrReplace(transform_72)
    
    const neonLightTube_06_68 = new Entity()
    neonLightTube_06_68.setParent(this)
    neonLightTube_06_68.addComponentOrReplace(gltfShape_2)
    const transform_73 = new Transform({
      position: new Vector3(13, 1.5, 31.5),
      rotation: new Quaternion(0, 1, 0, 2.636779683484747e-16),
      scale: new Vector3(1, 1, 1)
    })
    neonLightTube_06_68.addComponentOrReplace(transform_73)
    
    const neonLightTube_06_69 = new Entity()
    neonLightTube_06_69.setParent(this)
    neonLightTube_06_69.addComponentOrReplace(gltfShape_2)
    const transform_74 = new Transform({
      position: new Vector3(14.5, 1.5, 31.5),
      rotation: new Quaternion(0, 1, 0, 2.636779683484747e-16),
      scale: new Vector3(1, 1, 1)
    })
    neonLightTube_06_69.addComponentOrReplace(transform_74)
    
    const neonLightTube_06_70 = new Entity()
    neonLightTube_06_70.setParent(this)
    neonLightTube_06_70.addComponentOrReplace(gltfShape_2)
    const transform_75 = new Transform({
      position: new Vector3(16, 1.5, 31.5),
      rotation: new Quaternion(0, 1, 0, 2.636779683484747e-16),
      scale: new Vector3(1, 1, 1)
    })
    neonLightTube_06_70.addComponentOrReplace(transform_75)
    
    const neonLightTube_06_71 = new Entity()
    neonLightTube_06_71.setParent(this)
    neonLightTube_06_71.addComponentOrReplace(gltfShape_2)
    const transform_76 = new Transform({
      position: new Vector3(17.5, 1.5, 31.5),
      rotation: new Quaternion(0, 1, 0, 2.636779683484747e-16),
      scale: new Vector3(1, 1, 1)
    })
    neonLightTube_06_71.addComponentOrReplace(transform_76)
    
    const neonLightTube_06_72 = new Entity()
    neonLightTube_06_72.setParent(this)
    neonLightTube_06_72.addComponentOrReplace(gltfShape_2)
    const transform_77 = new Transform({
      position: new Vector3(19, 1.5, 31.5),
      rotation: new Quaternion(0, 1, 0, 2.636779683484747e-16),
      scale: new Vector3(1, 1, 1)
    })
    neonLightTube_06_72.addComponentOrReplace(transform_77)
    
    const neonLightTube_06_73 = new Entity()
    neonLightTube_06_73.setParent(this)
    neonLightTube_06_73.addComponentOrReplace(gltfShape_2)
    const transform_78 = new Transform({
      position: new Vector3(20.5, 1.5, 31.5),
      rotation: new Quaternion(0, 1, 0, 2.636779683484747e-16),
      scale: new Vector3(1, 1, 1)
    })
    neonLightTube_06_73.addComponentOrReplace(transform_78)
    
    const neonLightTube_06_74 = new Entity()
    neonLightTube_06_74.setParent(this)
    neonLightTube_06_74.addComponentOrReplace(gltfShape_2)
    const transform_79 = new Transform({
      position: new Vector3(22, 1.5, 31.5),
      rotation: new Quaternion(0, 1, 0, 2.636779683484747e-16),
      scale: new Vector3(1, 1, 1)
    })
    neonLightTube_06_74.addComponentOrReplace(transform_79)
    
    const neonLightTube_06_75 = new Entity()
    neonLightTube_06_75.setParent(this)
    neonLightTube_06_75.addComponentOrReplace(gltfShape_2)
    const transform_80 = new Transform({
      position: new Vector3(23.5, 1.5, 31.5),
      rotation: new Quaternion(0, 1, 0, 2.636779683484747e-16),
      scale: new Vector3(1, 1, 1)
    })
    neonLightTube_06_75.addComponentOrReplace(transform_80)
    
    const neonLightTube_06_76 = new Entity()
    neonLightTube_06_76.setParent(this)
    neonLightTube_06_76.addComponentOrReplace(gltfShape_2)
    const transform_81 = new Transform({
      position: new Vector3(25, 1.5, 31.5),
      rotation: new Quaternion(0, 1, 0, 2.636779683484747e-16),
      scale: new Vector3(1, 1, 1)
    })
    neonLightTube_06_76.addComponentOrReplace(transform_81)
    
    const neonLightTube_06_77 = new Entity()
    neonLightTube_06_77.setParent(this)
    neonLightTube_06_77.addComponentOrReplace(gltfShape_2)
    const transform_82 = new Transform({
      position: new Vector3(26.5, 1.5, 31.5),
      rotation: new Quaternion(0, 1, 0, 2.636779683484747e-16),
      scale: new Vector3(1, 1, 1)
    })
    neonLightTube_06_77.addComponentOrReplace(transform_82)
    
    const neonLightTube_06_78 = new Entity()
    neonLightTube_06_78.setParent(this)
    neonLightTube_06_78.addComponentOrReplace(gltfShape_2)
    const transform_83 = new Transform({
      position: new Vector3(28, 1.5, 31.5),
      rotation: new Quaternion(0, 1, 0, 2.636779683484747e-16),
      scale: new Vector3(1, 1, 1)
    })
    neonLightTube_06_78.addComponentOrReplace(transform_83)
    engine.addEntity(neonLightTube_06_78)
    
    const neonLightTube_06_79 = new Entity()
    neonLightTube_06_79.setParent(this)
    neonLightTube_06_79.addComponentOrReplace(gltfShape_2)
    const transform_84 = new Transform({
      position: new Vector3(29.5, 1.5, 31.5),
      rotation: new Quaternion(0, 1, 0, 2.636779683484747e-16),
      scale: new Vector3(1, 1, 1)
    })
    neonLightTube_06_79.addComponentOrReplace(transform_84)
    
    const neonLightTube_06_80 = new Entity()
    neonLightTube_06_80.setParent(this)
    neonLightTube_06_80.addComponentOrReplace(gltfShape_2)
    const transform_85 = new Transform({
      position: new Vector3(30.5, 1.5, 31.5),
      rotation: new Quaternion(0, 1, 0, 2.636779683484747e-16),
      scale: new Vector3(1, 1, 1)
    })
    neonLightTube_06_80.addComponentOrReplace(transform_85)
    
  }

  show()
  {
    engine.addEntity(this)
    this.addComponentOrReplace(new utils.Delay(Globals.Settings.loadDelay,()=>{
      log("done loading")
      this.events.fireEvent(new Globals.LevelLoadingComplete())
    }))
  }


}