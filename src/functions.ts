import utils from "../node_modules/decentraland-ecs-utils/index"
import { ActionsSequenceSystem } from "../node_modules/decentraland-ecs-utils/actionsSequenceSystem/actionsSequenceSystem";
import { Wall } from "./levels/wall";
import { Level } from "./levels/level";

export var TESTMODE = false

utils.TriggerSystem.instance.setCameraTriggerShape(new utils.TriggerBoxShape(new Vector3(0.5, 1.8, 0.5), new Vector3(0, -0.91, 0)))

export var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
export var getUrl = "https://l1wjzxqx5k.execute-api.us-east-1.amazonaws.com/production/user/"
export var awsGet = proxyUrl + getUrl
export var putUrl = "https://l1wjzxqx5k.execute-api.us-east-1.amazonaws.com/production/user/update/"
export var awsPut = proxyUrl + putUrl
export var levelUser:string

export const blackWall = new GLTFShape("models/neonwall-BLACK.glb")
export const blueWall = new GLTFShape("models/neonwall-BLUE.glb")
export const greenWall = new GLTFShape("models/neonwall-GREEN.glb")
export const purpleWall = new GLTFShape("models/neonwall-PURPLE.glb")
export const turqouiseWall = new GLTFShape("models/neonwall-TURQUOISE.glb")
export const redWall = new GLTFShape("models/neonwall-RED.glb")
export const whiteWall = new GLTFShape("models/neonwall-WHITE.glb")
export const yellowWall = new GLTFShape("models/neonwall-YELLOW.glb")
export const wallCollider = new GLTFShape('models/wall_collider.glb') 

export const bumpClip = new AudioClip('sounds/glitch.mp3')
export const pickClip = new AudioClip('sounds/pickup.mp3')

export var XFACINGSCALE = new Vector3(.4,1,2)
export var XFACINGPOSITION = Vector3.Zero()

export var ZFACINGSCALE = new Vector3(2,4,.4)
export var ZFACINGPOSITION = Vector3.Zero()

@EventConstructor()
export class LevelCompleted {
  constructor(public l:number) {}
}

@EventConstructor()
export class LevelLoadingComplete{
  constructor() {}
}

@EventConstructor()
export class DoTransition{
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