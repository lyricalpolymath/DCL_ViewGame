import utils from "../../node_modules/decentraland-ecs-utils/index"
import { TriggerComponent, TriggerBoxShape } from "../../node_modules/decentraland-ecs-utils/triggers/triggerSystem"

import { Wall } from "./wall"
import { Level } from "./level"
import { _colorNames } from "../functions"
import * as Globals from "../functions"

// TODO - some of the levels have a TURQUOISE level

    export function createScene(level:Level)
    {
    
      const terrain_level3 = new Entity()
      terrain_level3.setParent(level)
      const gltfShape_2 = new GLTFShape('models/terrain_level3.glb')
      terrain_level3.addComponentOrReplace(gltfShape_2)
      const transform_6 = new Transform({
        position: new Vector3(16, 0.05670942611333096, 16),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      terrain_level3.addComponentOrReplace(transform_6)
      engine.addEntity(terrain_level3)
      
      const glasses = new Entity()
      glasses.addComponentOrReplace(new GLTFShape('models/redglasses.glb'))
      glasses.setParent(level)
      glasses.addComponentOrReplace(new Transform({
         position: new Vector3(14,3,16),
         scale: new Vector3(2,2,2)
       }))
       glasses.addComponentOrReplace(new OnClick(e=>{
        let dist = Globals.distance(glasses.getComponent(Transform).position, Globals.camera.position)

        if ( dist < 11)
         {
            engine.removeEntity(glasses)
            const portal = new Entity()
            portal.addComponentOrReplace(Globals.portal)
            portal.addComponentOrReplace(new Transform({
              position: new Vector3(8,1.5,7),
              rotation:Quaternion.Euler(0,90,0),
              scale: Vector3.One()
            }))
            portal.setParent(level)
            engine.addEntity(portal)
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

      
      const bones = new Entity()
      bones.setParent(level)
      const gltfShape_3 = new GLTFShape('models/bones.glb')
      bones.addComponentOrReplace(gltfShape_3)
      const transform_7 = new Transform({
        position: new Vector3(19.30763884641291, 2.324089780472775, 9.390925591692886),
        rotation: new Quaternion(0, 0.2836680091876895, 0, 0.9589225519109937),
        scale: new Vector3(0.8514639292521793, 0.7941227920310837, 0.7797930153772797)
      })
      bones.addComponentOrReplace(transform_7)
      
      const stones = new Entity()
      stones.setParent(level)
      const gltfShape_4 = new GLTFShape('models/stones.glb')
      stones.addComponentOrReplace(gltfShape_4)
      const transform_8 = new Transform({
        position: new Vector3(4.5, 1, 5.5),
        rotation: new Quaternion(0, -0.38268343236508984, 0, 0.9238795325112868),
        scale: new Vector3(0.38033979216698555, 0.4247742206081746, 0.3683142931454064)
      })
      stones.addComponentOrReplace(transform_8)
      
      const stones_2 = new Entity()
      stones_2.setParent(level)
      stones_2.addComponentOrReplace(gltfShape_4)
      const transform_9 = new Transform({
        position: new Vector3(20, 0.5, 8.5),
        rotation: new Quaternion(0, -0.923879532511287, 0, 0.3826834323650899),
        scale: new Vector3(0.1916429149367341, 0.15557620331230382, 0.17839852579603924)
      })
      stones_2.addComponentOrReplace(transform_9)
      
      const stones_3 = new Entity()
      stones_3.setParent(level)
      stones_3.addComponentOrReplace(gltfShape_4)
      const transform_10 = new Transform({
        position: new Vector3(2.5, 0.5, 4),
        rotation: new Quaternion(0, -0.2902846772544625, 0, 0.9569403357322094),
        scale: new Vector3(0.1916429149367341, 0.15557620331230382, 0.17839852579603924)
      })
      stones_3.addComponentOrReplace(transform_10)
      
      const stones_4 = new Entity()
      stones_4.setParent(level)
      stones_4.addComponentOrReplace(gltfShape_4)
      const transform_11 = new Transform({
        position: new Vector3(2, 0.5, 28.5),
        rotation: new Quaternion(0, -0.2902846772544625, 0, 0.9569403357322094),
        scale: new Vector3(0.1916429149367341, 0.15557620331230382, 0.17839852579603924)
      })
      stones_4.addComponentOrReplace(transform_11)
      
      const stones_5 = new Entity()
      stones_5.setParent(level)
      stones_5.addComponentOrReplace(gltfShape_4)
      const transform_12 = new Transform({
        position: new Vector3(27, 0.5, 24.5),
        rotation: new Quaternion(-0.6343932841636457, 2.220446049250313e-16, -0.7730104533627369, 2.636779683484747e-16),
        scale: new Vector3(0.1916429149367341, 0.15557620331230382, 0.17839852579603924)
      })
      stones_5.addComponentOrReplace(transform_12)

      const trunks_flat = new Entity()
      trunks_flat.setParent(level)
      const gltfShape_6 = new GLTFShape('models/trunks-flat.glb')
      trunks_flat.addComponentOrReplace(gltfShape_6)
      const transform_15 = new Transform({
        position: new Vector3(25, 2, 9),
        rotation: new Quaternion(0, 0.19509032201612825, 0, 0.9807852804032304),
        scale: new Vector3(0.32281732419231446, 0.39630021111265634, 0.520878120795949)
      })
      trunks_flat.addComponentOrReplace(transform_15)

      const trunk1_flat = new Entity()
      trunk1_flat.setParent(level)
      const gltfShape_7 = new GLTFShape('models/trunk1-flat.glb')
      trunk1_flat.addComponentOrReplace(gltfShape_7)
      const transform_16 = new Transform({
        position: new Vector3(29.5, 2.248190535998476, 12),
        rotation: new Quaternion(0, -0.006283911572028571, 0, 0.9999802560327646),
        scale: new Vector3(1, 1, 1)
      })
      trunk1_flat.addComponentOrReplace(transform_16)

      const trunk2_flat = new Entity()
      trunk2_flat.setParent(level)
      const gltfShape_8 = new GLTFShape('models/trunk2-flat.glb')
      trunk2_flat.addComponentOrReplace(gltfShape_8)
      const transform_17 = new Transform({
        position: new Vector3(15.806893807903766, 0.9795452910638911, 8.774971198797777),
        rotation: new Quaternion(0, 0.812082185887648, 0, 0.5835430775563523),
        scale: new Vector3(0.4253677192280634, 0.5094055633237993, 0.3672790480036987)
      })
      trunk2_flat.addComponentOrReplace(transform_17)

      const trunk2_flat_2 = new Entity()
      trunk2_flat_2.setParent(level)
      trunk2_flat_2.addComponentOrReplace(gltfShape_8)
      const transform_18 = new Transform({
        position: new Vector3(5.5, 1, 27),
        rotation: new Quaternion(0, -0.09801714032956049, 0, 0.9951847266721974),
        scale: new Vector3(0.6757612085206218, 0.7101759958450913, 0.6146731602348378)
      })
      trunk2_flat_2.addComponentOrReplace(transform_18)

      const trunk3_flat = new Entity()
      trunk3_flat.setParent(level)
      const gltfShape_9 = new GLTFShape('models/trunk3-flat.glb')
      trunk3_flat.addComponentOrReplace(gltfShape_9)
      const transform_19 = new Transform({
        position: new Vector3(5.5, 1.5, 13),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(0.39720625287739253, 0.682833970266735, 0.43448561380562545)
      })
      trunk3_flat.addComponentOrReplace(transform_19)

      const trunk_flat = new Entity()
      trunk_flat.setParent(level)
      const gltfShape_10 = new GLTFShape('models/trunk-flat.glb')
      trunk_flat.addComponentOrReplace(gltfShape_10)
      const transform_20 = new Transform({
        position: new Vector3(13.5, 0.49999999999999994, 16.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      trunk_flat.addComponentOrReplace(transform_20)

      const trunk_flat_2 = new Entity()
      trunk_flat_2.setParent(level)
      trunk_flat_2.addComponentOrReplace(gltfShape_10)
      const transform_21 = new Transform({
        position: new Vector3(24.5, 0.5, 19.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(0.8457193451888187, 0.8992071768163115, 0.7296020906209755)
      })
      trunk_flat_2.addComponentOrReplace(transform_21)

      const tree_split_flat = new Entity()
      tree_split_flat.setParent(level)
      const gltfShape_11 = new GLTFShape('models/tree-split-flat.glb')
      tree_split_flat.addComponentOrReplace(gltfShape_11)
      const transform_22 = new Transform({
        position: new Vector3(17, 3.5, 22),
        rotation: new Quaternion(0, -0.2902846772544624, 0, 0.9569403357322089),
        scale: new Vector3(1, 1, 1)
      })
      tree_split_flat.addComponentOrReplace(transform_22)

      const tree1_flat = new Entity()
      tree1_flat.setParent(level)
      const gltfShape_12 = new GLTFShape('models/tree1-flat.glb')
      tree1_flat.addComponentOrReplace(gltfShape_12)
      const transform_23 = new Transform({
        position: new Vector3(12.449440260474297, 11.091053965731705, 23.850838277656333),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      tree1_flat.addComponentOrReplace(transform_23)

      const tree_orig_flat = new Entity()
      tree_orig_flat.setParent(level)
      const gltfShape_13 = new GLTFShape('models/tree-orig-flat.glb')
      tree_orig_flat.addComponentOrReplace(gltfShape_13)
      const transform_24 = new Transform({
        position: new Vector3(9, 6.668833995582675, 17.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      tree_orig_flat.addComponentOrReplace(transform_24)

      const tree_orig_flat_2 = new Entity()
      tree_orig_flat_2.setParent(level)
      tree_orig_flat_2.addComponentOrReplace(gltfShape_13)
      const transform_25 = new Transform({
        position: new Vector3(12, 6.5, 27.5),
        rotation: new Quaternion(0, -0.5555702330196024, 0, 0.8314696123025453),
        scale: new Vector3(1, 1, 1)
      })
      tree_orig_flat_2.addComponentOrReplace(transform_25)


    }

    export function createWalls(level:Level)
    {

        // example // level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26.5, 1.5030281017900293, 29.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(17.5, 1.5, 16), new Quaternion(0, 0, 0, 1), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(20.5, 1.5, 30), new Quaternion(0, 0, 0, 1), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(22.5, 1.5, 30), new Quaternion(0, 0, 0, 1), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(23.5, 1.5, 29), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(25, 1.5, 27.5), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(2.5, 1.5, 22.5), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(2.5, 1.5, 16), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(7.5, 1.5, 23.5), new Quaternion(0, 0, 0, 1), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(9.5, 1.5, 23.5), new Quaternion(0, 0, 0, 1), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(10.5, 1.5, 2), new Quaternion(0, 0, 0, 1), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(8.5, 1.5, 2), new Quaternion(0, 0, 0, 1), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(6.5, 1.5, 2), new Quaternion(0, 0, 0, 1), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4.5, 1.5, 2), new Quaternion(0, 0, 0, 1), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(20.5, 1.5, 18), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(20.5, 1.5, 16), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(20.5, 1.5, 14), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(20.5, 1.5, 2), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(14.5, 1.5, 9), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(14.5, 1.5, 7), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(14.5, 1.5, 5), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.RED))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(3.115070126396083, 1.5, 24), new Quaternion(0, -0.38268343236508967, 0, 0.9238795325112867), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(3, 1.5, 9), new Quaternion(0, -0.38268343236508967, 0, 0.9238795325112867), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(2, 1.5, 9), new Quaternion(0, -0.38268343236508967, 0, 0.9238795325112867), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(8.5, 1.5, 11), new Quaternion(0, -0.38268343236508967, 0, 0.9238795325112867), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(11.5, 1.5, 12.5), new Quaternion(0, -0.38268343236508967, 0, 0.9238795325112867), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(13.5, 1.5, 11), new Quaternion(0, -0.38268343236508967, 0, 0.9238795325112867), _colorNames.RED))  
  
  
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(21.5, 1.5, 1), new Quaternion(0, 0, 0, 1), _colorNames.BLUE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(24.5, 1.5, 1), new Quaternion(0, 0, 0, 1), _colorNames.BLUE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(19.5, 1.5, 1), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.BLUE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4.5, 1.5, 11), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.BLUE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(23, 1.5, 11), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.BLUE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16.5, 1.5, 13), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.BLUE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16.5, 1.5, 11), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.BLUE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(27, 1.5, 1), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.BLUE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26.5, 1.5, 1), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.BLUE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26.5, 1.5, 1), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.BLUE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(27.606486409734632, 1.5, 1), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.BLUE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(11.5, 1.5, 9), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.BLUE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(11.5, 1.5, 7), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.BLUE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(11.5, 1.5, 5), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.BLUE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(11.5, 1.5, 3), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.BLUE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(12, 1.5, 31.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(10, 1.5, 31.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(8, 1.5, 31.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(6, 1.5, 31.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE)) 
  
  
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(15.5, 1.5, 31), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.TURQUOISE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(15.5, 1.5, 29.093403591194757), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.TURQUOISE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(21.5, 1.5, 31), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.TURQUOISE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(29, 1.5, 31), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.TURQUOISE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(29, 1.5, 29), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.TURQUOISE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(15.5, 1.5, 14), new Quaternion(0, 0.9999999999999999, 0, 1.3877787807814457e-16), _colorNames.TURQUOISE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(13.5, 1.5, 14), new Quaternion(0, 0.9999999999999999, 0, 1.3877787807814457e-16), _colorNames.TURQUOISE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(11.5, 1.5, 14), new Quaternion(0, 0.9999999999999999, 0, 1.3877787807814457e-16), _colorNames.TURQUOISE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(9.5, 1.5, 14), new Quaternion(0, 0.9999999999999999, 0, 1.3877787807814457e-16), _colorNames.TURQUOISE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(5.5, 1.5, 10), new Quaternion(0, 0.9999999999999999, 0, 1.3877787807814457e-16), _colorNames.TURQUOISE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(7.5, 1.5, 10), new Quaternion(0, 0.9999999999999999, 0, 1.3877787807814457e-16), _colorNames.TURQUOISE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(9.5, 1.5, 10), new Quaternion(0, 0.9999999999999999, 0, 1.3877787807814457e-16), _colorNames.TURQUOISE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(11.5, 1.5, 10), new Quaternion(0, 0.9999999999999999, 0, 1.3877787807814457e-16), _colorNames.TURQUOISE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(13.5, 1.5, 10), new Quaternion(0, 0.9999999999999999, 0, 1.3877787807814457e-16), _colorNames.TURQUOISE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(24, 1.5, 26.511208320232992), new Quaternion(0, 0.9999999999999999, 0, 1.3877787807814457e-16), _colorNames.TURQUOISE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(22, 1.5, 26.5), new Quaternion(0, 0.9999999999999999, 0, 1.3877787807814457e-16), _colorNames.TURQUOISE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(20, 1.5, 26.5), new Quaternion(0, 0.9999999999999999, 0, 1.3877787807814457e-16), _colorNames.TURQUOISE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16.128487093327216, 1.5, 26.5), new Quaternion(0, 0.9999999999999999, 0, 1.3877787807814457e-16), _colorNames.TURQUOISE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(18.10287364891886, 1.5, 26.5), new Quaternion(0, 0.9999999999999999, 0, 1.3877787807814457e-16), _colorNames.TURQUOISE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(21.5, 1.5, 29), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.TURQUOISE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(21.5, 1.5, 26), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.TURQUOISE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(21.5, 1.5, 24), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.TURQUOISE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(21.5, 1.5, 22), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.TURQUOISE)) 
  
  
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(5.5, 1.5, 23.5), new Quaternion(0, 0, 0, 1), _colorNames.GREEN)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(3.5, 1.5, 23.5), new Quaternion(0, 0, 0, 1), _colorNames.GREEN)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(3.5, 1.5, 17), new Quaternion(0, 0, 0, 1), _colorNames.GREEN)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(5.5, 1.5, 17), new Quaternion(0, 0, 0, 1), _colorNames.GREEN)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(7.5, 1.5, 17), new Quaternion(0, 0, 0, 1), _colorNames.GREEN)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(9.5, 1.5, 17), new Quaternion(0, 0, 0, 1), _colorNames.GREEN)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(17.5, 1.5, 17), new Quaternion(0, 0, 0, 1), _colorNames.GREEN)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(19.5, 1.5, 17), new Quaternion(0, 0, 0, 1), _colorNames.GREEN)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(21.5, 1.5, 17), new Quaternion(0, 0, 0, 1), _colorNames.GREEN)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(10.5, 1.5, 16), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.GREEN)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(10.5, 1.5, 14), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.GREEN)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(10.5, 1.5, 30.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.GREEN)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(10.5, 1.5, 28.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.GREEN)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(10.5, 1.5, 26.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.GREEN)) 
  
  
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(9.704090483121625, 1.5, 22.773487800447075), new Quaternion(0, -0.38268343236508984, 0, 0.9238795325112868), _colorNames.PURPLE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(8.38147453145028, 1.5, 21.5), new Quaternion(0, -0.38268343236508984, 0, 0.9238795325112868), _colorNames.PURPLE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(9.150972039317661, 1.5, 14.715560161196638), new Quaternion(0, -0.38268343236508984, 0, 0.9238795325112868), _colorNames.PURPLE))
  
  
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 1.5, 18.5), new Quaternion(0, 0, 0, 1), _colorNames.WHITE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 1.5, 22.5), new Quaternion(0, 0, 0, 1), _colorNames.WHITE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 1.5, 20.5), new Quaternion(0, -0.2902846772544624, 0, 0.9569403357322089), _colorNames.WHITE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(13.5, 1.5, 20.5), new Quaternion(0, -0.2902846772544624, 0, 0.9569403357322089), _colorNames.WHITE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(11, 1.5, 20.5), new Quaternion(0, -0.2902846772544624, 0, 0.9569403357322089), _colorNames.WHITE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26.698235109698306, 1.5, 21.562511773487945), new Quaternion(0, -0.2902846772544624, 0, 0.9569403357322089), _colorNames.WHITE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26.5, 1.5, 4.5), new Quaternion(0, -0.2902846772544624, 0, 0.9569403357322089), _colorNames.WHITE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26.5, 1.5, 7), new Quaternion(0, -0.2902846772544624, 0, 0.9569403357322089), _colorNames.WHITE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(22.5, 1.5, 7), new Quaternion(0, -0.2902846772544624, 0, 0.9569403357322089), _colorNames.WHITE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(20.5, 1.5, 7), new Quaternion(0, -0.2902846772544624, 0, 0.9569403357322089), _colorNames.WHITE)) 
  
  
}