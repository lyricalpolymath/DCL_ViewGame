import * as Globals from "./functions"

export class InventoryItem {

    parent          :UIShape            // UI container Rect or stack
    events          :EventManager
    active          :boolean = false
    visible       :boolean = false
    buttonImg       :UIImage   
    name            :string             // used to identify the appropriate object in State.glasses
    imgX            :number             // x position in imgAtlas of DESELECTED button
    imgSelectedX    :number             // x position offset in imgAtlas of SELECTED button
    imgHeight       :number             // default img height, used because to hide the image we have to set it's height=0

    constructor(
            parent:UIContainerStack | UIContainerRect,
            events:EventManager,
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
        this.events = events

        // draw the deselected Button
        let btn = new UIImage(this.parent, new Texture(atlas))
        btn.sourceLeft = x
        btn.sourceTop = y
        btn.sourceWidth = w
        btn.sourceHeight = h
        btn.height = Globals.Settings.inventory.width// 100
        btn.width = Globals.Settings.inventory.width
        btn.isPointerBlocker = true
        btn.visible = false                    // hide from the beginning and let the State determine wither to show it or not
        btn.onClick = new OnClick(() => { this.toggle() })
        this.buttonImg = btn

        // activate or not at the beginning
        this.handleStateUpdate()        
    }

    /**
     * changes the view of this inventory item based on the
     */
    private handleStateUpdate() {
        //var state = State.glasses[this.name]
        //this.setVisible( state.available );
        //this.setActive( state.active );
    }

    /**
     * switches the active and disabled states
     */
    toggle() {
        this.setActive(!this.active);
        this.events.fireEvent(new Globals.InventoryItemSelectedEvent(this.name))
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