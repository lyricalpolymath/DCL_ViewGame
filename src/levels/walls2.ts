import utils from "../../node_modules/decentraland-ecs-utils/index"
import { Wall } from "./wall"
import {greenWall, yellowWall, blueWall, Yellow} from "../functions"
import { Level } from "./level"
import { _colorNames } from "../gameSettings"

    export function createLevel(level:Level)
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
  rotation: new Quaternion(0, 0, 0, 1),
  scale: Vector3.Zero()
})
bluewall_16.addComponentOrReplace(transform_70)
engine.addEntity(bluewall_16)

const bluewall_17 = new Entity()
bluewall_17.setParent(level).addComponentOrReplace(new Blue())
bluewall_17.addComponentOrReplace(gltfShape_2)
const transform_71 = new Transform({
  position: new Vector3(4.5, 1.5, 29.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: Vector3.Zero()
})
bluewall_17.addComponentOrReplace(transform_71)
engine.addEntity(bluewall_17)

const bluewall_18 = new Entity()
bluewall_18.setParent(level).addComponentOrReplace(new Blue())
bluewall_18.addComponentOrReplace(gltfShape_2)
const transform_72 = new Transform({
  position: new Vector3(2.5, 1.5, 29.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: Vector3.Zero()
})
bluewall_18.addComponentOrReplace(transform_72)
engine.addEntity(bluewall_18)

const yellowwall_34 = new Entity()
yellowwall_34.setParent(level)
yellowwall_34.addComponentOrReplace(gltfShape_4)
const transform_73 = new Transform({
  position: new Vector3(15, 1.5, 7),
  rotation: new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16),
  scale: Vector3.Zero()
})
yellowwall_34.addComponentOrReplace(transform_73)
engine.addEntity(yellowwall_34)

const greenwall_17 = new Entity()
greenwall_17.setParent(level)
greenwall_17.addComponentOrReplace(gltfShape_3)
const transform_74 = new Transform({
  position: new Vector3(28.5, 1.5, 22),
  rotation: new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844),
  scale: Vector3.Zero()
})
greenwall_17.addComponentOrReplace(transform_74)
engine.addEntity(greenwall_17)

const greenwall_18 = new Entity()
greenwall_18.setParent(level)
greenwall_18.addComponentOrReplace(gltfShape_3)
const transform_75 = new Transform({
  position: new Vector3(26.5, 1.5, 20),
  rotation: new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844),
  scale: Vector3.Zero()
})
greenwall_18.addComponentOrReplace(transform_75)
engine.addEntity(greenwall_18)

const greenwall_19 = new Entity()
greenwall_19.setParent(level)
greenwall_19.addComponentOrReplace(gltfShape_3)
const transform_76 = new Transform({
  position: new Vector3(28.5, 1.5, 18),
  rotation: new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844),
  scale: Vector3.Zero()
})
greenwall_19.addComponentOrReplace(transform_76)
engine.addEntity(greenwall_19)

const greenwall_20 = new Entity()
greenwall_20.setParent(level)
greenwall_20.addComponentOrReplace(gltfShape_3)
const transform_77 = new Transform({
  position: new Vector3(26.5, 1.5, 16),
  rotation: new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844),
  scale: Vector3.Zero()
})
greenwall_20.addComponentOrReplace(transform_77)
engine.addEntity(greenwall_20)

const greenwall_21 = new Entity()
greenwall_21.setParent(level)
greenwall_21.addComponentOrReplace(gltfShape_3)
const transform_78 = new Transform({
  position: new Vector3(28.5, 1.5, 14),
  rotation: new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844),
  scale: Vector3.Zero()
})
greenwall_21.addComponentOrReplace(transform_78)
engine.addEntity(greenwall_21)

