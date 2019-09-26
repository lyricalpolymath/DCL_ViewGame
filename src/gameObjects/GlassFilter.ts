


import { State, StateUpdate } from "../gameState";
import { Settings } from "../gameSettings"

//import { Carryable, CarryableSystem} from '../utilities/carryable';  // not currently in use
//import { GlassFilterSystem } from 'GlassFilterSystem';



const fname = "GlassFilter."

/**
 * used only to reveal the bug that if you press the EYE button at the bottom-right  uicanvas.visible  keeps being = true
 * although it should signal = false
 * so there is no way to hide the walls if someone presses the eyeve button
 * /
class GlassFilterVisibilitySystem implements ISystem {
    uicanvas:UIContainerRect;
    constructor(uic:UIContainerRect) {
      this.uicanvas = uic
    }
    update(dt:number){
      log("GlassFilterVisibilitySystem this.uicanvas.visible: " + this.uicanvas.visible)
    }
}
*/


/**
 * this is the filter that appear in front of the camera to reveal the different walls of the appropriate color
 * it can create this filter in 2 different ways, each with it's own drawbacks
 * method1 - using UIComponents
 *    cons: it doesn't paint all the visual field and leaves a top empty banner at the top
 * 
 * method2 - using a carryable object
 *    cons: clunky, slow, and with the elevator effect can push the camera away
 * 
 * it responds to StateUpdate events to change the colors of the filter in different combinations
 * 
 */
export class GlassFilter extends Entity {

    public color    :Color4;
    public active   :Boolean = false;       //wither the player has it active or not
    
    // UIMethod (preferred)
    private filterCanvas: UICanvas
    private filterRect: UIContainerRect

    // optional Carryable method (doesn't fully work)
    //private carryable: Carryable 
    private filter  :Entity                 

    constructor () {
        super()        
        engine.addEntity(this);

        //this.createFilterEntity()      // a carryable filter entity - jittery  
        this.createUIFilter()

        this.setListeners()

        //set color and visibility based on State
        this.handleStateColors()

        // DEV purposes - enable this to test wither DCL has solved the issue with the EYE not showing the visibility
        // and uncomment the System at the top of this file
        //engine.addSystem(new GlassFilterVisibilitySystem(this.filterRect));
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
        rect.visible = false
        rect.isPointerBlocker = false;

    }

    /**
     * doesn't fully work:
     * - the carryable system is jittery, as the frame rate is only 30fps while the camera goes at 60fps
     * - there is the "elevator" problem = the carried entity pushes you back and even outside of the scene
     * - plus it projects a shadow
     * /
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
        //engine.addSystem(new CarryableSystem());
        //engine.addSystem(new GlassFilterSystem(this.filter))
        //*/
    //}
    


    /**
     * assign the color of the filter
     * @param color Color4
     */
    public setColor (color:Color4) {
      // if we are using the UI Method
      if (this.filterRect) {
        this.filterRect.color = color
      }

      // if we are using the carryable method
      if (this.filter) {
        this.filter.getComponent(Material).albedoColor = color
      }

      this.setVisible(true)
      this.color = color
    }

    /**
     * simply sets the visibility of the Glass filter
     * @param bool 
     */
    public setVisible (bool:boolean) {
      this.filterRect.visible = bool;
      //this.filter.getComponent()
    };


    private setListeners() {
      log(fname + "setListeners  State.events: ", State.events);

      State.events.addListener( StateUpdate, this, () => {
        log(fname + "State listener")
        //State.updateGlassState(name, active);
        this.handleStateColors()
      })
    }

    /**
     * retrieves the activeColor from the state and colors the filter accordingly
     */
    private handleStateColors() {
        var activeColorName:string = State.getActiveColor()
        log(fname+"handleStateColors - activeColorName: " + activeColorName) 
        if (activeColorName == null ) this.setVisible(false);     // no color = hide the filter
        else this.setColor( Settings.colors[activeColorName] )    // all colors
    }

}