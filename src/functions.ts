import utils from "../node_modules/decentraland-ecs-utils/index"

export var TESTMODE = false

utils.TriggerSystem.instance.setCameraTriggerShape(new utils.TriggerBoxShape(new Vector3(0.5, 1.8, 0.5), new Vector3(0, -0.91, 0)))

//Global code to be reused across levels

export const blueWall = new GLTFShape("models/bluewall.glb")
export const greenWall = new GLTFShape("models/greenwall.glb")
export const yellowWall = new GLTFShape("models/yellowwall.glb")
export const wallCollider = new GLTFShape("models/wall_collider.glb")
export const transitionBox = new GLTFShape("models/transitionBox.glb")
export const bumpClip = new AudioClip('sounds/bump.mp3')
export const pickClip = new AudioClip('sounds/pickup.mp3')

export var XFACINGSCALE = new Vector3(.4,1,2)
export var XFACINGPOSITION = Vector3.Zero()

export var ZFACINGSCALE = new Vector3(2,4,.4)
export var ZFACINGPOSITION = Vector3.Zero()

export var hiddenMaterial = new Material()
hiddenMaterial.hasAlpha = true
hiddenMaterial.albedoColor = new Color4(.6,.2,.5,0)

export var visibleMaterial = new Material()
visibleMaterial.hasAlpha = true
visibleMaterial.albedoColor = new Color4(0,0,1,1)

@Component("Red")
export class Red{}

@Component("Blue")
export class Blue{}

@Component("Green")
export class Green{}

export class Yellow{
GLTFShape:GLTFShape = new GLTFShape("models/yellowwall.glb")
color:string = "yellow"
}

@Component("Bump")
export class Bump{}

@Component("Show")
export class Show{}


@EventConstructor()
export class LevelCompleted {
  constructor(public l:number) {}
}

@EventConstructor()
export class SetActiveLens{
  constructor(public lens:string) {}
}

@EventConstructor()
export class TransitionLevelComplete{
  constructor() {}
}

@EventConstructor()
export class ShowWalls{
  constructor(public colorGroup:string) {}
}

export function distance(pos1: Vector3, pos2: Vector3): number {
  const a = pos1.x - pos2.x
  const b = pos1.z - pos2.z
  return a * a + b * b
}
