import * as Globals from "../functions"


export class SceneRefreshSystem implements ISystem
{
    events:EventManager
    canvas: UICanvas
    container: UIContainerRect
    
    constructor(events:EventManager)
    {
        this.events = events
        this.canvas = new UICanvas();


        // trick to center the UI
        this.container = new UIContainerRect(this.canvas);
        this.container.positionX = 0 //-50;
        this.container.positionY = 50
        this.container.width = "100%"
        this.container.height = "100%"
        this.container.isPointerBlocker = false
        this.container.visible = false
        this.container.color = Color4.Red()
        this.container.opacity = .5
        
        var levelt = new UIText(this.container)
        levelt.color = Color4.Red()
        levelt.fontSize = 50
        levelt.value = "LOADING...PLEASE EXIT SCENE"
        levelt.outlineColor = Color4.Black()
        levelt.outlineWidth = .2
        levelt.hAlign = "center"
        levelt.positionX = -400
        levelt.vAlign = "center"
    }

    update()
    {
        let camera = Camera.instance
        //log(camera.position)
        this.container.visible = true
        if(camera.position.x < 0 && camera.position.z > 0 || camera.position.x > 0 && camera.position.z > 32 || camera.position.x > 32 && camera.position.z > 0 || camera.position.x > 0 && camera.position.z < 0)
        {
            this.container.visible = false
            log("avatar out of scene")
            engine.removeSystem(this)
            this.events.fireEvent(new Globals.TransitionLevelComplete())
        }
    }
}