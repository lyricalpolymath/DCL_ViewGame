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
      const gltfShape_17 = new GLTFShape('models/topologylevel2.glb')
      topologylevel2.addComponentOrReplace(gltfShape_17)
      const transform_82 = new Transform({
      position: new Vector3(16, 0.04898657780819793, 16),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
      })
      topologylevel2.addComponentOrReplace(transform_82)
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
      
      const openbarrel = new Entity()
      openbarrel.setParent(level)
      const gltfShape_3 = new GLTFShape('models/openbarrel.glb')
      openbarrel.addComponentOrReplace(gltfShape_3)
      const transform_7 = new Transform({
        position: new Vector3(10, 1.590246778641803, 3.5),
        rotation: new Quaternion(0, -0.38268343236508984, 0, 0.9238795325112868),
        scale: new Vector3(1, 1, 1)
      })
      openbarrel.addComponentOrReplace(transform_7)
      
      const openbarrel_2 = new Entity()
      openbarrel_2.setParent(level)
      openbarrel_2.addComponentOrReplace(gltfShape_3)
      const transform_8 = new Transform({
        position: new Vector3(10.5, 1.5, 5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      openbarrel_2.addComponentOrReplace(transform_8)
      
      const openbarrel_3 = new Entity()
      openbarrel_3.setParent(level)
      openbarrel_3.addComponentOrReplace(gltfShape_3)
      const transform_9 = new Transform({
        position: new Vector3(13, 1.5, 2),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      openbarrel_3.addComponentOrReplace(transform_9)
      
      const closedbarrel = new Entity()
      closedbarrel.setParent(level)
      const gltfShape_4 = new GLTFShape('models/closedbarrel.glb')
      closedbarrel.addComponentOrReplace(gltfShape_4)
      const transform_10 = new Transform({
        position: new Vector3(14, 0, 3.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      closedbarrel.addComponentOrReplace(transform_10)
      
      const closedbarrel_2 = new Entity()
      closedbarrel_2.setParent(level)
      closedbarrel_2.addComponentOrReplace(gltfShape_4)
      const transform_11 = new Transform({
        position: new Vector3(18, 0, 2.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      closedbarrel_2.addComponentOrReplace(transform_11)
      
      const openbarrel_4 = new Entity()
      openbarrel_4.setParent(level)
      openbarrel_4.addComponentOrReplace(gltfShape_3)
      const transform_12 = new Transform({
        position: new Vector3(17, 1.5, 6),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      openbarrel_4.addComponentOrReplace(transform_12)
      
      const openbarrel_5 = new Entity()
      openbarrel_5.setParent(level)
      openbarrel_5.addComponentOrReplace(gltfShape_3)
      const transform_13 = new Transform({
        position: new Vector3(24, 1.5, 8),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      openbarrel_5.addComponentOrReplace(transform_13)
      
      const openbarrel_6 = new Entity()
      openbarrel_6.setParent(level)
      openbarrel_6.addComponentOrReplace(gltfShape_3)
      const transform_14 = new Transform({
        position: new Vector3(25.5, 1.5, 8),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      openbarrel_6.addComponentOrReplace(transform_14)
      
      const closedbarrel_3 = new Entity()
      closedbarrel_3.setParent(level)
      closedbarrel_3.addComponentOrReplace(gltfShape_4)
      const transform_15 = new Transform({
        position: new Vector3(22, 0, 6.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      closedbarrel_3.addComponentOrReplace(transform_15)
      
      const biohazardsuit_2 = new Entity()
      biohazardsuit_2.setParent(level)
      biohazardsuit_2.addComponentOrReplace(gltfShape_2)
      const transform_16 = new Transform({
        position: new Vector3(18, 1.6044410647932574, 5),
        rotation: new Quaternion(0, -0.9807852804032305, 0, -0.1950903220161282),
        scale: new Vector3(1, 1, 1)
      })
      biohazardsuit_2.addComponentOrReplace(transform_16)
      
      const biohazardsuit_3 = new Entity()
      biohazardsuit_3.setParent(level)
      biohazardsuit_3.addComponentOrReplace(gltfShape_2)
      const transform_17 = new Transform({
        position: new Vector3(20.5, 1.608528678229546, 8.5),
        rotation: new Quaternion(0, 0.881921264348355, 0, 0.4713967368259978),
        scale: new Vector3(1, 1, 1)
      })
      biohazardsuit_3.addComponentOrReplace(transform_17)
      
      const container1 = new Entity()
      container1.setParent(level)
      const gltfShape_5 = new GLTFShape('models/container1.glb')
      container1.addComponentOrReplace(gltfShape_5)
      const transform_18 = new Transform({
        position: new Vector3(23.985228943015827, 0.031323875774285526, 16),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      container1.addComponentOrReplace(transform_18)
      
      const container2 = new Entity()
      container2.setParent(level)
      const gltfShape_6 = new GLTFShape('models/container2.glb')
      container2.addComponentOrReplace(gltfShape_6)
      const transform_19 = new Transform({
        position: new Vector3(16, 0, 25.829453346848652),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      container2.addComponentOrReplace(transform_19)
      
      const container3 = new Entity()
      container3.setParent(level)
      const gltfShape_7 = new GLTFShape('models/container3.glb')
      container3.addComponentOrReplace(gltfShape_7)
      const transform_20 = new Transform({
        position: new Vector3(15.149743801478913, 0.4152218448207705, 19.77278092114692),
        rotation: new Quaternion(-0.4226363835516357, 0, 0, 0.9062993364768589),
        scale: new Vector3(1, 1, 1)
      })
      container3.addComponentOrReplace(transform_20)
      
      const container4 = new Entity()
      container4.setParent(level)
      const gltfShape_8 = new GLTFShape('models/container4.glb')
      container4.addComponentOrReplace(gltfShape_8)
      const transform_21 = new Transform({
        position: new Vector3(16, 0.2747239287672798, 16),
        rotation: new Quaternion(0.1807756329978652, 0, 0, 0.9835243619322407),
        scale: new Vector3(1, 1, 1)
      })
      container4.addComponentOrReplace(transform_21)
      
      const container6 = new Entity()
      container6.setParent(level)
      const gltfShape_9 = new GLTFShape('models/container6.glb')
      container6.addComponentOrReplace(gltfShape_9)
      const transform_22 = new Transform({
        position: new Vector3(16, 0, 28.885651958033584),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      container6.addComponentOrReplace(transform_22)
      
      const container7 = new Entity()
      container7.setParent(level)
      const gltfShape_10 = new GLTFShape('models/container7.glb')
      container7.addComponentOrReplace(gltfShape_10)
      const transform_23 = new Transform({
        position: new Vector3(16, 0, 16),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      container7.addComponentOrReplace(transform_23)
      
      const container9 = new Entity()
      container9.setParent(level)
      const gltfShape_11 = new GLTFShape('models/container9.glb')
      container9.addComponentOrReplace(gltfShape_11)
      const transform_24 = new Transform({
        position: new Vector3(28.5, 0, 30),
        rotation: new Quaternion(0, -0.9408064554206143, 0, 0.33894426302697644),
        scale: new Vector3(1, 1, 1)
      })
      container9.addComponentOrReplace(transform_24)
      
      const container11 = new Entity()
      container11.setParent(level)
      const gltfShape_12 = new GLTFShape('models/container11.glb')
      container11.addComponentOrReplace(gltfShape_12)
      const transform_25 = new Transform({
        position: new Vector3(9.647707897804285, 0, 20.44307615772654),
        rotation: new Quaternion(0.009231241276457297, 0.4532620945599318, 0.04750487367106869, 0.8900626634103549),
        scale: new Vector3(1, 1, 1)
      })
      container11.addComponentOrReplace(transform_25)
      
      const container12 = new Entity()
      container12.setParent(level)
      const gltfShape_13 = new GLTFShape('models/container12.glb')
      container12.addComponentOrReplace(gltfShape_13)
      const transform_26 = new Transform({
        position: new Vector3(16, 0, 9.5),
        rotation: new Quaternion(0, 0.979796346745034, 0, 0.199997797250591),
        scale: new Vector3(1, 1, 1)
      })
      container12.addComponentOrReplace(transform_26)
      
      const openbarrel_7 = new Entity()
      openbarrel_7.setParent(level)
      openbarrel_7.addComponentOrReplace(gltfShape_3)
      const transform_27 = new Transform({
        position: new Vector3(16.5, 1.5, 32),
        rotation: new Quaternion(0, -0.38268343236508984, 0, 0.9238795325112868),
        scale: new Vector3(1, 1, 1)
      })
      openbarrel_7.addComponentOrReplace(transform_27)



}

    export function createWalls(level:Level)
    {

      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(17, 1.5, 23), new Quaternion(0, 0, 0, 1), _colorNames.BLUE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 1.5022357243058293, 26), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.BLUE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(19, 1.5, 23), new Quaternion(0, 0, 0, 1), _colorNames.BLUE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(19, 1.4736026751650257, 6), new Quaternion(0, 0.4655680880930739, 0, 0.8850120650868883), _colorNames.BLUE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(17, 1.5356772754959414, 9), new Quaternion(0, 0.4655680880930739, 0, 0.8850120650868883), _colorNames.BLUE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(19, 1.5405868828285625, 14.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(20.5, 1.5203054476861428, 14.5), new Quaternion(0, -0.47139673682599775, 0, 0.8819212643483552), _colorNames.BLUE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(21.5, 1.470143311532532, 30.5), new Quaternion(0, -0.47139673682599775, 0, 0.8819212643483552), _colorNames.BLUE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(6.724675865579687, 1.595435177373142, 22), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.BLUE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(6.5, 1.5430344811210812, 18.5), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.BLUE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(6.5, 1.491273409906925, 15.50755936214815), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.BLUE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(6.331528896395115, 1.4788338198515145, 5.376777438580866), new Quaternion(0, 0.4655680880930739, 0, 0.8850120650868883), _colorNames.BLUE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(5.199031550738123, 1.4860219108073576, 7), new Quaternion(0, 0.4655680880930739, 0, 0.8850120650868883), _colorNames.BLUE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(13.157276459981883, 1.488541425013966, 7.1540814859920285), new Quaternion(0, -0.47139673682599775, 0, 0.8819212643483552), _colorNames.BLUE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(14.28464251695397, 1.519755412278137, 8.863355901822105), new Quaternion(0, -0.47139673682599775, 0, 0.8819212643483552), _colorNames.BLUE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(15.226977976146745, 1.5101266687796624, 10.308509422732977), new Quaternion(0, -0.47139673682599775, 0, 0.8819212643483552), _colorNames.BLUE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(27, 1.5638524324104903, 23), new Quaternion(0, 0, 0, 1), _colorNames.BLUE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(29.5, 1.5301770392065812, 21.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(27.5, 1.536090007116262, 20), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))  
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(28.5, 1.5, 13), new Quaternion(0, 0, 0, 1), _colorNames.BLUE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(27.5, 1.5, 11), new Quaternion(0, 0, 0, 1), _colorNames.BLUE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(30.5, 1.5, 11), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(10, 1.5, 22), new Quaternion(0, 0, 0, 1), _colorNames.BLUE)) 


      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 1.5388424610339548, 28), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.GREEN))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 1.5245548876047232, 28), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.GREEN)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(20, 1.5, 24), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.GREEN)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(20, 1.505943441619202, 28), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.GREEN)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(20, 1.4954980832156712, 30), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.GREEN)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(20, 1.5021124488615674, 30.91423878443183), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.GREEN)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(6, 1.507868618885996, 20), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.GREEN)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(6, 1.5180043969596761, 17), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.GREEN)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(6, 1.5001280872247928, 14), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.GREEN))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(14.309307160530022, 1.5477279810552602, 21.363442216750208), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.GREEN))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(11, 1.5, 21), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.GREEN))  


      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(13.5, 1.5, 11.5), new Quaternion(0, 0.29028467725446255, 0, 0.956940335732209), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(5.5, 1.5, 4), new Quaternion(0, 0.29028467725446255, 0, 0.956940335732209), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(7, 1.519639899487526, 24), new Quaternion(0, 0.7108956223650671, 0, 0.7032975288611386), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(5.22098942803717, 1.5, 5.306662913307235), new Quaternion(0, 0.8819212643483549, 0, 0.4713967368259976), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(13.5, 1.5, 21), new Quaternion(0, 0.29028467725446255, 0, 0.956940335732209), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(12, 1.5, 20.86367198190141), new Quaternion(0, -0.38268343236508984, 0, 0.9238795325112868), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 1.5185491686646415, 30), new Quaternion(0, 0.7108956223650671, 0, 0.7032975288611386), _colorNames.TURQUOISE))
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 1.5, 24.090440278701877), new Quaternion(0, 0.7108956223650671, 0, 0.7032975288611386), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(13.5, 1.5, 30), new Quaternion(0, 0.29028467725446255, 0, 0.956940335732209), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(9.274437671910471, 1.5, 23.14136508324729), new Quaternion(0, 0.7108956223650671, 0, 0.7032975288611386), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(15.794987527214005, 1.5, 9.0647750174728), new Quaternion(0, -0.47139673682599775, 0, 0.8819212643483552), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(14.5073704503886, 1.5, 7.699463220734399), new Quaternion(0, -0.47139673682599775, 0, 0.8819212643483552), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4.5, 1.5, 22.5), new Quaternion(0, -1.3877787807814457e-17, 0, 1), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(3, 1.5, 20.5), new Quaternion(0, -1.3877787807814457e-17, 0, 1), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1.5, 1.5, 18), new Quaternion(0, -1.3877787807814457e-17, 0, 1), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(2.5, 1.5, 15.5), new Quaternion(0, -1.3877787807814457e-17, 0, 1), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4, 1.5, 13.5), new Quaternion(0, -1.3877787807814457e-17, 0, 1), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(29, 1.5, 18.5), new Quaternion(0, -1.3877787807814457e-17, 0, 1), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(27.5, 1.5, 17), new Quaternion(0, -1.3877787807814457e-17, 0, 1), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(24, 1.5, 17), new Quaternion(0, -1.3877787807814457e-17, 0, 1), _colorNames.TURQUOISE)) 


}
