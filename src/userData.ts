import * as Globals from "./functions"
import { InventoryItem } from "./inventoryItem"
import { Level } from "./levels/level"

// BB addition
import { InventoryInfoItem } from "components/InventoryInfoItem"

export class LevelPlayer
{
    events:EventManager
    user_address:string
    levelBumps:number = 0
    backupData:boolean
    activeColor:string = Globals._colorNames.NONE
    canvas:UICanvas
    filter:UICanvas
    filterColor:UIContainerRect
    inventoryContainer:UIContainerStack
    //userLevelText:UIText                     // BB mod not needed
    redItem:InventoryItem
    blueItem:InventoryItem
    greenItem:InventoryItem

    // BB addition
    levelInfoItem:InventoryInfoItem             //holds the current level counter in the inventory
    hitCounterInfoItem:InventoryInfoItem        //holds the wall hit counter

    level1:any
    level2:any
    level3:any
    level4:any
    level5:any
    level6:any

    playerData:any


    constructor(events:EventManager)
    {

    this.events = events
    this.canvas = new UICanvas()

    /* BB MOD not needed now that it's in the inventory
    this.userLevelText = new UIText(this.canvas)
    this.userLevelText.value = 'LEVEL'
    this.userLevelText.positionX = -200
    this.userLevelText.positionY = -15
    this.userLevelText.hAlign = 'right'
    this.userLevelText.vAlign = 'top'
    this.userLevelText.fontSize = 50
    //*/

    this.inventoryContainer = new UIContainerStack(this.canvas)
    this.inventoryContainer.stackOrientation = UIStackOrientation.VERTICAL;
    this.inventoryContainer.width = Globals.Settings.inventory.width
    this.inventoryContainer.height = '100%'
    this.inventoryContainer.color =  Color4.Black()
    this.inventoryContainer.opacity = Globals.Settings.inventory.opacity
    this.inventoryContainer.hAlign = 'right'
    this.inventoryContainer.adaptHeight = true
    this.inventoryContainer.visible = true
    //this.inventoryContainer.spacing = 0

    // BB - add the Level and the bump counter to the inventory
    this.levelInfoItem = new InventoryInfoItem(this.inventoryContainer, "Level 7/8")
    this.hitCounterInfoItem = new InventoryInfoItem(this.inventoryContainer, "hits 0")
    //let itemCountInfoItem = new InventoryInfoItem(this.inventoryContainer, "items 3/8") 


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
    
    // BB DEV see the items
    this.redItem.setVisible(true)
    this.greenItem.setVisible(true)
    this.blueItem.setVisible(true)

    this.playerData = {
        currentLevel: 1,
        totalBumps: 0,
        levels: {
            level1: {
                bumps: 0
            },
            level2: {       
                bumps: 0             
            },
            level3: { 
                bumps: 0             
            },
            level4: {    
                bumps: 0             
            },
            level5: {    
                bumps: 0             
            },
            level6: {    
                bumps: 0             
            },
            level7: {     
                bumps: 0             
            },
            level8: {    
                bumps: 0             
            }
        },
        glasses: {
            RED: this.redItem.visible,
            GREEN: this.greenItem.visible,
            BLUE: this.blueItem.visible,
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

    updateLevelUI(levelui:number)
    {
        log('updating level text ' + levelui)
        // BB mod 
        //this.userLevelText.value = "LEVEL " + levelui
        this.levelInfoItem.setText("Level " + levelui + "/8");

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

    getStateString() {
        let stateObject = {
            user: this.user_address,
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
        if(this.setBackup)
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
        log(this.playerData)
    }

    updateBump()
    {
        log("player level is " + this.playerData.currentLevel)
        this.playerData.totalBumps++
        switch(this.playerData.currentLevel)
        {
            case 1:
                log("we made it this far")
                this.playerData.levels.level1.bumps++
                break;
            case 2:
                this.playerData.levels.level2.bumps++
                break;
            case 3:
                this.playerData.levels.level3.bumps++
                break;
            case 4:
                this.playerData.levels.level4.bumps++
                break;
            case 5:
                this.playerData.levels.level5.bumps++
                break;
            case 6:
                this.playerData.levels.level6.bumps++
                break;
            case 7:
                this.playerData.levels.level7.bumps++
                break;
            case 8:
                this.playerData.levels.level8.bumps++
                break;
        }
        //BB add - show it in the counter inside the inventory
        let currentLevel = this.playerData.levels[ "level" + this.playerData.currentLevel]
        this.hitCounterInfoItem.setText ("hits " + currentLevel.bumps )
    }


}