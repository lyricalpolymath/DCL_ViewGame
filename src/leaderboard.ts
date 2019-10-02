import * as Globals from "./functions"
import { InventoryItem } from "./inventoryItem";


export class LeaderBoard {

    canvas:UICanvas
    container:UIContainerStack | UIContainerRect;
    sortedLeaderBoard:{ id: string, level: number, totalBumps:number }[]

    youL:UIText 
    youB:UIText

    constructor() {

        let imgTexture = new Texture( "images/leaderboard_white_placeholder.png")

        this.canvas = new UICanvas();


        // trick to center the UI
        this.container = new UIContainerRect(this.canvas);
        this.container.positionX = 0 //-50;
        this.container.positionY = 50
        this.container.width = "100%"
        this.container.height = "100%"
        this.container.isPointerBlocker = false
        this.container.visible = false

        // trick to center the UI
        var tttt = new UIContainerRect(this.container);
        tttt.positionX = 0 //-50;
        tttt.positionY = 0
        tttt.width = "50%"
        tttt.vAlign = "center"
        tttt.hAlign = "center"
        tttt.height = 50
        tttt.isPointerBlocker = false
        tttt.color = Color4.Black()

        // add the levelboard overall background
        const bg = new UIImage(this.container, imgTexture)
        bg.sourceLeft = 0
        bg.sourceTop = 0
        bg.sourceWidth = 1000
        bg.sourceHeight = 1000
        bg.width = 1000
        bg.height = 1000; 
        bg.vAlign = 'center'
        bg.hAlign = 'center'
        
        var levelt = new UIText(this.container)
        levelt.color = Color4.Red()
        levelt.fontSize = 50
        levelt.value = "LEVEL"
        levelt.outlineColor = Color4.Black()
        levelt.outlineWidth = .2
        levelt.positionX = - 100
        levelt.hAlign = "center"
        levelt.vAlign = "center"

        var bumps = new UIText(this.container)
        bumps.color = Color4.Red()
        bumps.fontSize = 50
        bumps.value = "BUMPS"
        bumps.outlineColor = Color4.Black()
        bumps.outlineWidth = .2
        bumps.positionX = -100
        bumps.positionY = -150
        bumps.hAlign = "center"
        bumps.vAlign = "center"


        this.youL = new UIText(this.container)
        this.youL.color = Color4.Red()
        this.youL.value = ""
        this.youL.fontSize = 50
        this.youL.outlineColor = Color4.Black()
        this.youL.outlineWidth = .2
        this.youL.positionX = 200
        this.youL.hAlign = "center"
        this.youL.vAlign = "center"

        this.youB = new UIText(this.container)
        this.youB.color = Color4.Red()
        this.youB.value = ""
        this.youB.fontSize = 50
        this.youB.outlineColor = Color4.Black()
        this.youB.outlineWidth = .2
        this.youB.positionY = -150
        this.youB.positionX = 200
        this.youB.hAlign = "center"
        this.youB.vAlign = "center"

        this.getLeaderboardDataFromServer()
    }

    private getLeaderboardDataFromServer(){
        //let apiUrl = Globals.awsLeaderboard // with proxy
        let apiUrl =  Globals.leaderboardUrl
        log("Leaderboard.getLeaderboardDataFromServer - going to call url:\n" + apiUrl);
        executeTask(async () => {
            try {
              let response = await fetch(apiUrl, {
                headers: { "Content-Type": "application/json" },
                method: "GET"
              })
              .then(response => response.json())
              .then(data => {
                //log("Leaderboard - data:", data)
                //log("Leaderboard - JSON.parse(data): ", JSON.parse(data)) // returns an arry
                this.parseLeaderboardData(data.Items)
              })
            } catch(e) {
            }
          })
    }

    private parseLeaderboardData(items:[any]) {
        log("Leaderboard.parseLeaderboardData items: ", items)

        // 1- simplify the array with only the elements we want
        let arr = items.map( item => { 
            return {
                "id": item.id,
                "level": item.level,
                "totalBumps": item.inventory.playerData.totalBumps
            }
        })
        //log("Leaderboard.parseLeaderboardData arr: ", arr)

        //2- sort the array by level first in descending order, 
        //   then sort by total bumps in ascending order: the least bumps wins
        arr.sort((a, b) => b.level - a.level || a.totalBumps - b.totalBumps);
        log("Leaderboard.parseLeaderboardData - sorted leaderboard: ", arr)

        this.sortedLeaderBoard = arr
        //TODO - update the actual information in the layout

    }

    toggle(data)
    {
        if(this.container.visible)
        {

            this.container.visible = false
            this.canvas.visible = false
        }
        else
        {
            this.update(data)
            this.container.visible = true
            this.canvas.visible = true
        }
    }

    update(data)
    {
        this.youL.value = data.currentLevel
        this.youB.value = data.totalBumps
    }


} 