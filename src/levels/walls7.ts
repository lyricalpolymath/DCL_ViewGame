import utils from "../../node_modules/decentraland-ecs-utils/index"
import { TriggerComponent, TriggerBoxShape } from "../../node_modules/decentraland-ecs-utils/triggers/triggerSystem"

import { Wall } from "./wall"
import { Level } from "./level"
import { _colorNames } from "../functions"
import * as Globals from "../functions"


    export function createScene(level:Level)
    {

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



const magnifyingGlass = new Entity()
magnifyingGlass.setParent(level)
const gltfShape_17 = new GLTFShape('models/magnifyingGlass.glb')
magnifyingGlass.addComponentOrReplace(gltfShape_17)
const transform_254 = new Transform({
  position: new Vector3(28.5, 1, 24),
  rotation: new Quaternion(0, -0.47139673682599775, 0, 0.8819212643483552),
  scale: new Vector3(1, 1, 1)
})
magnifyingGlass.addComponentOrReplace(transform_254)


magnifyingGlass.addComponentOrReplace(new OnClick(e=>{
        let dist = Globals.distance(magnifyingGlass.getComponent(Transform).position, Globals.camera.position)
        if ( dist < 3)
         {
           
            engine.removeEntity(magnifyingGlass)
            const portal = new Entity()
            portal.addComponentOrReplace(Globals.portal)
            portal.addComponentOrReplace(new Transform({
              position: new Vector3(1,1.5,25),
              scale: Vector3.One(),
              rotation:Quaternion.Euler(0,90,0)
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
engine.addEntity(magnifyingGlass)

      const ceilingAnimation = new Entity()
      ceilingAnimation.setParent(level)
      const gltfShape_9 = new GLTFShape('models/ceilingAnimation.glb')
      ceilingAnimation.addComponentOrReplace(gltfShape_9)
      const transform_185 = new Transform({
        position: new Vector3(16, 8.36802353605908, 16),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(0.9562221109929432, 1.1719785835636767, 1.0036075096848407)
      })
      ceilingAnimation.addComponentOrReplace(transform_185)
      engine.addEntity(ceilingAnimation)
      
      
      ceilingAnimation.addComponentOrReplace(new Animator())
      ceilingAnimation.getComponent(Animator).addClip(new AnimationState("Atom_Array_1|CINEMA_4D_Main|Layer0_Atom_Array_1_Atom_Array_1"))
      ceilingAnimation.getComponent(Animator).getClip("Atom_Array_1|CINEMA_4D_Main|Layer0_Atom_Array_1_Atom_Array_1").play()
  
      
      ceilingAnimation.getComponent(Animator).addClip(new AnimationState("Cloner_2_5|CINEMA_4D_Main|Layer0_Cloner_2_5_Cloner_2_5"))
      ceilingAnimation.getComponent(Animator).getClip("Cloner_2_5|CINEMA_4D_Main|Layer0_Cloner_2_5_Cloner_2_5").play()  

      ceilingAnimation.getComponent(Animator).addClip(new AnimationState("Cloner_1_0|CINEMA_4D_Main|Layer0_Cloner_1_0_Cloner_1_0"))
      ceilingAnimation.getComponent(Animator).getClip("Cloner_1_0|CINEMA_4D_Main|Layer0_Cloner_1_0_Cloner_1_0").play()  

      ceilingAnimation.getComponent(Animator).addClip(new AnimationState("Cloner_1_1|CINEMA_4D_Main|Layer0_Cloner_1_1_Cloner_1_1"))
      ceilingAnimation.getComponent(Animator).getClip("Cloner_1_1|CINEMA_4D_Main|Layer0_Cloner_1_1_Cloner_1_1").play()  

      ceilingAnimation.getComponent(Animator).addClip(new AnimationState("Cloner_1_2_2|CINEMA_4D_Main|Layer0_Cloner_1_2_2_Cloner_1_2_2"))
      ceilingAnimation.getComponent(Animator).getClip("Cloner_1_2_2|CINEMA_4D_Main|Layer0_Cloner_1_2_2_Cloner_1_2_2").play()  

      ceilingAnimation.getComponent(Animator).addClip(new AnimationState("Cloner_3|CINEMA_4D_Main|Layer0_Cloner_3_Cloner_3"))
      ceilingAnimation.getComponent(Animator).getClip("Cloner_3|CINEMA_4D_Main|Layer0_Cloner_3_Cloner_3").play()  

      ceilingAnimation.getComponent(Animator).addClip(new AnimationState("Cloner_2_0|CINEMA_4D_Main|Layer0_Cloner_2_0_Cloner_2_0"))
      ceilingAnimation.getComponent(Animator).getClip("Cloner_2_0|CINEMA_4D_Main|Layer0_Cloner_2_0_Cloner_2_0").play()  

      ceilingAnimation.getComponent(Animator).addClip(new AnimationState("Cloner_2_1_2|CINEMA_4D_Main|Layer0_Cloner_2_1_2_Cloner_2_1_2"))
      ceilingAnimation.getComponent(Animator).getClip("Cloner_2_1_2|CINEMA_4D_Main|Layer0_Cloner_2_1_2_Cloner_2_1_2").play()  

      ceilingAnimation.getComponent(Animator).addClip(new AnimationState("Cloner_2_2_4|CINEMA_4D_Main|Layer0_Cloner_2_2_4_Cloner_2_3_4"))
      ceilingAnimation.getComponent(Animator).getClip("Cloner_2_2_4|CINEMA_4D_Main|Layer0_Cloner_2_2_4_Cloner_2_3_4").play()  

      ceilingAnimation.getComponent(Animator).addClip(new AnimationState("Cloner_4|CINEMA_4D_Main|Layer0_Cloner_4_Cloner_4"))
      ceilingAnimation.getComponent(Animator).getClip("Cloner_4|CINEMA_4D_Main|Layer0_Cloner_4_Cloner_4").play()  

      ceilingAnimation.getComponent(Animator).addClip(new AnimationState("Cloner_0|CINEMA_4D_Main|Layer0_Cloner_0_Cloner_0"))
      ceilingAnimation.getComponent(Animator).getClip("Cloner_0|CINEMA_4D_Main|Layer0_Cloner_0_Cloner_0").play()  

      ceilingAnimation.getComponent(Animator).addClip(new AnimationState("CCloner_1_2|CINEMA_4D_Main|Layer0_Cloner_1_2_Cloner_1_2"))
      ceilingAnimation.getComponent(Animator).getClip("Cloner_1_2|CINEMA_4D_Main|Layer0_Cloner_1_2_Cloner_1_2").play()  

      ceilingAnimation.getComponent(Animator).addClip(new AnimationState("Cloner_2_3|CINEMA_4D_Main|Layer0_Cloner_2_3_Cloner_2_3"))
      ceilingAnimation.getComponent(Animator).getClip("Cloner_2_3|CINEMA_4D_Main|Layer0_Cloner_2_3_Cloner_2_3").play()  


    }

    export function createWalls(level:Level)
    {
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31, 1.5, 14.707521096231076), new Quaternion(0, 0.3826834323650897, 0, 0.9238795325112867), _colorNames.GREEN)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(15.5, 1.5, 31), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(17.5, 1.5, 31), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1, 1.5, 17), new Quaternion(0, 0, 0, 1), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(11.954221197923708, 1.5, 19.980415577705557), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865478), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(20.497413108040824, 1.5, 1.7349519994391223), new Quaternion(0, -0.19509032201612816, 0, 0.9807852804032303), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(30, 1.5, 16.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865478), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16.5, 1.5, 30), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(2, 1.5, 16), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865478), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(27.5, 1.5, 4), new Quaternion(0, -0.47139673682599775, 0, 0.8819212643483552), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(22.5, 1.5, 31.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(28.5, 1.5, 31.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31.5, 1.5, 30.5), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31.5, 1.5, 26.5), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(28, 1.5, 22.5), new Quaternion(0, -0.9238795325112867, 0, 0.38268343236509006), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31.5, 1.5, 22.5), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 1.5, 20.5), new Quaternion(0, -0.38268343236508967, 0, 0.9238795325112867), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31.5, 1.5, 18.5), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31.5, 1.5, 12.5), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31.5, 1.5, 10.5), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31.5, 1.5, 6.5), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(30.5, 1.5, 1.5), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(28.5, 1.5, 1.5), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(24.5, 1.5, 1.5), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(18.5, 1.5, 1.5), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16.5, 1.5, 1.5), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(12.5, 1.5, 1.5), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(6.5, 1.5, 1.5), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4.5, 1.5, 1.5), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(2.5, 1.5, 1.5), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1.5, 1.5, 2.5), new Quaternion(0, -0.7071067811865475, 0, 0.7071067811865476), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1.5, 1.5, 12.172505459183276), new Quaternion(0, -0.7071067811865475, 0, 0.7071067811865476), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1.5, 1.5, 14.084322591944051), new Quaternion(0, -0.7071067811865475, 0, 0.7071067811865476), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1.5, 1.5, 20), new Quaternion(0, -0.7071067811865475, 0, 0.7071067811865476), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1.5, 1.5, 24), new Quaternion(0, -0.7071067811865475, 0, 0.7071067811865476), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1.5, 1.5, 28), new Quaternion(0, -0.7071067811865475, 0, 0.7071067811865476), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(14.5, 1.5, 31.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(12.5, 1.5, 29.5), new Quaternion(0, -0.38268343236508984, 0, 0.9238795325112868), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(10.5, 1.5, 31.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(6.5, 1.5, 31.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(2.5, 1.5, 31.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(19.5, 1.5, 3), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.PURPLE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(19.5, 1.5, 5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.PURPLE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16.5, 1.5, 6), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.PURPLE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(13.5, 1.5, 7), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.PURPLE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16.5, 1.5, 8), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.PURPLE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(20.5, 1.5, 8), new Quaternion(0, 0, 0, 1), _colorNames.GREEN)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(22.5, 1.5, 8), new Quaternion(0, 0, 0, 1), _colorNames.GREEN)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(23.5, 1.5, 9.642815267582801), new Quaternion(0, -1.0000000000000004, 0, 2.636779683484747e-16), _colorNames.BLUE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(21.5, 1.5, 9.629029626865492), new Quaternion(0, -1.0000000000000004, 0, 2.636779683484747e-16), _colorNames.BLUE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(15.5, 1.5, 9), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(23.661445481822906, 1.5, 12), new Quaternion(0, 5.551115123125783e-17, 0, 0.9999999999999999), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(27.5, 1.5, 12), new Quaternion(0, 5.551115123125783e-17, 0, 0.9999999999999999), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(28.5, 1.5, 11), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(5.5, 1.5, 7), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(29.5, 1.5, 6), new Quaternion(0, 5.551115123125783e-17, 0, 0.9999999999999999), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31, 1.5, 3.5), new Quaternion(0, -0.7730104533627373, 0, 0.6343932841636457), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(21.5, 1.5, 19), new Quaternion(0, 0.38268343236508984, 0, 0.9238795325112868), _colorNames.GREEN)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(27.45672122136531, 1.5, 18.8761734190171), new Quaternion(0, 0.3826834323650897, 0, 0.9238795325112867), _colorNames.GREEN)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26.842164470721222, 1.5, 20.5), new Quaternion(0, 0.7071067811865474, 0, 0.7071067811865474), _colorNames.GREEN)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26.842164470721222, 1.5, 20.5), new Quaternion(0, 0.7071067811865474, 0, 0.7071067811865474), _colorNames.GREEN)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(28.5, 1.5, 25.5949361155967), new Quaternion(0, 0.9807852804032304, 0, 0.19509032201612828), _colorNames.GREEN)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(29.78032474391376, 1.5, 25.04395592843315), new Quaternion(0, 0.8314696123025452, 0, -0.5555702330196021), _colorNames.GREEN)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(8, 1.5, 23.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(14.260142728627166, 1.5, 19.5), new Quaternion(0, -0.19509032201612816, 0, 0.9807852804032303), _colorNames.BLUE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(9.5, 1.5, 22), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.BLUE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(9.5, 1.5, 22), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.BLUE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(5.5, 1.5, 22), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.BLUE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(5.5, 1.5, 26), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.BLUE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(8.5, 1.5, 11), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(11.722794575271557, 1.5, 18.018389641824005), new Quaternion(0, 0.9238795325112865, 0, 0.3826834323650897), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(23.5, 1.5, 18.5), new Quaternion(0, -0.9807852804032308, 0, -0.19509032201612803), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26.5, 1.5, 26), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26.5, 1.5, 29.5), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(25, 1.5, 29.5), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(21, 1.5, 15.328188920965758), new Quaternion(0, -0.9238795325112867, 0, 0.38268343236509006), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(22, 1.5, 26), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(22, 1.5, 22), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26, 1.5, 15.5), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(28, 1.5, 15.5), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(22, 1.5, 6), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(11, 1.5, 6), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(11, 1.5, 8.5), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(11, 1.5, 15.5), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(11, 1.5, 23), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(11, 1.5, 27), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(7.5, 1.5, 27), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(7.5, 1.5, 12), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(5.5, 1.5, 13), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(5.5, 1.5, 17), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(3, 1.5, 29.5), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(19.5, 1.5, 29.5), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(24, 1.5, 21), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(27, 1.5, 10.5), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(29, 1.5, 28), new Quaternion(0, 5.551115123125783e-17, 0, 0.9999999999999999), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(20.036813271331134, 1.5, 28), new Quaternion(0, 5.551115123125783e-17, 0, 0.9999999999999999), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(9.5, 1.5, 28), new Quaternion(0, 5.551115123125783e-17, 0, 0.9999999999999999), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(13.5, 1.5, 15.163320196778582), new Quaternion(0, -0.5555702330196024, 0, 0.8314696123025453), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(18, 1.5, 18.5), new Quaternion(0, 5.551115123125783e-17, 0, 0.9999999999999999), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(20, 1.5, 22), new Quaternion(0, 5.551115123125783e-17, 0, 0.9999999999999999), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16.5, 1.5, 22.5), new Quaternion(0, 5.551115123125783e-17, 0, 0.9999999999999999), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4, 1.5, 9.5), new Quaternion(0, 5.551115123125783e-17, 0, 0.9999999999999999), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4, 1.5, 14), new Quaternion(0, 5.551115123125783e-17, 0, 0.9999999999999999), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4.5, 1.5, 25.5), new Quaternion(0, 5.551115123125783e-17, 0, 0.9999999999999999), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(14, 1.5, 11.64305247111914), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(18.5, 1.5, 11), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26, 1.5, 7.5), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(29.5, 1.5, 7.5), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(29.5, 1.5, 20.5), new Quaternion(0, -0.773010453362737, 0, 0.6343932841636457), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(23, 1.5, 30), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.RED)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(12.5, 1.5, 24), new Quaternion(0, -0.2902846772544624, 0, 0.9569403357322089), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(18, 1.5, 24), new Quaternion(0, -0.2902846772544624, 0, 0.9569403357322089), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(18, 1.5, 28.5), new Quaternion(0, -0.2902846772544624, 0, 0.9569403357322089), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(22.5, 1.5, 27.99374881693292), new Quaternion(0, -0.2902846772544624, 0, 0.9569403357322089), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(25.291667980742623, 1.5, 27.5), new Quaternion(0, -0.2902846772544624, 0, 0.9569403357322089), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(21, 1.5, 10.780224555216606), new Quaternion(0, -0.4713967368259977, 0, 0.881921264348355), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(17.5, 1.5, 3), new Quaternion(0, -0.2902846772544624, 0, 0.9569403357322089), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(8, 1.5, 7.5), new Quaternion(0, -0.2902846772544624, 0, 0.9569403357322089), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(25, 1.5, 6), new Quaternion(0, -0.2902846772544624, 0, 0.9569403357322089), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(23, 1.5, 2.5), new Quaternion(0, -0.2902846772544624, 0, 0.9569403357322089), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(13.5, 1.5, 3.5), new Quaternion(0, -0.7071067811865477, 0, 0.7071067811865476), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(9.5, 1.5, 2.5), new Quaternion(0, -0.2902846772544624, 0, 0.9569403357322089), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(10, 1.5, 16.5), new Quaternion(0, -0.2902846772544624, 0, 0.9569403357322089), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(10, 1.5, 25.5), new Quaternion(0, -0.2902846772544624, 0, 0.9569403357322089), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(2, 1.5, 7), new Quaternion(0, -0.2902846772544624, 0, 0.9569403357322089), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(24.5, 1.5, 23.5), new Quaternion(0, -0.2902846772544624, 0, 0.9569403357322089), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(9.359488521124392, 1.5, 19), new Quaternion(0, -0.2902846772544624, 0, 0.9569403357322089), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 1.5, 16), new Quaternion(0, 0, 0, 1), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(8.5, 1.5, 29.5), new Quaternion(0, 0, 0, 1), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(5, 1.5, 29.5), new Quaternion(0, 0, 0, 1), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(5, 1.5, 18.5), new Quaternion(0, 0, 0, 1), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(12, 1.5, 5), new Quaternion(0, 0, 0, 1), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(9, 1.5, 4.5), new Quaternion(0, 0, 0, 1), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(15.5, 1.5, 26), new Quaternion(0, 0.19509032201612825, 0, 0.9807852804032304), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(25, 1.5, 22), new Quaternion(0, 0, 0, 1), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(25, 1.5, 14.5), new Quaternion(0, 0, 0, 1), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(25, 1.5, 8), new Quaternion(0, 0, 0, 1), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(28.5, 1.5, 13), new Quaternion(0, 0, 0, 1), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26.5, 1.5, 13), new Quaternion(0, 0, 0, 1), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(21, 1.5, 13), new Quaternion(0, 0, 0, 1), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(17.5, 1.5, 13), new Quaternion(0, 0, 0, 1), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(19, 1.5, 16), new Quaternion(0, 0, 0, 1), _colorNames.BLUE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 1.5, 18), new Quaternion(0, 0, 0, 1), _colorNames.BLUE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(21, 1.5, 25), new Quaternion(0, 0, 0, 1), _colorNames.BLUE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(25.5, 1.5, 2), new Quaternion(0, 0, 0, 1), _colorNames.BLUE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(25.5, 1.5, 19), new Quaternion(0, 0, 0, 1), _colorNames.BLUE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(3.5, 1.5, 21), new Quaternion(0, 0, 0, 1), _colorNames.BLUE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(3.5, 1.5, 4), new Quaternion(0, 0.8314696123025452, 0, -0.5555702330196021), _colorNames.GREEN)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(3.5, 1.5, 27.5), new Quaternion(0, 0.4713967368259975, 0, 0.8819212643483549), _colorNames.WHITE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(13, 1.5, 13), new Quaternion(0, 0, 0, 1), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(14, 1.5, 21), new Quaternion(0, -0.2902846772544624, 0, 0.9569403357322089), _colorNames.TURQUOISE)) 
      level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(17, 1.5, 4), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.YELLOW)) 
    }