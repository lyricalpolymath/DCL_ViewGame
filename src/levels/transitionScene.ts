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
        this.boxShape.addComponentOrReplace(new GLTFShape('models/blackBox.glb'))
        this.boxShape.addComponentOrReplace(new Transform({
            position: new Vector3(16, 20.153535559020156, 16),
            rotation: new Quaternion(0, 0, 0, 1),
            scale: new Vector3(1, 1, 1)
          }))

        this.boxShape.setParent(this)

        log(this.camera.position)
    }

    start()
    {
             
        var firstMover = new Entity()
        firstMover.addComponentOrReplace(new BoxShape())
        firstMover.getComponent(BoxShape).withCollisions = true
        firstMover.addComponentOrReplace(new Transform({
            position: new Vector3(32,0,16),
            scale: new Vector3(1,32,32)
        }))

        var alphac = new Material()
        alphac.hasAlpha = true
        alphac.albedoColor = new Color4(0,0,0,1)
        firstMover.addComponentOrReplace(alphac)

        var secondmover = new Entity()
        secondmover.addComponentOrReplace(new BoxShape())
        secondmover.getComponent(BoxShape).withCollisions = true
        secondmover.addComponentOrReplace(new Transform({
            position: new Vector3(16,0,32),
            scale: new Vector3(32,32,1)
        }))
        secondmover.addComponent(alphac)
       
       secondmover.addComponentOrReplace(new utils.MoveTransformComponent(new Vector3(16,0,32),new Vector3(16,0,0),7,()=>{
            log("moved player 2nd time")
            this.removeComponent(utils.Interval)
            this.events.fireEvent(new Globals.TransitionLevelComplete())
        }))
        
        firstMover.addComponentOrReplace(new utils.MoveTransformComponent(new Vector3(32,0,16),new Vector3(1,0,16),7,()=>{
            log("moved player")
            //engine.removeEntity(firstMover)
        }))
        
        firstMover.setParent(this)
        secondmover.setParent(this)
    }
}