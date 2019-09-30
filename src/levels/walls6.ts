import utils from "../../node_modules/decentraland-ecs-utils/index"
import { Wall } from "./wall"
import { Level } from "./level"
import { _colorNames } from "../gameSettings"
import * as Globals from "../functions"


// TODO - some of the levels have a SPECIAL COLOR   YELLOW and PURPLE

    // BB added entieties
    export function createScene(level:Level)
    {

      const blackBox = new Entity()
      blackBox.setParent(level)
      const gltfShape_7 = new GLTFShape('models/blackBox.glb')
      blackBox.addComponentOrReplace(gltfShape_7)
      const transform_55 = new Transform({
        position: new Vector3(16, 20.153535559020156, 16),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      blackBox.addComponentOrReplace(transform_55)
      
      const hypercube_v1 = new Entity()
      hypercube_v1.setParent(level)
      const gltfShape_2 = new GLTFShape('models/hypercubeAnimation.glb')
      hypercube_v1.addComponentOrReplace(gltfShape_2)
      const transform_6 = new Transform({
        position: new Vector3(17.5, 4, 17),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      hypercube_v1.addComponentOrReplace(transform_6)

      hypercube_v1.addComponentOrReplace(new Animator())

      for(var i = 0; i < 780; i++)
      {
        hypercube_v1.getComponent(Animator).addClip(new AnimationState(("Cube_"+i+"|CINEMA_4D_Main|Layer0")))
        hypercube_v1.getComponent(Animator).getClip(("Cube_"+i+"|CINEMA_4D_Main|Layer0")).play()
      }

      /*
      
      const mobius_light = new Entity()
      mobius_light.setParent(level)
      const gltfShape_3 = new GLTFShape('models/mobius-light.glb')
      mobius_light.addComponentOrReplace(gltfShape_3)
      const transform_7 = new Transform({
        position: new Vector3(26, 9, 28),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      mobius_light.addComponentOrReplace(transform_7)
      
      const mobius = new Entity()
      mobius.setParent(level)
      const gltfShape_4 = new GLTFShape('models/mobiusDark.glb')
      mobius.addComponentOrReplace(gltfShape_4)
      const transform_8 = new Transform({
        position: new Vector3(27, 1, 5.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      mobius.addComponentOrReplace(transform_8)
      
      const mobius_2 = new Entity()
      mobius_2.setParent(level)
      mobius_2.addComponentOrReplace(gltfShape_4)
      const transform_9 = new Transform({
        position: new Vector3(23.5, 2, 5.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      mobius_2.addComponentOrReplace(transform_9)
      
      const mobius_3 = new Entity()
      mobius_3.setParent(level)
      mobius_3.addComponentOrReplace(gltfShape_4)
      const transform_10 = new Transform({
        position: new Vector3(20.5, 3, 5.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      mobius_3.addComponentOrReplace(transform_10)
      
      const mobius_4 = new Entity()
      mobius_4.setParent(level)
      mobius_4.addComponentOrReplace(gltfShape_4)
      const transform_11 = new Transform({
        position: new Vector3(17.5, 4, 6),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      mobius_4.addComponentOrReplace(transform_11)
      
      const mobius_5 = new Entity()
      mobius_5.setParent(level)
      mobius_5.addComponentOrReplace(gltfShape_4)
      const transform_12 = new Transform({
        position: new Vector3(14.5, 5, 7),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      mobius_5.addComponentOrReplace(transform_12)
      
      const mobius_6 = new Entity()
      mobius_6.setParent(level)
      mobius_6.addComponentOrReplace(gltfShape_4)
      const transform_13 = new Transform({
        position: new Vector3(11.5, 6, 7.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      mobius_6.addComponentOrReplace(transform_13)
      
      const mobius_7 = new Entity()
      mobius_7.setParent(level)
      mobius_7.addComponentOrReplace(gltfShape_4)
      const transform_14 = new Transform({
        position: new Vector3(8.5, 6.5, 8.5),
        rotation: new Quaternion(0, 0.19509032201612825, 0, 0.9807852804032304),
        scale: new Vector3(1, 1, 1)
      })
      mobius_7.addComponentOrReplace(transform_14)
      
      const mobius_8 = new Entity()
      mobius_8.setParent(level)
      mobius_8.addComponentOrReplace(gltfShape_4)
      const transform_15 = new Transform({
        position: new Vector3(8.5, 7, 11.5),
        rotation: new Quaternion(0, 0.19509032201612825, 0, 0.9807852804032304),
        scale: new Vector3(1, 1, 1)
      })
      mobius_8.addComponentOrReplace(transform_15)
      
      const mobius_9 = new Entity()
      mobius_9.setParent(level)
      mobius_9.addComponentOrReplace(gltfShape_4)
      const transform_16 = new Transform({
        position: new Vector3(8.5, 9, 18.5),
        rotation: new Quaternion(0, 0.19509032201612825, 0, 0.9807852804032304),
        scale: new Vector3(1, 1, 1)
      })
      mobius_9.addComponentOrReplace(transform_16)
      
      const mobius_light_2 = new Entity()
      mobius_light_2.setParent(level)
      mobius_light_2.addComponentOrReplace(gltfShape_3)
      const transform_17 = new Transform({
        position: new Vector3(22.5, 8, 27.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      mobius_light_2.addComponentOrReplace(transform_17)
      
      const mobius_light_3 = new Entity()
      mobius_light_3.setParent(level)
      mobius_light_3.addComponentOrReplace(gltfShape_3)
      const transform_18 = new Transform({
        position: new Vector3(18.5, 7, 26.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      mobius_light_3.addComponentOrReplace(transform_18)
      
      const mobius_light_4 = new Entity()
      mobius_light_4.setParent(level)
      mobius_light_4.addComponentOrReplace(gltfShape_3)
      const transform_19 = new Transform({
        position: new Vector3(14, 6.5, 25.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      mobius_light_4.addComponentOrReplace(transform_19)
      
      const mobius_light_5 = new Entity()
      mobius_light_5.setParent(level)
      mobius_light_5.addComponentOrReplace(gltfShape_3)
      const transform_20 = new Transform({
        position: new Vector3(10, 5.5, 23.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      mobius_light_5.addComponentOrReplace(transform_20)
      
      const mobius_light_6 = new Entity()
      mobius_light_6.setParent(level)
      mobius_light_6.addComponentOrReplace(gltfShape_3)
      const transform_21 = new Transform({
        position: new Vector3(7, 4.5, 21),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      mobius_light_6.addComponentOrReplace(transform_21)
      
      const mobius_light_7 = new Entity()
      mobius_light_7.setParent(level)
      mobius_light_7.addComponentOrReplace(gltfShape_3)
      const transform_22 = new Transform({
        position: new Vector3(7, 3.5, 18.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      mobius_light_7.addComponentOrReplace(transform_22)
      
      const mobius_light_8 = new Entity()
      mobius_light_8.setParent(level)
      mobius_light_8.addComponentOrReplace(gltfShape_3)
      const transform_23 = new Transform({
        position: new Vector3(7, 2.5, 14),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      mobius_light_8.addComponentOrReplace(transform_23)
      
      const mobius_light_9 = new Entity()
      mobius_light_9.setParent(level)
      mobius_light_9.addComponentOrReplace(gltfShape_3)
      const transform_24 = new Transform({
        position: new Vector3(7, 1.5, 9),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      mobius_light_9.addComponentOrReplace(transform_24)

      */
      
    }

    export function createWalls(level:Level)
    {
        // example // level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26.5, 1.5030281017900293, 29.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))
        
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 6, 8.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW))  // model: models/NEON-YELLOWwall-yellow.glb
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(18.5, 5.5, 8.198298133723515), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(20.5, 4.5, 8), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(23, 3.5, 8), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26, 2.5, 8), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(27, 10.5, 30), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(24.76434028371447, 10.227791531450194, 30), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(22.5, 9.701169857409667, 30), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(20.27753770840135, 9.460300057204416, 29.650665089033794), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(18.05506602512654, 8.951825071919098, 29.244219738559547), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(15.79669818341737, 8.33198262947471, 29.12224239887525), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(13.5, 7.769886026003402, 28.20912666119036), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(10, 10.5, 16.5), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.YELLOW))


        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(7, 10.5, 19.5), new Quaternion(0, 0.7132461560631227, 0, 0.7009136329542885), _colorNames.PURPLE))  // model: models/NEON-PURPLEwall-purple.glb
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(7, 8.5, 13), new Quaternion(0, 0.7132461560631227, 0, 0.7009136329542885), _colorNames.PURPLE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(7, 8.5, 10.637395537041696), new Quaternion(0, 0.7132461560631227, 0, 0.7009136329542885), _colorNames.PURPLE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(7, 8.5, 8.388012990634786), new Quaternion(0, 0.5555702330196025, 0, 0.8314696123025452), _colorNames.PURPLE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(8, 8.5, 6.06545681528902), new Quaternion(0, 0.3526464923594479, 0, 0.9357566197610244), _colorNames.PURPLE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(10.5, 8, 5.5), new Quaternion(0, -1.3877787807814457e-17, 0, 1), _colorNames.PURPLE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(13, 7, 5.5), new Quaternion(0, -1.3877787807814457e-17, 0, 1), _colorNames.PURPLE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(5.5, 2.5, 8), new Quaternion(0, 0.5555702330196025, 0, 0.8314696123025452), _colorNames.PURPLE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(9.34821773544298, 3.1615548993205316, 10.5), new Quaternion(0, 0.7132461560631227, 0, 0.7009136329542885), _colorNames.PURPLE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(9.255947226066807, 4.3208692813707525, 13), new Quaternion(0, 0.7132461560631227, 0, 0.7009136329542885), _colorNames.PURPLE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4.537180181600945, 4.287226888671968, 15.2902335429824), new Quaternion(0, 0.7132461560631227, 0, 0.7009136329542885), _colorNames.PURPLE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4.537180181600945, 5.125759975399504, 19.611248378661188), new Quaternion(0, 0.7132461560631227, 0, 0.7009136329542885), _colorNames.PURPLE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4.537180181600945, 6.124585040022323, 22.88287163918724), new Quaternion(0, 0.7132461560631227, 0, 0.7009136329542885), _colorNames.PURPLE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(11.5, 6.5, 21), new Quaternion(0, 0.9238795325112866, 0, 0.38268343236508984), _colorNames.PURPLE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(9, 7.017493004957531, 26), new Quaternion(0, 0.9238795325112866, 0, 0.38268343236508984), _colorNames.PURPLE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(9, 4.8381171611533125, 16.5), new Quaternion(0, 0.7132461560631227, 0, 0.7009136329542885), _colorNames.PURPLE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(9, 5.576066545571663, 19.51776978755677), new Quaternion(0, 0.7132461560631227, 0, 0.7009136329542885), _colorNames.PURPLE))



    }