

/// only Walls... all other entities I've copy pasted into walls4

const redwall = new Entity()
redwall.setParent(scene)
const gltfShape_12 = new GLTFShape('models/redwall.glb')
redwall.addComponentOrReplace(gltfShape_12)
const transform_41 = new Transform({
  position: new Vector3(29, 1.537380429844276, 29.5),
  rotation: new Quaternion(0, 0.3826834323650897, 0, 0.9238795325112867),
  scale: new Vector3(1, 1, 1)
})
redwall.addComponentOrReplace(transform_41)
engine.addEntity(redwall)


const redwall_2 = new Entity()
redwall_2.setParent(scene)
redwall_2.addComponentOrReplace(gltfShape_12)
const transform_42 = new Transform({
  position: new Vector3(29, 4.5, 29.5),
  rotation: new Quaternion(0, 0.3826834323650897, 0, 0.9238795325112867),
  scale: new Vector3(1, 1, 1)
})
redwall_2.addComponentOrReplace(transform_42)
engine.addEntity(redwall_2)


const redwall_3 = new Entity()
redwall_3.setParent(scene)
redwall_3.addComponentOrReplace(gltfShape_12)
const transform_43 = new Transform({
  position: new Vector3(29, 7, 29.5),
  rotation: new Quaternion(0, 0.3826834323650897, 0, 0.9238795325112867),
  scale: new Vector3(1, 1, 1)
})
redwall_3.addComponentOrReplace(transform_43)
engine.addEntity(redwall_3)


const redwall_4 = new Entity()
redwall_4.setParent(scene)
redwall_4.addComponentOrReplace(gltfShape_12)
const transform_44 = new Transform({
  position: new Vector3(29, 10.010246542798063, 29.5),
  rotation: new Quaternion(0, 0.3826834323650897, 0, 0.9238795325112867),
  scale: new Vector3(1, 1, 1)
})
redwall_4.addComponentOrReplace(transform_44)
engine.addEntity(redwall_4)


const yellowwall = new Entity()
yellowwall.setParent(scene)
const gltfShape_13 = new GLTFShape('models/yellowwall.glb')
yellowwall.addComponentOrReplace(gltfShape_13)
const transform_45 = new Transform({
  position: new Vector3(1.5, 1.5, 3),
  rotation: new Quaternion(0, 0.3826834323650897, 0, 0.9238795325112867),
  scale: new Vector3(1, 1, 1)
})
yellowwall.addComponentOrReplace(transform_45)
engine.addEntity(yellowwall)


const yellowwall_2 = new Entity()
yellowwall_2.setParent(scene)
yellowwall_2.addComponentOrReplace(gltfShape_13)
const transform_46 = new Transform({
  position: new Vector3(1.5, 4.5, 3),
  rotation: new Quaternion(0, 0.3826834323650897, 0, 0.9238795325112867),
  scale: new Vector3(1, 1, 1)
})
yellowwall_2.addComponentOrReplace(transform_46)
engine.addEntity(yellowwall_2)


const yellowwall_3 = new Entity()
yellowwall_3.setParent(scene)
yellowwall_3.addComponentOrReplace(gltfShape_13)
const transform_47 = new Transform({
  position: new Vector3(1.5, 7.5, 3),
  rotation: new Quaternion(0, 0.3826834323650897, 0, 0.9238795325112867),
  scale: new Vector3(1, 1, 1)
})
yellowwall_3.addComponentOrReplace(transform_47)
engine.addEntity(yellowwall_3)


