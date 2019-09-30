import utils from "../../node_modules/decentraland-ecs-utils/index"
import { Level } from "./level"
import * as Globals from "../functions"
import { State } from "../gameState"
import { Settings, _colorNames } from "gameSettings"

utils.TriggerSystem.instance.setCameraTriggerShape(new utils.TriggerBoxShape(new Vector3(0.5, 1.8, 0.5), new Vector3(0, -0.91, 0)))



//Wall class that is an entity comprised of
//- a level as its parent
//- its name
//- its position
//- its visible wall animation / graphic to display when someone hits the target trigger
//- its collider so tha the avatar cannot go through the wall
//
// create a wall to be placed within a level and
//- animate when its trigger is hit
//- become visible if a certain flag / lens is obtained
//- become invisible

export class Wall extends Entity
{
    visibleWallComponent:GLTFShape
    wallCollider:Entity
    wallColors:string[]
    wallColorsCount:number = 0
    level:Level
    holdingEntity:Entity
    bumpSource:AudioSource
    bumped:boolean = false
    glitchEntityArray:Entity[] = [null]

    constructor(levelE:Level, name:string, position:Vector3, rotation: Quaternion, color:string)
    {
        super(name)
        this.level = levelE
        this.bumpSource = new AudioSource(Globals.bumpClip)
        this.bumpSource.volume = .5

        log("creating wall for level " + this.level.name)
        this.addComponent(this.bumpSource)
        
        
        switch(color)
        {
            case _colorNames.BLUE:
                this.holdingEntity = this.level.blueWalls
                this.addComponentOrReplace(Globals.blueWall)
                break;

            case _colorNames.RED:
                this.holdingEntity = this.level.redWalls
                this.addComponentOrReplace(Globals.redWall)
                break;
            
            case _colorNames.GREEN:
                this.holdingEntity = this.level.greenWalls
                this.addComponentOrReplace(Globals.greenWall)
                break;

            case _colorNames.YELLOW:
                this.holdingEntity = this.level.yellowWalls
                this.addComponentOrReplace(Globals.yellowWall)
                break;

            case _colorNames.WHITE:
                this.holdingEntity = this.level.whiteWalls
                this.addComponentOrReplace(Globals.whiteWall)
                break;

            case _colorNames.TURQUOISE:
                this.holdingEntity = this.level.turquoiseWalls
                this.addComponentOrReplace(Globals.turqouiseWall)
                break;

            case _colorNames.PURPLE:
                this.holdingEntity = this.level.purpleWalls
                this.addComponentOrReplace(Globals.purpleWall)
                break;

            case _colorNames.BLACK:
                this.holdingEntity = this.level.blackWalls
                this.addComponentOrReplace(Globals.blackWall)
                break;
        }

        this.setParent(this.holdingEntity)

            this.addComponentOrReplace(new Transform({
                position:position,
                rotation:rotation
            }))
        
        this.wallCollider = new Entity(name + "-c"+ this.level)
        this.wallCollider.addComponentOrReplace(Globals.wallCollider)
        this.wallCollider.addComponentOrReplace(new Transform({
            position: this.getComponent(Transform).position,
            rotation: this.getComponent(Transform).rotation
        }))
        this.wallCollider.setParent(this.level)
    }
}