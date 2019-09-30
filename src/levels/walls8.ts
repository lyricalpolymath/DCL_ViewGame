import utils from "../../node_modules/decentraland-ecs-utils/index"
import { Wall } from "./wall"
import { Level } from "./level"
import { _colorNames } from "../gameSettings"
import * as Globals from "../functions"


// TODO - some of the levels have a SPECIAL COLOR   YELLOW and PURPLE

    // BB added entieties
    export function createScene(level:Level)
    {
        const terrainLevel8 = new Entity()
        terrainLevel8.setParent(level)
        const gltfShape_2 = new GLTFShape('models/terrainLevel8.glb')
        terrainLevel8.addComponentOrReplace(gltfShape_2)
        const transform_6 = new Transform({
        position: new Vector3(16, 0.29637226562080343, 16),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
        })
        terrainLevel8.addComponentOrReplace(transform_6)

        const ladybug = new Entity()
        ladybug.setParent(level)
        const gltfShape_3 = new GLTFShape('models/ladybug.glb')
        ladybug.addComponentOrReplace(gltfShape_3)
        const transform_7 = new Transform({
        position: new Vector3(16, 0.539533811092225, 9),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(0.34684037801562795, 0.35011804016252945, 0.38477946604870716)
        })
        ladybug.addComponentOrReplace(transform_7)

        const ladybug_2 = new Entity()
        ladybug_2.setParent(level)
        ladybug_2.addComponentOrReplace(gltfShape_3)
        const transform_8 = new Transform({
        position: new Vector3(12, 0.5, 23),
        rotation: new Quaternion(0, 0.9238795325112866, 0, 0.3826834323650897),
        scale: new Vector3(0.34684037801562795, 0.35011804016252945, 0.38477946604870716)
        })
        ladybug_2.addComponentOrReplace(transform_8)

        const ladybug_3 = new Entity()
        ladybug_3.setParent(level)
        ladybug_3.addComponentOrReplace(gltfShape_3)
        const transform_9 = new Transform({
        position: new Vector3(23.5, 0.5, 23),
        rotation: new Quaternion(0, 0.773010453362737, 0, 0.6343932841636457),
        scale: new Vector3(0.34684037801562795, 0.35011804016252945, 0.38477946604870716)
        })
        ladybug_3.addComponentOrReplace(transform_9)

        const ladybug_4 = new Entity()
        ladybug_4.setParent(level)
        ladybug_4.addComponentOrReplace(gltfShape_3)
        const transform_10 = new Transform({
        position: new Vector3(24.230996356609133, 0.6451486859035951, 9.5),
        rotation: new Quaternion(0, 0.9569403357322088, 0, 0.2902846772544625),
        scale: new Vector3(0.34684037801562795, 0.35011804016252945, 0.38477946604870716)
        })
        ladybug_4.addComponentOrReplace(transform_10)

        const butterfly = new Entity()
        butterfly.setParent(level)
        const gltfShape_4 = new GLTFShape('models/butterfly.glb')
        butterfly.addComponentOrReplace(gltfShape_4)
        const transform_11 = new Transform({
        position: new Vector3(16, 11, 16),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
        })
        butterfly.addComponentOrReplace(transform_11)

        const butterfly_2 = new Entity()
        butterfly_2.setParent(level)
        butterfly_2.addComponentOrReplace(gltfShape_4)
        const transform_12 = new Transform({
        position: new Vector3(16, 15, 4),
        rotation: new Quaternion(0, 0.19509032201612825, 0, 0.9807852804032304),
        scale: new Vector3(1, 1, 1)
        })
        butterfly_2.addComponentOrReplace(transform_12)

        const butterfly_3 = new Entity()
        butterfly_3.setParent(level)
        butterfly_3.addComponentOrReplace(gltfShape_4)
        const transform_13 = new Transform({
        position: new Vector3(16, 17.5, 26.5),
        rotation: new Quaternion(0, -0.0980171403295606, 0, 0.9951847266721969),
        scale: new Vector3(1, 1, 1)
        })
        butterfly_3.addComponentOrReplace(transform_13)

        const butterfly_4 = new Entity()
        butterfly_4.setParent(level)
        butterfly_4.addComponentOrReplace(gltfShape_4)
        const transform_14 = new Transform({
        position: new Vector3(6.5, 8, 14),
        rotation: new Quaternion(0, -0.6343932841636457, 0, 0.7730104533627371),
        scale: new Vector3(1, 1, 1)
        })
        butterfly_4.addComponentOrReplace(transform_14)

        const butterfly_5 = new Entity()
        butterfly_5.setParent(level)
        butterfly_5.addComponentOrReplace(gltfShape_4)
        const transform_15 = new Transform({
        position: new Vector3(29.5, 8, 14),
        rotation: new Quaternion(0, -0.881921264348355, 0, 0.4713967368259979),
        scale: new Vector3(1, 1, 1)
        })
        butterfly_5.addComponentOrReplace(transform_15)

    }

    export function createWalls(level:Level)
    {

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 1.7968388569951053, 25.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(14, 1.8464463005206957, 25.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(8, 2, 25.5), new Quaternion(0, -0.2902846772544624, 0, 0.9569403357322089), _colorNames.BLUE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(8, 2, 25.5), new Quaternion(0, -0.2902846772544624, 0, 0.9569403357322089), _colorNames.BLUE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(7.5, 2, 6.5), new Quaternion(0, -0.2902846772544624, 0, 0.9569403357322089), _colorNames.BLUE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26, 2, 6.5), new Quaternion(0, -0.2902846772544624, 0, 0.9569403357322089), _colorNames.BLUE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26, 2, 25), new Quaternion(0, -0.2902846772544624, 0, 0.9569403357322089), _colorNames.BLUE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(28, 2, 26.30888671382234), new Quaternion(0, -0.2902846772544624, 0, 0.9569403357322089), _colorNames.BLUE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(9.961431208151799, 2, 27), new Quaternion(0, -0.2902846772544624, 0, 0.9569403357322089), _colorNames.BLUE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(9.362406094891316, 2, 7.872303609605959), new Quaternion(0, -0.2902846772544624, 0, 0.9569403357322089), _colorNames.BLUE))
        

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(17.428019083905106, 2, 17.64123033449058), new Quaternion(0, -0.8819212643483554, 0, 0.471396736825998), _colorNames.BLACK))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(18.480623076584145, 2, 15.96934333020312), new Quaternion(0, -0.8819212643483554, 0, 0.471396736825998), _colorNames.BLACK)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(19.535435987461113, 2, 14.324709358902954), new Quaternion(0, -0.8819212643483554, 0, 0.471396736825998), _colorNames.BLACK)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(20.565023997169046, 2, 12.853949325237242), new Quaternion(0, -0.8819212643483554, 0, 0.471396736825998), _colorNames.BLACK)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(2.5, 2, 24.5), new Quaternion(0, -1.0000000000000004, 0, 1.5265566588595902e-16), _colorNames.BLACK)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4.5, 2, 24.5), new Quaternion(0, -1.0000000000000004, 0, 1.5265566588595902e-16), _colorNames.BLACK)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(12, 2, 1), new Quaternion(0, -1.0000000000000004, 0, 1.5265566588595902e-16), _colorNames.BLACK)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(14, 2, 1), new Quaternion(0, -1.0000000000000004, 0, 1.5265566588595902e-16), _colorNames.BLACK)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 2, 1), new Quaternion(0, -1.0000000000000004, 0, 1.5265566588595902e-16), _colorNames.BLACK)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(18, 2, 1), new Quaternion(0, -1.0000000000000004, 0, 1.5265566588595902e-16), _colorNames.BLACK)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(20, 2, 1), new Quaternion(0, -1.0000000000000004, 0, 1.5265566588595902e-16), _colorNames.BLACK)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(22, 2, 1), new Quaternion(0, -1.0000000000000004, 0, 1.5265566588595902e-16), _colorNames.BLACK)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(24, 2, 1), new Quaternion(0, -1.0000000000000004, 0, 1.5265566588595902e-16), _colorNames.BLACK)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26, 2, 1), new Quaternion(0, -1.0000000000000004, 0, 1.5265566588595902e-16), _colorNames.BLACK)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(28, 2, 1), new Quaternion(0, -1.0000000000000004, 0, 1.5265566588595902e-16), _colorNames.BLACK)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(30, 2, 1), new Quaternion(0, -1.0000000000000004, 0, 1.5265566588595902e-16), _colorNames.BLACK)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(30.5, 2, 11.5), new Quaternion(0, -1.0000000000000004, 0, 1.5265566588595902e-16), _colorNames.BLACK)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(28.5, 2, 11.5), new Quaternion(0, -1.0000000000000004, 0, 1.5265566588595902e-16), _colorNames.BLACK)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26.5, 2, 11.5), new Quaternion(0, -1.0000000000000004, 0, 1.5265566588595902e-16), _colorNames.BLACK)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(25, 2, 10.777648394467445), new Quaternion(0, -0.9238795325112868, 0, -0.3826834323650898), _colorNames.BLACK))


        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 2.1131098204447163, 18.5), new Quaternion(0, 0, 0, 1), _colorNames.TURQUOISE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 2.1131098204447163, 13.3643736634661), new Quaternion(0, 0, 0, 1), _colorNames.TURQUOISE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 2, 12), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.TURQUOISE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 2, 10), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.TURQUOISE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 2, 8), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.TURQUOISE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 2, 6), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.TURQUOISE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 2, 19.5), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.TURQUOISE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 2, 21.5), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.TURQUOISE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 2, 23.5), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.TURQUOISE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 2, 25.5), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.TURQUOISE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 2, 27.5), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.TURQUOISE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16, 2, 29.5), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.TURQUOISE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(5.629690951154565, 2, 12), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.TURQUOISE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(5.629690951154565, 2, 13.992145792950481), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.TURQUOISE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(5.629690951154565, 2, 15.877767839347182), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.TURQUOISE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(5.629690951154565, 2, 17.775648788601902), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.TURQUOISE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(5.629690951154565, 2, 19.738168758103857), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.TURQUOISE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(5.629690951154565, 2, 21.661335366428123), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.TURQUOISE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(5.629690951154565, 2, 23.6127947992118), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.TURQUOISE))


        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(14, 2, 18.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(11.5, 2, 18.5), new Quaternion(0, 0.29028467725446233, 0, 0.9569403357322088), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(11.5, 2, 15.5), new Quaternion(0, 0.29028467725446233, 0, 0.9569403357322088), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(11.5, 2, 13.5), new Quaternion(0, 0.29028467725446233, 0, 0.9569403357322088), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(14, 2, 13.5), new Quaternion(0, 0.29028467725446233, 0, 0.9569403357322088), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(14, 2, 11.5), new Quaternion(0, 0.29028467725446233, 0, 0.9569403357322088), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(17.5, 2, 11.5), new Quaternion(0, 0.29028467725446233, 0, 0.9569403357322088), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(19, 2, 11.5), new Quaternion(0, 0.29028467725446233, 0, 0.9569403357322088), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(22, 2, 11.5), new Quaternion(0, 0.29028467725446233, 0, 0.9569403357322088), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(22, 2, 13), new Quaternion(0, 0.29028467725446233, 0, 0.9569403357322088), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(21, 2, 14.5), new Quaternion(0, 0.29028467725446233, 0, 0.9569403357322088), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(20, 2, 16), new Quaternion(0, 0.29028467725446233, 0, 0.9569403357322088), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(19, 2, 17.5), new Quaternion(0, 0.29028467725446233, 0, 0.9569403357322088), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(22, 2, 16.5), new Quaternion(0, 0.29028467725446233, 0, 0.9569403357322088), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(23, 2, 14.5), new Quaternion(0, 0.29028467725446233, 0, 0.9569403357322088), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(13, 2, 24.5), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865477), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(13, 2, 22.54661537222332), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865477), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(13, 2, 20.5), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865477), _colorNames.YELLOW))

        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(2, 1.5, 16), new Quaternion(0, 0, 0, 1), _colorNames.WHITE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4, 1.5, 16), new Quaternion(0, 0, 0, 1), _colorNames.WHITE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(6, 1.5, 16), new Quaternion(0, 0, 0, 1), _colorNames.WHITE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(8, 1.5, 16), new Quaternion(0, 0, 0, 1), _colorNames.WHITE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(10, 1.5, 16), new Quaternion(0, 0, 0, 1), _colorNames.WHITE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(10, 2, 1), new Quaternion(0, 0, 0, 1), _colorNames.WHITE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(7.5, 2, 1), new Quaternion(0, 0, 0, 1), _colorNames.WHITE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(5, 2, 1), new Quaternion(0, 0, 0, 1), _colorNames.WHITE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(2.5, 2, 1), new Quaternion(0, 0, 0, 1), _colorNames.WHITE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(29, 2, 30.5), new Quaternion(0, 0, 0, 1), _colorNames.WHITE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26.5, 2, 30.5), new Quaternion(0, 0, 0, 1), _colorNames.WHITE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(24, 2, 30.5), new Quaternion(0, 0, 0, 1), _colorNames.WHITE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(21.5, 2, 30.5), new Quaternion(0, 0, 0, 1), _colorNames.WHITE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(19, 2, 30.5), new Quaternion(0, 0, 0, 1), _colorNames.WHITE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(19, 2, 22), new Quaternion(0, 0, 0, 1), _colorNames.WHITE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(21.5, 2, 22), new Quaternion(0, 0, 0, 1), _colorNames.WHITE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(24, 2, 22), new Quaternion(0, 0, 0, 1), _colorNames.WHITE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16.5, 2, 30.5), new Quaternion(0, 0, 0, 1), _colorNames.WHITE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(14, 2, 30.5), new Quaternion(0, 0, 0, 1), _colorNames.WHITE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(11.5, 2, 30.5), new Quaternion(0, 0, 0, 1), _colorNames.WHITE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(9, 2, 30.5), new Quaternion(0, 0, 0, 1), _colorNames.WHITE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(6.5, 2, 30.5), new Quaternion(0, 0, 0, 1), _colorNames.WHITE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4, 2, 30.5), new Quaternion(0, 0, 0, 1), _colorNames.WHITE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1.5, 2, 30.5), new Quaternion(0, 0, 0, 1), _colorNames.WHITE))


        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(17, 2, 6), new Quaternion(0, 0, 0, 1), _colorNames.PURPLE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(19, 2, 6), new Quaternion(0, 0, 0, 1), _colorNames.PURPLE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(21, 2, 6), new Quaternion(0, 0, 0, 1), _colorNames.PURPLE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(23, 2, 6), new Quaternion(0, 0, 0, 1), _colorNames.PURPLE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(24.555099203395383, 2, 6.5640690781639215), new Quaternion(0, 0.3826834323650897, 0, 0.9238795325112867), _colorNames.PURPLE)) 



        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31.5, 2, 16), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31.5, 2, 18), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31.5, 2, 20), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31.5, 2, 22), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31.5, 2, 24), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31.5, 2, 26), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31.5, 2, 28), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31.5, 2, 30), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31.5, 2, 14), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31.5, 2, 12), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31.5, 2, 10), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31.5, 2, 8), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31.5, 2, 6), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31.5, 2, 4), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31.5, 2, 2), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1.5, 2, 2), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1.5, 2, 4), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1.5, 2, 6), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(2.077206251569038, 2, 7.527871156435408), new Quaternion(0, -0.38268343236508967, 0, 0.9238795325112867), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(3.5395085501699803, 2, 8.94460351376756), new Quaternion(0, -0.38268343236508967, 0, 0.9238795325112867), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4.941157279206777, 2, 10.2771563480538), new Quaternion(0, -0.38268343236508967, 0, 0.9238795325112867), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1.5, 2, 29.5), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1.5, 2, 27.5), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1.5, 2, 25.5), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1.5, 2, 23.5), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1.5, 2, 21.5), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1.5, 2, 19.5), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1.5, 2, 17.5), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1.5, 2, 15.5), new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477), _colorNames.RED))



        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26, 2, 16), new Quaternion(0, 0, 0, 1), _colorNames.GREEN))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(28, 2, 16), new Quaternion(0, 0, 0, 1), _colorNames.GREEN)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(30, 2, 16), new Quaternion(0, 0, 0, 1), _colorNames.GREEN)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(24, 2, 16), new Quaternion(0, 0, 0, 1), _colorNames.GREEN)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(9.802654162285263, 2, 19.063421592613604), new Quaternion(0, 0, 0, 1), _colorNames.GREEN)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(7.794499957690386, 2, 19.074895198331667), new Quaternion(0, 0, 0, 1), _colorNames.GREEN)) 

    }