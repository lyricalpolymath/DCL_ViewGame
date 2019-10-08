import utils from "../../node_modules/decentraland-ecs-utils/index"
import { TriggerComponent, TriggerBoxShape } from "../../node_modules/decentraland-ecs-utils/triggers/triggerSystem"

import { Wall } from "./wall"
import { Level } from "./level"
import { _colorNames } from "../functions"
import * as Globals from "../functions"


// TODO - some of the levels have a SPECIAL COLOR   YELLOW and PURPLE

    // BB added entieties
    export function createScene(level:Level)
    {
      const dome_6 = new Entity()
      dome_6.setParent(level)
      const gltfShape_2 = new GLTFShape('models/dome_6.glb')
      dome_6.addComponentOrReplace(gltfShape_2)
      const transform_6 = new Transform({
        position: new Vector3(16, 0, 16),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1.3488296091169971, 1.434357027315298, 1.3574738497827425)
      })
      dome_6.addComponentOrReplace(transform_6)
      engine.addEntity(dome_6)

      /*
      for(var i = 0; i< 168; i++)
      {
        dome_6.getComponent(Animator).addClip(new AnimationState("Polygon_"+i+"_2|CINEMA_4D_Main|Layer0_Polygon_"+i+"_2_Polygon_"+i+"_2"))
        dome_6.getComponent(Animator).getClip("Polygon_"+i+"_2|CINEMA_4D_Main|Layer0_Polygon_"+i+"_2_Polygon_"+i+"_2").play()  
      }*/
      
      const blackBox = new Entity()
      //blackBox.setParent(level)
      const gltfShape_3 = new GLTFShape('models/blackBox.glb')
      blackBox.addComponentOrReplace(gltfShape_3)
      const transform_7 = new Transform({
        position: new Vector3(16, 20.062734242320406, 16),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      blackBox.addComponentOrReplace(transform_7)
      //engine.addEntity(blackBox)
    }