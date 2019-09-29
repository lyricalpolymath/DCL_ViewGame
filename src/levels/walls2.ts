import utils from "../../node_modules/decentraland-ecs-utils/index"
import { Wall } from "./wall"
import * as Globals from "../functions"
import {blueWall, greenWall, yellowWall} from "../functions"
import { Level } from "./level"
import { _colorNames } from "../gameSettings"
import { user_level, user_address } from "../game"

    export function createScene(level:Level)
    {

<<<<<<< HEAD
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
        
          // }));

/*




all these entities below are created from the DCL Builder and need to be covnerted to our Wall system 


const yellowwall_7 = new Entity()
yellowwall_7.setParent(level)
yellowwall_7.addComponentOrReplace(gltfShape_4)
const transform_15 = new Transform({
  position: new Vector3(31, 1.5, 17.5),
  rotation: new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476),
  scale: Vector3.Zero()
})
yellowwall_7.addComponentOrReplace(transform_15)
engine.addEntity(yellowwall_7)

const yellowwall_8 = new Entity()
yellowwall_8.setParent(level)
yellowwall_8.addComponentOrReplace(gltfShape_4)
const transform_16 = new Transform({
  position: new Vector3(31, 1.5, 15.5),
  rotation: new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476),
  scale: Vector3.Zero()
})
yellowwall_8.addComponentOrReplace(transform_16)
engine.addEntity(yellowwall_8)

const yellowwall_9 = new Entity()
yellowwall_9.setParent(level)
yellowwall_9.addComponentOrReplace(gltfShape_4)
const transform_17 = new Transform({
  position: new Vector3(31, 1.5, 13.5),
  rotation: new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476),
  scale: Vector3.Zero()
})
yellowwall_9.addComponentOrReplace(transform_17)
engine.addEntity(yellowwall_9)

const yellowwall_10 = new Entity()
yellowwall_10.setParent(level)
yellowwall_10.addComponentOrReplace(gltfShape_4)
const transform_18 = new Transform({
  position: new Vector3(31, 1.5, 11.5),
  rotation: new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476),
  scale: Vector3.Zero()
})
yellowwall_10.addComponentOrReplace(transform_18)
engine.addEntity(yellowwall_10)

const yellowwall_11 = new Entity()
yellowwall_11.setParent(level)
yellowwall_11.addComponentOrReplace(gltfShape_4)
const transform_19 = new Transform({
  position: new Vector3(31, 1.5, 9.5),
  rotation: new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476),
  scale: Vector3.Zero()
})
yellowwall_11.addComponentOrReplace(transform_19)
engine.addEntity(yellowwall_11)

const yellowwall_12 = new Entity()
yellowwall_12.setParent(level)
yellowwall_12.addComponentOrReplace(gltfShape_4)
const transform_20 = new Transform({
  position: new Vector3(31, 1.5, 7.5),
  rotation: new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476),
  scale: Vector3.Zero()
})
yellowwall_12.addComponentOrReplace(transform_20)
engine.addEntity(yellowwall_12)

const yellowwall_13 = new Entity()
yellowwall_13.setParent(level)
yellowwall_13.addComponentOrReplace(gltfShape_4)
const transform_21 = new Transform({
  position: new Vector3(31, 1.5, 5.5),
  rotation: new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476),
  scale: Vector3.Zero()
})
yellowwall_13.addComponentOrReplace(transform_21)
engine.addEntity(yellowwall_13)

const yellowwall_14 = new Entity()
yellowwall_14.setParent(level)
yellowwall_14.addComponentOrReplace(gltfShape_4)
const transform_22 = new Transform({
  position: new Vector3(31, 1.5, 3.5),
  rotation: new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476),
  scale: Vector3.Zero()
})
yellowwall_14.addComponentOrReplace(transform_22)
engine.addEntity(yellowwall_14)

const yellowwall_15 = new Entity()
yellowwall_15.setParent(level)
yellowwall_15.addComponentOrReplace(gltfShape_4)
const transform_23 = new Transform({
  position: new Vector3(31, 1.5, 1.5),
  rotation: new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476),
  scale: Vector3.Zero()
})
yellowwall_15.addComponentOrReplace(transform_23)
engine.addEntity(yellowwall_15)

const bluewall_3 = new Entity()
bluewall_3.setParent(level)
bluewall_3.addComponentOrReplace(gltfShape_2)
const transform_24 = new Transform({
  position: new Vector3(15, 1.5, 19.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: Vector3.Zero()
})
bluewall_3.addComponentOrReplace(transform_24)
engine.addEntity(bluewall_3).addComponentOrReplace(new Blue())

const bluewall_4 = new Entity()
bluewall_4.setParent(level).addComponentOrReplace(new Blue())
bluewall_4.addComponentOrReplace(gltfShape_2)
const transform_25 = new Transform({
  position: new Vector3(30, 1.5, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: Vector3.Zero()
})
bluewall_4.addComponentOrReplace(transform_25)

const greenwall_2 = new Entity()
greenwall_2.setParent(level)
greenwall_2.addComponentOrReplace(gltfShape_3)
const transform_26 = new Transform({
  position: new Vector3(4, 1.5, 9),
  rotation: new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844),
  scale: Vector3.Zero()
})
greenwall_2.addComponentOrReplace(transform_26)
engine.addEntity(greenwall_2)

const yellowwall_16 = new Entity()
yellowwall_16.setParent(level)
yellowwall_16.addComponentOrReplace(gltfShape_4)
const transform_27 = new Transform({
  position: new Vector3(18.5, 1.5, 18),
  rotation: new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476),
  scale: Vector3.Zero()
})
yellowwall_16.addComponentOrReplace(transform_27)
engine.addEntity(yellowwall_16)

const yellowwall_17 = new Entity()
yellowwall_17.setParent(level)
yellowwall_17.addComponentOrReplace(gltfShape_4)
const transform_28 = new Transform({
  position: new Vector3(25.5, 1.5, 28.5),
  rotation: new Quaternion(0, -0.7071067811865475, 0, 0.7071067811865476),
  scale: Vector3.Zero()
})
yellowwall_17.addComponentOrReplace(transform_28)
engine.addEntity(yellowwall_17)

const yellowwall_18 = new Entity()
yellowwall_18.setParent(level)
yellowwall_18.addComponentOrReplace(gltfShape_4)
const transform_29 = new Transform({
  position: new Vector3(25.5, 1.5, 26.5),
  rotation: new Quaternion(0, -0.7071067811865475, 0, 0.7071067811865476),
  scale: Vector3.Zero()
})
yellowwall_18.addComponentOrReplace(transform_29)
engine.addEntity(yellowwall_18)

const bluewall_5 = new Entity()
bluewall_5.setParent(level).addComponentOrReplace(new Blue())
bluewall_5.addComponentOrReplace(gltfShape_2)
const transform_30 = new Transform({
  position: new Vector3(30, 1.5, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: Vector3.Zero()
})
bluewall_5.addComponentOrReplace(transform_30)
engine.addEntity(bluewall_5)

const bluewall_6 = new Entity()
bluewall_6.setParent(level).addComponentOrReplace(new Blue())
bluewall_6.addComponentOrReplace(gltfShape_2)
const transform_31 = new Transform({
  position: new Vector3(28, 1.5, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: Vector3.Zero()
})
bluewall_6.addComponentOrReplace(transform_31)
engine.addEntity(bluewall_6)

const bluewall_7 = new Entity()
bluewall_7.setParent(level).addComponentOrReplace(new Blue())
bluewall_7.addComponentOrReplace(gltfShape_2)
const transform_32 = new Transform({
  position: new Vector3(26, 1.5, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: Vector3.Zero()
})
bluewall_7.addComponentOrReplace(transform_32)
engine.addEntity(bluewall_7)

const bluewall_8 = new Entity()
bluewall_8.setParent(level).addComponentOrReplace(new Blue())
bluewall_8.addComponentOrReplace(gltfShape_2)
const transform_33 = new Transform({
  position: new Vector3(24, 1.5, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: Vector3.Zero()
})
bluewall_8.addComponentOrReplace(transform_33)
engine.addEntity(bluewall_8)

const bluewall_9 = new Entity()
bluewall_9.setParent(level).addComponentOrReplace(new Blue())
bluewall_9.addComponentOrReplace(gltfShape_2)
const transform_34 = new Transform({
  position: new Vector3(22, 1.5, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: Vector3.Zero()
})
bluewall_9.addComponentOrReplace(transform_34)
engine.addEntity(bluewall_9)

const bluewall_10 = new Entity()
bluewall_10.setParent(level).addComponentOrReplace(new Blue())
bluewall_10.addComponentOrReplace(gltfShape_2)
const transform_35 = new Transform({
  position: new Vector3(20, 1.5, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: Vector3.Zero()
})
bluewall_10.addComponentOrReplace(transform_35)
engine.addEntity(bluewall_10)

const bluewall_11 = new Entity()
bluewall_11.setParent(level).addComponentOrReplace(new Blue())
bluewall_11.addComponentOrReplace(gltfShape_2)
const transform_36 = new Transform({
  position: new Vector3(18, 1.5, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: Vector3.Zero()
})
bluewall_11.addComponentOrReplace(transform_36)
engine.addEntity(bluewall_11)

const bluewall_12 = new Entity()
bluewall_12.setParent(level).addComponentOrReplace(new Blue())
bluewall_12.addComponentOrReplace(gltfShape_2)
const transform_37 = new Transform({
  position: new Vector3(16, 1.5, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: Vector3.Zero()
})
bluewall_12.addComponentOrReplace(transform_37)
engine.addEntity(bluewall_12)

const bluewall_13 = new Entity()
bluewall_13.setParent(level).addComponentOrReplace(new Blue())
bluewall_13.addComponentOrReplace(gltfShape_2)
const transform_38 = new Transform({
  position: new Vector3(14, 1.5, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: Vector3.Zero()
})
bluewall_13.addComponentOrReplace(transform_38)
engine.addEntity(bluewall_13)

const yellowwall_19 = new Entity()
yellowwall_19.setParent(level)
yellowwall_19.addComponentOrReplace(gltfShape_4)
const transform_39 = new Transform({
  position: new Vector3(12, 1.5, 0.5),
  rotation: new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16),
  scale: Vector3.Zero()
})
yellowwall_19.addComponentOrReplace(transform_39)
engine.addEntity(yellowwall_19)

const yellowwall_20 = new Entity()
yellowwall_20.setParent(level)
yellowwall_20.addComponentOrReplace(gltfShape_4)
const transform_40 = new Transform({
  position: new Vector3(10, 1.5, 0.5),
  rotation: new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16),
  scale: Vector3.Zero()
})
yellowwall_20.addComponentOrReplace(transform_40)
engine.addEntity(yellowwall_20)

const yellowwall_21 = new Entity()
yellowwall_21.setParent(level)
yellowwall_21.addComponentOrReplace(gltfShape_4)
const transform_41 = new Transform({
  position: new Vector3(8, 1.5, 0.5),
  rotation: new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16),
  scale: Vector3.Zero()
})
yellowwall_21.addComponentOrReplace(transform_41)
engine.addEntity(yellowwall_21)

const yellowwall_22 = new Entity()
yellowwall_22.setParent(level)
yellowwall_22.addComponentOrReplace(gltfShape_4)
const transform_42 = new Transform({
  position: new Vector3(6, 1.5, 0.5),
  rotation: new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16),
  scale: Vector3.Zero()
})
yellowwall_22.addComponentOrReplace(transform_42)
engine.addEntity(yellowwall_22)

const yellowwall_23 = new Entity()
yellowwall_23.setParent(level)
yellowwall_23.addComponentOrReplace(gltfShape_4)
const transform_43 = new Transform({
  position: new Vector3(4, 1.5, 0.5),
  rotation: new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16),
  scale: Vector3.Zero()
})
yellowwall_23.addComponentOrReplace(transform_43)
engine.addEntity(yellowwall_23)

const yellowwall_24 = new Entity()
yellowwall_24.setParent(level)
yellowwall_24.addComponentOrReplace(gltfShape_4)
const transform_44 = new Transform({
  position: new Vector3(2, 1.5, 0.5),
  rotation: new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16),
  scale: Vector3.Zero()
})
yellowwall_24.addComponentOrReplace(transform_44)
engine.addEntity(yellowwall_24)

const greenwall_3 = new Entity()
greenwall_3.setParent(level)
greenwall_3.addComponentOrReplace(gltfShape_3)
const transform_45 = new Transform({
  position: new Vector3(1, 1.5, 1.4746632221619334),
  rotation: new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844),
  scale: Vector3.Zero()
})
greenwall_3.addComponentOrReplace(transform_45)
engine.addEntity(greenwall_3)

const greenwall_4 = new Entity()
greenwall_4.setParent(level)
greenwall_4.addComponentOrReplace(gltfShape_3)
const transform_46 = new Transform({
  position: new Vector3(1, 1.5, 3.446902718778192),
  rotation: new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844),
  scale: Vector3.Zero()
})
greenwall_4.addComponentOrReplace(transform_46)
engine.addEntity(greenwall_4)

const greenwall_5 = new Entity()
greenwall_5.setParent(level)
greenwall_5.addComponentOrReplace(gltfShape_3)
const transform_47 = new Transform({
  position: new Vector3(1, 1.5, 5.390884685497018),
  rotation: new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844),
  scale: Vector3.Zero()
})
greenwall_5.addComponentOrReplace(transform_47)
engine.addEntity(greenwall_5)

const greenwall_6 = new Entity()
greenwall_6.setParent(level)
greenwall_6.addComponentOrReplace(gltfShape_3)
const transform_48 = new Transform({
  position: new Vector3(1, 1.5, 7.372296225346034),
  rotation: new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844),
  scale: Vector3.Zero()
})
greenwall_6.addComponentOrReplace(transform_48)
engine.addEntity(greenwall_6)

const greenwall_7 = new Entity()
greenwall_7.setParent(level)
greenwall_7.addComponentOrReplace(gltfShape_3)
const transform_49 = new Transform({
  position: new Vector3(1, 1.5, 9.338803116419244),
  rotation: new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844),
  scale: Vector3.Zero()
})
greenwall_7.addComponentOrReplace(transform_49)
engine.addEntity(greenwall_7)

const greenwall_8 = new Entity()
greenwall_8.setParent(level)
greenwall_8.addComponentOrReplace(gltfShape_3)
const transform_50 = new Transform({
  position: new Vector3(1, 1.5, 11.326840248635582),
  rotation: new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844),
  scale: Vector3.Zero()
})
greenwall_8.addComponentOrReplace(transform_50)
engine.addEntity(greenwall_8)

const greenwall_9 = new Entity()
greenwall_9.setParent(level)
greenwall_9.addComponentOrReplace(gltfShape_3)
const transform_51 = new Transform({
  position: new Vector3(1, 1.5, 13.308326761005135),
  rotation: new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844),
  scale: Vector3.Zero()
})
greenwall_9.addComponentOrReplace(transform_51)
engine.addEntity(greenwall_9)

const greenwall_10 = new Entity()
greenwall_10.setParent(level)
greenwall_10.addComponentOrReplace(gltfShape_3)
const transform_52 = new Transform({
  position: new Vector3(1, 1.5, 15.281247565220117),
  rotation: new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844),
  scale: Vector3.Zero()
})
greenwall_10.addComponentOrReplace(transform_52)
engine.addEntity(greenwall_10)

const greenwall_11 = new Entity()
greenwall_11.setParent(level)
greenwall_11.addComponentOrReplace(gltfShape_3)
const transform_53 = new Transform({
  position: new Vector3(1, 1.5, 17.278874666480842),
  rotation: new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844),
  scale: Vector3.Zero()
})
greenwall_11.addComponentOrReplace(transform_53)
engine.addEntity(greenwall_11)

const greenwall_12 = new Entity()
greenwall_12.setParent(level)
greenwall_12.addComponentOrReplace(gltfShape_3)
const transform_54 = new Transform({
  position: new Vector3(1, 1.5, 19.267538773952918),
  rotation: new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844),
  scale: Vector3.Zero()
})
greenwall_12.addComponentOrReplace(transform_54)
engine.addEntity(greenwall_12)

const greenwall_13 = new Entity()
greenwall_13.setParent(level)
greenwall_13.addComponentOrReplace(gltfShape_3)
const transform_55 = new Transform({
  position: new Vector3(1, 1.5, 21),
  rotation: new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844),
  scale: Vector3.Zero()
})
greenwall_13.addComponentOrReplace(transform_55)
engine.addEntity(greenwall_13)

const greenwall_14 = new Entity()
greenwall_14.setParent(level)
greenwall_14.addComponentOrReplace(gltfShape_3)
const transform_56 = new Transform({
  position: new Vector3(1, 1.5, 23),
  rotation: new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844),
  scale: Vector3.Zero()
})
greenwall_14.addComponentOrReplace(transform_56)
engine.addEntity(greenwall_14)

const greenwall_15 = new Entity()
greenwall_15.setParent(level)
greenwall_15.addComponentOrReplace(gltfShape_3)
const transform_57 = new Transform({
  position: new Vector3(1, 1.5, 25),
  rotation: new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844),
  scale: Vector3.Zero()
})
greenwall_15.addComponentOrReplace(transform_57)
engine.addEntity(greenwall_15)

const greenwall_16 = new Entity()
greenwall_16.setParent(level)
greenwall_16.addComponentOrReplace(gltfShape_3)
const transform_58 = new Transform({
  position: new Vector3(1, 1.5, 27),
  rotation: new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844),
  scale: Vector3.Zero()
})
greenwall_16.addComponentOrReplace(transform_58)
engine.addEntity(greenwall_16)

const yellowwall_25 = new Entity()
yellowwall_25.setParent(level)
yellowwall_25.addComponentOrReplace(gltfShape_4)
const transform_59 = new Transform({
  position: new Vector3(24.5, 1.5, 25.5),
  rotation: new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16),
  scale: Vector3.Zero()
})
yellowwall_25.addComponentOrReplace(transform_59)
engine.addEntity(yellowwall_25)

const yellowwall_26 = new Entity()
yellowwall_26.setParent(level)
yellowwall_26.addComponentOrReplace(gltfShape_4)
const transform_60 = new Transform({
  position: new Vector3(22.5, 1.5, 25.5),
  rotation: new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16),
  scale: Vector3.Zero()
})
yellowwall_26.addComponentOrReplace(transform_60)
engine.addEntity(yellowwall_26)

const yellowwall_27 = new Entity()
yellowwall_27.setParent(level)
yellowwall_27.addComponentOrReplace(gltfShape_4)
const transform_61 = new Transform({
  position: new Vector3(20.5, 1.5, 25.5),
  rotation: new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16),
  scale: Vector3.Zero()
})
yellowwall_27.addComponentOrReplace(transform_61)
engine.addEntity(yellowwall_27)

const yellowwall_28 = new Entity()
yellowwall_28.setParent(level)
yellowwall_28.addComponentOrReplace(gltfShape_4)
const transform_62 = new Transform({
  position: new Vector3(18.5, 1.5, 25.5),
  rotation: new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16),
  scale: Vector3.Zero()
})
yellowwall_28.addComponentOrReplace(transform_62)
engine.addEntity(yellowwall_28)

const yellowwall_29 = new Entity()
yellowwall_29.setParent(level)
yellowwall_29.addComponentOrReplace(gltfShape_4)
const transform_63 = new Transform({
  position: new Vector3(16.5, 1.5, 25.5),
  rotation: new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16),
  scale: Vector3.Zero()
})
yellowwall_29.addComponentOrReplace(transform_63)
engine.addEntity(yellowwall_29)

const yellowwall_30 = new Entity()
yellowwall_30.setParent(level)
yellowwall_30.addComponentOrReplace(gltfShape_4)
const transform_64 = new Transform({
  position: new Vector3(14.5, 1.5, 25.5),
  rotation: new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16),
  scale: Vector3.Zero()
})
yellowwall_30.addComponentOrReplace(transform_64)
engine.addEntity(yellowwall_30)

const yellowwall_31 = new Entity()
yellowwall_31.setParent(level)
yellowwall_31.addComponentOrReplace(gltfShape_4)
const transform_65 = new Transform({
  position: new Vector3(12.5, 1.5, 25.5),
  rotation: new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16),
  scale: Vector3.Zero()
})
yellowwall_31.addComponentOrReplace(transform_65)
engine.addEntity(yellowwall_31)

const yellowwall_32 = new Entity()
yellowwall_32.setParent(level)
yellowwall_32.addComponentOrReplace(gltfShape_4)
const transform_66 = new Transform({
  position: new Vector3(10.5, 1.5, 25.5),
  rotation: new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16),
  scale: Vector3.Zero()
})
yellowwall_32.addComponentOrReplace(transform_66)
engine.addEntity(yellowwall_32)

const yellowwall_33 = new Entity()
yellowwall_33.setParent(level)
yellowwall_33.addComponentOrReplace(gltfShape_4)
const transform_67 = new Transform({
  position: new Vector3(8.5, 1.5, 25.5),
  rotation: new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16),
  scale: Vector3.Zero()
})
yellowwall_33.addComponentOrReplace(transform_67)
engine.addEntity(yellowwall_33)

const bluewall_14 = new Entity()
bluewall_14.setParent(level).addComponentOrReplace(new Blue())
bluewall_14.addComponentOrReplace(gltfShape_2)
const transform_68 = new Transform({
  position: new Vector3(7.5, 1.5, 26.5),
  rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
  scale: Vector3.Zero()
})
bluewall_14.addComponentOrReplace(transform_68)
engine.addEntity(bluewall_14)

const bluewall_15 = new Entity()
bluewall_15.setParent(level).addComponentOrReplace(new Blue())
bluewall_15.addComponentOrReplace(gltfShape_2)
const transform_69 = new Transform({
  position: new Vector3(7.5, 1.5, 28.5),
  rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
  scale: Vector3.Zero()
})
bluewall_15.addComponentOrReplace(transform_69)
engine.addEntity(bluewall_15)

const bluewall_16 = new Entity()
bluewall_16.setParent(level).addComponentOrReplace(new Blue())
bluewall_16.addComponentOrReplace(gltfShape_2)
const transform_70 = new Transform({
  position: new Vector3(6.5, 1.5, 29.5),
=======
      const skull = new Entity()
      skull.setParent(level)
      skull.addComponentOrReplace(new GLTFShape('models/skull1.glb'))
      skull.addComponentOrReplace(new Transform({
        position: new Vector3(5,1,4),
        scale: new Vector3(.1,.1,.1)
      }))
      skull.addComponentOrReplace(new OnClick(e=>{
        log("pushing data to server")
        fetch(Globals.awsPut, {
          method: 'post',
          body: JSON.stringify({"id": user_address, "level": 1})
        }).then(function(response) {
          log(response)
          return response.json();
        }).then(function(data) {
          log("added user to the server")
          log(data)
        });
      }))

  const topologylevel2 = new Entity()
topologylevel2.setParent(level)
const gltfShape_5 = new GLTFShape('models/topologylevel2.glb')
topologylevel2.addComponentOrReplace(gltfShape_5)
const transform_110 = new Transform({
  position: new Vector3(16, 0.06939495457063316, 16),
>>>>>>> 66eb04580a54c6c101f0d09781dc83b6266098f8
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
