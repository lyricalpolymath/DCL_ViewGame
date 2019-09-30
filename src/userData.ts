import * as Globals from "./functions"
import { InventoryItem } from "./inventoryItem"
import { Level } from "./levels/level"


export class LevelPlayer
{
    events:EventManager
    user_address:string
    level:number
    backupData:boolean
    activeColor:string = Globals._colorNames.NONE
    canvas:UICanvas
    filter:UICanvas
    filterColor:UIContainerRect
    inventoryContainer:UIContainerStack
    userLevelText:UIText
    redItem:InventoryItem
    blueItem:InventoryItem
    greenItem:InventoryItem

    constructor(events:EventManager)
    {

    this.events = events
    this.canvas = new UICanvas()
    this.userLevelText = new UIText(this.canvas)
    this.userLevelText.value = 'LEVEL'
    this.userLevelText.positionX = -200
    this.userLevelText.positionY = -15
    this.userLevelText.hAlign = 'right'
    this.userLevelText.vAlign = 'top'
    this.userLevelText.fontSize = 50

    this.inventoryContainer = new UIContainerStack(this.canvas)
    this.inventoryContainer.stackOrientation = UIStackOrientation.VERTICAL;
    this.inventoryContainer.width = Globals.Settings.inventory.width
    this.inventoryContainer.height = '100%'
    this.inventoryContainer.color =  Color4.Black()
    this.inventoryContainer.opacity = Globals.Settings.inventory.opacity
    this.inventoryContainer.hAlign = 'right'
    this.inventoryContainer.adaptHeight = true
    this.inventoryContainer.visible = false

    this.filter = new UICanvas()
    this.filterColor = new UIContainerRect(this.filter)
    let rect = this.filterColor
        rect.width = '100%'
        rect.height = '100%'
        rect.color =  Color4.Red()
        rect.opacity = 0.3
        rect.visible = false
        rect.isPointerBlocker = false

    this.redItem = new InventoryItem(this.inventoryContainer, this.events, Globals.Settings.inventory.buttonAtlas,Globals._colorNames.RED,0,0,90,90,100)

    this.greenItem = new InventoryItem(this.inventoryContainer, this.events, Globals.Settings.inventory.buttonAtlas,Globals._colorNames.GREEN,0,100,90,90,100)

    this.blueItem = new InventoryItem(this.inventoryContainer,this.events, Globals.Settings.inventory.buttonAtlas,Globals._colorNames.BLUE,0,200,90,90,100)

    }

    setFilterColor(color:Color4) {
        // if we are using the UI Method
        if (this.filterColor) {
          this.filterColor.color = color
        }  
        this.setVisible(true)
      }

    setVisible (bool:boolean) {
        this.filterColor.visible = bool;
      }
  

    setAddress(address:string)
    {
        this.user_address = address
    }

    setLevel(level:number)
    {
        this.level = level
    }

    setBackup(backup:boolean)
    {
        this.backupData = backup
    }

    updateLevelUI(levelui:number)
    {
        log('updating level text ' + levelui)
        this.userLevelText.value = "LEVEL " + levelui
    }

    setVisibleInventory(color:string)
    {
        switch(color)
        {
            case Globals._colorNames.BLUE:
                if(!this.blueItem.visible)
                {
                    this.blueItem.setVisible(true)
                }
                //this.blueItem.toggle()
                break;
        }
    }

    handleInventory(level:Level)
    {
        log("active color is " + this.activeColor)
        if(!this.inventoryContainer.visible)
        {
            this.inventoryContainer.visible = true
        }

        let R = this.redItem
        let G = this.greenItem
        let B = this.blueItem

        if (!R.active && !G.active && !B.active) {
            // all disabled - hide the component
            this.activeColor = Globals._colorNames.NONE
          
          } else if (R.active && !G.active && !B.active) {
            //only RED
            this.activeColor = Globals._colorNames.RED
          
          } else if (!R.active && G.active && !B.active) {
            // only Green
            this.activeColor = Globals.Settings.colorNames.GREEN
  
          } else if (!R.active && !G.active && B.active) {
            // only Blue
            log(" blue ")
            this.activeColor = Globals.Settings.colorNames.BLUE
  
          } else if (R.active && G.active && !B.active) {
            // RED+GREEN = YELLOW
            this.activeColor = Globals.Settings.colorNames.YELLOW
          
          } else if (R.active && !G.active && B.active) {
            // RED+BLUE = PURPLE
            this.activeColor = Globals.Settings.colorNames.PURPLE
          
          } else if (!R.active && G.active && B.active) {
            // GREEN+BLUE = CYAN
            log(" cyan ")
            this.activeColor = Globals.Settings.colorNames.CYAN
          
          } else if (R.active && G.active && B.active) {
            // RED+GREEN+BLUE = WHITE
            this.activeColor = Globals.Settings.colorNames.WHITE
          }
          log("new active color is " + this.activeColor)
        this.setFilterColor(Globals.Settings.colors[this.activeColor])
        level.showWallsForLens(this.activeColor)
    }

}