import utils from "../../node_modules/decentraland-ecs-utils/index"
import { Level } from "./level"
import * as Globals from "../functions"
import { State } from "../gameState"
import { Settings, _colorNames } from "gameSettings"
import { Wall } from "./wall"

utils.TriggerSystem.instance.setCameraTriggerShape(new utils.TriggerBoxShape(new Vector3(0.5, 1.8, 0.5), new Vector3(0, -0.91, 0)))

export class WallAnimation extends Entity
{
 
    glitchEntityArray:Entity[] = [new Entity()]
    isAnimating:boolean = false
    bumpCount:number = 1

    constructor(level:Level)
    {
        super()

        this.setParent(level)
        for(var i = 1; i < 13; i++)
        {
            let temp = new Entity()
            temp.addComponentOrReplace(new GLTFShape("models/glitch"+i+".glb"))
            temp.addComponentOrReplace(new Transform({
                position: Vector3.Zero(),
                rotation: new Quaternion(0,0,0,1),
                scale: i < 2 ? Vector3.One() : Vector3.Zero()
            }))
            temp.setParent(this)
            this.glitchEntityArray.push(temp)
        }
        
            this.addComponentOrReplace(new Transform({
                position:new Vector3(3,1,3),
                rotation:new Quaternion(0,0,0,1),
                scale: Globals.TESTMODE ? Vector3.One() : Vector3.Zero()
            }))
    }

    animate(wall:Wall)
    {
        var counter:number = 0
        this.isAnimating = true
        var wall = wall
        this.getComponent(Transform).scale = Vector3.One()
        this.addComponentOrReplace(new utils.Interval(100,()=>{
            if(this.bumpCount < 13 && this.isAnimating)
            {
              if(this.bumpCount !=1)
              {
                this.glitchEntityArray[this.bumpCount-1].getComponent(Transform).scale = Vector3.Zero()
              }
               this.glitchEntityArray[this.bumpCount].getComponent(Transform).scale = Vector3.One()
                this.bumpCount++
            }
            else{
              log("finished aimation, add wall back to scene")
              this.glitchEntityArray[this.bumpCount-1].getComponent(Transform).scale = Vector3.Zero()
              this.bumpCount = 1
              this.isAnimating = false
              this.removeComponent(utils.Interval)
              wall.bumped = false
              this.getComponent(Transform).scale = Vector3.Zero()
            }

        }))
    }
}