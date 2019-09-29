import utils from "../../node_modules/decentraland-ecs-utils/index"
import { Wall } from "./wall"
import { Level } from "./level"
import { _colorNames } from "../gameSettings"

    export function createScene(level:Level)
    {

      /*
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
        
        const floorBaseGrass_01_2 = new Entity()
        floorBaseGrass_01_2.setParent(level)
        floorBaseGrass_01_2.addComponentOrReplace(gltfShape)
        const transform_3 = new Transform({
          position: new Vector3(24, 0, 8),
          rotation: new Quaternion(0, 0, 0, 1),
          scale: new Vector3(1, 1, 1)
        })
        floorBaseGrass_01_2.addComponentOrReplace(transform_3)
        
        const floorBaseGrass_01_3 = new Entity()
        floorBaseGrass_01_3.setParent(level)
        floorBaseGrass_01_3.addComponentOrReplace(gltfShape)
        const transform_4 = new Transform({
          position: new Vector3(8, 0, 24),
          rotation: new Quaternion(0, 0, 0, 1),
          scale: new Vector3(1, 1, 1)
        })
        floorBaseGrass_01_3.addComponentOrReplace(transform_4)
        
        const floorBaseGrass_01_4 = new Entity()
        floorBaseGrass_01_4.setParent(level)
        floorBaseGrass_01_4.addComponentOrReplace(gltfShape)
        const transform_5 = new Transform({
          position: new Vector3(24, 0, 24),
          rotation: new Quaternion(0, 0, 0, 1),
          scale: new Vector3(1, 1, 1)
        })
        floorBaseGrass_01_4.addComponentOrReplace(transform_5)

        */

       const blueGlasses = new Entity()
       blueGlasses.addComponentOrReplace(new GLTFShape('models/blueglasses.glb'))
       blueGlasses.setParent(level)
       blueGlasses.addComponentOrReplace(new Transform({
         position: new Vector3(16,1.5,16),
         scale: new Vector3(2,2,2)
       }))

        //const lvl1 = new Entity()
        //lvl1.addComponentOrReplace(new GLTFShape('models/level1_v3.glb'))
        //lvl1.setParent(level)
      
    }

    export function createWalls(level:Level)
    {

      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4,1.5,4), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))

      

      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(29, 1.5, 21.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(29, 1.5, 21.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(17.46390046262978, 1.581462796781092, 16), new Quaternion(0, 0.3826834323650897, 0, 0.9238795325112867),_colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length,  new Vector3(25, 1.5, 14), new Quaternion(0, 0.3826834323650897, 0, 0.9238795325112867),_colorNames.BLUE))
        
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(21, 1.5, 14), new Quaternion(0, 1.3877787807814457e-17, 0, 1.0000000000000002),_colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(18.5, 1.5, 12.5),  new Quaternion(0, 1.3877787807814457e-17, 0, 1.0000000000000002),_colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length,  new Vector3(16, 1.5, 11), new Quaternion(0, 1.3877787807814457e-17, 0, 1.0000000000000002),_colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length,   new Vector3(13.5, 1.5, 9), new Quaternion(0, 1.3877787807814457e-17, 0, 1.0000000000000002),_colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length,   new Vector3(4.5, 1.5, 25), new Quaternion(0, 1.3877787807814457e-17, 0, 1.0000000000000002),_colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(6.5, 1.5, 21.5), new Quaternion(0, 1.3877787807814457e-17, 0, 1.0000000000000002),_colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length,   new Vector3(9.5, 1.5, 21.5), new Quaternion(0, 0.3826834323650897, 0, 0.9238795325112867),_colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length,  new Vector3(9.5, 1.5, 18.5), new Quaternion(0, 0.3826834323650897, 0, 0.9238795325112867),_colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length,  new Vector3(7, 1.5, 18),new Quaternion(0, 1.3877787807814457e-17, 0, 1.0000000000000002),_colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length,  new Vector3(2, 1.5, 12), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),_colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(2, 1.5, 9.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),_colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length,  new Vector3(2, 1.5, 7), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),_colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length,  new Vector3(2, 1.5, 4.5),new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),_colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length,  new Vector3(5.5, 1.5, 4.5),  new Quaternion(0, -0.2902846772544623, 0, 0.9569403357322088),_colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(8.5, 1.5, 4.5),new Quaternion(0, -0.2902846772544623, 0, 0.9569403357322088),_colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length,    new Vector3(24, 1.5, 6.5),new Quaternion(0, -0.2902846772544623, 0, 0.9569403357322088),_colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(11, 1.5, 6.5),new Quaternion(0, -0.2902846772544623, 0, 0.9569403357322088),_colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length,   new Vector3(21.5, 1.5, 8.5), new Quaternion(0, -0.2902846772544623, 0, 0.9569403357322088),_colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length,  new Vector3(21.5, 1.5, 11), new Quaternion(0, -0.2902846772544623, 0, 0.9569403357322088),_colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length,   new Vector3(21, 1.5, 18), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),_colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length,  new Vector3(12.5, 1.5, 21.5),new Quaternion(0, 0.3826834323650897, 0, 0.9238795325112867),_colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16.5, 1.5, 21.5), new Quaternion(0, 0.9999999999999996, 0, 2.7755575615628914e-17),_colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length,  new Vector3(21.5, 1.5, 22.5), new Quaternion(0, 0.9999999999999996, 0, 2.7755575615628914e-17),_colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length,  new Vector3(21.5, 1.5, 26), new Quaternion(0, 0.9999999999999996, 0, 2.7755575615628914e-17),_colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length,  new Vector3(16.5, 1.5, 24.5),new Quaternion(0, 0.9999999999999996, 0, 2.7755575615628914e-17),_colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length,  new Vector3(24, 1.5, 3.5),new Quaternion(0, -0.2902846772544623, 0, 0.9569403357322088),_colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length,  new Vector3(9.5, 1.5, 28),new Quaternion(0, 0.3826834323650897, 0, 0.9238795325112867),_colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(14.5, 1.5, 29.5), new Quaternion(0, 0.3826834323650897, 0, 0.9238795325112867),_colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length,  new Vector3(28, 1.5, 27.5), new Quaternion(0, 0.3826834323650897, 0, 0.9238795325112867),_colorNames.BLUE))
      


}
