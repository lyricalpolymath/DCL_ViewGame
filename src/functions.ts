import utils from "../node_modules/decentraland-ecs-utils/index"

export var TESTMODE = false
export var camera = Camera.instance

utils.TriggerSystem.instance.setCameraTriggerShape(new utils.TriggerBoxShape(new Vector3(0.5, 1.8, 0.5), new Vector3(0, -0.91, 0)))

export var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
export var getUrl = "https://l1wjzxqx5k.execute-api.us-east-1.amazonaws.com/production/user/"
export var awsGet = proxyUrl + getUrl
export var putUrl = "https://l1wjzxqx5k.execute-api.us-east-1.amazonaws.com/production/user/update/"
export var awsPut = proxyUrl + putUrl
export var leaderboardUrl = "https://l1wjzxqx5k.execute-api.us-east-1.amazonaws.com/production/leaderboard/"
export var awsLeaderboard = proxyUrl + leaderboardUrl
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
export const portal = new GLTFShape('models/portal.glb') 

export const bumpClip = new AudioClip('sounds/glitch.mp3')
export const pickClip = new AudioClip('sounds/pickup.mp3')

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
  constructor() {}
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

@EventConstructor()
export class InventoryItemSelectedEvent {
    constructor(public name: string) {
    }
}

@EventConstructor()
export class BumpedWallEvent {
    constructor() {
    }
}

export function distance(pos1: Vector3, pos2: Vector3): number {
  const a = pos1.x - pos2.x
  const b = pos1.z - pos2.z
  return a * a + b * b
}

export function transitionStart(event:EventManager)
{
    var events = event       
    var firstMover = new Entity()
    var shape = new PlaneShape()
    firstMover.addComponentOrReplace(shape)
    firstMover.getComponent(PlaneShape).withCollisions = true
    firstMover.addComponentOrReplace(new Transform({
        position: new Vector3(31,0,16),
        scale: new Vector3(32,12,1),
        rotation: Quaternion.Euler(0,90,0)
    }))

    var alphac = new Material()
    alphac.hasAlpha = true
    alphac.albedoColor = new Color4(0,0,0,0)
    firstMover.addComponentOrReplace(alphac)

    var secondmover = new Entity()
    secondmover.addComponentOrReplace(shape)
    secondmover.getComponent(PlaneShape).withCollisions = true
    secondmover.addComponentOrReplace(new Transform({
        position: new Vector3(16,0,31),
        scale: new Vector3(32,12,1)
    }))
    secondmover.addComponent(alphac)

    engine.addEntity(firstMover)
    engine.addEntity(secondmover)

    firstMover.addComponent(new utils.Delay(3000,()=>{
        firstMover.addComponentOrReplace(new utils.MoveTransformComponent(new Vector3(31,0,16),new Vector3(0,0,16),7,()=>{
            log("moved player")
            //engine.removeEntity(firstMover)
            engine.removeEntity(firstMover)
        }))

        secondmover.addComponentOrReplace(new utils.MoveTransformComponent(new Vector3(16,0,31),new Vector3(16,0,0),7,()=>{
            log("moved player 2nd time")
            engine.removeEntity(secondmover)
            events.fireEvent(new TransitionLevelComplete())
        }))
        
    }))
   

}

export enum _inventoryItems {
 TELESCOPE = "TELESCOPE",
 MICROSCOPE = "MICROSCOPE",
 BINOCULARS = "BINOCULARS",
 GLASSES = "3DGLASSES",
 MAGNIFIER = "MAGNIFIER",
 LEADERBOARD = "LEADERBOARD"
}

export enum _colorNames {
  RED    = "RED",
  GREEN  = "GREEN",
  BLUE   = "BLUE",
  YELLOW = "YELLOW",
  PURPLE = "PURPLE",
  CYAN   = "CYAN",
  WHITE  = "WHITE",
  NONE   = "NONE",
  TURQUOISE = "TURQUOISE",
  BLACK = "BLACK",
  ALL = "ALL"
} 

/**
* where to put all the settings of the game so that we can tweak parameters in one unique place
*/
export abstract class Settings {

  static inventory = {
      opacity: 0.9,
      width: "75px",
      buttonAtlas: "images/ViewGame_Inventory.png"
  }

  static colorNames = _colorNames;
  static loadDelay = 10000
  
  static colors = {
      transparency: 0.3,               
      RED:    new Color4(1,0,0, 0.4 ),
      GREEN:  new Color4(0,1,0, 0.4 ),
      BLUE:   new Color4(0,0,1, 0.6 ), // blue needs to be less transparent
      YELLOW: new Color4(1,1,0, 0.7 ),
      PURPLE: new Color4(1,0,1, 0.4 ),
      CYAN:   new Color4(0,1,1, 0.4 ),
      WHITE:  new Color4(1,1,1, 0.9 )
  }
}
