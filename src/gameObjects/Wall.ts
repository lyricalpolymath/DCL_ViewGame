
import { Settings } from "../gameSettings"
import { State, StateUpdate } from "../gameState"

const fname = "Wall."

@Component('colorGroup')
export class ColorGroup {
    color:string
    constructor(_color:string) {
        this.color = _color
    }
}


export class Wall extends Entity {
    
    // same color as the one found in the ColorGroup component
    colorName:string    

    constructor( 
        _colorName:string,
        //model: GLTFShape,  // for now I'm creating a boxshape
        transform: TranformConstructorArgs,
         
    ) {
        super();
        this.colorName = _colorName
        log(fname+"constructor new Wall with color: " + this.colorName)

        // draw the wall
        this.addComponent(new BoxShape())
        this.addComponent(new Transform( transform ))
        this.addComponent(new ColorGroup(this.colorName))

        let material = new Material();
        material.albedoColor = Settings.colors[this.colorName]
        material.hasAlpha = true
        this.addComponent( material )

        this.handleState()

        //this.addComponent(new OnClick(() => { this.setVisible(false)}))
        //engine.addEntity(this)

        // listen to the State events to change the view
        State.events.addListener( StateUpdate, this, () => { this.handleState() })
    }


    /**
     * handles the State value of the given color
     */
    private handleState () {
        var activeColor = State.getActiveColor()
        var myColor = this.getComponent(ColorGroup).color
        var bool = (myColor == activeColor)
        log(fname + "handleState - activeColorName: " + activeColor + " - myColor: " + myColor + " - bool: " + bool)
        this.setVisible(bool);

        //this method doesn't allow to turn on color combinations (eg RED + GREEN)
        //var state = State.glasses[this.colorName]
        //this.setVisible(state.active)
    }

    /**
     * changes the visibility of the wall by adding or removing it from the engine
     * @param bool Boolean
     */
    public setVisible(bool:boolean) {
        log(fname + "setVisible: " + bool)

        // METHOD 2 - with removing from the engine
        if (bool) engine.addEntity(this)
        else engine.removeEntity(this)

        /* METHOD 1 - with Alpha  > problem keeps showing the shadow
        let m = this.getComponent(Material)
        let col = m.albedoColor
        let alpha = (bool) ? 1 : 0  // sets alpha to zero if bool = false
        let newCol = new Color4( col.r, col.g, col.b, alpha)
        m.disableLighting = !bool //(bool) ? false : true 
        m.albedoColor = newCol      // typescript complains... but it works, albedoColor Accepts also Color4
        //*/
    }
   

}