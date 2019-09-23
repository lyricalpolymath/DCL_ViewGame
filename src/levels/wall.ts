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

    constructor(levelE:Level, holdingEntity:Entity, name:string, glb:GLTFShape, position:Vector3, rotation: Quaternion, color:string)
    {
        super(name)
        this.level = levelE
        this.holdingEntity = holdingEntity
        this.bumpSource = new AudioSource(Globals.bumpClip)
        this.bumpSource.volume = 1

        log("creating wall for level " + this.level.name)

        this.setParent(holdingEntity)
        this.addComponent(this.bumpSource)

        if(Globals.TESTMODE)
        {
            log("this is wall color " + color)
            switch(color)
            {
                case _colorNames.BLUE:
                    this.addComponent(Globals.blueWall)
                    break;
    
                case _colorNames.YELLOW:
                    this.addComponent(Globals.yellowWall)
                    break;
                
                case _colorNames.GREEN:
                    this.addComponent(Globals.greenWall)
                    break;
            }
            this.addComponentOrReplace(new Transform({
                position:position,
                rotation:rotation
            }))
        }
        else
        {
    //for testing purposes only
                  
        this.addComponent(new BoxShape())
        //this.addComponentOrReplace(Globals.hiddenMaterial)
        this.addComponentOrReplace(new Transform({
            position:position,
            scale:new Vector3(.1,6,2),
            rotation:rotation
        }))
        
        }
        
        this.wallCollider = new Entity(name + "-c"+ this.level)
        this.wallCollider.addComponentOrReplace(Globals.wallCollider)
        this.wallCollider.addComponentOrReplace(new Transform({
            position: this.getComponent(Transform).position,
            rotation: this.getComponent(Transform).rotation
        }))
        this.wallCollider.setParent(this.level)
    }

    animate()
    {
        if(!this.bumped)
        {
            this.setParent(null)
            this.bumpSource.playOnce()
            this.bumped = true
            this.hasComponent(utils.Delay) ? null : 
            this.addComponentOrReplace(new utils.Delay(1000,()=>{
                this.setParent(this.holdingEntity)
                this.bumped = false
            }))
        }

    }
}