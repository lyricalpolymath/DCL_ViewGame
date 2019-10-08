import utils from "../../node_modules/decentraland-ecs-utils/index"
import { TriggerComponent, TriggerBoxShape } from "../../node_modules/decentraland-ecs-utils/triggers/triggerSystem"
import { Wall } from "./wall"
import * as Globals from "../functions"
import { Level } from "./level"
import { _colorNames } from "../functions"

    export function createScene(level:Level)
    {

      const topologylevel2 = new Entity()
      topologylevel2.setParent(level)
      const gltfShape_8 = new GLTFShape('models/topologylevel2.glb')
      topologylevel2.addComponentOrReplace(gltfShape_8)
      const transform_71 = new Transform({
        position: new Vector3(16, 0.04898657780819793, 16),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      topologylevel2.addComponentOrReplace(transform_71)
      engine.addEntity(topologylevel2)

      const glasses = new Entity()
      glasses.addComponentOrReplace(new GLTFShape('models/greenglasses.glb'))
      glasses.setParent(level)
      glasses.addComponentOrReplace(new Transform({
         position: new Vector3(22,1.5,12),
         scale: new Vector3(2,2,2)
       }))
       glasses.addComponentOrReplace(new OnClick(e=>{
        let dist = Globals.distance(glasses.getComponent(Transform).position, Globals.camera.position)
        if ( dist < 4)
         {
            engine.removeEntity(glasses)
            var portal = new Entity()
            portal.addComponentOrReplace(Globals.portal)
            portal.addComponentOrReplace(new Transform({
              position: new Vector3(19,1.5,18),
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
      engine.addEntity(glasses)

      const biohazardsuit = new Entity()
biohazardsuit.setParent(level)
const gltfShape_2 = new GLTFShape('models/biohazardsuit.glb')
biohazardsuit.addComponentOrReplace(gltfShape_2)
const transform_6 = new Transform({
  position: new Vector3(25.5, 1.8557493938197869, 17),
  rotation: new Quaternion(0, 0.19509032201612825, 0, 0.9807852804032304),
  scale: new Vector3(1, 1, 1)
})
biohazardsuit.addComponentOrReplace(transform_6)
engine.addEntity(biohazardsuit)

const openbarrel = new Entity()
openbarrel.setParent(level)
const gltfShape_3 = new GLTFShape('models/openbarrel.glb')
openbarrel.addComponentOrReplace(gltfShape_3)
const transform_7 = new Transform({
  position: new Vector3(9, 0.8982163201830069, 3.5),
  rotation: new Quaternion(0, -0.38268343236508984, 0, 0.9238795325112868),
  scale: new Vector3(1, 1, 1)
})
openbarrel.addComponentOrReplace(transform_7)
engine.addEntity(openbarrel)

const openbarrel_2 = new Entity()
openbarrel_2.setParent(level)
openbarrel_2.addComponentOrReplace(gltfShape_3)
const transform_8 = new Transform({
  position: new Vector3(10.5, 0.8937731966290681, 5),
  rotation: new Quaternion(0, 0.8314696123025451, 0, 0.5555702330196022),
  scale: new Vector3(1, 1, 1)
})
openbarrel_2.addComponentOrReplace(transform_8)
engine.addEntity(openbarrel_2)

const openbarrel_3 = new Entity()
openbarrel_3.setParent(level)
openbarrel_3.addComponentOrReplace(gltfShape_3)
const transform_9 = new Transform({
  position: new Vector3(13, 0.8904976543864405, 2),
  rotation: new Quaternion(0, -0.7071067811865475, 0, 0.7071067811865476),
  scale: new Vector3(1, 1, 1)
})
openbarrel_3.addComponentOrReplace(transform_9)
engine.addEntity(openbarrel_3)

const openbarrel_4 = new Entity()
openbarrel_4.setParent(level)
openbarrel_4.addComponentOrReplace(gltfShape_3)
const transform_10 = new Transform({
  position: new Vector3(18, 0.8744306938022031, 2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
openbarrel_4.addComponentOrReplace(transform_10)
engine.addEntity(openbarrel_4)

const openbarrel_5 = new Entity()
openbarrel_5.setParent(level)
openbarrel_5.addComponentOrReplace(gltfShape_3)
const transform_11 = new Transform({
  position: new Vector3(22, 1.2364271337316515, 13.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
openbarrel_5.addComponentOrReplace(transform_11)
engine.addEntity(openbarrel_5)

const openbarrel_6 = new Entity()
openbarrel_6.setParent(level)
openbarrel_6.addComponentOrReplace(gltfShape_3)
const transform_12 = new Transform({
  position: new Vector3(25.5, 1.4485581877470537, 10.5),
  rotation: new Quaternion(0, -0.9569403357322094, 0, 0.2902846772544626),
  scale: new Vector3(1, 1, 1)
})
openbarrel_6.addComponentOrReplace(transform_12)
engine.addEntity(openbarrel_6)

const biohazardsuit_2 = new Entity()
biohazardsuit_2.setParent(level)
biohazardsuit_2.addComponentOrReplace(gltfShape_2)
const transform_13 = new Transform({
  position: new Vector3(18, 1.6044410647932574, 5),
  rotation: new Quaternion(0, -0.9807852804032305, 0, -0.1950903220161282),
  scale: new Vector3(1, 1, 1)
})
biohazardsuit_2.addComponentOrReplace(transform_13)
engine.addEntity(biohazardsuit_2)

const biohazardsuit_3 = new Entity()
biohazardsuit_3.setParent(level)
biohazardsuit_3.addComponentOrReplace(gltfShape_2)
const transform_14 = new Transform({
  position: new Vector3(20.5, 1.608528678229546, 8.5),
  rotation: new Quaternion(0, 0.881921264348355, 0, 0.4713967368259978),
  scale: new Vector3(1, 1, 1)
})
biohazardsuit_3.addComponentOrReplace(transform_14)
engine.addEntity(biohazardsuit_3)

const container3 = new Entity()
container3.setParent(level)
const gltfShape_4 = new GLTFShape('models/container3.glb')
container3.addComponentOrReplace(gltfShape_4)
const transform_15 = new Transform({
  position: new Vector3(15, 1, 20),
  rotation: new Quaternion(-0.4226363835516357, 0, 0, 0.9062993364768589),
  scale: new Vector3(1, 1, 1)
})
container3.addComponentOrReplace(transform_15)
engine.addEntity(container3)

const openbarrel_7 = new Entity()
openbarrel_7.setParent(level)
openbarrel_7.addComponentOrReplace(gltfShape_3)
const transform_16 = new Transform({
  position: new Vector3(16.5, 0.8703529778880723, 27),
  rotation: new Quaternion(0, 0.5555702330196022, 0, 0.8314696123025452),
  scale: new Vector3(1, 1, 1)
})
openbarrel_7.addComponentOrReplace(transform_16)
engine.addEntity(openbarrel_7)


      
      const openbarrel_8 = new Entity()
      openbarrel_8.setParent(level)
      openbarrel_8.addComponentOrReplace(gltfShape_3)
      const transform_72 = new Transform({
        position: new Vector3(24.5, 1, 6.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      openbarrel_8.addComponentOrReplace(transform_72)
      engine.addEntity(openbarrel_8)
      
      const openbarrel_9 = new Entity()
      openbarrel_9.setParent(level)
      openbarrel_9.addComponentOrReplace(gltfShape_3)
      const transform_73 = new Transform({
        position: new Vector3(16.5, 1.1121019044441636, 5.5),
        rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
        scale: new Vector3(1, 1, 1)
      })
      openbarrel_9.addComponentOrReplace(transform_73)
      engine.addEntity(openbarrel_9)
      
      const container1 = new Entity()
      container1.setParent(level)
      const gltfShape_9 = new GLTFShape('models/container1.glb')
      container1.addComponentOrReplace(gltfShape_9)
      const transform_74 = new Transform({
        position: new Vector3(23.5, 0, 16),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      container1.addComponentOrReplace(transform_74)
      engine.addEntity(container1)
      
      const container1_2 = new Entity()
      container1_2.setParent(level)
      container1_2.addComponentOrReplace(gltfShape_9)
      const transform_75 = new Transform({
        position: new Vector3(8, 0.2858350197075299, 14.5),
        rotation: new Quaternion(0.2902846772544623, 0, 0, 0.9569403357322088),
        scale: new Vector3(1, 1, 1)
      })
      container1_2.addComponentOrReplace(transform_75)
      engine.addEntity(container1_2)
      
      const container1_3 = new Entity()
      container1_3.setParent(level)
      container1_3.addComponentOrReplace(gltfShape_9)
      const transform_76 = new Transform({
        position: new Vector3(13.5, 0, 26),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      container1_3.addComponentOrReplace(transform_76)
      engine.addEntity(container1_3)
      
      const container1_4 = new Entity()
      container1_4.setParent(level)
      container1_4.addComponentOrReplace(gltfShape_9)
      const transform_77 = new Transform({
        position: new Vector3(1.5, 0, 29),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      container1_4.addComponentOrReplace(transform_77)
      engine.addEntity(container1_4)
      
      const container12 = new Entity()
      container12.setParent(level)
      const gltfShape_10 = new GLTFShape('models/container12.glb')
      container12.addComponentOrReplace(gltfShape_10)
      const transform_78 = new Transform({
        position: new Vector3(3, 0, 0.5),
        rotation: new Quaternion(0, 0.5555702330196022, 0, 0.8314696123025452),
        scale: new Vector3(1, 1, 1)
      })
      container12.addComponentOrReplace(transform_78)
      engine.addEntity(container12)
      
      const container9 = new Entity()
      container9.setParent(level)
      const gltfShape_11 = new GLTFShape('models/container9.glb')
      container9.addComponentOrReplace(gltfShape_11)
      const transform_79 = new Transform({
        position: new Vector3(30.389933402713453, 0, 2.49403792152348913),
        rotation: new Quaternion(0.02259794758098476, -0.28491487312311664, 0.022458187453876538, 0.9580232135259835),
        scale: new Vector3(1, 1, 1)
      })
      container9.addComponentOrReplace(transform_79)
      engine.addEntity(container9)
      
      const openbarrel_10 = new Entity()
      openbarrel_10.setParent(level)
      openbarrel_10.addComponentOrReplace(gltfShape_3)
      const transform_80 = new Transform({
        position: new Vector3(10, 1.2695919981866162, 23.5),
        rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475),
        scale: new Vector3(1, 1, 1)
      })
      openbarrel_10.addComponentOrReplace(transform_80)
      engine.addEntity(openbarrel_10)
      
      const openbarrel_11 = new Entity()
      openbarrel_11.setParent(level)
      openbarrel_11.addComponentOrReplace(gltfShape_3)
      const transform_81 = new Transform({
        position: new Vector3(12, 1.1910672735073469, 25),
        rotation: new Quaternion(0, -0.47139673682599775, 0, 0.8819212643483552),
        scale: new Vector3(1, 1, 1)
      })
      openbarrel_11.addComponentOrReplace(transform_81)
      engine.addEntity(openbarrel_11)
      
      const openbarrel_12 = new Entity()
      openbarrel_12.setParent(level)
      openbarrel_12.addComponentOrReplace(gltfShape_3)
      const transform_82 = new Transform({
        position: new Vector3(23, 1.0432061809300768, 25),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      openbarrel_12.addComponentOrReplace(transform_82)
      engine.addEntity(openbarrel_12)
      
      const openbarrel_13 = new Entity()
      openbarrel_13.setParent(level)
      openbarrel_13.addComponentOrReplace(gltfShape_3)
      const transform_83 = new Transform({
        position: new Vector3(24.5, 1.0223461430782974, 25),
        rotation: new Quaternion(0, -0.6343932841636457, 0, 0.7730104533627371),
        scale: new Vector3(1, 1, 1)
      })
      openbarrel_13.addComponentOrReplace(transform_83)
      engine.addEntity(openbarrel_13)
      
      const openbarrel_14 = new Entity()
      openbarrel_14.setParent(level)
      openbarrel_14.addComponentOrReplace(gltfShape_3)
      const transform_84 = new Transform({
        position: new Vector3(24, 1.1767431042676444, 27),
        rotation: new Quaternion(0, 0.5555702330196022, 0, 0.8314696123025452),
        scale: new Vector3(1, 1, 1)
      })
      openbarrel_14.addComponentOrReplace(transform_84)
      engine.addEntity(openbarrel_14)
      
      const biohazardsuit_4 = new Entity()
      biohazardsuit_4.setParent(level)
      biohazardsuit_4.addComponentOrReplace(gltfShape_2)
      const transform_85 = new Transform({
        position: new Vector3(16, 1.8014698293905482, 27.5),
        rotation: new Quaternion(0, 0.3826834323650897, 0, 0.9238795325112867),
        scale: new Vector3(1, 1, 1)
      })
      biohazardsuit_4.addComponentOrReplace(transform_85)
      engine.addEntity(biohazardsuit_4)


}

    export function createWalls(level:Level)
    {

      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(28.5, 1.7113177337146883, 28), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.GREEN))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(17, 1.8782964441067103, 23), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 1.5946283157750822, 30), new Quaternion(0, 0.7108956223650671, 0, 0.7032975288611386), _colorNames.TURQUOISE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 1.7094610264459051, 26), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.BLUE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 1.87700695968468, 24.090440278701877), new Quaternion(0, 0.7108956223650671, 0, 0.7032975288611386), _colorNames.TURQUOISE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(19, 1.8889195369252745, 23), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(27, 1.6972982531602754, 28), new Quaternion(0, 0.9999999999999999, 0, 1.3877787807814457e-16), _colorNames.GREEN))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(20, 1.6872844537514755, 24), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.GREEN))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(20, 1.6308862765181535, 28), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.GREEN))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(20, 1.5950157661970983, 30), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.GREEN))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(21.5, 1.8013378423502493, 20.5), new Quaternion(0, 0.38268343236508995, 0, 0.9238795325112868), _colorNames.GREEN))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(19, 1.624683601087539, 7), new Quaternion(0, 0.9238795325112864, 0, 0.3826834323650896), _colorNames.BLUE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(21, 1.740878800523178, 10), new Quaternion(0, 0.7730104533627368, 0, 0.6343932841636454), _colorNames.BLUE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(19, 1.7226004675534066, 14.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(20.5, 1.7812476880305557, 14.5), new Quaternion(0, -0.47139673682599775, 0, 0.8819212643483552), _colorNames.BLUE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(13.5, 1.5568956733453527, 30), new Quaternion(0, 0.29028467725446255, 0, 0.956940335732209), _colorNames.TURQUOISE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(21.5, 1.565375518918522, 30.5), new Quaternion(0, -0.47139673682599775, 0, 0.8819212643483552), _colorNames.BLUE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(13.5, 1.5901268310094938, 11.5), new Quaternion(0, 0.29028467725446255, 0, 0.956940335732209), _colorNames.TURQUOISE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(5.5, 1.5, 1.5), new Quaternion(0, -2.7755575615628914e-17, 0, 1), _colorNames.TURQUOISE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(7, 1.9052693354073718, 24), new Quaternion(0, 0.7108956223650671, 0, 0.7032975288611386), _colorNames.TURQUOISE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(22, 1.5735527349260074, 3), new Quaternion(0, 5.551115123125783e-17, 0, 0.9999999999999999), _colorNames.BLUE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(2.5, 2, 26.5), new Quaternion(0, 0.9999999999999999, 0, 1.3877787807814457e-16), _colorNames.GREEN))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(6.5, 1.6517239015525504, 18.5), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.BLUE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(11, 1.8030070444258177, 17), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.GREEN))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(8.5, 1.7626628318234534, 17.5), new Quaternion(0, -0.8819212643483549, 0, 0.4713967368259979), _colorNames.BLUE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(6, 1.6259899347147755, 14), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.GREEN))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1.5, 1.5, 5), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865478), _colorNames.TURQUOISE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(6.331528896395115, 1.5718346342884253, 5.376777438580866), new Quaternion(0, 0.4655680880930739, 0, 0.8850120650868883), _colorNames.BLUE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(5.199031550738123, 1.7021918769244921, 7), new Quaternion(0, 0.4655680880930739, 0, 0.8850120650868883), _colorNames.BLUE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(13.5, 1.9416233262312765, 21), new Quaternion(0, 0.29028467725446255, 0, 0.956940335732209), _colorNames.TURQUOISE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(18.5, 1.9502157394175006, 18), new Quaternion(0, -0.38268343236508984, 0, 0.9238795325112868), _colorNames.TURQUOISE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(11, 1.9292996610662332, 21), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.GREEN))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(10, 1.5, 22), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(9.274437671910471, 2.028899710192025, 23.14136508324729), new Quaternion(0, 0.7108956223650671, 0, 0.7032975288611386), _colorNames.TURQUOISE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(11, 1.652213355328728, 28.5), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.GREEN))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(15.794987527214005, 1.6889715947764126, 9.0647750174728), new Quaternion(0, -0.47139673682599775, 0, 0.8819212643483552), _colorNames.TURQUOISE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(14.5, 1.6061728055684181, 4), new Quaternion(0, -0.47139673682599775, 0, 0.8819212643483552), _colorNames.TURQUOISE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(9, 1.803952896159128, 9), new Quaternion(0, -0.47139673682599775, 0, 0.8819212643483552), _colorNames.BLUE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(14.28464251695397, 1.519755412278137, 8.863355901822105), new Quaternion(0, -0.47139673682599775, 0, 0.8819212643483552), _colorNames.BLUE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(15.226977976146745, 1.7705883901822794, 10.308509422732977), new Quaternion(0, -0.47139673682599775, 0, 0.8819212643483552), _colorNames.BLUE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4.5, 2, 26.5), new Quaternion(0, -1.3877787807814457e-17, 0, 1), _colorNames.TURQUOISE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(3, 1.5, 20.5), new Quaternion(0, -1.3877787807814457e-17, 0, 1), _colorNames.TURQUOISE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1, 1.5, 18), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.TURQUOISE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(2.5, 1.5, 15.5), new Quaternion(0, -1.3877787807814457e-17, 0, 1), _colorNames.TURQUOISE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(9.5, 1.706850667371386, 13.5), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.TURQUOISE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(27, 1.5638524324104903, 23), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(29.5, 1.5301770392065812, 21.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(24, 1.8731685019377302, 12.5), new Quaternion(0, 0.3826834323650897, 0, 0.9238795325112867), _colorNames.BLUE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(29, 1.5978546125216662, 18.5), new Quaternion(0, -1.3877787807814457e-17, 0, 1), _colorNames.TURQUOISE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(27.5, 1.573872939484466, 17), new Quaternion(0, -1.3877787807814457e-17, 0, 1), _colorNames.TURQUOISE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(24, 1.8419627507875251, 17), new Quaternion(0, -1.3877787807814457e-17, 0, 1), _colorNames.TURQUOISE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(28.5, 1.5, 13), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(27.5, 1.6341448762974173, 11), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(30.5, 1.5, 11), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))

}