const bluewall_19 = new Entity()
bluewall_19.setParent(level).addComponentOrReplace(new Blue())
bluewall_19.addComponentOrReplace(gltfShape_2)
const transform_79 = new Transform({
  position: new Vector3(27.5, 1.5, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: Vector3.Zero()
})
bluewall_19.addComponentOrReplace(transform_79)
engine.addEntity(bluewall_19)

const bluewall_20 = new Entity()
bluewall_20.setParent(level).addComponentOrReplace(new Blue())
bluewall_20.addComponentOrReplace(gltfShape_2)
const transform_80 = new Transform({
  position: new Vector3(25, 1.5, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: Vector3.Zero()
})
bluewall_20.addComponentOrReplace(transform_80)
engine.addEntity(bluewall_20)

const bluewall_21 = new Entity()
bluewall_21.setParent(level).addComponentOrReplace(new Blue())
bluewall_21.addComponentOrReplace(gltfShape_2)
const transform_81 = new Transform({
  position: new Vector3(22.5, 1.5, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: Vector3.Zero()
})
bluewall_21.addComponentOrReplace(transform_81)
engine.addEntity(bluewall_21)

const bluewall_22 = new Entity()
bluewall_22.setParent(level).addComponentOrReplace(new Blue())
bluewall_22.addComponentOrReplace(gltfShape_2)
const transform_82 = new Transform({
  position: new Vector3(20, 1.5, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: Vector3.Zero()
})
bluewall_22.addComponentOrReplace(transform_82)
engine.addEntity(bluewall_22)

const bluewall_23 = new Entity()
bluewall_23.setParent(level).addComponentOrReplace(new Blue())
bluewall_23.addComponentOrReplace(gltfShape_2)
const transform_83 = new Transform({
  position: new Vector3(17.5, 1.5, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: Vector3.Zero()
})
bluewall_23.addComponentOrReplace(transform_83)
engine.addEntity(bluewall_23)

const yellowwall_35 = new Entity()
yellowwall_35.setParent(level)
yellowwall_35.addComponentOrReplace(gltfShape_4)
const transform_84 = new Transform({
  position: new Vector3(18.5, 1.5, 10.5),
  rotation: new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476),
  scale: Vector3.Zero()
})
yellowwall_35.addComponentOrReplace(transform_84)
engine.addEntity(yellowwall_35)

const greenwall_22 = new Entity()
greenwall_22.setParent(level)
greenwall_22.addComponentOrReplace(gltfShape_3)
const transform_85 = new Transform({
  position: new Vector3(1, 1.5, 28.5),
  rotation: new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844),
  scale: Vector3.Zero()
})
greenwall_22.addComponentOrReplace(transform_85)
engine.addEntity(greenwall_22)

const yellowwall_36 = new Entity()
yellowwall_36.setParent(level)
yellowwall_36.addComponentOrReplace(gltfShape_4)
const transform_86 = new Transform({
  position: new Vector3(29.5, 1.5, 25.5),
  rotation: new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16),
  scale: Vector3.Zero()
})
yellowwall_36.addComponentOrReplace(transform_86)
engine.addEntity(yellowwall_36)

const yellowwall_37 = new Entity()
yellowwall_37.setParent(level)
yellowwall_37.addComponentOrReplace(gltfShape_4)
const transform_87 = new Transform({
  position: new Vector3(12.5, 1.5, 7),
  rotation: new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16),
  scale: Vector3.Zero()
})
yellowwall_37.addComponentOrReplace(transform_87)
engine.addEntity(yellowwall_37)

const yellowwall_38 = new Entity()
yellowwall_38.setParent(level)
yellowwall_38.addComponentOrReplace(gltfShape_4)
const transform_88 = new Transform({
  position: new Vector3(10, 1.5, 7),
  rotation: new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16),
  scale: Vector3.Zero()
})
yellowwall_38.addComponentOrReplace(transform_88)
engine.addEntity(yellowwall_38)

const yellowwall_39 = new Entity()
yellowwall_39.setParent(level)
yellowwall_39.addComponentOrReplace(gltfShape_4)
const transform_89 = new Transform({
  position: new Vector3(7.5, 1.5, 7),
  rotation: new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16),
  scale: Vector3.Zero()
})
yellowwall_39.addComponentOrReplace(transform_89)
engine.addEntity(yellowwall_39)

