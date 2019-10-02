import utils from "../../node_modules/decentraland-ecs-utils/index"
import { Wall } from "./wall"
import { Level } from "./level"
import * as Globals from "../functions"
import { _colorNames } from "../functions"
import { TriggerComponent, TriggerBoxShape } from "../../node_modules/decentraland-ecs-utils/triggers/triggerSystem"

    export function createScene(level:Level)
    {

       const blueGlasses = new Entity()
       blueGlasses.addComponentOrReplace(new GLTFShape('models/blueglasses.glb'))
       blueGlasses.setParent(level)
       blueGlasses.addComponentOrReplace(new Transform({
         position: new Vector3(16,1.5,16),
         scale: new Vector3(2,2,2)
       }))
       blueGlasses.addComponentOrReplace(new OnClick(e=>{
        let dist = Globals.distance(blueGlasses.getComponent(Transform).position, Globals.camera.position)
        if ( dist < 4)
         {
            engine.removeEntity(blueGlasses)
            var portal = new Entity()
            portal.addComponentOrReplace(Globals.portal)
            portal.addComponentOrReplace(new Transform({
              position: new Vector3(27,1.5,3),
              scale: Vector3.One()
            }))
            portal.setParent(level)
            engine.addEntity(portal)
            portal.addComponentOrReplace(new TriggerComponent(new TriggerBoxShape(Vector3.One(),Vector3.Zero()),
            0,null,null,null,()=>{
              portal.removeComponent(TriggerComponent)
              level.events.fireEvent(new Globals.DoTransition())
            },()=>{},false))

            level.events.fireEvent(new Globals.LevelCompleted(level.sceneLevel))
        }
      }))
      engine.addEntity(blueGlasses)

            /*
      portal.addComponentOrReplace(new Animator())
      for(var i = 0; i <= 27; i++)
      {
        log("adding clip")
        portal.getComponent(Animator).addClip(new AnimationState(("Polygon_"+i+"|CINEMA_4D_Main|Layer0_Polygon_"+i)))
        log("playing clip")
        portal.getComponent(Animator).getClip(("Polygon_"+i+"|CINEMA_4D_Main|Layer0_Polygon_"+i)).play()
      }
      for(var i = 2; i <= 27; i++)
      {
        log("adding clip")
        portal.getComponent(Animator).addClip(new AnimationState(("Polygon_0_"+i+"|CINEMA_4D_Main|Layer0_Polygon_"+i+"_2")))
        log("playing clip")
        portal.getComponent(Animator).getClip(("Polygon_0_"+i+"|CINEMA_4D_Main|Layer0_Polygon_"+i+"_2")).play()
      }
      */
       

        const lvl1 = new Entity()
        lvl1.addComponentOrReplace(new GLTFShape('models/level1_v3.glb'))
        lvl1.addComponentOrReplace(new Transform({
          position: new Vector3(15,0,15),
          scale: new Vector3(.99,.99,.99)
        }))
        lvl1.setParent(level)
        
      
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
