import utils from "../../node_modules/decentraland-ecs-utils/index"
import * as Globals from "../functions"


export class TransitionScene extends Entity
{
    camera = Camera.instance
    events:EventManager
    boxShape:Entity
    constructor(shape:GLTFShape, events:EventManager)
    {
        super()
        this.events = events
        this.addComponent(new Transform({
            position: new Vector3(0,0,0),
            scale: new Vector3(1,1,1)
        }))

        this.boxShape = new Entity
        this.boxShape.addComponentOrReplace(new BoxShape())
        this.boxShape.getComponent(BoxShape).withCollisions = false
        this.boxShape.addComponent(new Transform({
            position: new Vector3(7.5,0,7.5),
            scale: new Vector3(15.5,8,15.5)
        }))
        var boxcolor = new Material()
        boxcolor.albedoColor = new Color4(0,0,0,1)
        boxcolor.hasAlpha = true
        this.boxShape.addComponent(boxcolor)
        this.boxShape.setParent(this)

        this.start()
    }

    start()
    {
             
        var firstMover = new Entity()
        firstMover.addComponent(new BoxShape())
        firstMover.getComponent(BoxShape).withCollisions = true
        firstMover.addComponent(new Transform({
            position: new Vector3(16,1,8),
            scale: new Vector3(1,1,16)
        }))

        var alphac = new Material()
        alphac.albedoColor = new Color4(255,255,255,0)
        alphac.hasAlpha = true
        firstMover.addComponent(alphac)

        firstMover.addComponent(new utils.MoveTransformComponent(new Vector3(16,1,8),new Vector3(2,1,8),4,()=>{
            log("moved player")
            //engine.removeEntity(firstMover)
            var secondmover = new Entity()
            secondmover.addComponent(new BoxShape())
            secondmover.getComponent(BoxShape).withCollisions = true
            secondmover.addComponent(new Transform({
                position: new Vector3(8,1,16),
                scale: new Vector3(16,1,1)
            }))
            secondmover.addComponent(alphac)
            secondmover.addComponent(new utils.MoveTransformComponent(new Vector3(8,1,16),new Vector3(8,1,1),4,()=>{
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