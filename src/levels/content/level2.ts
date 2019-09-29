import utils from "../../../node_modules/decentraland-ecs-utils/index"
import { Wall } from "../wall"
import {greenWall, yellowWall, blueWall, Yellow} from "../../functions"
import { Level } from "../level"

    export function level2Content(level:Level)
    {

        const floorBaseGrass_01 = new Entity()
        floorBaseGrass_01.setParent(level)
        const gltfShape = new GLTFShape('models/FloorBaseGrass_01.glb')
        floorBaseGrass_01.addComponentOrReplace(gltfShape)
        const transform_2 = new Transform({
          position: new Vector3(8, 0, 8),
          rotation: new Quaternion(0, 0, 0, 1),
          scale: new Vector3(1, 1, 1)
        })
        floorBaseGrass_01.addComponentOrReplace(transform_2)
        floorBaseGrass_01.setParent(level)
  
        const floorBaseGrass_01_2 = new Entity()
        floorBaseGrass_01_2.setParent(level)
        floorBaseGrass_01_2.addComponentOrReplace(gltfShape)
        const transform_3 = new Transform({
          position: new Vector3(24, 0, 8),
          rotation: new Quaternion(0, 0, 0, 1),
          scale: new Vector3(1, 1, 1)
        })
        floorBaseGrass_01_2.addComponentOrReplace(transform_3)
        floorBaseGrass_01_2.setParent(level)
  
        const floorBaseGrass_01_3 = new Entity()
        floorBaseGrass_01_3.setParent(level)
        floorBaseGrass_01_3.addComponentOrReplace(gltfShape)
        const transform_4 = new Transform({
          position: new Vector3(8, 0, 24),
          rotation: new Quaternion(0, 0, 0, 1),
          scale: new Vector3(1, 1, 1)
        })
        floorBaseGrass_01_3.addComponentOrReplace(transform_4)
        floorBaseGrass_01_3.setParent(level)
  
        const floorBaseGrass_01_4 = new Entity()
        floorBaseGrass_01_4.setParent(level)
        floorBaseGrass_01_4.addComponentOrReplace(gltfShape)
        const transform_5 = new Transform({
          position: new Vector3(24, 0, 24),
          rotation: new Quaternion(0, 0, 0, 1),
          scale: new Vector3(1, 1, 1)
        })
        floorBaseGrass_01_4.addComponentOrReplace(transform_5)
        floorBaseGrass_01_4.setParent(level)

        /*
        const biohazardsuit = new Entity()
biohazardsuit.setParent(level)
const gltfShape_6 = new GLTFShape('models/biohazardsuit.glb')
biohazardsuit.addComponentOrReplace(gltfShape_6)
const transform_111 = new Transform({
  position: new Vector3(25.5, 1.5, 17),
  rotation: new Quaternion(0, 0.19509032201612825, 0, 0.9807852804032304),
  scale: new Vector3(1, 1, 1)
})
biohazardsuit.addComponentOrReplace(transform_111)
*/
}
