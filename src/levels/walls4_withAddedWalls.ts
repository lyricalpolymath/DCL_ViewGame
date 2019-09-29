import utils from "../../node_modules/decentraland-ecs-utils/index"
import { Wall } from "./wall"
import { Level } from "./level"
import { _colorNames } from "../gameSettings"

// TODO - some of the levels have a SPECIAL COLOR 

    //BB added entities 
    export function createlevel(level:Level)
    {

      const floorBaseGrass_01 = new Entity()
      floorBaseGrass_01.setParent(level)
      const gltfShape = new GLTFShape('models/FloorBaseGrass_01/FloorBaseGrass_01.glb')
      floorBaseGrass_01.addComponentOrReplace(gltfShape)
      const transform_2 = new Transform({
        position: new Vector3(8, 0, 8),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      floorBaseGrass_01.addComponentOrReplace(transform_2)
      engine.addEntity(floorBaseGrass_01)

      const floorBaseGrass_01_2 = new Entity()
      floorBaseGrass_01_2.setParent(level)
      floorBaseGrass_01_2.addComponentOrReplace(gltfShape)
      const transform_3 = new Transform({
        position: new Vector3(24, 0, 8),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      floorBaseGrass_01_2.addComponentOrReplace(transform_3)
      engine.addEntity(floorBaseGrass_01_2)

      const floorBaseGrass_01_3 = new Entity()
      floorBaseGrass_01_3.setParent(level)
      floorBaseGrass_01_3.addComponentOrReplace(gltfShape)
      const transform_4 = new Transform({
        position: new Vector3(8, 0, 24),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      floorBaseGrass_01_3.addComponentOrReplace(transform_4)
      engine.addEntity(floorBaseGrass_01_3)

      const floorBaseGrass_01_4 = new Entity()
      floorBaseGrass_01_4.setParent(level)
      floorBaseGrass_01_4.addComponentOrReplace(gltfShape)
      const transform_5 = new Transform({
        position: new Vector3(24, 0, 24),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      floorBaseGrass_01_4.addComponentOrReplace(transform_5)
      engine.addEntity(floorBaseGrass_01_4)

      const terrain_level4 = new Entity()
      terrain_level4.setParent(level)
      const gltfShape_2 = new GLTFShape('models/terrain_level4.glb')
      terrain_level4.addComponentOrReplace(gltfShape_2)
      const transform_6 = new Transform({
        position: new Vector3(16, 0.07251290268377986, 16),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      terrain_level4.addComponentOrReplace(transform_6)
      engine.addEntity(terrain_level4)

      const skull1 = new Entity()
      skull1.setParent(level)
      const gltfShape_3 = new GLTFShape('models/skull1.glb')
      skull1.addComponentOrReplace(gltfShape_3)
      const transform_7 = new Transform({
        position: new Vector3(16, 4.344403766938045, 4),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(0.5597105855019038, 0.5492050718972266, 0.45778470960000206)
      })
      skull1.addComponentOrReplace(transform_7)
      engine.addEntity(skull1)

      const skull2 = new Entity()
      skull2.setParent(level)
      const gltfShape_4 = new GLTFShape('models/skull2.glb')
      skull2.addComponentOrReplace(gltfShape_4)
      const transform_8 = new Transform({
        position: new Vector3(5, 10.5, 4.5),
        rotation: new Quaternion(0, 0.2516326118485513, 0, 0.967822829165688),
        scale: new Vector3(0.5, 0.5, 0.5)
      })
      skull2.addComponentOrReplace(transform_8)
      engine.addEntity(skull2)

      const skull3 = new Entity()
      skull3.setParent(level)
      const gltfShape_5 = new GLTFShape('models/skull3.glb')
      skull3.addComponentOrReplace(gltfShape_5)
      const transform_9 = new Transform({
        position: new Vector3(2.2410841233585046, 2.5, 26),
        rotation: new Quaternion(0, 0.9999999999999998, 0, 5.551115123125783e-17),
        scale: new Vector3(0.4898873335643579, 0.5147090224091428, 0.5187248915525302)
      })
      skull3.addComponentOrReplace(transform_9)
      engine.addEntity(skull3)

      const skull4 = new Entity()
      skull4.setParent(level)
      const gltfShape_6 = new GLTFShape('models/skull4.glb')
      skull4.addComponentOrReplace(gltfShape_6)
      const transform_10 = new Transform({
        position: new Vector3(16, 4.5, 29.03598343193847),
        rotation: new Quaternion(0, -0.9943695596215941, 0, 0.10596782010570836),
        scale: new Vector3(0.4573370553412417, 0.47198405023485, 0.4039731402563689)
      })
      skull4.addComponentOrReplace(transform_10)
      engine.addEntity(skull4)

      const skull5 = new Entity()
      skull5.setParent(level)
      const gltfShape_7 = new GLTFShape('models/skull5.glb')
      skull5.addComponentOrReplace(gltfShape_7)
      const transform_11 = new Transform({
        position: new Vector3(28, 4.5, 16),
        rotation: new Quaternion(0, -0.6343932841636457, 0, 0.7730104533627371),
        scale: new Vector3(0.4538001689285487, 0.5928407993620812, 0.4149738926313802)
      })
      skull5.addComponentOrReplace(transform_11)
      engine.addEntity(skull5)

      const skull7 = new Entity()
      skull7.setParent(level)
      const gltfShape_8 = new GLTFShape('models/skull7.glb')
      skull7.addComponentOrReplace(gltfShape_8)
      const transform_12 = new Transform({
        position: new Vector3(16, 20, 16),
        rotation: new Quaternion(0.2965998665748387, 0, 0, 0.9550018424839745),
        scale: new Vector3(0.7906317064711388, 0.8187491738598744, 0.8082600809645726)
      })
      skull7.addComponentOrReplace(transform_12)
      engine.addEntity(skull7)

      const glowing_Stone_02 = new Entity()
      glowing_Stone_02.setParent(level)
      const gltfShape_9 = new GLTFShape('models/Glowing_Stone_02/Glowing_Stone_02.glb')
      glowing_Stone_02.addComponentOrReplace(gltfShape_9)
      const transform_13 = new Transform({
        position: new Vector3(16, 7.5, 16),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_02.addComponentOrReplace(transform_13)
      engine.addEntity(glowing_Stone_02)

      const glowing_Stone_02_2 = new Entity()
      glowing_Stone_02_2.setParent(level)
      glowing_Stone_02_2.addComponentOrReplace(gltfShape_9)
      const transform_14 = new Transform({
        position: new Vector3(10.5, 5.5, 16),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_02_2.addComponentOrReplace(transform_14)
      engine.addEntity(glowing_Stone_02_2)

      const glowing_Stone_02_3 = new Entity()
      glowing_Stone_02_3.setParent(level)
      glowing_Stone_02_3.addComponentOrReplace(gltfShape_9)
      const transform_15 = new Transform({
        position: new Vector3(10.5, 4.54390604520066, 10),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_02_3.addComponentOrReplace(transform_15)
      engine.addEntity(glowing_Stone_02_3)

      const glowing_Stone_02_4 = new Entity()
      glowing_Stone_02_4.setParent(level)
      glowing_Stone_02_4.addComponentOrReplace(gltfShape_9)
      const transform_16 = new Transform({
        position: new Vector3(3.5, 5.5, 10),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_02_4.addComponentOrReplace(transform_16)
      engine.addEntity(glowing_Stone_02_4)

      const glowing_Stone_02_5 = new Entity()
      glowing_Stone_02_5.setParent(level)
      glowing_Stone_02_5.addComponentOrReplace(gltfShape_9)
      const transform_17 = new Transform({
        position: new Vector3(0.5, 4, 11.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_02_5.addComponentOrReplace(transform_17)
      engine.addEntity(glowing_Stone_02_5)

      const glowing_Stone_02_6 = new Entity()
      glowing_Stone_02_6.setParent(level)
      glowing_Stone_02_6.addComponentOrReplace(gltfShape_9)
      const transform_18 = new Transform({
        position: new Vector3(0.5, 4, 28.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_02_6.addComponentOrReplace(transform_18)
      engine.addEntity(glowing_Stone_02_6)

      const glowing_Stone_02_7 = new Entity()
      glowing_Stone_02_7.setParent(level)
      glowing_Stone_02_7.addComponentOrReplace(gltfShape_9)
      const transform_19 = new Transform({
        position: new Vector3(9, 4, 28.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_02_7.addComponentOrReplace(transform_19)
      engine.addEntity(glowing_Stone_02_7)

      const glowing_Stone_02_8 = new Entity()
      glowing_Stone_02_8.setParent(level)
      glowing_Stone_02_8.addComponentOrReplace(gltfShape_9)
      const transform_20 = new Transform({
        position: new Vector3(25, 9, 28.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_02_8.addComponentOrReplace(transform_20)
      engine.addEntity(glowing_Stone_02_8)

      const glowing_Stone_02_9 = new Entity()
      glowing_Stone_02_9.setParent(level)
      glowing_Stone_02_9.addComponentOrReplace(gltfShape_9)
      const transform_21 = new Transform({
        position: new Vector3(25, 3.5, 6.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_02_9.addComponentOrReplace(transform_21)
      engine.addEntity(glowing_Stone_02_9)

      const glowing_Stone_02_10 = new Entity()
      glowing_Stone_02_10.setParent(level)
      glowing_Stone_02_10.addComponentOrReplace(gltfShape_9)
      const transform_22 = new Transform({
        position: new Vector3(25, 3.5, 25),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_02_10.addComponentOrReplace(transform_22)
      engine.addEntity(glowing_Stone_02_10)

      const glowing_Stone_01 = new Entity()
      glowing_Stone_01.setParent(level)
      const gltfShape_10 = new GLTFShape('models/Glowing_Stone_01/Glowing_Stone_01.glb')
      glowing_Stone_01.addComponentOrReplace(gltfShape_10)
      const transform_23 = new Transform({
        position: new Vector3(19.5, 8, 16),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_01.addComponentOrReplace(transform_23)
      engine.addEntity(glowing_Stone_01)

      const glowing_Stone_01_2 = new Entity()
      glowing_Stone_01_2.setParent(level)
      glowing_Stone_01_2.addComponentOrReplace(gltfShape_10)
      const transform_24 = new Transform({
        position: new Vector3(19.5, 8, 23),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_01_2.addComponentOrReplace(transform_24)
      engine.addEntity(glowing_Stone_01_2)

      const glowing_Stone_01_3 = new Entity()
      glowing_Stone_01_3.setParent(level)
      glowing_Stone_01_3.addComponentOrReplace(gltfShape_10)
      const transform_25 = new Transform({
        position: new Vector3(25, 8, 23),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_01_3.addComponentOrReplace(transform_25)
      engine.addEntity(glowing_Stone_01_3)

      const glowing_Stone_01_4 = new Entity()
      glowing_Stone_01_4.setParent(level)
      glowing_Stone_01_4.addComponentOrReplace(gltfShape_10)
      const transform_26 = new Transform({
        position: new Vector3(25, 8, 12.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_01_4.addComponentOrReplace(transform_26)
      engine.addEntity(glowing_Stone_01_4)

      const glowing_Stone_01_5 = new Entity()
      glowing_Stone_01_5.setParent(level)
      glowing_Stone_01_5.addComponentOrReplace(gltfShape_10)
      const transform_27 = new Transform({
        position: new Vector3(10, 8, 7),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_01_5.addComponentOrReplace(transform_27)
      engine.addEntity(glowing_Stone_01_5)

      const glowing_Stone_01_6 = new Entity()
      glowing_Stone_01_6.setParent(level)
      glowing_Stone_01_6.addComponentOrReplace(gltfShape_10)
      const transform_28 = new Transform({
        position: new Vector3(10, 8, 12.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_01_6.addComponentOrReplace(transform_28)
      engine.addEntity(glowing_Stone_01_6)

      const glowing_Stone_01_7 = new Entity()
      glowing_Stone_01_7.setParent(level)
      glowing_Stone_01_7.addComponentOrReplace(gltfShape_10)
      const transform_29 = new Transform({
        position: new Vector3(12.5, 5.5, 21.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_01_7.addComponentOrReplace(transform_29)
      engine.addEntity(glowing_Stone_01_7)

      const glowing_Stone_01_8 = new Entity()
      glowing_Stone_01_8.setParent(level)
      glowing_Stone_01_8.addComponentOrReplace(gltfShape_10)
      const transform_30 = new Transform({
        position: new Vector3(6, 5, 21.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_01_8.addComponentOrReplace(transform_30)
      engine.addEntity(glowing_Stone_01_8)

      const glowing_Stone_01_9 = new Entity()
      glowing_Stone_01_9.setParent(level)
      glowing_Stone_01_9.addComponentOrReplace(gltfShape_10)
      const transform_31 = new Transform({
        position: new Vector3(29.5, 5, 29),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_01_9.addComponentOrReplace(transform_31)
      engine.addEntity(glowing_Stone_01_9)

      const glowing_Stone_01_10 = new Entity()
      glowing_Stone_01_10.setParent(level)
      glowing_Stone_01_10.addComponentOrReplace(gltfShape_10)
      const transform_32 = new Transform({
        position: new Vector3(15.5, 5, 20),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_01_10.addComponentOrReplace(transform_32)
      engine.addEntity(glowing_Stone_01_10)

      const glowing_Stone_01_11 = new Entity()
      glowing_Stone_01_11.setParent(level)
      glowing_Stone_01_11.addComponentOrReplace(gltfShape_10)
      const transform_33 = new Transform({
        position: new Vector3(15.5, 5, 8),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_01_11.addComponentOrReplace(transform_33)
      engine.addEntity(glowing_Stone_01_11)

      const glowing_Stone_04 = new Entity()
      glowing_Stone_04.setParent(level)
      const gltfShape_11 = new GLTFShape('models/Glowing_Stone_04/Glowing_Stone_04.glb')
      glowing_Stone_04.addComponentOrReplace(gltfShape_11)
      const transform_34 = new Transform({
        position: new Vector3(16, 7, 11.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_04.addComponentOrReplace(transform_34)
      engine.addEntity(glowing_Stone_04)

      const glowing_Stone_04_2 = new Entity()
      glowing_Stone_04_2.setParent(level)
      glowing_Stone_04_2.addComponentOrReplace(gltfShape_11)
      const transform_35 = new Transform({
        position: new Vector3(31.5, 7, 11.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_04_2.addComponentOrReplace(transform_35)
      engine.addEntity(glowing_Stone_04_2)

      const glowing_Stone_04_3 = new Entity()
      glowing_Stone_04_3.setParent(level)
      glowing_Stone_04_3.addComponentOrReplace(gltfShape_11)
      const transform_36 = new Transform({
        position: new Vector3(31.5, 7, 2),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_04_3.addComponentOrReplace(transform_36)
      engine.addEntity(glowing_Stone_04_3)

      const glowing_Stone_04_4 = new Entity()
      glowing_Stone_04_4.setParent(level)
      glowing_Stone_04_4.addComponentOrReplace(gltfShape_11)
      const transform_37 = new Transform({
        position: new Vector3(24, 7, 2),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_04_4.addComponentOrReplace(transform_37)
      engine.addEntity(glowing_Stone_04_4)

      const glowing_Stone_04_5 = new Entity()
      glowing_Stone_04_5.setParent(level)
      glowing_Stone_04_5.addComponentOrReplace(gltfShape_11)
      const transform_38 = new Transform({
        position: new Vector3(24, 7, 20.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_04_5.addComponentOrReplace(transform_38)
      engine.addEntity(glowing_Stone_04_5)

      const glowing_Stone_04_6 = new Entity()
      glowing_Stone_04_6.setParent(level)
      glowing_Stone_04_6.addComponentOrReplace(gltfShape_11)
      const transform_39 = new Transform({
        position: new Vector3(32, 7, 20.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_04_6.addComponentOrReplace(transform_39)
      engine.addEntity(glowing_Stone_04_6)

      const glowing_Stone_04_7 = new Entity()
      glowing_Stone_04_7.setParent(level)
      glowing_Stone_04_7.addComponentOrReplace(gltfShape_11)
      const transform_40 = new Transform({
        position: new Vector3(7.5, 3, 20.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_04_7.addComponentOrReplace(transform_40)
      engine.addEntity(glowing_Stone_04_7)
      


      
    }

    export function createLevel(level:Level)
    {

        // example // level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26.5, 1.5030281017900293, 29.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))

        // 30 walls
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(29, 1.537380429844276, 29.5), new Quaternion(0, 0.3826834323650897, 0, 0.9238795325112867), _colorNames.RED))  // model: models/redwall.glb
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(29, 4.5, 29.5), new Quaternion(0, 0.3826834323650897, 0, 0.9238795325112867), _colorNames.RED))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(29, 7, 29.5), new Quaternion(0, 0.3826834323650897, 0, 0.9238795325112867), _colorNames.RED))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(29, 10.010246542798063, 29.5), new Quaternion(0, 0.3826834323650897, 0, 0.9238795325112867), _colorNames.RED))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1.5, 1.5, 3), new Quaternion(0, 0.3826834323650897, 0, 0.9238795325112867), _colorNames.YELLOW))  // model: models/yellowwall.glb
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1.5, 4.5, 3), new Quaternion(0, 0.3826834323650897, 0, 0.9238795325112867), _colorNames.YELLOW))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1.5, 7.5, 3), new Quaternion(0, 0.3826834323650897, 0, 0.9238795325112867), _colorNames.YELLOW))


        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(2, 1.5, 16), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.BLACK))  // model: models/blackwall.glb
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(2, 4.5, 16), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.BLACK))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(2, 7, 16), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.BLACK))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(29.5, 1.5, 1), new Quaternion(0, -0.38268343236508984, 0, 0.9238795325112868), _colorNames.BLACK))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(29.5, 4.5, 1), new Quaternion(0, -0.38268343236508984, 0, 0.9238795325112868), _colorNames.BLACK))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(29.5, 7.5, 1), new Quaternion(0, -0.38268343236508984, 0, 0.9238795325112868), _colorNames.BLACK))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(29.5, 10.5, 1), new Quaternion(0, -0.38268343236508984, 0, 0.9238795325112868), _colorNames.BLACK))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(17.5, 1.5, 1), new Quaternion(0, -2.7755575615628914e-17, 0, 1), _colorNames.BLACK))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(5.5, 1.5, 1), new Quaternion(0, -2.7755575615628914e-17, 0, 1), _colorNames.BLACK))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(5.5, 2.5, 10), new Quaternion(0, -0.38268343236508984, 0, 0.9238795325112868), _colorNames.BLACK))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(5.5, 5.5, 10), new Quaternion(0, -0.38268343236508984, 0, 0.9238795325112868), _colorNames.BLACK))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(5.5, 8.5, 10), new Quaternion(0, -0.38268343236508984, 0, 0.9238795325112868), _colorNames.BLACK))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16.5, 7, 15.5), new Quaternion(0, -0.38268343236508984, 0, 0.9238795325112868), _colorNames.BLACK))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16.5, 10, 15.5), new Quaternion(0, -0.38268343236508984, 0, 0.9238795325112868), _colorNames.BLACK))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16.5, 13, 15.5), new Quaternion(0, -0.38268343236508984, 0, 0.9238795325112868), _colorNames.BLACK))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31, 1.5, 10), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.BLACK))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31, 4.5, 10), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.BLACK))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31, 7.5, 10), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.BLACK))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31, 10.5, 10), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.BLACK))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31.5, 1.5, 25.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.BLACK))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31.5, 4.5, 25.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.BLACK))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31.5, 7.5, 25.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.BLACK))

        

}
