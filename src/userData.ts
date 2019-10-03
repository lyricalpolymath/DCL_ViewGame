import * as Globals from "./functions"
import { InventoryItem } from "./inventoryItem"
import { Level } from "./levels/level"


export class LevelPlayer
{
    events:EventManager
    user_address:string
    levelBumps:number = 0
    backupData:boolean = false
    activeColor:string = Globals._colorNames.NONE
    canvas:UICanvas
    filter:UICanvas
    filterColor:UIContainerRect
    inventoryContainer:UIContainerStack
    userLevelText:UIText
    redItem:InventoryItem
    blueItem:InventoryItem
    greenItem:InventoryItem
    microscopeItem:InventoryItem
    telescopeItem:InventoryItem
    binocularsItem:InventoryItem
    glassesItem:InventoryItem
    magnifyingItem:InventoryItem
    leaderboardItem:InventoryItem
    username:string = ""

    playerData:any


    constructor(events:EventManager)
    {

    this.events = events
    this.canvas = new UICanvas()

    this.inventoryContainer = new UIContainerStack(this.canvas)
    this.inventoryContainer.stackOrientation = UIStackOrientation.VERTICAL;
    this.inventoryContainer.width = Globals.Settings.inventory.width
    this.inventoryContainer.height = '100%'
    this.inventoryContainer.color =  Color4.Black()
    this.inventoryContainer.opacity = Globals.Settings.inventory.opacity
    this.inventoryContainer.hAlign = 'right'
    this.inventoryContainer.adaptHeight = true
    this.inventoryContainer.visible = true

    this.filter = new UICanvas()
    this.filterColor = new UIContainerRect(this.filter)
    let rect = this.filterColor
        rect.width = '100%'
        rect.height = '100%'
        rect.color =  Color4.Red()
        rect.opacity = 0.3
        rect.visible = false
        rect.isPointerBlocker = false

    this.leaderboardItem = new InventoryItem(this.inventoryContainer,this.events, Globals.Settings.inventory.buttonAtlas,Globals._inventoryItems.LEADERBOARD,300,200,90,90,0)
    this.leaderboardItem.setVisible(true)
    this.redItem = new InventoryItem(this.inventoryContainer, this.events, Globals.Settings.inventory.buttonAtlas,Globals._colorNames.RED,0,0,90,90,100)
    this.greenItem = new InventoryItem(this.inventoryContainer, this.events, Globals.Settings.inventory.buttonAtlas,Globals._colorNames.GREEN,0,100,90,90,100)
    this.blueItem = new InventoryItem(this.inventoryContainer,this.events, Globals.Settings.inventory.buttonAtlas,Globals._colorNames.BLUE,0,200,90,90,100) 
    this.telescopeItem = new InventoryItem(this.inventoryContainer,this.events, Globals.Settings.inventory.buttonAtlas,Globals._inventoryItems.TELESCOPE,    200,0,90,90, 0) 
    this.magnifyingItem = new InventoryItem(this.inventoryContainer,this.events, Globals.Settings.inventory.buttonAtlas,Globals._inventoryItems.MAGNIFIER,    300,0,90,90, 0)
    this.binocularsItem = new InventoryItem(this.inventoryContainer,this.events, Globals.Settings.inventory.buttonAtlas,Globals._inventoryItems.BINOCULARS,    200,100,90,90, 0)
    this.glassesItem = new InventoryItem(this.inventoryContainer,this.events, Globals.Settings.inventory.buttonAtlas,Globals._inventoryItems.GLASSES,        300,100,90,90, 0)
    this.microscopeItem = new InventoryItem(this.inventoryContainer,this.events, Globals.Settings.inventory.buttonAtlas,Globals._inventoryItems.MICROSCOPE,    200,200,90,90, 0)

    
    this.playerData = {
        username: this.username,
        currentLevel: 1,
        totalBumps: 0,
        glasses: {
            RED: this.redItem.visible,
            GREEN: this.greenItem.visible,
            BLUE: this.blueItem.visible,
        },
        items:{
            MICROSCOPE: this.microscopeItem.visible,
            TELESCOPE: this.telescopeItem.visible,
            BINOCULARS: this.binocularsItem.visible,
            GLASSES: this.glassesItem.visible,
            MAGNIFIER: this.magnifyingItem.visible
        }
    }

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
        this.playerData.currentLevel = level
    }

