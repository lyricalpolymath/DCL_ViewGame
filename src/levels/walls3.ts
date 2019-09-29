import utils from "../../node_modules/decentraland-ecs-utils/index"
import { Wall } from "./wall"
import { Level } from "./level"
import { _colorNames } from "../gameSettings"

    export function createScene(level:Level)
    {

      const terrain_level3 = new Entity()
      terrain_level3.setParent(level)
      const gltfShape_2 = new GLTFShape('models/terrain_level3.glb')
      terrain_level3.addComponentOrReplace(gltfShape_2)
      const transform_6 = new Transform({
        position: new Vector3(16, 0.05670942611333096, 16),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      terrain_level3.addComponentOrReplace(transform_6)
      
      const bones = new Entity()
      bones.setParent(level)
      const gltfShape_3 = new GLTFShape('models/bones.glb')
      bones.addComponentOrReplace(gltfShape_3)
      const transform_7 = new Transform({
        position: new Vector3(19.30763884641291, 2.324089780472775, 9.390925591692886),
        rotation: new Quaternion(0, 0.2836680091876895, 0, 0.9589225519109937),
        scale: new Vector3(0.8514639292521793, 0.7941227920310837, 0.7797930153772797)
      })
      bones.addComponentOrReplace(transform_7)
      
      const stones = new Entity()
      stones.setParent(level)
      const gltfShape_4 = new GLTFShape('models/stones.glb')
      stones.addComponentOrReplace(gltfShape_4)
      const transform_8 = new Transform({
        position: new Vector3(4.5, 1, 5.5),
        rotation: new Quaternion(0, -0.38268343236508984, 0, 0.9238795325112868),
        scale: new Vector3(0.38033979216698555, 0.4247742206081746, 0.3683142931454064)
      })
      stones.addComponentOrReplace(transform_8)
      
      const stones_2 = new Entity()
      stones_2.setParent(level)
      stones_2.addComponentOrReplace(gltfShape_4)
      const transform_9 = new Transform({
        position: new Vector3(20, 0.5, 8.5),
        rotation: new Quaternion(0, -0.923879532511287, 0, 0.3826834323650899),
        scale: new Vector3(0.1916429149367341, 0.15557620331230382, 0.17839852579603924)
      })
      stones_2.addComponentOrReplace(transform_9)
      
      const stones_3 = new Entity()
      stones_3.setParent(level)
      stones_3.addComponentOrReplace(gltfShape_4)
      const transform_10 = new Transform({
        position: new Vector3(2.5, 0.5, 4),
        rotation: new Quaternion(0, -0.2902846772544625, 0, 0.9569403357322094),
        scale: new Vector3(0.1916429149367341, 0.15557620331230382, 0.17839852579603924)
      })
      stones_3.addComponentOrReplace(transform_10)
      
      const stones_4 = new Entity()
      stones_4.setParent(level)
      stones_4.addComponentOrReplace(gltfShape_4)
      const transform_11 = new Transform({
        position: new Vector3(2, 0.5, 28.5),
        rotation: new Quaternion(0, -0.2902846772544625, 0, 0.9569403357322094),
        scale: new Vector3(0.1916429149367341, 0.15557620331230382, 0.17839852579603924)
      })
      stones_4.addComponentOrReplace(transform_11)
      
      const stones_5 = new Entity()
      stones_5.setParent(level)
      stones_5.addComponentOrReplace(gltfShape_4)
      const transform_12 = new Transform({
        position: new Vector3(27, 0.5, 24.5),
        rotation: new Quaternion(-0.6343932841636457, 2.220446049250313e-16, -0.7730104533627369, 2.636779683484747e-16),
        scale: new Vector3(0.1916429149367341, 0.15557620331230382, 0.17839852579603924)
      })
      stones_5.addComponentOrReplace(transform_12)
      
    }

    export function createWalls(level:Level)
    {

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(20.5, 1.5584415885299827, 30), new Quaternion(0, 0, 0, 1), _colorNames.RED))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(17.46390046262978, 1.581462796781092, 16), new Quaternion(0, 0, 0, 1), _colorNames.RED))
    
      


}