const yellowwall_40 = new Entity()
yellowwall_40.setParent(level)
yellowwall_40.addComponentOrReplace(gltfShape_4)
const transform_90 = new Transform({
  position: new Vector3(5, 1.5, 7),
  rotation: new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16),
  scale: Vector3.Zero()
})
yellowwall_40.addComponentOrReplace(transform_90)
engine.addEntity(yellowwall_40)

const greenwall_23 = new Entity()
greenwall_23.setParent(level)
greenwall_23.addComponentOrReplace(gltfShape_3)
const transform_91 = new Transform({
  position: new Vector3(4, 1.5, 11.5),
  rotation: new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844),
  scale: Vector3.Zero()
})
greenwall_23.addComponentOrReplace(transform_91)
engine.addEntity(greenwall_23)

const greenwall_24 = new Entity()
greenwall_24.setParent(level)
greenwall_24.addComponentOrReplace(gltfShape_3)
const transform_92 = new Transform({
  position: new Vector3(4, 1.5, 14),
  rotation: new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844),
  scale: Vector3.Zero()
})
greenwall_24.addComponentOrReplace(transform_92)
engine.addEntity(greenwall_24)

const greenwall_25 = new Entity()
greenwall_25.setParent(level)
greenwall_25.addComponentOrReplace(gltfShape_3)
const transform_93 = new Transform({
  position: new Vector3(4, 1.5, 16.5),
  rotation: new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844),
  scale: Vector3.Zero()
})
greenwall_25.addComponentOrReplace(transform_93)
engine.addEntity(greenwall_25)

const greenwall_26 = new Entity()
greenwall_26.setParent(level)
greenwall_26.addComponentOrReplace(gltfShape_3)
const transform_94 = new Transform({
  position: new Vector3(4, 1.5, 19),
  rotation: new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844),
  scale: Vector3.Zero()
})
greenwall_26.addComponentOrReplace(transform_94)
engine.addEntity(greenwall_26)

const greenwall_27 = new Entity()
greenwall_27.setParent(level)
greenwall_27.addComponentOrReplace(gltfShape_3)
const transform_95 = new Transform({
  position: new Vector3(4, 1.5, 21.5),
  rotation: new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844),
  scale: Vector3.Zero()
})
greenwall_27.addComponentOrReplace(transform_95)
engine.addEntity(greenwall_27)

const greenwall_28 = new Entity()
greenwall_28.setParent(level)
greenwall_28.addComponentOrReplace(gltfShape_3)
const transform_96 = new Transform({
  position: new Vector3(4, 1.5, 24),
  rotation: new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844),
  scale: Vector3.Zero()
})
greenwall_28.addComponentOrReplace(transform_96)
engine.addEntity(greenwall_28)

const greenwall_29 = new Entity()
greenwall_29.setParent(level)
greenwall_29.addComponentOrReplace(gltfShape_3)
const transform_97 = new Transform({
  position: new Vector3(4, 1.5, 26.5),
  rotation: new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844),
  scale: Vector3.Zero()
})
greenwall_29.addComponentOrReplace(transform_97)
engine.addEntity(greenwall_29)

const yellowwall_41 = new Entity()
yellowwall_41.setParent(level)
yellowwall_41.addComponentOrReplace(gltfShape_4)
const transform_98 = new Transform({
  position: new Vector3(18.5, 1.5, 13),
  rotation: new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476),
  scale: Vector3.Zero()
})
yellowwall_41.addComponentOrReplace(transform_98)
engine.addEntity(yellowwall_41)

const yellowwall_42 = new Entity()
yellowwall_42.setParent(level)
yellowwall_42.addComponentOrReplace(gltfShape_4)
const transform_99 = new Transform({
  position: new Vector3(18.5, 1.5, 15.5),
  rotation: new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476),
  scale: Vector3.Zero()
})
yellowwall_42.addComponentOrReplace(transform_99)
engine.addEntity(yellowwall_42)

