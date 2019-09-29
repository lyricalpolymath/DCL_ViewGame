import utils from "../../node_modules/decentraland-ecs-utils/index"
import * as Globals from "../functions"


export class TransitionScene extends Entity
{
    camera = Camera.instance
    events:EventManager
    boxShape:Entity
    constructor(events:EventManager)
    {
        super()
        this.events = events
        this.addComponentOrReplace(new Transform({
            position: new Vector3(0,0,0),
            scale: new Vector3(1,1,1)
        }))

        this.boxShape = new Entity
        this.boxShape.addComponentOrReplace(new BoxShape())
        this.boxShape.getComponent(BoxShape).withCollisions = false
        this.boxShape.addComponentOrReplace(new Transform({
            position: new Vector3(16,0,16),
            scale: new Vector3(32,8,32)
        }))
        var boxcolor = new Material()
        boxcolor.albedoColor = new Color4(0,0,0,1)
        boxcolor.hasAlpha = true
        this.boxShape.addComponentOrReplace(boxcolor)
        this.boxShape.setParent(this)

        this.start()
    }

    start()
    {
             
        var firstMover = new Entity()
        firstMover.addComponentOrReplace(new BoxShape())
        firstMover.getComponent(BoxShape).withCollisions = true
        firstMover.addComponentOrReplace(new Transform({
            position: new Vector3(32,0,16),
            scale: new Vector3(1,5,32)
        }))

        var alphac = new Material()
        alphac.albedoColor = new Color4(1,1,1,1)
        alphac.hasAlpha = true
        firstMover.addComponentOrReplace(alphac)

        
        firstMover.addComponentOrReplace(new utils.MoveTransformComponent(new Vector3(32,0,16),new Vector3(2,0,16),7,()=>{
            log("moved player")
            //engine.removeEntity(firstMover)
            var secondmover = new Entity()
            secondmover.addComponentOrReplace(new BoxShape())
            secondmover.getComponent(BoxShape).withCollisionS = true
            secondmover.addComponentOrReplace(new Transform({
                position: new Vector3(16,0,32),
                scale: new Vector3(32,5,1)
            }))
            secondmover.addComponent(alphac)
           
           secondmover.addComponentOrReplace(new utils.MoveTransformComponent(new Vector3(16,0,32),new Vector3(16,0,2),7,()=>{
                log("moved player 2nd time")
                var timer = 500
                this.addComponentOrReplace(new utils.Interval(100,()=>{
                    if(timer >=0)
                    {
                        timer -= 100
                        this.boxShape.getComponent(Material).albedoColor = new Color4(0,0,0,timer/500)
                    }
                    else
                    {
                        this.removeComponent(utils.Interval)
                        this.events.fireEvent(new Globals.TransitionLevelComplete())
                    }

                }))
            }))
            
            secondmover.setParent(this)
        }))
        
        firstMover.setParent(this)
    }
}