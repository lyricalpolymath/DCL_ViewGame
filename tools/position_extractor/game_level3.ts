
// example output
//level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26.5, 1.5030281017900293, 29.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))

level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26.5, 1.5030281017900293, 29.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))

const redwall = new Entity()
redwall.setParent(scene)
const gltfShape_5 = new GLTFShape('models/redwall.glb')
redwall.addComponentOrReplace(gltfShape_5)
const transform_13 = new Transform({
  position: new Vector3(20.5, 1.5584415885299827, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
redwall.addComponentOrReplace(transform_13)
engine.addEntity(redwall)


const redwall_2 = new Entity()
redwall_2.setParent(scene)
redwall_2.addComponentOrReplace(gltfShape_5)
const transform_14 = new Transform({
  position: new Vector3(17.46390046262978, 1.581462796781092, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
redwall_2.addComponentOrReplace(transform_14)
engine.addEntity(redwall_2)


const redwall_3 = new Entity()
redwall_3.setParent(scene)
redwall_3.addComponentOrReplace(gltfShape_5)
const transform_26 = new Transform({
  position: new Vector3(2.5, 1.5, 16),
  rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
redwall_3.addComponentOrReplace(transform_26)
engine.addEntity(redwall_3)


const redwall_4 = new Entity()
redwall_4.setParent(scene)
redwall_4.addComponentOrReplace(gltfShape_5)
const transform_27 = new Transform({
  position: new Vector3(2.5, 1.5, 22.5),
  rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
redwall_4.addComponentOrReplace(transform_27)
engine.addEntity(redwall_4)


const redwall_5 = new Entity()
redwall_5.setParent(scene)
redwall_5.addComponentOrReplace(gltfShape_5)
const transform_28 = new Transform({
  position: new Vector3(25, 1.5, 27.5),
  rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
redwall_5.addComponentOrReplace(transform_28)
engine.addEntity(redwall_5)


/////////////// BLUE
const bluewall = new Entity()
bluewall.setParent(scene)
const gltfShape_14 = new GLTFShape('models/bluewall.glb')
bluewall.addComponentOrReplace(gltfShape_14)
const transform_29 = new Transform({
  position: new Vector3(24.5, 1.6505976067636388, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bluewall.addComponentOrReplace(transform_29)
engine.addEntity(bluewall)


const bluewall_2 = new Entity()
bluewall_2.setParent(scene)
bluewall_2.addComponentOrReplace(gltfShape_14)
const transform_30 = new Transform({
  position: new Vector3(21.5, 1.5, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bluewall_2.addComponentOrReplace(transform_30)
engine.addEntity(bluewall_2)


const bluewall_3 = new Entity()
bluewall_3.setParent(scene)
bluewall_3.addComponentOrReplace(gltfShape_14)
const transform_31 = new Transform({
  position: new Vector3(19.5, 1.5, 1),
  rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
bluewall_3.addComponentOrReplace(transform_31)
engine.addEntity(bluewall_3)


const bluewall_4 = new Entity()
bluewall_4.setParent(scene)
bluewall_4.addComponentOrReplace(gltfShape_14)
const transform_32 = new Transform({
  position: new Vector3(23, 1.5, 11),
  rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
bluewall_4.addComponentOrReplace(transform_32)
engine.addEntity(bluewall_4)


const bluewall_5 = new Entity()
bluewall_5.setParent(scene)
bluewall_5.addComponentOrReplace(gltfShape_14)
const transform_33 = new Transform({
  position: new Vector3(4.5, 1.5, 11),
  rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
bluewall_5.addComponentOrReplace(transform_33)
engine.addEntity(bluewall_5)




////////// GREEN WALLS
const greenwall = new Entity()
greenwall.setParent(scene)
const gltfShape_15 = new GLTFShape('models/greenwall.glb')
greenwall.addComponentOrReplace(gltfShape_15)
const transform_34 = new Transform({
  position: new Vector3(3.5, 1.5, 17),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
greenwall.addComponentOrReplace(transform_34)
engine.addEntity(greenwall)


const greenwall_2 = new Entity()
greenwall_2.setParent(scene)
greenwall_2.addComponentOrReplace(gltfShape_15)
const transform_35 = new Transform({
  position: new Vector3(3.5, 1.5, 23.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
greenwall_2.addComponentOrReplace(transform_35)
engine.addEntity(greenwall_2)


const greenwall_3 = new Entity()
greenwall_3.setParent(scene)
greenwall_3.addComponentOrReplace(gltfShape_15)
const transform_36 = new Transform({
  position: new Vector3(5.5, 1.5, 23.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
greenwall_3.addComponentOrReplace(transform_36)
engine.addEntity(greenwall_3)



///// Turquoise
const turquoisewall = new Entity()
turquoisewall.setParent(scene)
const gltfShape_16 = new GLTFShape('models/turquoisewall.glb')
turquoisewall.addComponentOrReplace(gltfShape_16)
const transform_37 = new Transform({
  position: new Vector3(15.5, 1.5, 14),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
turquoisewall.addComponentOrReplace(transform_37)
engine.addEntity(turquoisewall)


const turquoisewall_2 = new Entity()
turquoisewall_2.setParent(scene)
turquoisewall_2.addComponentOrReplace(gltfShape_16)
const transform_38 = new Transform({
  position: new Vector3(13.497530691360588, 1.5, 14),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
turquoisewall_2.addComponentOrReplace(transform_38)
engine.addEntity(turquoisewall_2)


const turquoisewall_3 = new Entity()
turquoisewall_3.setParent(scene)
turquoisewall_3.addComponentOrReplace(gltfShape_16)
const transform_39 = new Transform({
  position: new Vector3(11.556840048393862, 1.5, 14),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
turquoisewall_3.addComponentOrReplace(transform_39)
engine.addEntity(turquoisewall_3)


const turquoisewall_4 = new Entity()
turquoisewall_4.setParent(scene)
turquoisewall_4.addComponentOrReplace(gltfShape_16)
const transform_40 = new Transform({
  position: new Vector3(15.5, 1.5, 31),
  rotation: new Quaternion(0, -0.7071067811865477, 0, 0.7071067811865476),
  scale: new Vector3(1, 1, 1)
})
turquoisewall_4.addComponentOrReplace(transform_40)
engine.addEntity(turquoisewall_4)


const turquoisewall_5 = new Entity()
turquoisewall_5.setParent(scene)
turquoisewall_5.addComponentOrReplace(gltfShape_16)
const transform_41 = new Transform({
  position: new Vector3(15.5, 1.5, 29),
  rotation: new Quaternion(0, -0.7071067811865477, 0, 0.7071067811865476),
  scale: new Vector3(1, 1, 1)
})
turquoisewall_5.addComponentOrReplace(transform_41)
engine.addEntity(turquoisewall_5)


const turquoisewall_6 = new Entity()
turquoisewall_6.setParent(scene)
turquoisewall_6.addComponentOrReplace(gltfShape_16)
const transform_42 = new Transform({
  position: new Vector3(21.5, 1.5, 31),
  rotation: new Quaternion(0, -0.7071067811865477, 0, 0.7071067811865476),
  scale: new Vector3(1, 1, 1)
})
turquoisewall_6.addComponentOrReplace(transform_42)
engine.addEntity(turquoisewall_6)


const turquoisewall_7 = new Entity()
turquoisewall_7.setParent(scene)
turquoisewall_7.addComponentOrReplace(gltfShape_16)
const transform_43 = new Transform({
  position: new Vector3(29, 1.5, 31),
  rotation: new Quaternion(0, -0.7071067811865477, 0, 0.7071067811865476),
  scale: new Vector3(1, 1, 1)
})
turquoisewall_7.addComponentOrReplace(transform_43)
engine.addEntity(turquoisewall_7)


const turquoisewall_8 = new Entity()
turquoisewall_8.setParent(scene)
turquoisewall_8.addComponentOrReplace(gltfShape_16)
const transform_44 = new Transform({
  position: new Vector3(29, 1.5, 29),
  rotation: new Quaternion(0, -0.7071067811865477, 0, 0.7071067811865476),
  scale: new Vector3(1, 1, 1)
})
turquoisewall_8.addComponentOrReplace(transform_44)
engine.addEntity(turquoisewall_8)



////////////////////////////// SIMPLE ELEMENTS
const trunks-flat = new Entity()
trunks-flat.setParent(scene)
const gltfShape_6 = new GLTFShape('models/trunks-flat.glb')
trunks-flat.addComponentOrReplace(gltfShape_6)
const transform_15 = new Transform({
  position: new Vector3(25, 2, 9),
  rotation: new Quaternion(0, 0.19509032201612825, 0, 0.9807852804032304),
  scale: new Vector3(0.32281732419231446, 0.39630021111265634, 0.520878120795949)
})
trunks-flat.addComponentOrReplace(transform_15)
engine.addEntity(trunks-flat)

const trunk1-flat = new Entity()
trunk1-flat.setParent(scene)
const gltfShape_7 = new GLTFShape('models/trunk1-flat.glb')
trunk1-flat.addComponentOrReplace(gltfShape_7)
const transform_16 = new Transform({
  position: new Vector3(29.5, 2.248190535998476, 12),
  rotation: new Quaternion(0, -0.006283911572028571, 0, 0.9999802560327646),
  scale: new Vector3(1, 1, 1)
})
trunk1-flat.addComponentOrReplace(transform_16)
engine.addEntity(trunk1-flat)

const trunk2-flat = new Entity()
trunk2-flat.setParent(scene)
const gltfShape_8 = new GLTFShape('models/trunk2-flat.glb')
trunk2-flat.addComponentOrReplace(gltfShape_8)
const transform_17 = new Transform({
  position: new Vector3(15.806893807903766, 0.9795452910638911, 8.774971198797777),
  rotation: new Quaternion(0, 0.812082185887648, 0, 0.5835430775563523),
  scale: new Vector3(0.4253677192280634, 0.5094055633237993, 0.3672790480036987)
})
trunk2-flat.addComponentOrReplace(transform_17)
engine.addEntity(trunk2-flat)

const trunk2-flat_2 = new Entity()
trunk2-flat_2.setParent(scene)
trunk2-flat_2.addComponentOrReplace(gltfShape_8)
const transform_18 = new Transform({
  position: new Vector3(5.5, 1, 27),
  rotation: new Quaternion(0, -0.09801714032956049, 0, 0.9951847266721974),
  scale: new Vector3(0.6757612085206218, 0.7101759958450913, 0.6146731602348378)
})
trunk2-flat_2.addComponentOrReplace(transform_18)
engine.addEntity(trunk2-flat_2)

const trunk3-flat = new Entity()
trunk3-flat.setParent(scene)
const gltfShape_9 = new GLTFShape('models/trunk3-flat.glb')
trunk3-flat.addComponentOrReplace(gltfShape_9)
const transform_19 = new Transform({
  position: new Vector3(5.5, 1.5, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.39720625287739253, 0.682833970266735, 0.43448561380562545)
})
trunk3-flat.addComponentOrReplace(transform_19)
engine.addEntity(trunk3-flat)

const trunk-flat = new Entity()
trunk-flat.setParent(scene)
const gltfShape_10 = new GLTFShape('models/trunk-flat.glb')
trunk-flat.addComponentOrReplace(gltfShape_10)
const transform_20 = new Transform({
  position: new Vector3(13.5, 0.49999999999999994, 16.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
trunk-flat.addComponentOrReplace(transform_20)
engine.addEntity(trunk-flat)

const trunk-flat_2 = new Entity()
trunk-flat_2.setParent(scene)
trunk-flat_2.addComponentOrReplace(gltfShape_10)
const transform_21 = new Transform({
  position: new Vector3(24.5, 0.5, 19.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8457193451888187, 0.8992071768163115, 0.7296020906209755)
})
trunk-flat_2.addComponentOrReplace(transform_21)
engine.addEntity(trunk-flat_2)

const tree-split-flat = new Entity()
tree-split-flat.setParent(scene)
const gltfShape_11 = new GLTFShape('models/tree-split-flat.glb')
tree-split-flat.addComponentOrReplace(gltfShape_11)
const transform_22 = new Transform({
  position: new Vector3(17, 3.5, 22),
  rotation: new Quaternion(0, -0.2902846772544624, 0, 0.9569403357322089),
  scale: new Vector3(1, 1, 1)
})
tree-split-flat.addComponentOrReplace(transform_22)
engine.addEntity(tree-split-flat)

const tree1-flat = new Entity()
tree1-flat.setParent(scene)
const gltfShape_12 = new GLTFShape('models/tree1-flat.glb')
tree1-flat.addComponentOrReplace(gltfShape_12)
const transform_23 = new Transform({
  position: new Vector3(12.449440260474297, 11.091053965731705, 23.850838277656333),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree1-flat.addComponentOrReplace(transform_23)
engine.addEntity(tree1-flat)

const tree-orig-flat = new Entity()
tree-orig-flat.setParent(scene)
const gltfShape_13 = new GLTFShape('models/tree-orig-flat.glb')
tree-orig-flat.addComponentOrReplace(gltfShape_13)
const transform_24 = new Transform({
  position: new Vector3(9, 6.668833995582675, 17.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree-orig-flat.addComponentOrReplace(transform_24)
engine.addEntity(tree-orig-flat)

const tree-orig-flat_2 = new Entity()
tree-orig-flat_2.setParent(scene)
tree-orig-flat_2.addComponentOrReplace(gltfShape_13)
const transform_25 = new Transform({
  position: new Vector3(12, 6.5, 27.5),
  rotation: new Quaternion(0, -0.5555702330196024, 0, 0.8314696123025453),
  scale: new Vector3(1, 1, 1)
})
tree-orig-flat_2.addComponentOrReplace(transform_25)
engine.addEntity(tree-orig-flat_2)