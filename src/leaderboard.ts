import * as Globals from "./functions"
import { LevelPlayer } from "./userData";


export class LeaderBoard {

    canvas:UICanvas
    container:UIContainerStack | UIContainerRect;
    sortedLeaderBoard:{ id: string, level: number, totalBumps:number }[]
    imgTexture:Texture
    fontSize:number = 30

    oneN:UIText
    oneL:UIText
    oneB:UIText

    twoN:UIText
    twoL:UIText
    twoB:UIText

    threeN:UIText
    threeL:UIText
    threeB:UIText

    fourN:UIText
    fourL:UIText
    fourB:UIText

    fiveN:UIText
    fiveL:UIText
    fiveB:UIText

    youL:UIText
    youB:UIText

    constructor() {

        this.imgTexture = new Texture( "images/lbbg.png")

        this.canvas = new UICanvas();

        this.createUI()

    }

    createUI()
    {
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
                const bg = new UIImage(this.container, this.imgTexture)
                bg.sourceLeft = 0
                bg.sourceTop = 0
                bg.sourceWidth = 1000
                bg.sourceHeight = 1000
                bg.width = 1000
                bg.height = 1000; 
                bg.vAlign = 'center'
                bg.hAlign = 'center'

                var header = new UIText(this.container)
                header.color = Color4.White()
                header.fontSize = 50
                header.value = "LEVELER"
                header.outlineColor = Color4.Black()
                header.outlineWidth = .2
                header.positionX = - 80
                header.hAlign = "center"
                header.vAlign = "top"
                header.positionY = - 65

                var leader = new UIText(this.container)
                leader.color = Color4.White()
                leader.fontSize = 40
                leader.value = "LEADERS"
                leader.outlineColor = Color4.Black()
                leader.outlineWidth = .2
                leader.positionX = - 300
                leader.hAlign = "center"
                leader.vAlign = "top"
                leader.positionY = - 150

                var levels = new UIText(this.container)
                levels.color = Color4.White()
                levels.fontSize = 40
                levels.value = "LEVEL"
                levels.outlineColor = Color4.Black()
                levels.outlineWidth = .2
                levels.positionX = 100
                levels.hAlign = "center"
                levels.vAlign = "top"
                levels.positionY = - 150

                var bumps = new UIText(this.container)
                bumps.color = Color4.White()
                bumps.fontSize = 40
                bumps.value = "BUMPS"
                bumps.outlineColor = Color4.Black()
                bumps.outlineWidth = .2
                bumps.positionX = 300
                bumps.hAlign = "center"
                bumps.vAlign = "top"
                bumps.positionY = - 150

                this.oneN = new UIText(this.container)
                this.oneN.color = Color4.White()
                this.oneN.fontSize = this.fontSize
                this.oneN.value = "First Place"
                this.oneN.outlineColor = Color4.Black()
                this.oneN.outlineWidth = .2
                this.oneN.positionX = - 300
                this.oneN.hAlign = "center"
                this.oneN.vAlign = "top"
                this.oneN.positionY = - 225

                this.oneB = new UIText(this.container)
                this.oneB.color = Color4.White()
                this.oneB.fontSize = this.fontSize
                this.oneB.value = "1"
                this.oneB.outlineColor = Color4.Black()
                this.oneB.outlineWidth = .2
                this.oneB.positionX = 350
                this.oneB.hAlign = "center"
                this.oneB.vAlign = "top"
                this.oneB.positionY = - 225

                this.oneL = new UIText(this.container)
                this.oneL.color = Color4.White()
                this.oneL.fontSize = this.fontSize
                this.oneL.value = "1"
                this.oneL.outlineColor = Color4.Black()
                this.oneL.outlineWidth = .2
                this.oneL.positionX = 150
                this.oneL.hAlign = "center"
                this.oneL.vAlign = "top"
                this.oneL.positionY = - 225

                this.twoN = new UIText(this.container)
                this.twoN.color = Color4.White()
                this.twoN.fontSize = this.fontSize
                this.twoN.value = "Second Place"
                this.twoN.outlineColor = Color4.Black()
                this.twoN.outlineWidth = .2
                this.twoN.positionX = - 300
                this.twoN.hAlign = "center"
                this.twoN.vAlign = "top"
                this.twoN.positionY = - 300

                this.twoB = new UIText(this.container)
                this.twoB.color = Color4.White()
                this.twoB.fontSize = this.fontSize
                this.twoB.value = "22"
                this.twoB.outlineColor = Color4.Black()
                this.twoB.outlineWidth = .2
                this.twoB.positionX = 350
                this.twoB.hAlign = "center"
                this.twoB.vAlign = "top"
                this.twoB.positionY = - 300

                this.twoL = new UIText(this.container)
                this.twoL.color = Color4.White()
                this.twoL.fontSize = this.fontSize
                this.twoL.value = "2"
                this.twoL.outlineColor = Color4.Black()
                this.twoL.outlineWidth = .2
                this.twoL.positionX = 150
                this.twoL.hAlign = "center"
                this.twoL.vAlign = "top"
                this.twoL.positionY = - 300

                this.threeN = new UIText(this.container)
                this.threeN.color = Color4.White()
                this.threeN.fontSize = this.fontSize
                this.threeN.value = "Third Place"
                this.threeN.outlineColor = Color4.Black()
                this.threeN.outlineWidth = .2
                this.threeN.positionX = - 300
                this.threeN.hAlign = "center"
                this.threeN.vAlign = "top"
                this.threeN.positionY = - 375

                this.threeB = new UIText(this.container)
                this.threeB.color = Color4.White()
                this.threeB.fontSize = this.fontSize
                this.threeB.value = "33"
                this.threeB.outlineColor = Color4.Black()
                this.threeB.outlineWidth = .2
                this.threeB.positionX = 350
                this.threeB.hAlign = "center"
                this.threeB.vAlign = "top"
                this.threeB.positionY = - 375

                this.threeL = new UIText(this.container)
                this.threeL.color = Color4.White()
                this.threeL.fontSize = this.fontSize
                this.threeL.value = "3"
                this.threeL.outlineColor = Color4.Black()
                this.threeL.outlineWidth = .2
                this.threeL.positionX = 150
                this.threeL.hAlign = "center"
                this.threeL.vAlign = "top"
                this.threeL.positionY = - 375


                this.fourN = new UIText(this.container)
                this.fourN.color = Color4.White()
                this.fourN.fontSize = this.fontSize
                this.fourN.value = "Fourth Place"
                this.fourN.outlineColor = Color4.Black()
                this.fourN.outlineWidth = .2
                this.fourN.positionX = - 300
                this.fourN.hAlign = "center"
                this.fourN.vAlign = "top"
                this.fourN.positionY = - 450

                this.fourB = new UIText(this.container)
                this.fourB.color = Color4.White()
                this.fourB.fontSize = this.fontSize
                this.fourB.value = "44"
                this.fourB.outlineColor = Color4.Black()
                this.fourB.outlineWidth = .2
                this.fourB.positionX = 350
                this.fourB.hAlign = "center"
                this.fourB.vAlign = "top"
                this.fourB.positionY = - 450

                this.fourL = new UIText(this.container)
                this.fourL.color = Color4.White()
                this.fourL.fontSize = this.fontSize
                this.fourL.value = "4"
                this.fourL.outlineColor = Color4.Black()
                this.fourL.outlineWidth = .2
                this.fourL.positionX = 150
                this.fourL.hAlign = "center"
                this.fourL.vAlign = "top"
                this.fourL.positionY = - 450

                this.fiveN = new UIText(this.container)
                this.fiveN.color = Color4.White()
                this.fiveN.fontSize = this.fontSize
                this.fiveN.value = "Fifth Place"
                this.fiveN.outlineColor = Color4.Black()
                this.fiveN.outlineWidth = .2
                this.fiveN.positionX = - 300
                this.fiveN.hAlign = "center"
                this.fiveN.vAlign = "top"
                this.fiveN.positionY = - 525

                this.fiveB = new UIText(this.container)
                this.fiveB.color = Color4.White()
                this.fiveB.fontSize = this.fontSize
                this.fiveB.value = "55"
                this.fiveB.outlineColor = Color4.Black()
                this.fiveB.outlineWidth = .2
                this.fiveB.positionX = 350
                this.fiveB.hAlign = "center"
                this.fiveB.vAlign = "top"
                this.fiveB.positionY = - 525

                this.fiveL = new UIText(this.container)
                this.fiveL.color = Color4.White()
                this.fiveL.fontSize = this.fontSize
                this.fiveL.value = "5"
                this.fiveL.outlineColor = Color4.Black()
                this.fiveL.outlineWidth = .2
                this.fiveL.positionX = 150
                this.fiveL.hAlign = "center"
                this.fiveL.vAlign = "top"
                this.fiveL.positionY = - 525
        

                var youname = new UIText(this.container)
                youname.color = Color4.Red()
                youname.fontSize = this.fontSize
                youname.value = "YOU"
                youname.outlineColor = Color4.Black()
                youname.outlineWidth = .2
                youname.positionX = - 300
                youname.hAlign = "center"
                youname.vAlign = "top"
                youname.positionY = - 600
        
                this.youL = new UIText(this.container)
                this.youL.color = Color4.Red()
                this.youL.fontSize = this.fontSize
                this.youL.value = ""
                this.youL.outlineColor = Color4.Black()
                this.youL.outlineWidth = .2
                this.youL.positionX = 150
                this.youL.hAlign = "center"
                this.youL.vAlign = "top"
                this.youL.positionY = - 600
        
                this.youB = new UIText(this.container)
                this.youB.color = Color4.Red()
                this.youB.fontSize = this.fontSize
                this.youB.value = ""
                this.youB.outlineColor = Color4.Black()
                this.youB.outlineWidth = .2
                this.youB.positionX = 350
                this.youB.hAlign = "center"
                this.youB.vAlign = "top"
                this.youB.positionY = - 600
    }


