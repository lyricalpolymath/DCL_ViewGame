import utils from "../node_modules/decentraland-ecs-utils/index"
<<<<<<< Updated upstream
=======
import { ActionsSequenceSystem } from "../node_modules/decentraland-ecs-utils/actionsSequenceSystem/actionsSequenceSystem";
import { Wall } from "./levels/wall";
import { WallAnimation } from "./levels/wall/wallanimation";
import { Level } from "./levels/level";

>>>>>>> Stashed changes

export var TESTMODE = false

utils.TriggerSystem.instance.setCameraTriggerShape(new utils.TriggerBoxShape(new Vector3(0.5, 1.8, 0.5), new Vector3(0, -0.91, 0)))

//Global code to be reused across levels

export const blueWall = new GLTFShape("models/bluewall.glb")
export const greenWall = new GLTFShape("models/greenwall.glb")
export const yellowWall = new GLTFShape("models/yellowwall.glb")
export const wallCollider = new GLTFShape("models/wall_collider.glb")
export const transitionBox = new GLTFShape("models/transitionBox.glb")
<<<<<<< Updated upstream
=======

export const glitch1 = new Entity()
glitch1.addComponentOrReplace(new GLTFShape("models/glitch1.glb"))
glitch1.addComponentOrReplace(new Transform({
  position: Vector3.Zero(),
  rotation: new Quaternion(0,0,0,1),
  scale: Vector3.One()
}))
engine.addEntity(glitch1)



>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======

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
  level:Level

  constructor(level:Level, entity: Wall) {
    this.wall = entity
    this.level = level
  }

  //Method when action starts
  onStart(): void {
    if(bumpCount < this.level.wallAnimationEntity.glitchArrayEntity.length+1)
    {

      //this.wall.setParent(null)
      this.wall.bumped = true
      this.level.wallAnimationEntity.setParent(this.wall.holdingEntity)
      if(bumpCount !=1)
      {
        //this.wall.glitchEntityArray[bumpCount-1].getComponent(Transform).scale = Vector3.Zero()
        this.level.wallAnimationEntity.glitchArrayEntity[bumpCount-1].getComponent(Transform).scale = Vector3.Zero()
      }
      // this.wall.glitchEntityArray[bumpCount].getComponent(Transform).scale = Vector3.One()
      this.level.wallAnimationEntity.glitchArrayEntity[bumpCount].getComponent(Transform).scale = Vector3.One()
        bumpCount++
        this.hasFinished = true
    }
    else{
      log("finished aimation, add wall back to scene")
      //this.wall.setParent(this.wall.holdingEntity)
      this.wall.bumped = false
      this.hasFinished = true
      //this.wall.glitchEntityArray[bumpCount-1].getComponent(Transform).scale = Vector3.Zero()
      this.level.wallAnimationEntity.glitchArrayEntity[bumpCount-1].getComponent(Transform).scale = Vector3.Zero()
      this.level.wallAnimationEntity.setParent(null)
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
>>>>>>> Stashed changes
