import utils from "../../node_modules/decentraland-ecs-utils/index"
import { Wall } from "./wall"
import * as Globals from "../functions"
import {blueWall, greenWall, yellowWall} from "../functions"
import { Level } from "./level"
import { _colorNames } from "../gameSettings"
import { user_level, user_address } from "../game"

    export function createScene(level:Level)
    {

      const skull = new Entity()
      skull.setParent(level)
      skull.addComponentOrReplace(new GLTFShape('models/skull1.glb'))
      skull.addComponentOrReplace(new Transform({
        position: new Vector3(5,1,4),
        scale: new Vector3(.1,.1,.1)
      }))
      skull.addComponentOrReplace(new OnClick(e=>{
        log("pushing data to server")
        fetch(Globals.awsAPI, {
          method: 'post',
          body: JSON.stringify({"id": user_address, "level": user_level})
        }).then(function(response) {
          return response.json();
        }).then(function(data) {
          log("added user to the server")
        });
      }))

  const topologylevel2 = new Entity()
topologylevel2.setParent(level)
const gltfShape_5 = new GLTFShape('models/topologylevel2.glb')
topologylevel2.addComponentOrReplace(gltfShape_5)
const transform_110 = new Transform({
  position: new Vector3(16, 0.06939495457063316, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
topologylevel2.addComponentOrReplace(transform_110)

const biohazardsuit = new Entity()
biohazardsuit.setParent(level)
const gltfShape_6 = new GLTFShape('models/biohazardsuit.glb')
biohazardsuit.addComponentOrReplace(gltfShape_6)
const transform_111 = new Transform({
  position: new Vector3(25.5, 1.5, 17),
  rotation: new Quaternion(0, 0.19509032201612825, 0, 0.9807852804032304),
  scale: new Vector3(1, 1, 1)
})
biohazardsuit.addComponentOrReplace(transform_111)

const openbarrel = new Entity()
openbarrel.setParent(level)
const gltfShape_7 = new GLTFShape('models/openbarrel.glb')
openbarrel.addComponentOrReplace(gltfShape_7)
const transform_112 = new Transform({
  position: new Vector3(10, 1.590246778641803, 3.5),
  rotation: new Quaternion(0, -0.38268343236508984, 0, 0.9238795325112868),
  scale: new Vector3(1, 1, 1)
})
openbarrel.addComponentOrReplace(transform_112)

const openbarrel_2 = new Entity()
openbarrel_2.setParent(level)
openbarrel_2.addComponentOrReplace(gltfShape_7)
const transform_113 = new Transform({
  position: new Vector3(10.5, 1.5, 5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
openbarrel_2.addComponentOrReplace(transform_113)

const openbarrel_3 = new Entity()
openbarrel_3.setParent(level)
openbarrel_3.addComponentOrReplace(gltfShape_7)
const transform_114 = new Transform({
  position: new Vector3(13, 1.5, 2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
openbarrel_3.addComponentOrReplace(transform_114)

const closedbarrel = new Entity()
closedbarrel.setParent(level)
const gltfShape_8 = new GLTFShape('models/closedbarrel.glb')
closedbarrel.addComponentOrReplace(gltfShape_8)
const transform_115 = new Transform({
  position: new Vector3(14, 0, 3.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
closedbarrel.addComponentOrReplace(transform_115)

const closedbarrel_2 = new Entity()
closedbarrel_2.setParent(level)
closedbarrel_2.addComponentOrReplace(gltfShape_8)
const transform_116 = new Transform({
  position: new Vector3(18, 0, 2.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
closedbarrel_2.addComponentOrReplace(transform_116)

const openbarrel_4 = new Entity()
openbarrel_4.setParent(level)
openbarrel_4.addComponentOrReplace(gltfShape_7)
const transform_117 = new Transform({
  position: new Vector3(17, 1.5, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
openbarrel_4.addComponentOrReplace(transform_117)

const openbarrel_5 = new Entity()
openbarrel_5.setParent(level)
openbarrel_5.addComponentOrReplace(gltfShape_7)
const transform_118 = new Transform({
  position: new Vector3(24, 1.5, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
openbarrel_5.addComponentOrReplace(transform_118)

const openbarrel_6 = new Entity()
openbarrel_6.setParent(level)
openbarrel_6.addComponentOrReplace(gltfShape_7)
const transform_119 = new Transform({
  position: new Vector3(25.5, 1.5, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
openbarrel_6.addComponentOrReplace(transform_119)

const closedbarrel_3 = new Entity()
closedbarrel_3.setParent(level)
closedbarrel_3.addComponentOrReplace(gltfShape_8)
const transform_120 = new Transform({
  position: new Vector3(22, 0, 6.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
closedbarrel_3.addComponentOrReplace(transform_120)

const biohazardsuit_2 = new Entity()
biohazardsuit_2.setParent(level)
biohazardsuit_2.addComponentOrReplace(gltfShape_6)
const transform_121 = new Transform({
  position: new Vector3(17.5, 1.7678871423097409, 4.5),
  rotation: new Quaternion(0, -0.9807852804032305, 0, -0.1950903220161282),
  scale: new Vector3(1, 1, 1)
})
biohazardsuit_2.addComponentOrReplace(transform_121)

const biohazardsuit_3 = new Entity()
biohazardsuit_3.setParent(level)
biohazardsuit_3.addComponentOrReplace(gltfShape_6)
const transform_122 = new Transform({
  position: new Vector3(20.5, 2, 8.5),
  rotation: new Quaternion(0, 0.881921264348355, 0, 0.4713967368259978),
  scale: new Vector3(1, 1, 1)
})
biohazardsuit_3.addComponentOrReplace(transform_122)

const metalstructure = new Entity()
metalstructure.setParent(level)
const gltfShape_9 = new GLTFShape('models/metalstructure.glb')
metalstructure.addComponentOrReplace(gltfShape_9)
const transform_123 = new Transform({
  position: new Vector3(11.5, 0, 28),
  rotation: new Quaternion(0, -0.9999999999999999, 0, -3.608224830031759e-16),
  scale: new Vector3(0.8685689583211236, 0.8179400548103057, 0.8459883213939605)
})
metalstructure.addComponentOrReplace(transform_123)

}

    export function createWalls(level:Level)
    {

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26.5, 1.5030281017900293, 29.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))
    
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(27.5, 1.5, 28.5), new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844),_colorNames.GREEN))
        
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(30, 1.5, 29.5), new Quaternion(0, 0, 0, 1),_colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31, 1.5, 28.5), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476),_colorNames.YELLOW))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31, 1.5, 26.5), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476),_colorNames.YELLOW))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31, 1.5, 25), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476),_colorNames.YELLOW))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31, 1.5, 23), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476),_colorNames.YELLOW))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31, 1.5, 21), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476),_colorNames.YELLOW))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31, 1.5, 19.5), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476),_colorNames.YELLOW))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31, 1.5, 19.5), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476),_colorNames.YELLOW))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31, 1.5, 17.5),new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476),_colorNames.YELLOW))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31, 1.5, 17.5),new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476),_colorNames.YELLOW))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31, 1.5, 15.5),new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476),_colorNames.YELLOW))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31, 1.5, 13.5),new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476),_colorNames.YELLOW))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31, 1.5, 11.5),new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476),_colorNames.YELLOW))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31, 1.5, 9.5),new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476),_colorNames.YELLOW))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31, 1.5, 7.5),new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476),_colorNames.YELLOW))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31, 1.5, 5.5),new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476),_colorNames.YELLOW))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31, 1.5, 3.5),new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476),_colorNames.YELLOW))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31, 1.5, 1.5),new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476),_colorNames.YELLOW))
        
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(15, 1.5, 19.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(30, 1.5, 7), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4, 1.5, 9), new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844), _colorNames.GREEN))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(18.5, 1.5, 18),new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476),_colorNames.YELLOW))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(25.5, 1.5, 28.5),new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476),_colorNames.YELLOW))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(25.5, 1.5, 26.5),new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476),_colorNames.YELLOW))
        
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(30, 1.5, 0.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(28, 1.5, 0.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26, 1.5, 0.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(24, 1.5, 0.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(22, 1.5, 0.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(20, 1.5, 0.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(18, 1.5, 0.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 1.5, 0.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(15, 1.5, 0.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(12, 1.5, 0.5), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(10, 1.5, 0.5),new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(8, 1.5, 0.5), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(6, 1.5, 0.5), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4, 1.5, 0.5), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(2, 1.5, 0.5), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1, 1.5, 1.5), new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844), _colorNames.GREEN))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1, 1.5, 3.5), new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844), _colorNames.GREEN))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1, 1.5, 7.5), new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844), _colorNames.GREEN))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1, 1.5, 9.5), new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844), _colorNames.GREEN))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1, 1.5, 11.5), new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844), _colorNames.GREEN))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1, 1.5, 13.5), new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844), _colorNames.GREEN))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1, 1.5, 15.5), new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844), _colorNames.GREEN))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1, 1.5, 17.5), new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844), _colorNames.GREEN))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1, 1.5, 19.5), new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844), _colorNames.GREEN))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1, 1.5, 21), new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844), _colorNames.GREEN))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1, 1.5, 23), new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844), _colorNames.GREEN))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1, 1.5, 25), new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844), _colorNames.GREEN))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1, 1.5, 27), new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844), _colorNames.GREEN))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(24.5, 1.5, 25.5), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(22.5, 1.5, 25.5), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(20.5, 1.5, 25.5), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(18.5, 1.5, 25.5), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16.5, 1.5, 25.5), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(14.5, 1.5, 25.5), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(12.5, 1.5, 25.5), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(10.5, 1.5, 25.5), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(8.5, 1.5, 25.5), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(7.5, 1.5, 26.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(7.5, 1.5, 28.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(6.5, 1.5, 29.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4.5, 1.5, 29.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(2.5, 1.5, 29.5),new Quaternion(0, 0, 0, 1), _colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(15, 1.5, 7), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(28.5, 1.5, 22), new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844), _colorNames.GREEN))
        
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26, 1.5, 20), new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844), _colorNames.GREEN))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(28.5, 1.5, 18), new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844), _colorNames.GREEN))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26.5, 1.5, 16), new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844), _colorNames.GREEN))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(28.5, 1.5, 14), new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844), _colorNames.GREEN))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length,  new Vector3(27.5, 1.5, 7),new Quaternion(0, 0, 0, 1), _colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length,  new Vector3(25.5, 1.5, 7),new Quaternion(0, 0, 0, 1), _colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length,  new Vector3(22.5, 1.5, 7),new Quaternion(0, 0, 0, 1), _colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length,  new Vector3(20, 1.5, 7),new Quaternion(0, 0, 0, 1), _colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length,  new Vector3(17.5, 1.5, 7),new Quaternion(0, 0, 0, 1), _colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(18.5, 1.5, 10.5), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.YELLOW))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(29.5, 1.5, 25.5), new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844), _colorNames.GREEN))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(12.5, 1.5, 7), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(10.5, 1.5, 7), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(7.5, 1.5, 7), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(5, 1.5, 7), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4, 1.5, 11.5), new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844), _colorNames.GREEN))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4, 1.5, 14), new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844), _colorNames.GREEN))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4, 1.5, 16.5), new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844), _colorNames.GREEN))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4, 1.5, 19), new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844), _colorNames.GREEN))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4, 1.5, 21.5), new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844), _colorNames.GREEN))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4, 1.5, 24), new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844), _colorNames.GREEN))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4, 1.5, 26.5), new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844), _colorNames.GREEN))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(18.5, 1.5, 13), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.YELLOW))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(18.5, 1.5, 15.5), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.YELLOW))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(12.5, 1.5, 19.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(10, 1.5, 19.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(7.5, 1.5, 19.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(3, 1.5, 19.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(5.5, 1.5, 19.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(24, 1.5, 22), new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844), _colorNames.GREEN))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(24, 1.5, 19), new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844), _colorNames.GREEN))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(24, 1.5, 16), new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844), _colorNames.GREEN))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(24, 1.5, 13), new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844), _colorNames.GREEN))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(24, 1.5, 24.5), new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844), _colorNames.GREEN))



}
