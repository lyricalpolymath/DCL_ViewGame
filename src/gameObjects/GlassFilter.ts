

//import { CarryableSystem } from '../utilities/carryable';
import { Carryable, CarryableSystem} from '../utilities/carryable';
import { Settings } from "../gameSettings"
import { GlassFilterSystem } from 'GlassFilterSystem';


const fname = "GlassFilter."


/*
@Component('carryable')
export class Carryable {
  
  public beingCarried: boolean = false;
  public objPosUser: Vector3 = undefined;
  public toggleCarry() {
    this.beingCarried = !this.beingCarried;
  }
}
*/

class GlassFilterVisibilitySystem implements ISystem {
    uicanvas:UIContainerRect;
    constructor(uic:UIContainerRect) {
      this.uicanvas = uic
    }
    update(dt:number){
      log("GlassFilterVisibilitySystem this.uicanvas.visible: " + this.uicanvas.visible)
    }
}

export class GlassFilter extends Entity {

    public color    :Color3;
    public active   :Boolean = false;       //wither the player has it active or not
    private filter  :Entity                 // will hold the actual
    
    // use one OR the other
    private carryable: Carryable    
    private filterCanvas: UICanvas
    private filterRect: UIContainerRect

    constructor () {
        super()

        //this.color = new Color4(1, 0, 0, 0.3) // new Color3(1, 0, 0) doesn't work
        this.color = new Color4(1, 0, 0, Settings.glassTransparency )   
        engine.addEntity(this);

        // a carryable filter entity - jittery
        this.createFilterEntity()
        
        //this.createUIFilter()
      
    }


    /**
     * Creates the Filter with the UI components - better
     * but it has the draback that it can't be detected if it has been hidden
     */
    private createUIFilter() {
      
        this.filterCanvas = new UICanvas();
        this.filterRect = new UIContainerRect(this.filterCanvas)
        let rect = this.filterRect
        rect.width = '100%'
        rect.height = '100%'
        rect.color =  Color4.Red()
        rect.opacity = 0.3

        
        // second canvas for the inventory on the sidebar
        let canvas2 = new UICanvas()
        let rect2 = new UIContainerRect(canvas2)
        rect2.width = '100px'
        rect2.height = '100%'
        rect2.color =  Color4.Black()
        rect2.opacity = 0.9
        rect2.hAlign = 'right'

        engine.addSystem(new GlassFilterVisibilitySystem(this.filterRect));
    }




    /**
     * doesn't fully work:
     * - the carryable system is jittery, as the frame rate is only 30fps while the camera goes at 60fps
     * - there is the "elevator" problem = the carried entity pushes you back and even outside of the scene
     * - plus it projects a shadow
     */
    private createFilterEntity() {
        var f = this.filter
        f = new Entity()
        f.addComponent(new PlaneShape())
        f.addComponent(new Transform({
            position: new Vector3(1,1,1),           // will be modified by the carriable
            //scale:    new Vector3(1,0.01,2),        // find size of the field - BOX
            scale:    new Vector3(4,2,1),        // find size of the field - BOX
            //rotation: Quaternion.Euler(0, 90, 90)
        }))


        var material = new Material()
        material.albedoColor = this.color   // typescript complains but this is the only way to do transparent albedoColor
        material.hasAlpha = true
        // not needed
        //material.transparencyMode = 1;             //Sets the transparency mode of the material. Defaults to -1.|  0 = OPAQUE (default) | 1 = ALPHATEST (doesn't show shadows)|  2 = ALPHABLEND (shows shadows) |  3 = ALPHATESTANDBLEND | 4 = AUTO (ALPHABLEND if alpha OPAQUE otherwise |
        //material.alpha = 0.1
        material.reflectionColor = Color3.Black()
        f.addComponent(material)
        
        // have the plane always look at the user with the Billboard
        //f.addComponent(new Billboard())

        f.setParent(this);

        //* Add the Carryable Component to the box.
        this.carryable = new Carryable();
        log(fname + "createFilterEntity this.carryable: ", this.carryable)
        f.addComponent(this.carryable);
        //this.carryable.toggleCarry();        // turn it on by default
        ///*
        f.addComponent(new OnClick( () => {
            this.carryable.toggleCarry();        // turn it on by default
            log(fname + "click filter carryable.beingCarried: " + this.carryable.beingCarried)
        } ))
        //*/

        //Okay, so to move it to 2m, modify Carryable so that when the carry starts, it calculates the offset vector between the two objects, normalizes it, multiplies it by two, and adds the camera position back in. Then use that as the object's position when calculating objPosUser, not the actual object position.


        // Create a CarryableSystem to update our Carryable object.
        engine.addSystem(new CarryableSystem());
        //engine.addSystem(new GlassFilterSystem(this.filter))
        //*/
    }





}