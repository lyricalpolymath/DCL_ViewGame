import utils from "../../node_modules/decentraland-ecs-utils/index"
import { TriggerComponent, TriggerBoxShape } from "../../node_modules/decentraland-ecs-utils/triggers/triggerSystem"

import { Wall } from "./wall"
import { Level } from "./level"
import { _colorNames } from "../functions"
import * as Globals from "../functions"


// TODO  some of the levels have a SPECIAL COLOR 

    //BB added entities 
    export function createScene(level:Level)
    {
      
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
      

      const ball = new Entity()
      ball.addComponentOrReplace(new GLTFShape('models/telescope.glb'))
      ball.setParent(level)
      ball.addComponentOrReplace(new Transform({
        position: new Vector3(16,9,16),
        scale: new Vector3(.4,.4,.4)
      }))
      ball.addComponentOrReplace(new OnClick(e=>{
        let dist = Globals.distance(ball.getComponent(Transform).position, Globals.camera.position)
        log(dist)
        if ( dist < 6)
         {
            engine.removeEntity(ball)
            const portal = new Entity()
            portal.addComponentOrReplace(Globals.portal)
            portal.addComponentOrReplace(new Transform({
              position: new Vector3(1,1.5,18),
              rotation: Quaternion.Euler(0,90,0),
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
      engine.addEntity(ball)



      const skull2 = new Entity()
      skull2.setParent(level)
      const gltfShape_3 = new GLTFShape('models/skull2.glb')
      skull2.addComponentOrReplace(gltfShape_3)
      const transform_7 = new Transform({
        position: new Vector3(5, 10.5, 4.5),
        rotation: new Quaternion(0, 0.2516326118485513, 0, 0.967822829165688),
        scale: new Vector3(0.5, 0.5, 0.5)
      })
      skull2.addComponentOrReplace(transform_7)
      engine.addEntity(skull2)
      
      const glowing_Stone_02 = new Entity()
      glowing_Stone_02.setParent(level)
      const gltfShape_4 = new GLTFShape('models/Glowing_Stone_02.glb')
      glowing_Stone_02.addComponentOrReplace(gltfShape_4)
      const transform_8 = new Transform({
        position: new Vector3(16, 7.5, 16),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_02.addComponentOrReplace(transform_8)
      engine.addEntity(glowing_Stone_02)
      
      const glowing_Stone_02_2 = new Entity()
      glowing_Stone_02_2.setParent(level)
      glowing_Stone_02_2.addComponentOrReplace(gltfShape_4)
      const transform_9 = new Transform({
        position: new Vector3(10.5, 5.5, 16),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_02_2.addComponentOrReplace(transform_9)
      engine.addEntity(glowing_Stone_02_2)
      
      const glowing_Stone_02_3 = new Entity()
      glowing_Stone_02_3.setParent(level)
      glowing_Stone_02_3.addComponentOrReplace(gltfShape_4)
      const transform_10 = new Transform({
        position: new Vector3(10.5, 4.54390604520066, 10),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_02_3.addComponentOrReplace(transform_10)
      engine.addEntity(glowing_Stone_02_3)
      
      const glowing_Stone_02_4 = new Entity()
      glowing_Stone_02_4.setParent(level)
      glowing_Stone_02_4.addComponentOrReplace(gltfShape_4)
      const transform_11 = new Transform({
        position: new Vector3(3.5, 5.5, 10),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_02_4.addComponentOrReplace(transform_11)
      engine.addEntity(glowing_Stone_02_4)
      
      const glowing_Stone_02_5 = new Entity()
      glowing_Stone_02_5.setParent(level)
      glowing_Stone_02_5.addComponentOrReplace(gltfShape_4)
      const transform_12 = new Transform({
        position: new Vector3(0.5, 4, 11.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_02_5.addComponentOrReplace(transform_12)
      engine.addEntity(glowing_Stone_02_5)
      
      const glowing_Stone_02_6 = new Entity()
      glowing_Stone_02_6.setParent(level)
      glowing_Stone_02_6.addComponentOrReplace(gltfShape_4)
      const transform_13 = new Transform({
        position: new Vector3(0.5, 4, 28.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_02_6.addComponentOrReplace(transform_13)
      engine.addEntity(glowing_Stone_02_6)
      
      const glowing_Stone_02_7 = new Entity()
      glowing_Stone_02_7.setParent(level)
      glowing_Stone_02_7.addComponentOrReplace(gltfShape_4)
      const transform_14 = new Transform({
        position: new Vector3(9, 4, 28.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_02_7.addComponentOrReplace(transform_14)
      engine.addEntity(glowing_Stone_02_7)
      
      const glowing_Stone_02_8 = new Entity()
      glowing_Stone_02_8.setParent(level)
      glowing_Stone_02_8.addComponentOrReplace(gltfShape_4)
      const transform_15 = new Transform({
        position: new Vector3(25, 9, 28.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_02_8.addComponentOrReplace(transform_15)
      engine.addEntity(glowing_Stone_02_8)
      
      const glowing_Stone_02_9 = new Entity()
      glowing_Stone_02_9.setParent(level)
      glowing_Stone_02_9.addComponentOrReplace(gltfShape_4)
      const transform_16 = new Transform({
        position: new Vector3(25, 3.5, 6.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_02_9.addComponentOrReplace(transform_16)
      engine.addEntity(glowing_Stone_02_9)
      
      const glowing_Stone_02_10 = new Entity()
      glowing_Stone_02_10.setParent(level)
      glowing_Stone_02_10.addComponentOrReplace(gltfShape_4)
      const transform_17 = new Transform({
        position: new Vector3(25, 3.5, 25),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_02_10.addComponentOrReplace(transform_17)
      engine.addEntity(glowing_Stone_02_10)
      
      const glowing_Stone_01 = new Entity()
      glowing_Stone_01.setParent(level)
      const gltfShape_5 = new GLTFShape('models/Glowing_Stone_01.glb')
      glowing_Stone_01.addComponentOrReplace(gltfShape_5)
      const transform_18 = new Transform({
        position: new Vector3(19.5, 8, 16),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_01.addComponentOrReplace(transform_18)
      engine.addEntity(glowing_Stone_01)
      
      const glowing_Stone_01_2 = new Entity()
      glowing_Stone_01_2.setParent(level)
      glowing_Stone_01_2.addComponentOrReplace(gltfShape_5)
      const transform_19 = new Transform({
        position: new Vector3(19.5, 8, 23),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_01_2.addComponentOrReplace(transform_19)
      engine.addEntity(glowing_Stone_01_2)
      
      const glowing_Stone_01_3 = new Entity()
      glowing_Stone_01_3.setParent(level)
      glowing_Stone_01_3.addComponentOrReplace(gltfShape_5)
      const transform_20 = new Transform({
        position: new Vector3(25, 8, 23),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_01_3.addComponentOrReplace(transform_20)
      engine.addEntity(glowing_Stone_01_3)
      
      const glowing_Stone_01_4 = new Entity()
      glowing_Stone_01_4.setParent(level)
      glowing_Stone_01_4.addComponentOrReplace(gltfShape_5)
      const transform_21 = new Transform({
        position: new Vector3(25, 8, 12.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_01_4.addComponentOrReplace(transform_21)
      engine.addEntity(glowing_Stone_01_4)
      
      const glowing_Stone_01_5 = new Entity()
      glowing_Stone_01_5.setParent(level)
      glowing_Stone_01_5.addComponentOrReplace(gltfShape_5)
      const transform_22 = new Transform({
        position: new Vector3(10, 8, 7),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_01_5.addComponentOrReplace(transform_22)
      engine.addEntity(glowing_Stone_01_5)
      
      const glowing_Stone_01_6 = new Entity()
      glowing_Stone_01_6.setParent(level)
      glowing_Stone_01_6.addComponentOrReplace(gltfShape_5)
      const transform_23 = new Transform({
        position: new Vector3(10, 8, 12.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_01_6.addComponentOrReplace(transform_23)
      engine.addEntity(glowing_Stone_01_6)
      
      const glowing_Stone_01_7 = new Entity()
      glowing_Stone_01_7.setParent(level)
      glowing_Stone_01_7.addComponentOrReplace(gltfShape_5)
      const transform_24 = new Transform({
        position: new Vector3(12.5, 5.5, 21.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_01_7.addComponentOrReplace(transform_24)
      engine.addEntity(glowing_Stone_01_7)
      
      const glowing_Stone_01_8 = new Entity()
      glowing_Stone_01_8.setParent(level)
      glowing_Stone_01_8.addComponentOrReplace(gltfShape_5)
      const transform_25 = new Transform({
        position: new Vector3(6, 5, 21.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_01_8.addComponentOrReplace(transform_25)
      engine.addEntity(glowing_Stone_01_8)
      
      const glowing_Stone_01_9 = new Entity()
      glowing_Stone_01_9.setParent(level)
      glowing_Stone_01_9.addComponentOrReplace(gltfShape_5)
      const transform_26 = new Transform({
        position: new Vector3(29.5, 5, 29),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_01_9.addComponentOrReplace(transform_26)
      engine.addEntity(glowing_Stone_01_9)
      
      const glowing_Stone_01_10 = new Entity()
      glowing_Stone_01_10.setParent(level)
      glowing_Stone_01_10.addComponentOrReplace(gltfShape_5)
      const transform_27 = new Transform({
        position: new Vector3(15.5, 5, 20),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_01_10.addComponentOrReplace(transform_27)
      engine.addEntity(glowing_Stone_01_10)
      
      const glowing_Stone_01_11 = new Entity()
      glowing_Stone_01_11.setParent(level)
      glowing_Stone_01_11.addComponentOrReplace(gltfShape_5)
      const transform_28 = new Transform({
        position: new Vector3(15.5, 5, 8),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_01_11.addComponentOrReplace(transform_28)
      engine.addEntity(glowing_Stone_01_11)
      
      const glowing_Stone_04 = new Entity()
      glowing_Stone_04.setParent(level)
      const gltfShape_6 = new GLTFShape('models/Glowing_Stone_04.glb')
      glowing_Stone_04.addComponentOrReplace(gltfShape_6)
      const transform_29 = new Transform({
        position: new Vector3(16, 7, 11.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_04.addComponentOrReplace(transform_29)
      engine.addEntity(glowing_Stone_04)
      
      const glowing_Stone_04_2 = new Entity()
      glowing_Stone_04_2.setParent(level)
      glowing_Stone_04_2.addComponentOrReplace(gltfShape_6)
      const transform_30 = new Transform({
        position: new Vector3(31.5, 7, 11.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_04_2.addComponentOrReplace(transform_30)
      engine.addEntity(glowing_Stone_04_2)
      
      const glowing_Stone_04_3 = new Entity()
      glowing_Stone_04_3.setParent(level)
      glowing_Stone_04_3.addComponentOrReplace(gltfShape_6)
      const transform_31 = new Transform({
        position: new Vector3(31.5, 7, 2),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_04_3.addComponentOrReplace(transform_31)
      engine.addEntity(glowing_Stone_04_3)
      
      const glowing_Stone_04_4 = new Entity()
      glowing_Stone_04_4.setParent(level)
      glowing_Stone_04_4.addComponentOrReplace(gltfShape_6)
      const transform_32 = new Transform({
        position: new Vector3(24, 7, 2),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_04_4.addComponentOrReplace(transform_32)
      engine.addEntity(glowing_Stone_04_4)
      
      const glowing_Stone_04_5 = new Entity()
      glowing_Stone_04_5.setParent(level)
      glowing_Stone_04_5.addComponentOrReplace(gltfShape_6)
      const transform_33 = new Transform({
        position: new Vector3(24, 7, 20.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_04_5.addComponentOrReplace(transform_33)
      engine.addEntity(glowing_Stone_04_5)
      
      const glowing_Stone_04_6 = new Entity()
      glowing_Stone_04_6.setParent(level)
      glowing_Stone_04_6.addComponentOrReplace(gltfShape_6)
      const transform_34 = new Transform({
        position: new Vector3(32, 7, 20.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_04_6.addComponentOrReplace(transform_34)
      engine.addEntity(glowing_Stone_04_6)
      
      const glowing_Stone_04_7 = new Entity()
      glowing_Stone_04_7.setParent(level)
      glowing_Stone_04_7.addComponentOrReplace(gltfShape_6)
      const transform_35 = new Transform({
        position: new Vector3(7.5, 3, 20.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      glowing_Stone_04_7.addComponentOrReplace(transform_35)
      engine.addEntity(glowing_Stone_04_7)
      

      const skull7 = new Entity()
skull7.setParent(level)
const gltfShape_14 = new GLTFShape('models/skull7.glb')
skull7.addComponentOrReplace(gltfShape_14)
const transform_229 = new Transform({
  position: new Vector3(16, 3, 28.5),
  rotation: new Quaternion(0.056631731161921016, 0.9385529955102755, 0.28470693857777923, 0.18668979824821885),
  scale: new Vector3(0.17599083230689416, 0.21414387904820187, 0.22900491405320297)
})
skull7.addComponentOrReplace(transform_229)
engine.addEntity(skull7)

const skull3 = new Entity()
skull3.setParent(level)
const gltfShape_15 = new GLTFShape('models/skull3.glb')
skull3.addComponentOrReplace(gltfShape_15)
const transform_230 = new Transform({
  position: new Vector3(16.5, 4, 3),
  rotation: new Quaternion(0, 0.471396736825998, 0, 0.8819212643483554),
  scale: new Vector3(0.2880664387576737, 0.3453371455725964, 0.31561737991332744)
})
skull3.addComponentOrReplace(transform_230)
engine.addEntity(skull3)

const skull2_2 = new Entity()
skull2_2.setParent(level)
skull2_2.addComponentOrReplace(gltfShape_3)
const transform_231 = new Transform({
  position: new Vector3(16, 19, 16),
  rotation: new Quaternion(0.46233898070905394, 0.17205430345459155, 0.09196494118473594, 0.864975394547473),
  scale: new Vector3(0.7205481526167006, 0.6949923675318761, 0.5870919731288176)
})
skull2_2.addComponentOrReplace(transform_231)
engine.addEntity(skull2_2)

const skull6 = new Entity()
skull6.setParent(scene)
const gltfShape_17 = new GLTFShape('models/skull6.glb')
skull6.addComponentOrReplace(gltfShape_17)
const transform_235 = new Transform({
  position: new Vector3(16, 6, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.2770318547111543, 0.29679452013518315, 0.20378022050422473)
})
skull6.addComponentOrReplace(transform_235)
engine.addEntity(skull6)

      
    }

    export function createWalls(level:Level)
    {

      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 1.5, 31.5), new Quaternion(0, 0, 0, 1), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(18, 1.5, 31.5), new Quaternion(0, 0, 0, 1), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(20, 1.5, 31.5), new Quaternion(0, 0, 0, 1), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(22, 1.5, 31.5), new Quaternion(0, 0, 0, 1), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(24, 1.5, 31.5), new Quaternion(0, 0, 0, 1), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26, 1.5, 31.5), new Quaternion(0, 0, 0, 1), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(28, 1.5, 31.5), new Quaternion(0, 0, 0, 1), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31, 1.5, 30.5), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(30, 1.5, 31.5), new Quaternion(0, 0, 0, 1), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31, 1.5, 28.5), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31, 1.5, 26.5), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31, 1.5, 24.5), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31, 1.5, 10), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31, 1.5, 10), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31, 1.5, 8), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31, 1.5, 6), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31, 1.5, 4), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31, 1.5, 2), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(17.5, 1.5, 1), new Quaternion(0, 0, 0, 1), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(5.5, 1.5, 1), new Quaternion(0, 0, 0, 1), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(18.5, 1.5, 2), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(18.5, 1.5, 4), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 1.7122353047244294, 4), new Quaternion(0, 1.5265566588595902e16, 0, 1.0000000000000004), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(14, 2.5542571933405336, 4), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(9, 2.093221223224443, 4), new Quaternion(0, 1.5265566588595902e16, 0, 1.0000000000000004), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(7, 2.1012807789052053, 4), new Quaternion(0, 1.5265566588595902e16, 0, 1.0000000000000004), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(14, 3.7954263703345514, 7.5), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(14, 5, 10), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(14, 5.5, 12.5), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(14, 5.5, 12.5), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(14, 6, 15), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(27, 1.5, 24.5), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(27, 1.5, 26.5), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(27, 1.5, 28.5), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(9, 3.5, 11.5), new Quaternion(0, 1.5265566588595902e16, 0, 1.0000000000000004), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(23, 4, 11.5), new Quaternion(0, 1.5265566588595902e16, 0, 1.0000000000000004), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(25, 3.5, 11.5), new Quaternion(0, 1.5265566588595902e16, 0, 1.0000000000000004), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(27, 3, 11.5), new Quaternion(0, 1.5265566588595902e16, 0, 1.0000000000000004), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(29, 2, 11.5), new Quaternion(0, 1.5265566588595902e16, 0, 1.0000000000000004), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(28, 2.2920463207613544, 23.5), new Quaternion(0, 1.5265566588595902e16, 0, 1.0000000000000004), _colorNames.WHITE)) 


      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(2, 1.5, 16), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4, 1.5, 16), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(6, 2, 16), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(8, 2.5, 16), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(10, 3, 16), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(12, 4, 16), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(14, 1.5, 31.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(12, 1.5, 31.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(10, 1.5, 31.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(8, 1.5, 31.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(6, 1.5, 31.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4, 1.5, 31.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(2, 1.5, 31.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1, 1.5, 30.5), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1, 1.5, 28.5), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1, 1.5, 26.5), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1, 1.5, 24.5), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1, 1.5, 22.5), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(3.5, 2, 22.5), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(7.5, 2.5, 22.5), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(11.5, 3.5, 22.5), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(15, 4, 22.5), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(17, 3.5, 22.5), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(20.5, 3, 22.5), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(22, 4, 10.5), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(22, 4, 8.5), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(22, 3.5, 6.5), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1, 1.5, 15), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1, 1.5, 13), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1, 1.5, 11), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1, 1.5, 9), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1, 1.5, 7), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1, 1.5, 5), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1, 1.5, 3), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.YELLOW)) 


      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 1.5, 30.5), new Quaternion(0, 0.7071067811865479, 0, 0.7071067811865477), _colorNames.PURPLE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26, 1.5, 30.5), new Quaternion(0, 0.7071067811865479, 0, 0.7071067811865477), _colorNames.PURPLE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26, 2, 28.5), new Quaternion(0, 0.7071067811865479, 0, 0.7071067811865477), _colorNames.PURPLE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26, 2.5, 26.5), new Quaternion(0, 0.7071067811865479, 0, 0.7071067811865477), _colorNames.PURPLE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26, 3, 24.5), new Quaternion(0, 0.7071067811865479, 0, 0.7071067811865477), _colorNames.PURPLE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26, 3, 22.5), new Quaternion(0, 0.7071067811865479, 0, 0.7071067811865477), _colorNames.PURPLE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26, 3, 20.5), new Quaternion(0, 0.7071067811865479, 0, 0.7071067811865477), _colorNames.PURPLE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26, 3, 18.5), new Quaternion(0, 0.7071067811865479, 0, 0.7071067811865477), _colorNames.PURPLE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26, 3, 16.5), new Quaternion(0, 0.7071067811865479, 0, 0.7071067811865477), _colorNames.PURPLE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(21.5, 3, 24.5), new Quaternion(0, 0.7071067811865479, 0, 0.7071067811865477), _colorNames.PURPLE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(21.5, 3, 26.5), new Quaternion(0, 0.7071067811865479, 0, 0.7071067811865477), _colorNames.PURPLE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(21.5, 2.5, 28.385191062628433), new Quaternion(0, 0.7071067811865479, 0, 0.7071067811865477), _colorNames.PURPLE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(21.5, 2.1019481190337963, 30.322390952223152), new Quaternion(0, 0.7071067811865479, 0, 0.7071067811865477), _colorNames.PURPLE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(21.5, 1.5, 1.5), new Quaternion(0, 0.7071067811865479, 0, 0.7071067811865477), _colorNames.PURPLE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(22.5, 1.5, 0.5), new Quaternion(0, 1.0000000000000002, 0, 2.914335439641036e16), _colorNames.PURPLE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(24.5, 1.5, 0.5), new Quaternion(0, 1.0000000000000002, 0, 2.914335439641036e16), _colorNames.PURPLE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26.5, 1.5, 0.5), new Quaternion(0, 1.0000000000000002, 0, 2.914335439641036e16), _colorNames.PURPLE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(15.5, 1.5, 0.5), new Quaternion(0, 1.0000000000000002, 0, 2.914335439641036e16), _colorNames.PURPLE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(13.5, 1.5, 0.5), new Quaternion(0, 1.0000000000000002, 0, 2.914335439641036e16), _colorNames.PURPLE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(11.5, 1.5, 0.5), new Quaternion(0, 1.0000000000000002, 0, 2.914335439641036e16), _colorNames.PURPLE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(9.5, 1.5, 0.5), new Quaternion(0, 1.0000000000000002, 0, 2.914335439641036e16), _colorNames.PURPLE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(7.5, 1.5, 0.5), new Quaternion(0, 1.0000000000000002, 0, 2.914335439641036e16), _colorNames.PURPLE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(3, 1.5, 0.5), new Quaternion(0, 1.0000000000000002, 0, 2.914335439641036e16), _colorNames.PURPLE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1.4843006818176026, 1.5, 1.2913395605612124), new Quaternion(0, 0.8819212643483548, 0, 0.4713967368259977), _colorNames.PURPLE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(8.5, 1.5, 30.5), new Quaternion(0, 0.8819212643483548, 0, 0.4713967368259977), _colorNames.PURPLE)) 


      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(28.5, 1.5, 20), new Quaternion(0, 0, 0, 1), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(30.5, 1.5, 20), new Quaternion(0, 0, 0, 1), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26.5, 2.5, 20), new Quaternion(0, 0, 0, 1), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(24.5, 3, 20), new Quaternion(0, 0, 0, 1), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(17.5, 1.5, 20), new Quaternion(0, 0, 0, 1), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(22.5, 4.5, 20), new Quaternion(0, 0, 0, 1), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(20.5, 4.368142113352039, 20), new Quaternion(0, 0, 0, 1), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 4, 21.5), new Quaternion(0, 0, 0, 1), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(12.5, 4, 21.5), new Quaternion(0, 0, 0, 1), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(8.5, 2.5, 23.5), new Quaternion(0, 0, 0, 1), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(8.042634243525296, 3.4509215951814465, 10.5), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(8, 3, 8.5), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(8, 2.3940520238862684, 6.5), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(8.5, 2, 4.5), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(8.5, 2, 2.5), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(9.329356588626837, 2, 1.5), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(10.118491765465514, 2, 3), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(21.528086118895462, 1.528856979309086, 3.424949492227949), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(28, 1.5, 12.5), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(25.5, 3.2802226952979687, 12.5), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(23, 4.322846854400362, 12.5), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(20, 5.033588367331429, 12.5), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(15, 4, 20.33681802216536), new Quaternion(0, 0.5555702330196024, 0, 0.8314696123025453), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(14.5, 5, 10), new Quaternion(0, 0.5555702330196024, 0, 0.8314696123025453), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(11.5, 4, 17), new Quaternion(0, 0.5555702330196024, 0, 0.8314696123025453), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(19, 1.5967537688072304, 1.5), new Quaternion(0, 0, 0, 1), _colorNames.PURPLE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16.46245085094418, 6.725493459694059, 16), new Quaternion(0, 0, 0, 1), _colorNames.BLUE)) 


      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 6.5, 15), new Quaternion(0, 0, 0, 1), _colorNames.BLUE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 6.5, 14), new Quaternion(0, 0, 0, 1), _colorNames.BLUE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 6.5, 17), new Quaternion(0, 0, 0, 1), _colorNames.BLUE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(29, 1.5, 13.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31, 1.5, 13.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(20, 5.5, 12.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(20.5, 2.5, 22.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16.5, 2.5, 22.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(3.5, 2.5, 22.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(15.5, 3.5, 24.5), new Quaternion(0, 0.5555702330196024, 0, 0.8314696123025453), _colorNames.BLUE)) 


      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(23, 4.2433670624578514, 16.5), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(21.5, 4.5, 18.5), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(20, 5.5, 17), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(18.5, 6.5, 15.5), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(19, 6.5, 18), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(19, 3, 24.5), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(19, 3, 23.5), new Quaternion(0, 5.551115123125783e17, 0, 0.9999999999999999), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1, 1.5, 23.5), new Quaternion(0, 5.551115123125783e17, 0, 0.9999999999999999), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(7, 1.5, 6), new Quaternion(0, 5.551115123125783e17, 0, 0.9999999999999999), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4, 1.5, 5), new Quaternion(0, 5.551115123125783e17, 0, 0.9999999999999999), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4, 1.5, 7), new Quaternion(0, 5.551115123125783e17, 0, 0.9999999999999999), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(3, 1.5, 8), new Quaternion(0, 5.551115123125783e17, 0, 0.9999999999999999), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(6.5, 1.5, 8), new Quaternion(0, 5.551115123125783e17, 0, 0.9999999999999999), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(6.5, 3, 12.5), new Quaternion(0, 5.551115123125783e17, 0, 0.9999999999999999), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(6.5, 3, 19), new Quaternion(0, 5.551115123125783e17, 0, 0.9999999999999999), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(11, 2.5, 28), new Quaternion(0, 5.551115123125783e17, 0, 0.9999999999999999), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(11, 4, 18), new Quaternion(0, 5.551115123125783e17, 0, 0.9999999999999999), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(23.5, 3.5, 8), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(23.5, 3.5, 5.5), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26, 3.157171718723161, 9.5), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26, 2.8109801271514865, 7), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26, 2.2255840005695404, 4), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26.5, 1.6856445892043919, 1), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(27, 1.9212876614502807, 2), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(27.5, 2.174846628497871, 3.5), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(28, 2.268338981735752, 5), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(28.5, 2.1986918691561526, 6), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(11, 3.04132677904901, 6.5), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(11, 3, 9), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(11, 3, 26.5), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4, 3, 26.5), new Quaternion(0, 0.7071067811865478, 0, 0.7071067811865477), _colorNames.TURQUOISE)) 

      
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 7, 16), new Quaternion(0, 0.47139673682599775, 0, 0.8819212643483552), _colorNames.GREEN)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(3.5, 1.5, 16), new Quaternion(0, 0.47139673682599775, 0, 0.8819212643483552), _colorNames.GREEN)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4.5, 1.7476892561592807, 17.5), new Quaternion(0, 0.47139673682599775, 0, 0.8819212643483552), _colorNames.GREEN)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4.5, 1.5, 19.5), new Quaternion(0, 0.47139673682599775, 0, 0.8819212643483552), _colorNames.GREEN)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4.5, 1.5, 24.5), new Quaternion(0, 0.47139673682599775, 0, 0.8819212643483552), _colorNames.GREEN)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(9, 2.625435164373741, 24.5), new Quaternion(0, 0.47139673682599775, 0, 0.8819212643483552), _colorNames.GREEN)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 3.0889160021292916, 24.5), new Quaternion(0, 0.47139673682599775, 0, 0.8819212643483552), _colorNames.GREEN)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 2.6829211925201637, 28), new Quaternion(0, 0.47139673682599775, 0, 0.8819212643483552), _colorNames.GREEN)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 2.5, 5.5), new Quaternion(0, 0.47139673682599775, 0, 0.8819212643483552), _colorNames.GREEN)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(2, 2.5, 5.5), new Quaternion(0, 0.47139673682599775, 0, 0.8819212643483552), _colorNames.GREEN)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(21, 2.5, 5.5), new Quaternion(0, 0.47139673682599775, 0, 0.8819212643483552), _colorNames.GREEN)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4.5, 1.8029647133566638, 13), new Quaternion(0, 0.47139673682599775, 0, 0.8819212643483552), _colorNames.GREEN)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4.5, 2.5, 29), new Quaternion(0, 0.47139673682599775, 0, 0.8819212643483552), _colorNames.GREEN)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(14, 2.5, 29), new Quaternion(0, 0.47139673682599775, 0, 0.8819212643483552), _colorNames.GREEN)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(19.5, 2.5, 29), new Quaternion(0, 0.47139673682599775, 0, 0.8819212643483552), _colorNames.GREEN)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(23.5, 2.5, 29), new Quaternion(0, 0.47139673682599775, 0, 0.8819212643483552), _colorNames.GREEN)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(28, 2.5, 29), new Quaternion(0, 0.47139673682599775, 0, 0.8819212643483552), _colorNames.GREEN)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(29, 2.5, 26.5), new Quaternion(0, 0.47139673682599775, 0, 0.8819212643483552), _colorNames.GREEN)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(29, 2.5, 9.5), new Quaternion(0, 0.47139673682599775, 0, 0.8819212643483552), _colorNames.GREEN)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(17, 5.664013125522356, 10.5), new Quaternion(0, 0.47139673682599775, 0, 0.8819212643483552), _colorNames.GREEN)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31, 1.5, 17), new Quaternion(0, 0.956940335732209, 0, 0.29028467725446266), _colorNames.GREEN)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31, 1.5, 18.5), new Quaternion(0, 0.956940335732209, 0, 0.29028467725446266), _colorNames.GREEN)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(23.5, 3.2780419112581, 18.5), new Quaternion(0, 0.956940335732209, 0, 0.29028467725446266), _colorNames.GREEN)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(23.5, 4.360645696684472, 13.5), new Quaternion(0, 0.956940335732209, 0, 0.29028467725446266), _colorNames.GREEN)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(11.5, 5, 13.5), new Quaternion(0, 0.956940335732209, 0, 0.29028467725446266), _colorNames.GREEN)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(11.5, 1.5689390876664975, 2), new Quaternion(0, 0.956940335732209, 0, 0.29028467725446266), _colorNames.GREEN)) 
        

}
