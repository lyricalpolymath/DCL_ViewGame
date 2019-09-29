import utils from "../../node_modules/decentraland-ecs-utils/index"
import { Wall } from "./wall"
import { Level } from "./level"
import { _colorNames } from "../gameSettings"

// TODO - some of the levels have a SPECIAL COLOR   NEON_WHITE, NEON_RED, NEON_TURQUOISE, NEON_PURPLE

    // BB added entieties
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
        
        const terrain_level5 = new Entity()
        terrain_level5.setParent(level)
        const gltfShape_2 = new GLTFShape('models/terrain_level5.glb')
        terrain_level5.addComponentOrReplace(gltfShape_2)
        const transform_6 = new Transform({
          position: new Vector3(16, 0.04900266164462419, 16),
          rotation: new Quaternion(0, 0, 0, 1),
          scale: new Vector3(1, 1, 1)
        })
        terrain_level5.addComponentOrReplace(transform_6)
        engine.addEntity(terrain_level5)
        
        const abstractball1 = new Entity()
        abstractball1.setParent(level)
        const gltfShape_3 = new GLTFShape('models/abstractball1.glb')
        abstractball1.addComponentOrReplace(gltfShape_3)
        const transform_7 = new Transform({
          position: new Vector3(26, 7, 24),
          rotation: new Quaternion(0, 0, 0, 1),
          scale: new Vector3(1, 1, 1)
        })
        abstractball1.addComponentOrReplace(transform_7)
        engine.addEntity(abstractball1)
        
        const abstractball2 = new Entity()
        abstractball2.setParent(level)
        const gltfShape_4 = new GLTFShape('models/abstractball2.glb')
        abstractball2.addComponentOrReplace(gltfShape_4)
        const transform_8 = new Transform({
          position: new Vector3(26, 7, 11.5),
          rotation: new Quaternion(0, 0, 0, 1),
          scale: new Vector3(1, 1, 1)
        })
        abstractball2.addComponentOrReplace(transform_8)
        engine.addEntity(abstractball2)
        
        const abstractball3 = new Entity()
        abstractball3.setParent(level)
        const gltfShape_5 = new GLTFShape('models/abstractball3.glb')
        abstractball3.addComponentOrReplace(gltfShape_5)
        const transform_9 = new Transform({
          position: new Vector3(14, 3, 16),
          rotation: new Quaternion(0, 0, 0, 1),
          scale: new Vector3(1, 1, 1)
        })
        abstractball3.addComponentOrReplace(transform_9)
        engine.addEntity(abstractball3)
        
        const abstractball4 = new Entity()
        abstractball4.setParent(level)
        const gltfShape_6 = new GLTFShape('models/abstractball4.glb')
        abstractball4.addComponentOrReplace(gltfShape_6)
        const transform_10 = new Transform({
          position: new Vector3(27.5, 4.5, 7.5),
          rotation: new Quaternion(0, 0, 0, 1),
          scale: new Vector3(1, 1, 1)
        })
        abstractball4.addComponentOrReplace(transform_10)
        engine.addEntity(abstractball4)
        
        const abstractball5 = new Entity()
        abstractball5.setParent(level)
        const gltfShape_7 = new GLTFShape('models/abstractball5.glb')
        abstractball5.addComponentOrReplace(gltfShape_7)
        const transform_11 = new Transform({
          position: new Vector3(24, 10, 13.5),
          rotation: new Quaternion(0, 0, 0, 1),
          scale: new Vector3(1, 1, 1)
        })
        abstractball5.addComponentOrReplace(transform_11)
        engine.addEntity(abstractball5)
        
        const abstractball6 = new Entity()
        abstractball6.setParent(level)
        const gltfShape_8 = new GLTFShape('models/abstractball6.glb')
        abstractball6.addComponentOrReplace(gltfShape_8)
        const transform_12 = new Transform({
          position: new Vector3(14.5, 13.5, 16),
          rotation: new Quaternion(0, 0, 0, 1),
          scale: new Vector3(1, 1, 1)
        })
        abstractball6.addComponentOrReplace(transform_12)
        engine.addEntity(abstractball6)
        
        const abstractball7 = new Entity()
        abstractball7.setParent(level)
        const gltfShape_9 = new GLTFShape('models/abstractball7.glb')
        abstractball7.addComponentOrReplace(gltfShape_9)
        const transform_13 = new Transform({
          position: new Vector3(14.5, 8.5, 16),
          rotation: new Quaternion(0, 0, 0, 1),
          scale: new Vector3(1, 1, 1)
        })
        abstractball7.addComponentOrReplace(transform_13)
        engine.addEntity(abstractball7)
        
        const abstractball8 = new Entity()
        abstractball8.setParent(level)
        const gltfShape_10 = new GLTFShape('models/abstractball8.glb')
        abstractball8.addComponentOrReplace(gltfShape_10)
        const transform_14 = new Transform({
          position: new Vector3(27.5, 2.5, 4),
          rotation: new Quaternion(0, 0, 0, 1),
          scale: new Vector3(1, 1, 1)
        })
        abstractball8.addComponentOrReplace(transform_14)
        engine.addEntity(abstractball8)
        
        const abstractball1_2 = new Entity()
        abstractball1_2.setParent(level)
        const gltfShape_11 = new GLTFShape('models/abstractball1.2.glb')
        abstractball1_2.addComponentOrReplace(gltfShape_11)
        const transform_15 = new Transform({
          position: new Vector3(5.5, 4, 21),
          rotation: new Quaternion(0, 0, 0, 1),
          scale: new Vector3(1, 1, 1)
        })
        abstractball1_2.addComponentOrReplace(transform_15)
        engine.addEntity(abstractball1_2)
        
        const abstractball2_2 = new Entity()
        abstractball2_2.setParent(level)
        const gltfShape_12 = new GLTFShape('models/abstractball2.2.glb')
        abstractball2_2.addComponentOrReplace(gltfShape_12)
        const transform_16 = new Transform({
          position: new Vector3(3, 3, 16),
          rotation: new Quaternion(0, 0, 0, 1),
          scale: new Vector3(1, 1, 1)
        })
        abstractball2_2.addComponentOrReplace(transform_16)
        engine.addEntity(abstractball2_2)
        
        const abstractball3_2 = new Entity()
        abstractball3_2.setParent(level)
        const gltfShape_13 = new GLTFShape('models/abstractball3.2.glb')
        abstractball3_2.addComponentOrReplace(gltfShape_13)
        const transform_17 = new Transform({
          position: new Vector3(8.5, 5.5, 25),
          rotation: new Quaternion(0, 0, 0, 1),
          scale: new Vector3(1, 1, 1)
        })
        abstractball3_2.addComponentOrReplace(transform_17)
        engine.addEntity(abstractball3_2)
        
        const abstractball4_2 = new Entity()
        abstractball4_2.setParent(level)
        const gltfShape_14 = new GLTFShape('models/abstractball4.2.glb')
        abstractball4_2.addComponentOrReplace(gltfShape_14)
        const transform_18 = new Transform({
          position: new Vector3(13, 8.5, 25),
          rotation: new Quaternion(0, 0, 0, 1),
          scale: new Vector3(1, 1, 1)
        })
        abstractball4_2.addComponentOrReplace(transform_18)
        engine.addEntity(abstractball4_2)
        
        const abstractball6_2 = new Entity()
        abstractball6_2.setParent(level)
        const gltfShape_15 = new GLTFShape('models/abstractball6.2.glb')
        abstractball6_2.addComponentOrReplace(gltfShape_15)
        const transform_19 = new Transform({
          position: new Vector3(17, 11, 23.5),
          rotation: new Quaternion(0, 0, 0, 1),
          scale: new Vector3(1, 1, 1)
        })
        abstractball6_2.addComponentOrReplace(transform_19)
        engine.addEntity(abstractball6_2)
        
        const abstractball7_2 = new Entity()
        abstractball7_2.setParent(level)
        const gltfShape_16 = new GLTFShape('models/abstractball7.2.glb')
        abstractball7_2.addComponentOrReplace(gltfShape_16)
        const transform_20 = new Transform({
          position: new Vector3(20, 12.5, 21),
          rotation: new Quaternion(0, 0, 0, 1),
          scale: new Vector3(1, 1, 1)
        })
        abstractball7_2.addComponentOrReplace(transform_20)
        engine.addEntity(abstractball7_2)
        
        const abstractball8_2 = new Entity()
        abstractball8_2.setParent(level)
        const gltfShape_17 = new GLTFShape('models/abstractball8.2.glb')
        abstractball8_2.addComponentOrReplace(gltfShape_17)
        const transform_21 = new Transform({
          position: new Vector3(20, 14, 16),
          rotation: new Quaternion(0, 0, 0, 1),
          scale: new Vector3(1, 1, 1)
        })
        abstractball8_2.addComponentOrReplace(transform_21)
        engine.addEntity(abstractball8_2)


      
    }

    export function createLevel(level:Level)
    {
        // example // level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26.5, 1.5030281017900293, 29.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 1.5, 13.5), new Quaternion(0, 0, 0, 1), _colorNames.NEON_WHITE))  // model: models/neonwall-white.glb
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 1.5, 2), new Quaternion(0, 0, 0, 1), _colorNames.NEON_WHITE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(10.5, 1.5, 2), new Quaternion(0, 0, 0, 1), _colorNames.NEON_WHITE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(5, 1.5, 2), new Quaternion(0, 0, 0, 1), _colorNames.NEON_WHITE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(5, 1.5, 18.5), new Quaternion(0, 0, 0, 1), _colorNames.NEON_WHITE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 1.5, 28.5), new Quaternion(0, 0, 0, 1), _colorNames.NEON_WHITE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(29, 1.5, 28.5), new Quaternion(0, 0, 0, 1), _colorNames.NEON_WHITE))
            
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(30, 1.5, 25), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.NEON_RED))  // model: models/neonwall-red.glb
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(30, 1.5, 21), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.NEON_RED))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(30, 1.5, 17.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.NEON_RED))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(30, 1.5, 14.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.NEON_RED))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(30, 1.5, 11.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.NEON_RED))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(27, 1.5, 11.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.NEON_RED))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(27, 1.5, 14.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.NEON_RED))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(27, 1.5, 17.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.NEON_RED))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(27, 1.5, 20.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.NEON_RED))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(27, 1.5, 23.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.NEON_RED))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(27, 1.5, 26.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.NEON_RED))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(24.5, 1.5, 29), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.NEON_RED))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(24.5, 1.5, 25.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.NEON_RED))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(24.5, 1.5, 22.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.NEON_RED))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(24.5, 1.5, 19.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.NEON_RED))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(24.5, 1.5, 16.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.NEON_RED))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(24.5, 1.5, 13.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.NEON_RED))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(24.5, 1.5, 10.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.NEON_RED))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(24.5, 1.5, 7.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.NEON_RED))
            
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 1.5, 27.5), new Quaternion(0, 0, 0, 1), _colorNames.NEON_TURQUOISE))  // model: models/neonwall-turquoise.glb
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 1.5, 26), new Quaternion(0, 0, 0, 1), _colorNames.NEON_TURQUOISE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 1.5, 24.5), new Quaternion(0, 0, 0, 1), _colorNames.NEON_TURQUOISE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 1.5, 22.5), new Quaternion(0, 0, 0, 1), _colorNames.NEON_TURQUOISE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 1.5, 20.5), new Quaternion(0, 0, 0, 1), _colorNames.NEON_TURQUOISE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 1.5, 18.5), new Quaternion(0, 0, 0, 1), _colorNames.NEON_TURQUOISE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 1.5, 16), new Quaternion(0, 0, 0, 1), _colorNames.NEON_TURQUOISE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(17, 1.5, 4), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.NEON_TURQUOISE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(14.5, 1.5, 4), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.NEON_TURQUOISE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(12, 1.5, 4), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.NEON_TURQUOISE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(9.5, 1.5, 4), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.NEON_TURQUOISE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(7, 1.5, 4), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.NEON_TURQUOISE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4.5, 1.5, 4), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.NEON_TURQUOISE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4.5, 1.5, 6.5), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.NEON_TURQUOISE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(7, 1.5, 6.5), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.NEON_TURQUOISE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(9.5, 1.5, 6.5), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.NEON_TURQUOISE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(12, 1.5, 6.5), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.NEON_TURQUOISE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(14.5, 1.5, 6.5), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.NEON_TURQUOISE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(17, 1.5, 6.5), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.NEON_TURQUOISE))
            
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1.5, 1.5, 30), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.NEON_PURPLE))  // model: models/neonwall-purple.glb
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(2.5, 1.5, 30), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.NEON_PURPLE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(3.5, 1.5, 30), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.NEON_PURPLE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4.5, 1.5, 30), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.NEON_PURPLE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(5.5, 1.5, 30), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.NEON_PURPLE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(6.5, 1.5, 30), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.NEON_PURPLE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(7.5, 1.5, 30), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.NEON_PURPLE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(8.5, 1.5, 30), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.NEON_PURPLE))
                
            
    }
