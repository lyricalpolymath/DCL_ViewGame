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
    }

}