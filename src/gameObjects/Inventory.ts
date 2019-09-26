import { Settings } from "../gameSettings";
import { State, StateUpdate, InventoryItemSelectedEvent } from "../gameState";

const fname = "Inventory."

export class InventoryUI {

    canvas:UICanvas ;

    constructor() {
        this.drawInventory()
    }

    /**
     * draws basic inventory untill we can get one designed
     */
    drawInventory() {
        log(fname+"drawInventory")
        this.canvas = new UICanvas();
        
        let cont = new UIContainerStack(this.canvas)
        cont.stackOrientation = UIStackOrientation.VERTICAL;
        cont.width = Settings.inventory.width
        cont.height = '100%'
        cont.color =  Color4.Black()
        cont.opacity = Settings.inventory.opacity
        cont.hAlign = 'right'
        //cont.spacing = 5
        cont.adaptHeight = true

        // add buttons here - the items themselves will take care to know wither they can be shown or not
        let red     = new InventoryItem(cont, Settings.inventory.buttonAtlas, "RED",    0, 0, 90, 90, 100);
        let green   = new InventoryItem(cont, Settings.inventory.buttonAtlas, "GREEN",  0, 100, 90, 90, 100);
        let blue    = new InventoryItem(cont, Settings.inventory.buttonAtlas, "BLUE",   0, 200, 90, 90, 100);

    }
}


/**
 * behaviors for each item that appears in the inventory
 */
export class InventoryItem {

    parent          :UIShape            // UI container Rect or stack
    active          :boolean = false
    buttonImg       :UIImage   
    name            :string             // used to identify the appropriate object in State.glasses
    imgX            :number             // x position in imgAtlas of DESELECTED button
    imgSelectedX    :number             // x position offset in imgAtlas of SELECTED button
    imgHeight       :number             // default img height, used because to hide the image we have to set it's height=0

    constructor(
            parent:UIContainerStack | UIContainerRect,
            atlas:string,
            name: string,
            x:number, y:number, w:number, h:number,     //position and sizes of the imageAtlas
            selectedXOffset:number
        ){
        //super(parent);
        this.parent = parent
        this.name = name
        this.imgX = x
        this.imgSelectedX = (x + selectedXOffset)
        this.imgHeight = h
        

        // draw the deselected Button
        let btn = new UIImage(this.parent, new Texture(atlas))
        btn.sourceLeft = x
        btn.sourceTop = y
        btn.sourceWidth = w
        btn.sourceHeight = h
        btn.height = Settings.inventory.width// 100
        btn.width = Settings.inventory.width
        btn.isPointerBlocker = true
        btn.visible = false                    // hide from the beginning and let the State determine wither to show it or not
        btn.onClick = new OnClick(() => { this.toggle() })
        this.buttonImg = btn

        // activate or not at the beginning
        this.handleStateUpdate()

        // listen to the State events to change the view
        State.events.addListener( StateUpdate, this, () => { this.handleStateUpdate() })
        
    }

    /**
     * changes the view of this inventory item based on the
     */
    private handleStateUpdate() {
        log(fname+"handleStateUpdate of " + this.name)
        var state = State.glasses[this.name]
        this.setVisible( state.available );
        this.setActive( state.active );
    }

    /**
     * switches the active and disabled states
     */
    toggle() {
        this.setActive(!this.active);
        State.events.fireEvent(new InventoryItemSelectedEvent(this.name, this.active))
    }

    /**
     * sets the active state of the inventory item and shows the view of the button as active
     * @param bool 
     */
    public setActive(bool:boolean | undefined = undefined) {
        if(bool == true || bool == undefined) {
            //activate
            this.buttonImg.sourceLeft = this.imgSelectedX
            this.active = true
            
       
        } else {
             // disable
            this.buttonImg.sourceLeft = this.imgX
            this.active = false
        }
        // emit the event
        log(fname+"setActive button " + this.name + "  - isActive: " + this.active + " State: ", State)
    }

    /**
     * sets the visibility of the Inventory Item
     * it uses a trick to make the Inventory UIContainerStack scale when a button is not visible
     * @param bool 
     */
    public setVisible (bool:boolean) {
        this.buttonImg.visible = bool
        this.buttonImg.height = (bool) ? this.imgHeight : 0;
    }



}


