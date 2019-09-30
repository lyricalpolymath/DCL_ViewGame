


import { State, StateUpdate } from "../gameState";
import { Settings } from "../gameSettings"

const fname = "GlassFilter."
export class GlassFilter extends Entity {

    public color    :Color4;
    public active   :Boolean = false;       //wither the player has it active or not
    
    // UIMethod (preferred)
    private filterCanvas: UICanvas
    private filterRect: UIContainerRect

    private filter  :Entity                 

    constructor () {
        super()        
        engine.addEntity(this)

        //this.createFilterEntity()      // a carryable filter entity - jittery  
        this.createUIFilter()

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
        rect.isPointerBlocker = false
    }

    /**
     * assign the color of the filter
     * @param color Color4
     */
    public setColor (color:Color4) {
      // if we are using the UI Method
      if (this.filterRect) {
        this.filterRect.color = color
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