const bluewall_24 = new Entity()
bluewall_24.setParent(level).addComponentOrReplace(new Blue())
bluewall_24.addComponentOrReplace(gltfShape_2)
const transform_100 = new Transform({
  position: new Vector3(12.5, 1.5, 19.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: Vector3.Zero()
})
bluewall_24.addComponentOrReplace(transform_100)
engine.addEntity(bluewall_24)

const bluewall_25 = new Entity()
bluewall_25.setParent(level).addComponentOrReplace(new Blue())
bluewall_25.addComponentOrReplace(gltfShape_2)
const transform_101 = new Transform({
  position: new Vector3(10, 1.5, 19.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: Vector3.Zero()
})
bluewall_25.addComponentOrReplace(transform_101)
engine.addEntity(bluewall_25)

const bluewall_26 = new Entity()
bluewall_26.setParent(level).addComponentOrReplace(new Blue())
bluewall_26.addComponentOrReplace(gltfShape_2)
const transform_102 = new Transform({
  position: new Vector3(7.5, 1.5, 19.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: Vector3.Zero()
})
bluewall_26.addComponentOrReplace(transform_102)
engine.addEntity(bluewall_26)

const bluewall_27 = new Entity()
bluewall_27.setParent(level).addComponentOrReplace(new Blue())
bluewall_27.addComponentOrReplace(gltfShape_2)
const transform_103 = new Transform({
  position: new Vector3(3, 1.5, 19.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: Vector3.Zero()
})
bluewall_27.addComponentOrReplace(transform_103)
engine.addEntity(bluewall_27)

const bluewall_28 = new Entity()
bluewall_28.setParent(level).addComponentOrReplace(new Blue())
bluewall_28.addComponentOrReplace(gltfShape_2)
const transform_104 = new Transform({
  position: new Vector3(5.246343354628706, 1.5, 19.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: Vector3.Zero()
})
bluewall_28.addComponentOrReplace(transform_104)
engine.addEntity(bluewall_28)

const greenwall_30 = new Entity()
greenwall_30.setParent(level)
greenwall_30.addComponentOrReplace(gltfShape_3)
const transform_105 = new Transform({
  position: new Vector3(24, 1.5, 22),
  rotation: new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844),
  scale: Vector3.Zero()
})
greenwall_30.addComponentOrReplace(transform_105)
engine.addEntity(greenwall_30)

const greenwall_31 = new Entity()
greenwall_31.setParent(level)
greenwall_31.addComponentOrReplace(gltfShape_3)
const transform_106 = new Transform({
  position: new Vector3(24, 1.5, 19),
  rotation: new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844),
  scale: Vector3.Zero()
})
greenwall_31.addComponentOrReplace(transform_106)
engine.addEntity(greenwall_31)

const greenwall_32 = new Entity()
greenwall_32.setParent(level)
greenwall_32.addComponentOrReplace(gltfShape_3)
const transform_107 = new Transform({
  position: new Vector3(24, 1.5, 16),
  rotation: new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844),
  scale: Vector3.Zero()
})
greenwall_32.addComponentOrReplace(transform_107)
engine.addEntity(greenwall_32)

const greenwall_33 = new Entity()
greenwall_33.setParent(level)
greenwall_33.addComponentOrReplace(gltfShape_3)
const transform_108 = new Transform({
  position: new Vector3(24, 1.5, 13),
  rotation: new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844),
  scale: Vector3.Zero()
})
greenwall_33.addComponentOrReplace(transform_108)
engine.addEntity(greenwall_33)

const greenwall_34 = new Entity()
greenwall_34.setParent(level)
greenwall_34.addComponentOrReplace(gltfShape_3)
const transform_109 = new Transform({
  position: new Vector3(24, 1.5, 24.5),
  rotation: new Quaternion(0, -0.7056778438609026, 0, 0.7085328367011844),
  scale: Vector3.Zero()
})
greenwall_34.addComponentOrReplace(transform_109)
engine.addEntity(greenwall_34)
           

    }

    */
}
