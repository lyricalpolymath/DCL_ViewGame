import { Settings } from "../gameSettings";

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

        // add buttons here
        let red     = new InventoryItem(cont, Settings.inventory.buttonAtlas, "RED",    0, 0, 90, 90, 100);
        let green   = new InventoryItem(cont, Settings.inventory.buttonAtlas, "GREEN",  0, 100, 90, 90, 100);
        let blue    = new InventoryItem(cont, Settings.inventory.buttonAtlas, "BLUE",   0, 200, 90, 90, 100);
    }
}




export class InventoryItem {

    parent:UIShape              //UI container Rect or stack
    active:boolean = false
    buttonImg:UIImage
    selectedBtn:UIImage         
    name:string
    imgX:number                 //x position in imgAtlas of DESELECTED button
    imgSelectedX:number;        //x position offset in imgAtlas of SELECTED button

    constructor(
            parent:UIContainerStack | UIContainerRect,
            atlas:string,
            name: string,
            x:number, y:number, w:number, h:number,
            selectedXOffset:number
        ){
        //super(parent);
        this.parent = parent;
        this.name = name;
        this.imgX = x;
        this.imgSelectedX = (x + selectedXOffset);
        

        // draw the deselected Button
        let btn = new UIImage(this.parent, new Texture(atlas))
        btn.sourceLeft = x
        btn.sourceTop = y
        btn.sourceWidth = w
        btn.sourceHeight = h
        btn.height = Settings.inventory.width// 100
        btn.width = Settings.inventory.width
        btn.isPointerBlocker = true
        btn.visible = true
        btn.onClick = new OnClick(() => { this.toggle() })
        this.buttonImg = btn

    }

    /**
     * switches the active and disabled states and the 
     */
    toggle() {
        if (!this.active) {
            // activate
            this.buttonImg.sourceLeft = this.imgSelectedX
            this.active = true

        } else {
            // disable
            this.buttonImg.sourceLeft = this.imgX
            this.active = false
        }
        log(fname+"toggle button " + this.name + "  - isActive: " + this.active)
    }




}


