import utils from "../node_modules/decentraland-ecs-utils/index"
import { Level } from "./levels/level"
import { TransitionScene } from "./levels/transitionScene"
import {LevelCompleted, TransitionLevelComplete, LevelLoadingComplete, DoTransition,InventoryItemSelectedEvent} from "./functions"
import { getUserAccount } from '@decentraland/EthereumController'
import * as Globals from "./functions"
import { LoadingScene } from "./levels/loadingScene"
import { LevelPlayer } from "./userData"


const events = new EventManager()

var player = new LevelPlayer(events)

startGame()

///set up the initial scene
const scene = new Entity("leveler-game")
const scenetransform = new Transform({ position: new Vector3(0, 0, 0), rotation: new Quaternion(0, 0, 0,1), scale: new Vector3(1, 1, 1) })
scene.addComponent(scenetransform)


var currentLevel:Level
var currentLevelNumber:number

///have a trigger shape for the avatar
utils.TriggerSystem.instance.setCameraTriggerShape(new utils.TriggerBoxShape(new Vector3(0.5, 1.8, 0.5), new Vector3(0, -0.91, 0)))

///create reusable components across levels
const transitionScene = new TransitionScene(events)
const loadingScene = new LoadingScene(events)
loadingScene.setParent(scene)

events.addListener(LevelCompleted,null,({l})=>{
    log("user won the level " + l)

    ///////need to show a congrats message and explain what they just picked up
    switch(l)
    {
      case 1:
        log("level " + l + " complete. found blue lens. add it to the inventory.")
        player.inventoryContainer.visible = true
        player.blueItem.setVisible(true)
        player.blueItem.setActive(true)
        itemSelected(Globals._colorNames.BLUE)
        break;

      case 2:
        log("level " + l + " complete. found green lens. add it to the inventory.")
        player.inventoryContainer.visible = true
        player.greenItem.setVisible(true)
        player.greenItem.setActive(true)
        itemSelected(Globals._colorNames.GREEN)
        break;

      case 3:
        log("level " + l + " complete. found red lens. add it to the inventory.")
        player.inventoryContainer.visible = true
        player.redItem.setVisible(true)
        player.redItem.setActive(true)
        itemSelected(Globals._colorNames.RED)
        break;
    }
})

events.addListener(DoTransition,null,({l})=>{
  log("transitioning from level " + l + " to level " + (l+1))
  doTransitionLevel(l)
})

events.addListener(InventoryItemSelectedEvent,null,({name})=>{
  log("changed lens, so we need to change which walls are visible")
  itemSelected(name)
})

//listen for when the loading current level is complete
events.addListener(LevelLoadingComplete,null,()=>{
  engine.removeEntity(loadingScene)
  loadingScene.setParent(null)

})

//listen for when the transition scene is complete
events.addListener(TransitionLevelComplete,null,()=>{
    engine.removeEntity(transitionScene)
    loadingScene.setParent(scene)
    engine.addEntity(loadingScene)

    currentLevelNumber++
    createLevel(currentLevelNumber)
    currentLevel.showWallsForLens(player.activeColor)
})

function itemSelected(color:string)
{
  log("color selected is " + color)
  player.setVisibleInventory(color)
  player.handleInventory(currentLevel)
  //currentLevel.showWallsForLens(player.activeColor)
}

function getServerInfo(address:string,ethSuccess:boolean)//:Entity
{
  if(ethSuccess)
  {
    log("found a user")
    executeTask(async () => {
      try {
        let response = await fetch(Globals.awsGet + "?user="+ player.user_address, {
          headers: { "Content-Type": "application/json" },
          method: "GET"
        })
        .then(response => response.json())
        .then(data => {
          log(data)
          if(!Object.keys(data).length)
          {
            log("user hasn't played. need to store information on server")
            player.setBackup(true)
            createLevel(1)
          }
          else
          {
            log("user found. retrieving information.")
            log(data)
            log(data.Item.level)
            createLevel(data.Item.level)
          }
        })
      } catch(e) {
        log("error is " + e)
      }
    })
  }
}

function startGame()
{
//try to get user ethereum address
executeTask(async () => {
  try {
    const address = await getUserAccount()
    log(address)
    player.setAddress(address)
    getServerInfo(address, true)
  } catch (error) {
    log("No ETH address or provider. Not going to store information to the cloud")
    player.setBackup(false)
    createLevel(1)
  }
})
}

function createLevel(level:number)
{
  currentLevelNumber = level
  player.updateLevelUI(level)
  currentLevel = new Level(scene, events, currentLevelNumber, "Level" + currentLevelNumber)
  currentLevel.setParent(scene)
}

function doTransitionLevel(lev:number)
{
    transitionScene.setParent(scene)
    engine.addEntity(transitionScene)
    engine.removeEntity(currentLevel)
    transitionScene.start()
}


//add scene to the engine
engine.addEntity(scene)