const blackwall = new Entity()
blackwall.setParent(scene)
const gltfShape_14 = new GLTFShape('models/blackwall.glb')
blackwall.addComponentOrReplace(gltfShape_14)
const transform_48 = new Transform({
  position: new Vector3(2, 1.5, 16),
  rotation: new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
blackwall.addComponentOrReplace(transform_48)
engine.addEntity(blackwall)


const blackwall_2 = new Entity()
blackwall_2.setParent(scene)
blackwall_2.addComponentOrReplace(gltfShape_14)
const transform_49 = new Transform({
  position: new Vector3(2, 4.5, 16),
  rotation: new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
blackwall_2.addComponentOrReplace(transform_49)
engine.addEntity(blackwall_2)


const blackwall_3 = new Entity()
blackwall_3.setParent(scene)
blackwall_3.addComponentOrReplace(gltfShape_14)
const transform_50 = new Transform({
  position: new Vector3(2, 7, 16),
  rotation: new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
blackwall_3.addComponentOrReplace(transform_50)
engine.addEntity(blackwall_3)


const blackwall_4 = new Entity()
blackwall_4.setParent(scene)
blackwall_4.addComponentOrReplace(gltfShape_14)
const transform_51 = new Transform({
  position: new Vector3(29.5, 1.5, 1),
  rotation: new Quaternion(0, -0.38268343236508984, 0, 0.9238795325112868),
  scale: new Vector3(1, 1, 1)
})
blackwall_4.addComponentOrReplace(transform_51)
engine.addEntity(blackwall_4)


const blackwall_5 = new Entity()
blackwall_5.setParent(scene)
blackwall_5.addComponentOrReplace(gltfShape_14)
const transform_52 = new Transform({
  position: new Vector3(29.5, 4.5, 1),
  rotation: new Quaternion(0, -0.38268343236508984, 0, 0.9238795325112868),
  scale: new Vector3(1, 1, 1)
})
blackwall_5.addComponentOrReplace(transform_52)
engine.addEntity(blackwall_5)


const blackwall_6 = new Entity()
blackwall_6.setParent(scene)
blackwall_6.addComponentOrReplace(gltfShape_14)
const transform_53 = new Transform({
  position: new Vector3(29.5, 7.5, 1),
  rotation: new Quaternion(0, -0.38268343236508984, 0, 0.9238795325112868),
  scale: new Vector3(1, 1, 1)
})
blackwall_6.addComponentOrReplace(transform_53)
engine.addEntity(blackwall_6)


const blackwall_7 = new Entity()
blackwall_7.setParent(scene)
blackwall_7.addComponentOrReplace(gltfShape_14)
const transform_54 = new Transform({
  position: new Vector3(29.5, 10.5, 1),
  rotation: new Quaternion(0, -0.38268343236508984, 0, 0.9238795325112868),
  scale: new Vector3(1, 1, 1)
})
blackwall_7.addComponentOrReplace(transform_54)
engine.addEntity(blackwall_7)


const blackwall_8 = new Entity()
blackwall_8.setParent(scene)
blackwall_8.addComponentOrReplace(gltfShape_14)
const transform_55 = new Transform({
  position: new Vector3(17.5, 1.5, 1),
  rotation: new Quaternion(0, -2.7755575615628914e-17, 0, 1),
  scale: new Vector3(1, 1, 1)
})
blackwall_8.addComponentOrReplace(transform_55)
engine.addEntity(blackwall_8)


const blackwall_9 = new Entity()
blackwall_9.setParent(scene)
blackwall_9.addComponentOrReplace(gltfShape_14)
const transform_56 = new Transform({
  position: new Vector3(5.5, 1.5, 1),
  rotation: new Quaternion(0, -2.7755575615628914e-17, 0, 1),
  scale: new Vector3(1, 1, 1)
})
blackwall_9.addComponentOrReplace(transform_56)
engine.addEntity(blackwall_9)


const blackwall_10 = new Entity()
blackwall_10.setParent(scene)
blackwall_10.addComponentOrReplace(gltfShape_14)
const transform_57 = new Transform({
  position: new Vector3(5.5, 2.5, 10),
  rotation: new Quaternion(0, -0.38268343236508984, 0, 0.9238795325112868),
  scale: new Vector3(1, 1, 1)
})
blackwall_10.addComponentOrReplace(transform_57)
engine.addEntity(blackwall_10)


const blackwall_11 = new Entity()
blackwall_11.setParent(scene)
blackwall_11.addComponentOrReplace(gltfShape_14)
const transform_58 = new Transform({
  position: new Vector3(5.5, 5.5, 10),
  rotation: new Quaternion(0, -0.38268343236508984, 0, 0.9238795325112868),
  scale: new Vector3(1, 1, 1)
})
blackwall_11.addComponentOrReplace(transform_58)
engine.addEntity(blackwall_11)


const blackwall_12 = new Entity()
blackwall_12.setParent(scene)
blackwall_12.addComponentOrReplace(gltfShape_14)
const transform_59 = new Transform({
  position: new Vector3(5.5, 8.5, 10),
  rotation: new Quaternion(0, -0.38268343236508984, 0, 0.9238795325112868),
  scale: new Vector3(1, 1, 1)
})
blackwall_12.addComponentOrReplace(transform_59)
engine.addEntity(blackwall_12)


const blackwall_13 = new Entity()
blackwall_13.setParent(scene)
blackwall_13.addComponentOrReplace(gltfShape_14)
const transform_60 = new Transform({
  position: new Vector3(16.5, 7, 15.5),
  rotation: new Quaternion(0, -0.38268343236508984, 0, 0.9238795325112868),
  scale: new Vector3(1, 1, 1)
})
blackwall_13.addComponentOrReplace(transform_60)
engine.addEntity(blackwall_13)


const blackwall_14 = new Entity()
blackwall_14.setParent(scene)
blackwall_14.addComponentOrReplace(gltfShape_14)
const transform_61 = new Transform({
  position: new Vector3(16.5, 10, 15.5),
  rotation: new Quaternion(0, -0.38268343236508984, 0, 0.9238795325112868),
  scale: new Vector3(1, 1, 1)
})
blackwall_14.addComponentOrReplace(transform_61)
engine.addEntity(blackwall_14)


const blackwall_15 = new Entity()
blackwall_15.setParent(scene)
blackwall_15.addComponentOrReplace(gltfShape_14)
const transform_62 = new Transform({
  position: new Vector3(16.5, 13, 15.5),
  rotation: new Quaternion(0, -0.38268343236508984, 0, 0.9238795325112868),
  scale: new Vector3(1, 1, 1)
})
blackwall_15.addComponentOrReplace(transform_62)
engine.addEntity(blackwall_15)


const blackwall_16 = new Entity()
blackwall_16.setParent(scene)
blackwall_16.addComponentOrReplace(gltfShape_14)
const transform_63 = new Transform({
  position: new Vector3(31, 1.5, 10),
  rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
blackwall_16.addComponentOrReplace(transform_63)
engine.addEntity(blackwall_16)


const blackwall_17 = new Entity()
blackwall_17.setParent(scene)
blackwall_17.addComponentOrReplace(gltfShape_14)
const transform_64 = new Transform({
  position: new Vector3(31, 4.5, 10),
  rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
blackwall_17.addComponentOrReplace(transform_64)
engine.addEntity(blackwall_17)


const blackwall_18 = new Entity()
blackwall_18.setParent(scene)
blackwall_18.addComponentOrReplace(gltfShape_14)
const transform_65 = new Transform({
  position: new Vector3(31, 7.5, 10),
  rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
blackwall_18.addComponentOrReplace(transform_65)
engine.addEntity(blackwall_18)


const blackwall_19 = new Entity()
blackwall_19.setParent(scene)
blackwall_19.addComponentOrReplace(gltfShape_14)
const transform_66 = new Transform({
  position: new Vector3(31, 10.5, 10),
  rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
blackwall_19.addComponentOrReplace(transform_66)
engine.addEntity(blackwall_19)


const blackwall_20 = new Entity()
blackwall_20.setParent(scene)
blackwall_20.addComponentOrReplace(gltfShape_14)
const transform_67 = new Transform({
  position: new Vector3(31.5, 1.5, 25.5),
  rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
blackwall_20.addComponentOrReplace(transform_67)
engine.addEntity(blackwall_20)


const blackwall_21 = new Entity()
blackwall_21.setParent(scene)
blackwall_21.addComponentOrReplace(gltfShape_14)
const transform_68 = new Transform({
  position: new Vector3(31.5, 4.5, 25.5),
  rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
blackwall_21.addComponentOrReplace(transform_68)
engine.addEntity(blackwall_21)


const blackwall_22 = new Entity()
blackwall_22.setParent(scene)
blackwall_22.addComponentOrReplace(gltfShape_14)
const transform_69 = new Transform({
  position: new Vector3(31.5, 7.5, 25.5),
  rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
blackwall_22.addComponentOrReplace(transform_69)
engine.addEntity(blackwall_22)