    setBackup(backup:boolean)
    {
        this.backupData = backup
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

    addInventory(color:string)
    {
        switch(color)
        {
            case Globals._colorNames.BLUE:
            this.playerData.glasses.BLUE = true
            this.blueItem.setVisible(true)
            this.blueItem.setActive(true)
            break;

        case Globals._colorNames.GREEN:
            this.playerData.glasses.GREEN = true
            this.greenItem.setVisible(true)
            this.greenItem.setActive(true)
            break;

        case Globals._colorNames.RED:
            this.playerData.glasses.RED = true
            this.redItem.setVisible(true)
            this.redItem.setActive(true)
            break;

        case Globals._inventoryItems.TELESCOPE:
            this.playerData.items.TELESCOPE = true
            this.telescopeItem.setVisible(true)
            break;

        case Globals._inventoryItems.MICROSCOPE:
            this.playerData.items.MICROSCOPE = true
            this.microscopeItem.setVisible(true)
            break;

        case Globals._inventoryItems.BINOCULARS:
            this.playerData.items.BINOCULARS = true
            this.binocularsItem.setVisible(true)
            break;

        case Globals._inventoryItems.GLASSES:
            this.playerData.items.GLASSES = true
            this.glassesItem.setVisible(true)
            break;

        case Globals._inventoryItems.MAGNIFIER:
            this.playerData.items.MAGNIFIER = true
            this.magnifyingItem.setVisible(true)
            break;
        }
    }

    handleInventory(level:Level)
    {
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
            this.activeColor = Globals._colorNames.GREEN
  
          } else if (!R.active && !G.active && B.active) {
            // only Blue
            this.activeColor = Globals._colorNames.BLUE
  
          } else if (R.active && G.active && !B.active) {
            // RED+GREEN = YELLOW
            this.activeColor = Globals._colorNames.YELLOW
          
          } else if (R.active && !G.active && B.active) {
            // RED+BLUE = PURPLE
            this.activeColor = Globals._colorNames.PURPLE
          
          } else if (!R.active && G.active && B.active) {
            // GREEN+BLUE = CYAN
            this.activeColor = Globals._colorNames.TURQUOISE
          
          } else if (R.active && G.active && B.active) {
            // RED+GREEN+BLUE = WHITE
            this.activeColor = Globals._colorNames.WHITE
          }
        this.setFilterColor(Globals.Settings.colors[this.activeColor])
        level.showWallsForLens(this.activeColor)
    }

    getStateString() {
        let stateObject = {
            user: this.user_address,
            level: this.playerData.currentLevel,
            message:{
                playerData: this.getPlayerData()
            }
        } 
        return stateObject
    }

    getPlayerData()
    {
        return this.playerData
    }

    pushData()
    {
        if(this.backupData)
        {
        let updateString = JSON.stringify(this.getStateString())
        log(updateString)
        executeTask(async () => {
            try {
              let response = await fetch(Globals.awsPut, {
                method: "POST",  
                headers: { "Content-Type": "application/json" },
                body: updateString
              })
              .then(response => response.json())
              .then(data => {
                log(data)
                log("success")
              })
            } catch(e) {
              log("error is " + e)
            }
          })
        }
    }

    updateLocal(data)
    {
        log(data)
        log("checking local here")
        this.playerData = data.Item.inventory.playerData
        if(this.playerData.glasses.RED)
        {
            this.redItem.setVisible(true)
        }
        if(this.playerData.glasses.GREEN)
        {
            this.greenItem.setVisible(true)
        }
        if(this.playerData.glasses.BLUE)
        {
            this.blueItem.setVisible(true)
        }
        
        if(this.playerData.items.MAGNIFIER)
        {
            this.magnifyingItem.setVisible(true)
        }
        if(this.playerData.items.TELESCOPE)
        {
            this.telescopeItem.setVisible(true)
        }
        if(this.playerData.items.BINOCULARS)
        {
            this.binocularsItem.setVisible(true)
        }
        if(this.playerData.items.GLASSES)
        {
            this.glassesItem.setVisible(true)
        }
        if(this.playerData.items.MAGNIFIER)
        {
            this.magnifyingItem.setVisible(true)
        }
        
        log("here is player data")
        log(this.playerData)
    }

    updateBump()
    {
        this.playerData.totalBumps++
    }
}