    private getLeaderboardDataFromServer(player:LevelPlayer){
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
                this.parseLeaderboardData(player, data.Items)
              })
            } catch(e) {
            }
          })
    }

    private parseLeaderboardData(player:LevelPlayer, items:[any]) {
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
        this.displayTop5(player)

    }

    displayTop5(player:LevelPlayer)
    {
        this.oneN.value = this.sortedLeaderBoard[0].id == player.user_address ? "YOU" : this.sortedLeaderBoard[0].id.substr(0,15)
        this.oneB.value = this.sortedLeaderBoard[0].id == player.user_address ? player.playerData.totalBumps : this.sortedLeaderBoard[0].totalBumps.toString()
        this.oneL.value = this.sortedLeaderBoard[0].id == player.user_address ? player.playerData.currentLevel : this.sortedLeaderBoard[0].totalBumps.toString()
        this.oneN.color =this.sortedLeaderBoard[0].id == player.user_address ? Color4.Red() : Color4.White()
        this.oneB.color =this.sortedLeaderBoard[0].id == player.user_address ? Color4.Red() : Color4.White()
        this.oneL.color =this.sortedLeaderBoard[0].id == player.user_address ? Color4.Red() : Color4.White()
        

        this.twoN.value = this.sortedLeaderBoard[1].id == player.user_address ? "YOU" : this.sortedLeaderBoard[1].id.substr(0,15)
        this.twoB.value = this.sortedLeaderBoard[1].id == player.user_address ? player.playerData.totalBumps : this.sortedLeaderBoard[1].totalBumps.toString()
        this.twoL.value = this.sortedLeaderBoard[1].id == player.user_address ? player.playerData.currentLevel : this.sortedLeaderBoard[1].totalBumps.toString()
        this.twoN.color =this.sortedLeaderBoard[1].id == player.user_address ? Color4.Red() : Color4.White()
        this.twoB.color =this.sortedLeaderBoard[1].id == player.user_address ? Color4.Red() : Color4.White()
        this.twoL.color =this.sortedLeaderBoard[1].id == player.user_address ? Color4.Red() : Color4.White()

        this.threeN.value = this.sortedLeaderBoard[2].id == player.user_address ? "YOU" : this.sortedLeaderBoard[2].id.substr(0,15)
        this.threeB.value = this.sortedLeaderBoard[2].id == player.user_address ? player.playerData.totalBumps : this.sortedLeaderBoard[2].totalBumps.toString()
        this.threeL.value = this.sortedLeaderBoard[2].id == player.user_address ? player.playerData.currentLevel : this.sortedLeaderBoard[2].totalBumps.toString()
        this.threeN.color =this.sortedLeaderBoard[2].id == player.user_address ? Color4.Red() : Color4.White()
        this.threeB.color =this.sortedLeaderBoard[2].id == player.user_address ? Color4.Red() : Color4.White()
        this.threeL.color =this.sortedLeaderBoard[2].id == player.user_address ? Color4.Red() : Color4.White()

        this.fourN.value = this.sortedLeaderBoard[3].id == player.user_address ? "YOU" : this.sortedLeaderBoard[3].id.substr(0,15)
        this.fourB.value = this.sortedLeaderBoard[3].id == player.user_address ? player.playerData.totalBumps : this.sortedLeaderBoard[3].totalBumps.toString()
        this.fourL.value = this.sortedLeaderBoard[3].id == player.user_address ? player.playerData.currentLevel : this.sortedLeaderBoard[3].totalBumps.toString()
        this.fourN.color =this.sortedLeaderBoard[3].id == player.user_address ? Color4.Red() : Color4.White()
        this.fourB.color =this.sortedLeaderBoard[3].id == player.user_address ? Color4.Red() : Color4.White()
        this.fourL.color =this.sortedLeaderBoard[3].id == player.user_address ? Color4.Red() : Color4.White()

        this.fiveN.value = this.sortedLeaderBoard[4].id == player.user_address ? "YOU" : this.sortedLeaderBoard[4].id.substr(0,15)
        this.fiveB.value = this.sortedLeaderBoard[4].id == player.user_address ? player.playerData.totalBumps : this.sortedLeaderBoard[4].totalBumps.toString()
        this.fiveL.value = this.sortedLeaderBoard[4].id == player.user_address ? player.playerData.currentLevel : this.sortedLeaderBoard[4].totalBumps.toString()
        this.fiveN.color =this.sortedLeaderBoard[4].id == player.user_address ? Color4.Red() : Color4.White()
        this.fiveB.color =this.sortedLeaderBoard[4].id == player.user_address ? Color4.Red() : Color4.White()
        this.fiveL.color =this.sortedLeaderBoard[4].id == player.user_address ? Color4.Red() : Color4.White()
    }



    toggle(player:LevelPlayer)
    {
        if(this.container.visible)
        {

            this.container.visible = false
            this.canvas.visible = false
        }
        else
        {
            this.update(player)
            this.container.visible = true
            this.canvas.visible = true
        }
    }

    update(player:LevelPlayer)
    {
        this.youL.value = player.playerData.currentLevel
        this.youB.value = player.playerData.totalBumps
        this.getLeaderboardDataFromServer(player)
    }


} 