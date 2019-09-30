import utils from "../../node_modules/decentraland-ecs-utils/index"
import { Wall } from "./wall"
import { Level } from "./level"
import { _colorNames } from "../functions"
import * as Globals from "../functions"


// TODO - some of the levels have a SPECIAL COLOR   YELLOW and PURPLE

    // BB added entieties
    export function createScene(level:Level)
    {
        const neuron1 = new Entity()
        neuron1.setParent(this)
        const gltfShape_2 = new GLTFShape('models/neuron1.glb')
        neuron1.addComponentOrReplace(gltfShape_2)
        const transform_6 = new Transform({
        position: new Vector3(4, 0, 28),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
        })
        neuron1.addComponentOrReplace(transform_6)

        const neuron2 = new Entity()
        neuron2.setParent(this)
        const gltfShape_3 = new GLTFShape('models/neuron2.glb')
        neuron2.addComponentOrReplace(gltfShape_3)
        const transform_7 = new Transform({
        position: new Vector3(15.5, 0, 3.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
        })
        neuron2.addComponentOrReplace(transform_7)

        const neuron3 = new Entity()
        neuron3.setParent(this)
        const gltfShape_4 = new GLTFShape('models/neuron3.glb')
        neuron3.addComponentOrReplace(gltfShape_4)
        const transform_8 = new Transform({
        position: new Vector3(6.5, 0, 5),
        rotation: new Quaternion(0, 0.3826834323650897, 0, 0.9238795325112867),
        scale: new Vector3(1, 1, 1)
        })
        neuron3.addComponentOrReplace(transform_8)

        const neuron4 = new Entity()
        neuron4.setParent(this)
        const gltfShape_5 = new GLTFShape('models/neuron4.glb')
        neuron4.addComponentOrReplace(gltfShape_5)
        const transform_9 = new Transform({
        position: new Vector3(16, 0, 14.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
        })
        neuron4.addComponentOrReplace(transform_9)

        const neuron5 = new Entity()
        neuron5.setParent(this)
        const gltfShape_6 = new GLTFShape('models/neuron5.glb')
        neuron5.addComponentOrReplace(gltfShape_6)
        const transform_10 = new Transform({
        position: new Vector3(3.5, 0, 16),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
        })
        neuron5.addComponentOrReplace(transform_10)

        const neuron6 = new Entity()
        neuron6.setParent(this)
        const gltfShape_7 = new GLTFShape('models/neuron6.glb')
        neuron6.addComponentOrReplace(gltfShape_7)
        const transform_11 = new Transform({
        position: new Vector3(26.5, 0, 5),
        rotation: new Quaternion(0, -0.29028467725446233, 0, 0.9569403357322088),
        scale: new Vector3(1, 1, 1)
        })
        neuron6.addComponentOrReplace(transform_11)

        const neuron7 = new Entity()
        neuron7.setParent(this)
        const gltfShape_8 = new GLTFShape('models/neuron7.glb')
        neuron7.addComponentOrReplace(gltfShape_8)
        const transform_12 = new Transform({
        position: new Vector3(29, 0, 23),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
        })
        neuron7.addComponentOrReplace(transform_12)

        const neuron8 = new Entity()
        neuron8.setParent(this)
        const gltfShape_9 = new GLTFShape('models/neuron8.glb')
        neuron8.addComponentOrReplace(gltfShape_9)
        const transform_13 = new Transform({
        position: new Vector3(16, 0, 26),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
        })
        neuron8.addComponentOrReplace(transform_13)

        const halo = new Entity()
        halo.setParent(this)
        const gltfShape_15 = new GLTFShape('models/halo.glb')
        halo.addComponentOrReplace(gltfShape_15)
        const transform_81 = new Transform({
        position: new Vector3(8, 5.5, 22.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
        })
        halo.addComponentOrReplace(transform_81)

        const mandalaFran = new Entity()
        mandalaFran.setParent(this)
        const gltfShape_19 = new GLTFShape('models/mandalaFran.glb')
        mandalaFran.addComponentOrReplace(gltfShape_19)
        const transform_145 = new Transform({
        position: new Vector3(16, 19.5, 16),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
        })
        mandalaFran.addComponentOrReplace(transform_145)

        const blackBox = new Entity()
        blackBox.setParent(this)
        const gltfShape_20 = new GLTFShape('models/blackBox.glb')
        blackBox.addComponentOrReplace(gltfShape_20)
        const transform_146 = new Transform({
        position: new Vector3(16, 20.041378500676313, 16),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
        })
        blackBox.addComponentOrReplace(transform_146)

    }

    export function createWalls(level:Level)
    {
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31, 1.5, 15.5), new Quaternion(0, 0, 0, 1), _colorNames.GREEN)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31, 1.5, 17.5), new Quaternion(0, 0, 0, 1), _colorNames.GREEN)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(18.5, 1.5, 8), new Quaternion(0, 0, 0, 1), _colorNames.GREEN)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(20.5, 1.5, 8), new Quaternion(0, 0, 0, 1), _colorNames.GREEN)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(22.5, 1.5, 8), new Quaternion(0, 0, 0, 1), _colorNames.GREEN))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(29, 1.5, 17.83408772145484), new Quaternion(0, 0.19509032201612825, 0, 0.9807852804032304), _colorNames.GREEN)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(27.45672122136531, 1.5, 18.8761734190171), new Quaternion(0, 0.3826834323650897, 0, 0.9238795325112867), _colorNames.GREEN)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26.842164470721222, 1.5, 20.5), new Quaternion(0, 0.7071067811865474, 0, 0.7071067811865474), _colorNames.GREEN)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26.842164470721222, 1.5, 20.5), new Quaternion(0, 0.7071067811865474, 0, 0.7071067811865474), _colorNames.GREEN)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26.873951572967872, 1.5, 22.5), new Quaternion(0, 0.7071067811865474, 0, 0.7071067811865474), _colorNames.GREEN)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(27.270739370570507, 1.5, 24.356339472358012), new Quaternion(0, 0.8314696123025451, 0, 0.5555702330196023), _colorNames.GREEN)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(28.5, 1.5, 25.5949361155967), new Quaternion(0, 0.9807852804032304, 0, 0.19509032201612828), _colorNames.GREEN)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(29.78032474391376, 1.5, 25.04395592843315), new Quaternion(0, 0.8314696123025452, 0, -0.5555702330196021), _colorNames.GREEN))
            
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(15.5, 1.5, 31), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(17.5, 1.5, 31), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(8.5, 1.5, 11), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(11.5, 1.5, 12), new Quaternion(0, 0.5555702330196022, 0, 0.8314696123025452), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(11.5, 1.5, 17), new Quaternion(0, 0.9238795325112865, 0, 0.3826834323650897), _colorNames.RED))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(15.5, 1.5, 9), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(15.5, 1.5, 11), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16.5, 1.5, 12), new Quaternion(0, 5.551115123125783e-17, 0, 0.9999999999999999), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(18.5, 1.5, 12), new Quaternion(0, 5.551115123125783e-17, 0, 0.9999999999999999), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(20.5, 1.5, 12), new Quaternion(0, 5.551115123125783e-17, 0, 0.9999999999999999), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(23.661445481822906, 1.5, 12), new Quaternion(0, 5.551115123125783e-17, 0, 0.9999999999999999), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(25.5, 1.5, 12), new Quaternion(0, 5.551115123125783e-17, 0, 0.9999999999999999), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(27.5, 1.5, 12), new Quaternion(0, 5.551115123125783e-17, 0, 0.9999999999999999), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(28.5, 1.5, 11), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(28.5, 1.5, 9), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(28.5, 1.5, 7), new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(29.5, 1.5, 6), new Quaternion(0, 5.551115123125783e-17, 0, 0.9999999999999999), _colorNames.RED)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(30.5, 1.5, 6), new Quaternion(0, 5.551115123125783e-17, 0, 0.9999999999999999), _colorNames.RED))
            
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1, 1.5, 17), new Quaternion(0, 0, 0, 1), _colorNames.TURQUOISE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1.0794093377407954, 1.5202402195485973, 15.098193287195727), new Quaternion(0, 0, 0, 1), _colorNames.TURQUOISE)) 
            
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(19.5, 1.5, 1), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865478), _colorNames.WHITE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(21.5, 1.5, 1), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865478), _colorNames.WHITE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(30, 1.5, 16.5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865478), _colorNames.WHITE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16.5, 1.5, 30), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.WHITE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(2, 1.5, 16), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865478), _colorNames.WHITE)) 
            
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(18.5, 1.5, 31.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(20.5, 1.5, 31.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(22.5, 1.5, 31.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(24.5, 1.5, 31.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26.5, 1.5, 31.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(28.5, 1.5, 31.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(30.5, 1.5, 31.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31.5, 1.5, 30.5), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31.5, 1.5, 28.5), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31.5, 1.5, 26.5), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31.5, 1.5, 24.5), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31.5, 1.5, 22.5), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31.5, 1.5, 20.5), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31.5, 1.5, 18.5), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31.5, 1.5, 14.5), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31.5, 1.5, 12.5), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31.5, 1.5, 10.5), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31.5, 1.5, 8.5), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31.5, 1.5, 6.5), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31.5, 1.5, 4.5), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(31.5, 1.5, 2.5), new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(30.5, 1.5, 1.5), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(28.5, 1.5, 1.5), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26.5, 1.5, 1.5), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(24.5, 1.5, 1.5), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(22.5, 1.5, 1.5), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(18.5, 1.5, 1.5), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16.5, 1.5, 1.5), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(14.5, 1.5, 1.5), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(12.5, 1.5, 1.5), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(10.5, 1.5, 1.5), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(8.5, 1.5, 1.5), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(6.5, 1.5, 1.5), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4.5, 1.5, 1.5), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(2.5, 1.5, 1.5), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1.5, 1.5, 2.5), new Quaternion(0, -0.7071067811865475, 0, 0.7071067811865476), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1.5, 1.5, 4.5), new Quaternion(0, -0.7071067811865475, 0, 0.7071067811865476), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1.5, 1.5, 6.380851967891044), new Quaternion(0, -0.7071067811865475, 0, 0.7071067811865476), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1.5, 1.5, 8.352574469917652), new Quaternion(0, -0.7071067811865475, 0, 0.7071067811865476), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1.5, 1.5, 10.262115973560011), new Quaternion(0, -0.7071067811865475, 0, 0.7071067811865476), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1.5, 1.5, 12.172505459183276), new Quaternion(0, -0.7071067811865475, 0, 0.7071067811865476), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1.5, 1.5, 14.084322591944051), new Quaternion(0, -0.7071067811865475, 0, 0.7071067811865476), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1.5, 1.5, 18), new Quaternion(0, -0.7071067811865475, 0, 0.7071067811865476), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1.5, 1.5, 20), new Quaternion(0, -0.7071067811865475, 0, 0.7071067811865476), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1.5, 1.5, 22), new Quaternion(0, -0.7071067811865475, 0, 0.7071067811865476), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1.5, 1.5, 24), new Quaternion(0, -0.7071067811865475, 0, 0.7071067811865476), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1.5, 1.5, 26), new Quaternion(0, -0.7071067811865475, 0, 0.7071067811865476), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1.5, 1.5, 28), new Quaternion(0, -0.7071067811865475, 0, 0.7071067811865476), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(1.5, 1.5, 30), new Quaternion(0, -0.7071067811865475, 0, 0.7071067811865476), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(14.5, 1.5, 31.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(12.5, 1.5, 31.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(10.5, 1.5, 31.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(8.5, 1.5, 31.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(6.5, 1.5, 31.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(4.5, 1.5, 31.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(2.5, 1.5, 31.5), new Quaternion(0, 0, 0, 1), _colorNames.YELLOW)) 
            
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(19.5, 1.5, 3), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.PURPLE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(19.5, 1.5, 5), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.PURPLE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(18.5, 1.5, 6), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.PURPLE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16.5, 1.5, 6), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.PURPLE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(14.5, 1.5, 6), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.PURPLE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(13.5, 1.5, 7), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.PURPLE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(14.5, 1.5, 8), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.PURPLE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16.5, 1.5, 8), new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16), _colorNames.PURPLE)) 
            
            
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(24, 1.5, 8.835673360750997), new Quaternion(0, -0.47139673682599775, 0, 0.8819212643483552), _colorNames.BLUE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(23.5, 1.5, 9.642815267582801), new Quaternion(0, -1.0000000000000004, 0, 2.636779683484747e-16), _colorNames.BLUE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(21.5, 1.5, 9.629029626865492), new Quaternion(0, -1.0000000000000004, 0, 2.636779683484747e-16), _colorNames.BLUE))
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(8, 1.5, 20.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(8, 1.5, 23.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(9.5, 1.5, 22), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.BLUE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(9.5, 1.5, 22), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.BLUE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(9.5, 1.5, 22), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.BLUE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(5.5, 1.5, 22), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.BLUE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(6.250009446178865, 1.5, 20.697120567215837), new Quaternion(0, -0.9833422738167233, 0, 0.18176350713208939), _colorNames.BLUE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(6.250009446178865, 1.5, 20.697120567215837), new Quaternion(0, -0.9833422738167233, 0, 0.18176350713208939), _colorNames.BLUE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(5.5, 1.5, 24), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.BLUE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(5.5, 1.5, 26), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.BLUE)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(5.5, 1.5, 28), new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477), _colorNames.BLUE)) 
            
            
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(9.724082160043235, 1.5, 21), new Quaternion(0, -0.2902846772544624, 0, 0.9569403357322089), _colorNames.BLACK)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(11, 1.5, 20.706103891986295), new Quaternion(0, 0.4713967368259975, 0, 0.8819212643483549), _colorNames.BLACK)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(12.31555415650996, 1.5, 20.413656427455358), new Quaternion(0, -0.2902846772544624, 0, 0.9569403357322089), _colorNames.BLACK)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(13.628330724923838, 1.5, 20.179859070199452), new Quaternion(0, 0.4713967368259975, 0, 0.8819212643483549), _colorNames.BLACK)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(15, 1.5, 20), new Quaternion(0, -0.2902846772544624, 0, 0.9569403357322089), _colorNames.BLACK)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(16.31070993536101, 1.5, 19.748982852762175), new Quaternion(0, 0.4713967368259975, 0, 0.8819212643483549), _colorNames.BLACK)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(17.648314617931042, 1.5, 19.4796031996009), new Quaternion(0, -0.2902846772544624, 0, 0.9569403357322089), _colorNames.BLACK)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(19, 1.5, 19.243374827907672), new Quaternion(0, 0.4713967368259975, 0, 0.8819212643483549), _colorNames.BLACK)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(20.34659799124216, 1.5, 19), new Quaternion(0, -0.2902846772544624, 0, 0.9569403357322089), _colorNames.BLACK)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(21.701025670005436, 1.5, 18.77330234373586), new Quaternion(0, 0.4713967368259975, 0, 0.8819212643483549), _colorNames.BLACK)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(22.95379247654225, 1.5, 18.516725263512342), new Quaternion(0, -0.2902846772544624, 0, 0.9569403357322089), _colorNames.BLACK)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(24.252516994395446, 1.5, 18.272401756989318), new Quaternion(0, 0.4713967368259975, 0, 0.8819212643483549), _colorNames.BLACK)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(25.20534832603004, 1.5, 18.388848842979375), new Quaternion(0, -0.5555702330196023, 0, 0.8314696123025452), _colorNames.BLACK)) 
        level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(25.93029702811773, 1.5, 20.114763035353526), new Quaternion(0, -0.5555702330196023, 0, 0.8314696123025452), _colorNames.BLACK)) 
            
                

    }