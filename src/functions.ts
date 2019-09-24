import utils from "../node_modules/decentraland-ecs-utils/index"
import { ActionsSequenceSystem } from "../node_modules/decentraland-ecs-utils/actionsSequenceSystem/actionsSequenceSystem";
import { Wall } from "./levels/wall";


export var TESTMODE = false

utils.TriggerSystem.instance.setCameraTriggerShape(new utils.TriggerBoxShape(new Vector3(0.5, 1.8, 0.5), new Vector3(0, -0.91, 0)))

//Global code to be reused across levels

export const blueWall = new GLTFShape("models/bluewall.glb")
export const greenWall = new GLTFShape("models/greenwall.glb")
export const yellowWall = new GLTFShape("models/yellowwall.glb")
export const wallCollider = new GLTFShape("models/wall_collider.glb")
export const transitionBox = new GLTFShape("models/transitionBox.glb")

//export const glitchArray:GLTFShape[] = [null,glitch1,glitch2,glitch3,glitch4,glitch5,glitch6,glitch7,glitch8,glitch9,glitch10,glitch11,glitch12]


export const bumpClip = new AudioClip('sounds/bump.mp3')
export const pickClip = new AudioClip('sounds/pickup.mp3')

export var XFACINGSCALE = new Vector3(.4,1,2)
export var XFACINGPOSITION = Vector3.Zero()

export var ZFACINGSCALE = new Vector3(2,4,.4)
export var ZFACINGPOSITION = Vector3.Zero()

export var bumpCount:number = 1
export var bumpColor:string = "yellow"


export var testTextur = new Texture('images/glitchan1.png',{hasAlpha:true, wrap:1})
export var testMaterial = new Material()
//testMaterial.hasAlpha = true
testMaterial.albedoColor = new Color4(.6,.2,.5,0)
testMaterial.albedoTexture = testTextur


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

//Use IAction to define action for movement
export class DelayAction implements ActionsSequenceSystem.IAction {
  hasFinished: boolean = false;
  wall:Wall

  constructor(entity: Wall) {
    this.wall = entity
  }

  //Method when action starts
  onStart(): void {
    this.wall.addComponentOrReplace(new utils.Delay(50,()=>{
      this.hasFinished = true
    }))

  }
  //Method to run on every frame
  update(dt: number): void {
  }
  //Method to run at the end
  onFinish(): void {
  }
}


//Use IAction to define action for movement
export class BumpAction implements ActionsSequenceSystem.IAction {
  hasFinished: boolean = false;
  wall:Wall

  constructor(entity: Wall) {
    this.wall = entity
  }

  //Method when action starts
  onStart(): void {
    if(bumpCount < 13)
    {

      this.wall.setParent(null)
      this.wall.bumpSource.playOnce()
      this.wall.bumped = true
      if(bumpCount !=1)
      {
        this.wall.glitchEntityArray[bumpCount-1].getComponent(Transform).scale = Vector3.Zero()
      }
       this.wall.glitchEntityArray[bumpCount].getComponent(Transform).scale = Vector3.One()
        bumpCount++
        this.hasFinished = true
    }
    else{
      log("finished aimation, add wall back to scene")
      this.wall.setParent(this.wall.holdingEntity)
      this.wall.bumped = false
      this.hasFinished = true
      this.wall.glitchEntityArray[bumpCount-1].getComponent(Transform).scale = Vector3.Zero()
      bumpCount = 1
    }


  }
  //Method to run on every frame
  update(dt: number): void {
  }
  //Method to run at the end
  onFinish(): void {
  }
}