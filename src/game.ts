import utils from "../node_modules/decentraland-ecs-utils/index"
import { Level } from "./levels/level"
import {LevelCompleted, TransitionLevelComplete, LevelLoadingComplete, DoTransition,InventoryItemSelectedEvent, BumpedWallEvent} from "./functions"
import { getUserAccount } from '@decentraland/EthereumController'
import * as Globals from "./functions"
import { LoadingScene } from "./levels/loadingScene"
import { LevelPlayer } from "./userData"
import { LeaderBoard } from "./leaderboard"
import { SceneRefreshSystem } from "./systems/sceneRefreshSystem"
import { WallBumpSystem } from "./systems/wallBumpSystem"


const events = new EventManager()

var player = new LevelPlayer(events)
var leaderboard = new LeaderBoard()
var sceneRefreshSystem = new SceneRefreshSystem(events)
var showWallSystem:WallBumpSystem

startGame()

///set up the initial scene
const scene = new Entity("leveler-game")
const scenetransform = new Transform({ position: new Vector3(0, 0, 0), rotation: new Quaternion(0, 0, 0,1), scale: new Vector3(1, 1, 1) })
scene.addComponent(scenetransform)


var currentLevel:Level = new Level(null,null,null,null)
var currentLevelNumber:number

///have a trigger shape for the avatar
utils.TriggerSystem.instance.setCameraTriggerShape(new utils.TriggerBoxShape(new Vector3(0.5, 1.8, 0.5), new Vector3(0, -0.91, 0)))
const loadingScene = new LoadingScene(events)
loadingScene.show()

events.addListener(LevelCompleted,null,({l})=>{
    ///////need to show a congrats message and explain what they just picked up
    switch(l)
    {
      case 1:
        player.inventoryContainer.visible = true
        player.addInventory(Globals._colorNames.BLUE)
        player.pushData()
        itemSelected(Globals._colorNames.BLUE)
        break;

      case 2:
        player.addInventory(Globals._colorNames.GREEN)
        player.pushData()
        itemSelected(Globals._colorNames.GREEN)
        break;

      case 3:
        player.addInventory(Globals._colorNames.RED)
        player.pushData()
        itemSelected(Globals._colorNames.RED)
        break;

      case 4:
        player.addInventory(Globals._inventoryItems.TELESCOPE)
        player.pushData()
        break;

      case 5:
        player.addInventory(Globals._inventoryItems.MICROSCOPE)
        player.pushData()
        break;

      case 6:
        player.addInventory(Globals._inventoryItems.BINOCULARS)
        player.pushData()
        break;

      case 7:
        player.addInventory(Globals._inventoryItems.MAGNIFIER)
        player.pushData()
        break;

      case 8:
        player.addInventory(Globals._inventoryItems.GLASSES)
        player.pushData()
        break;
    }
})

events.addListener(DoTransition,null,()=>{
  player.playerData.currentLevel++
  player.pushData()
  doTransitionLevel()
})

events.addListener(BumpedWallEvent,null,()=>{
  player.updateBump()
  player.pushData()
})

events.addListener(InventoryItemSelectedEvent,null,({name})=>{
  itemSelected(name)
})

events.addListener(LevelLoadingComplete,null,()=>{
  engine.removeEntity(loadingScene)

})

events.addListener(TransitionLevelComplete,null,()=>{
    loadingScene.show()
        currentLevelNumber++
        createLevel(currentLevelNumber)

})

function itemSelected(color:string)
{
  log("selected item " + color)
  if(color == Globals._inventoryItems.LEADERBOARD)
  {
    leaderboard.toggle(player.playerData)
  }
  else{

  }
  player.setVisibleInventory(color)
  player.handleInventory(currentLevel)
}

function getServerInfo(address:string,ethSuccess:boolean)
{
  if(ethSuccess)
  {
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
            log("player has not played. add them to db")
            player.setBackup(true)
            player.pushData()
            createLevel(1)
          }
          else
          {
            log("player has played. download info")
            log(data.Item.inventory.playerData.currentLevel)
            player.setBackup(true)
            createLevel(data.Item.inventory.playerData.currentLevel)
            player.updateLocal(data)
            player.handleInventory(currentLevel)
          }
        })
      } catch(e) {
      }
    })
  }
}

function startGame()
{
  log("here")
executeTask(async () => {
  try {
    const address = await getUserAccount()
    log(address)
    player.setAddress(address)
    getServerInfo(address, true)
  } catch (error) {
    log(error)
    player.setBackup(false)
    createLevel(1)
  }
})
}

function createLevel(level:number)
{
  log("creating level " + level)
  currentLevelNumber = level
  engine.removeEntity(currentLevel)

  currentLevel = new Level(scene, events, currentLevelNumber, "Level" + currentLevelNumber)
  engine.addEntity(currentLevel)
  currentLevel.setParent(scene)

  showWallSystem = new WallBumpSystem(currentLevel)
  engine.addSystem(showWallSystem)

  scene.getComponent(Transform).scale = Vector3.One()
  player.handleInventory(currentLevel)
}

function doTransitionLevel()
{
  engine.addSystem(sceneRefreshSystem)
  engine.removeSystem(showWallSystem)

    currentLevel.soundFollowSystem.stopPlaying()
    
    scene.getComponent(Transform).scale = Vector3.Zero()
    
}

engine.addEntity(scene)