import utils from "../../node_modules/decentraland-ecs-utils/index"
import { TriggerComponent, TriggerBoxShape } from "../../node_modules/decentraland-ecs-utils/triggers/triggerSystem"
import { Wall } from "./wall"
import { Level } from "./level"
import { _colorNames } from "../functions"
import * as Globals from "../functions"


// TODO - some of the levels have a SPECIAL COLOR   NEON_WHITE, NEON_RED, TURQUOISE, NEON_PURPLE

    // BB added entieties
    export function createScene(level:Level)
    {

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
      
      const abstractball2 = new Entity()
      abstractball2.setParent(level)
      const gltfShape_3 = new GLTFShape('models/abstractball2.glb')
      abstractball2.addComponentOrReplace(gltfShape_3)
      const transform_7 = new Transform({
        position: new Vector3(23, 6, 14.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(2, 2, 2)
      })
      abstractball2.addComponentOrReplace(transform_7)
      engine.addEntity(abstractball2)
      
      const abstractball4 = new Entity()
      abstractball4.setParent(level)
      const gltfShape_4 = new GLTFShape('models/abstractball4.glb')
      abstractball4.addComponentOrReplace(gltfShape_4)
      const transform_8 = new Transform({
        position: new Vector3(3.5, 4.5, 7.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      abstractball4.addComponentOrReplace(transform_8)
      engine.addEntity(abstractball4)
      
      const abstractball6 = new Entity()
      abstractball6.setParent(level)
      const gltfShape_5 = new GLTFShape('models/abstractball6.glb')
      abstractball6.addComponentOrReplace(gltfShape_5)
      const transform_9 = new Transform({
        position: new Vector3(6, 2, 25.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      abstractball6.addComponentOrReplace(transform_9)
      engine.addEntity(abstractball6)
      
      const microscope = new Entity()
      microscope.setParent(level)
      const gltfShape_27 = new GLTFShape('models/microscope.glb')
      microscope.addComponentOrReplace(gltfShape_27)
      const transform_153 = new Transform({
        position: new Vector3(8.36349826848933, 1, 5.458125645081954),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      microscope.addComponentOrReplace(transform_153)

      microscope.addComponentOrReplace(new OnClick(e=>{
        let dist = Globals.distance(microscope.getComponent(Transform).position, Globals.camera.position)
        if ( dist < 2)
         {
            engine.removeEntity(microscope)
            const portal = new Entity()
            portal.addComponentOrReplace(Globals.portal)
            portal.addComponentOrReplace(new Transform({
              position: new Vector3(25,1.5,3),
              rotation:Quaternion.Euler(0,90,0),
              scale: Vector3.One()
            }))
            portal.setParent(level)
            engine.addEntity(portal)
            portal.addComponentOrReplace(new Animator())

            for(var i = 0; i <= 27; i++)
            {
              log("adding clip")
              portal.getComponent(Animator).addClip(new AnimationState("Polygon_"+i+"|CINEMA_4D_Main|Layer0"))
              log("playing clip")
              portal.getComponent(Animator).getClip("Polygon_"+i+"|CINEMA_4D_Main|Layer0").play()
            }

            for(var i = 1; i <= 27; i++)
            {
              log("adding clip")
              portal.getComponent(Animator).addClip(new AnimationState(("Polygon_"+i+"_2|CINEMA_4D_Main|Layer0")))
              log("playing clip")
              portal.getComponent(Animator).getClip(("Polygon_"+i+"_2|CINEMA_4D_Main|Layer0")).play()
            }
            portal.addComponentOrReplace(new TriggerComponent(new TriggerBoxShape(Vector3.One(),Vector3.Zero()),
            0,null,null,null,()=>{
              portal.removeComponent(TriggerComponent)
              level.events.fireEvent(new Globals.DoTransition())
            },()=>{},false))

            level.events.fireEvent(new Globals.LevelCompleted(level.sceneLevel))
        }
      }))
      engine.addEntity(microscope)

    }

    export function createWalls(level:Level)
    {
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 1.5, 13.5), new Quaternion(0, 0, 0, 1), _colorNames.WHITE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 1.5, 2), new Quaternion(0, 0, 0, 1), _colorNames.WHITE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(10.5, 1.5, 2), new Quaternion(0, 0, 0, 1), _colorNames.WHITE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(5, 1.5, 2), new Quaternion(0, 0, 0, 1), _colorNames.WHITE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(5, 1.5, 18.5), new Quaternion(0, 0, 0, 1), _colorNames.WHITE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 1.5, 28.5), new Quaternion(0, 0, 0, 1), _colorNames.WHITE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(29, 1.5, 28.5), new Quaternion(0, 0, 0, 1), _colorNames.WHITE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(30, 1.5, 25), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.RED))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(30, 1.5, 21), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.RED))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(30, 1.5, 17.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.RED))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(30, 1.5, 14.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.RED))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(30, 1.5, 11.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.RED))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(27, 1.5, 11.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.RED))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(27, 1.5, 14.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.RED))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(27, 1.5, 17.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.RED))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(27, 1.5, 20.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.RED))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(27, 1.5, 23.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.RED))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(27, 1.5, 26.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.RED))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(24.5, 1.5, 29), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.RED))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(24.5, 1.5, 25.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.RED))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(24.5, 1.5, 22.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.RED))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(24.5, 1.5, 19.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.RED))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(24.5, 1.5, 16.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.RED))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(24.5, 1.5, 13.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.RED))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(24.5, 1.5, 10.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.RED))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(24.5, 1.5, 7.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.RED))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 1.5, 27.5), new Quaternion(0, 0, 0, 1), _colorNames.TURQUOISE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 1.5, 26), new Quaternion(0, 0, 0, 1), _colorNames.TURQUOISE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 1.5, 24.5), new Quaternion(0, 0, 0, 1), _colorNames.TURQUOISE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 1.5, 22.5), new Quaternion(0, 0, 0, 1), _colorNames.TURQUOISE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 1.5, 20.5), new Quaternion(0, 0, 0, 1), _colorNames.TURQUOISE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 1.5, 18.5), new Quaternion(0, 0, 0, 1), _colorNames.TURQUOISE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 1.5, 17), new Quaternion(0, 0, 0, 1), _colorNames.TURQUOISE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(17, 1.5, 4), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.TURQUOISE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(14.5, 1.5, 4), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.TURQUOISE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(12, 1.5, 4), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.TURQUOISE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(9.5, 1.5, 4), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.TURQUOISE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(7, 1.5, 4), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.TURQUOISE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4.5, 1.5, 4), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.TURQUOISE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4.5, 1.5, 6.5), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.TURQUOISE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(7, 1.5, 6.5), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.TURQUOISE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(9.5, 1.5, 6.5), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.TURQUOISE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(12, 1.5, 6.5), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.TURQUOISE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(14.5, 1.5, 6.5), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.TURQUOISE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(17, 1.5, 6.5), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.TURQUOISE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1.5, 1.5, 30), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.PURPLE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(2.5, 1.5, 30), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.PURPLE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(3.5, 1.5, 30), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.PURPLE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4.5, 1.5, 30), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.PURPLE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(5.5, 1.5, 30), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.PURPLE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(6.5, 1.5, 30), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.PURPLE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(7.5, 1.5, 30), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.PURPLE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(8.5, 1.5, 30), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.PURPLE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(19, 1.5, 18), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16.5, 1.5, 19.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16.5, 1.5, 21.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16.5, 1.5, 23.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16.5, 1.5, 25.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16.5, 1.5, 26.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16.5, 1.5, 29.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(23.5, 1.5, 29.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(23.5, 1.5, 23.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(21.5, 1.5, 23.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(23.5, 1.5, 20.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(23.5, 1.5, 9.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(23.5, 1.5, 6.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(29, 1.5, 10.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26, 1.5, 10.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26, 1.5, 6.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(28.5, 1.5, 6.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 1.5, 8), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.YELLOW))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(13, 1.5, 6.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.YELLOW))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(10.5, 1.5, 5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.YELLOW))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(8, 1.5, 11), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.YELLOW))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(8, 1.5, 18.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.YELLOW))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(8, 1.5, 22.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.YELLOW))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(2.5, 1.5, 22.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.YELLOW))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4, 1.5, 30), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.YELLOW))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(6, 1.5, 30), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.YELLOW))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(8, 1.5, 30), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.YELLOW))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(9, 1.5, 30), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.YELLOW))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(25.5, 1.5, 30), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.YELLOW))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(25.5, 1.5, 25), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.YELLOW))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(25.5, 1.5, 21.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.YELLOW))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(25.5, 1.5, 18), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.YELLOW))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(25.5, 1.5, 14), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.YELLOW))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(28.5, 1.5, 14), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.YELLOW))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(28.5, 1.5, 17.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.YELLOW))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(28.5, 1.5, 21), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.YELLOW))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(28.5, 1.5, 24.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.YELLOW))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(11.5, 1.5, 24.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.YELLOW))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(20.5, 1.5, 17), new Quaternion(0, 0, 0, 1), _colorNames.WHITE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(20.5, 1.5, 9.5), new Quaternion(0, 0, 0, 1), _colorNames.WHITE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26.5, 1.5, 8), new Quaternion(0, 0, 0, 1), _colorNames.WHITE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(19.5, 1.5, 8), new Quaternion(0, 0, 0, 1), _colorNames.WHITE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(11.5, 1.5, 8), new Quaternion(0, 0, 0, 1), _colorNames.WHITE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(2.5, 1.5, 8), new Quaternion(0, 0, 0, 1), _colorNames.WHITE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(2.5, 1.5, 3.5), new Quaternion(0, 0, 0, 1), _colorNames.WHITE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(2.5, 1.5, 12.5), new Quaternion(0, 0, 0, 1), _colorNames.WHITE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(2.5, 1.5, 21.5), new Quaternion(0, 0, 0, 1), _colorNames.WHITE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(11, 1.5, 21.5), new Quaternion(0, 0, 0, 1), _colorNames.WHITE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(11, 1.5, 26), new Quaternion(0, 0, 0, 1), _colorNames.WHITE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(6.5, 1.5, 15.5), new Quaternion(0, 0, 0, 1), _colorNames.WHITE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(5, 1.5, 10), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.WHITE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(13, 1.5, 10), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.WHITE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(23, 1.5, 2), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.WHITE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(22, 1.5, 11), new Quaternion(0, 0, 0, 1), _colorNames.GREEN))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(19.5, 1.5, 11), new Quaternion(0, 0, 0, 1), _colorNames.GREEN))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 1.5, 11), new Quaternion(0, 0, 0, 1), _colorNames.GREEN))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(12, 1.5, 12.5), new Quaternion(0, 0, 0, 1), _colorNames.GREEN))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(12, 1.5, 20.5), new Quaternion(0, 0, 0, 1), _colorNames.GREEN))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(21.5, 1.5, 20.5), new Quaternion(0, 0, 0, 1), _colorNames.GREEN))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(22.5, 1.5, 22.5), new Quaternion(0, 0, 0, 1), _colorNames.GREEN))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(22.5, 1.5, 28.5), new Quaternion(0, 0, 0, 1), _colorNames.GREEN))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(19, 1.5, 26), new Quaternion(0, 0, 0, 1), _colorNames.GREEN))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31, 1.5, 26), new Quaternion(0, 0, 0, 1), _colorNames.GREEN))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31, 1.5, 22), new Quaternion(0, 0, 0, 1), _colorNames.GREEN))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31, 1.5, 18.5), new Quaternion(0, 0, 0, 1), _colorNames.GREEN))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(9, 1.5, 18.5), new Quaternion(0, 0, 0, 1), _colorNames.GREEN))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(20, 1.5, 15.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(20, 1.5, 7), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(8.5, 1.5, 5.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(8.5, 1.5, 17.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(8.5, 1.5, 28), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(2.5, 1.5, 28), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(2.5, 1.5, 19.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(12.5, 1.5, 19.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.BLUE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(12.5, 1.5, 27.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.BLUE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(20.5, 1.5, 27.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.BLUE))
        
                
    }