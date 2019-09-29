import utils from "../node_modules/decentraland-ecs-utils/index"
import { Level } from "./levels/level"
import { TransitionScene } from "./levels/transitionScene"
import {LevelCompleted, TransitionLevelComplete, LevelLoadingComplete, DoTransition} from "./functions"
import { getUserAccount } from '@decentraland/EthereumController'
import { GlassFilter } from "gameObjects/GlassFilter"
import { State,StateUpdate } from "gameState"
import { Settings,_colorNames } from "gameSettings"
import { InventoryUI } from "gameObjects/Inventory"
import * as Globals from "./functions"
import { LoadingScene } from "./levels/loadingScene"



export var user_address:string = "NONE"
export var user_level = 1

startGame()

function startGame()
{
//try to get user ethereum address
executeTask(async () => {
  try {
    const address = await getUserAccount()
    log(address)
    user_address = address
    getServerInfo(address, true)
  } catch (error) {
    log("heres the eror " + error.toString())
    getServerInfo("", false)
    //getServerInfo()
  }
})
}

// the filter that appears in front of the camera
var glass = new GlassFilter()
let inventory = new InventoryUI();

///have a trigger shape for the avatar
utils.TriggerSystem.instance.setCameraTriggerShape(new utils.TriggerBoxShape(new Vector3(0.5, 1.8, 0.5), new Vector3(0, -0.91, 0)))

///set up the initial scene
const scene = new Entity("leveler-game")
const scenetransform = new Transform({ position: new Vector3(0, 0, 0), rotation: new Quaternion(0, 0, 0,1), scale: new Vector3(1, 1, 1) })
scene.addComponent(scenetransform)

//create UI to display which level the player is on
const canvas = new UICanvas()
const levelText = new UIText(canvas)
levelText.value = 'LEVEL'
levelText.positionX = -200
levelText.positionY = -15
levelText.hAlign = 'right'
levelText.vAlign = 'top'
levelText.fontSize = 50

const events = new EventManager()

var currentLevel:Level
var currentLevelNumber:number
var activeLens:string = _colorNames.NONE
//var sceneLevels:Level[] = [new Level(scene, events, 0, "Level" + 0,["none"], activeLens)]

///create reusable components across levels
const transitionScene = new TransitionScene(events)
//transitionScene.setParent(scene)
const loadingScene = new LoadingScene(events)
//loadingScene.setParent(scene)

//getServerInfo("")

//future functionality to grab current scene from server for specific avatar
function getServerInfo(address:string,ethSuccess:boolean)//:Entity
{
  if(ethSuccess)
  {
    log("found a user")
    executeTask(async () => {
      try {
        let response = await fetch(Globals.awsGet + "?user="+ user_address, {
          headers: { "Content-Type": "application/json" },
          method: "GET"
        })
        .then(response => response.json())
        .then(data => {
          log(data)
          if(!Object.keys(data).length)
          {
            log("user hasn't played. need to store information on server")
            currentLevelNumber = 1
            user_level = currentLevelNumber
            updateLevelUI(currentLevelNumber)
            currentLevel = new Level(scene, events, currentLevelNumber, "Level" + currentLevelNumber)
            currentLevel.setParent(scene)
          }
          else
          {
            log("user found. retrieving information.")
            log(data)
            log(data.Item.level)
            user_level = data.Item.level
  
            currentLevelNumber = user_level
            updateLevelUI(currentLevelNumber)
            currentLevel = new Level(scene, events, currentLevelNumber, "Level" + currentLevelNumber)
            currentLevel.setParent(scene)
            
          }
        })
      } catch(e) {
        log("error is " + e)
      }
    })
  }
  else
  {
      log("got here")
      user_address = "NONE"
      user_level = 1
      currentLevelNumber = user_level
      updateLevelUI(currentLevelNumber)
      currentLevel = new Level(scene, events, currentLevelNumber, "Level" + currentLevelNumber)
      currentLevel.setParent(scene)
      
  }

}

events.addListener(LevelCompleted,null,({l})=>{
    log("user won the level " + l)

    ///////need to show a congrats message and explain what they just picked up
    switch(l)
    {
      case 1:
        log("level " + l + " complete. found blue lens. add it to the inventory.")
        State.updateGlassState(_colorNames.BLUE, true)
        break;

      case 2:
        log("level " + l + " complete. found blue lens. add it to the inventory.")
        State.updateGlassState(_colorNames.BLUE, false)
        State.updateGlassState(_colorNames.GREEN, true)
        break;
    }
})

events.addListener(DoTransition,null,({l})=>{
  log("transitioning from level " + l + " to level " + (l+1))
  doTransitionLevel(l)
})


//listen for state update when a lens is selected and then show all the walls visible within the level that correspond to the active lens color
State.events.addListener(StateUpdate,scene,()=>{
  log("changed lens, so we need to change which walls are visible")
  currentLevel.showWallsForLens(State.getActiveColor())
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

    currentLevelNumber++
    updateLevelUI(currentLevelNumber)
    currentLevel = new Level(scene, events, currentLevelNumber, "Level" + currentLevelNumber)
    currentLevel.setParent(scene)
    currentLevel.showWallsForLens(State.getActiveColor())
})

function updateLevelUI(levelui:number)
{
    log('updating level text ' + levelui)
    levelText.value = "LEVEL " + levelui
}

function doTransitionLevel(lev:number)
{
    transitionScene.setParent(scene)
    engine.removeEntity(currentLevel)
    transitionScene.start()
}


//add scene to the engine
engine.addEntity(scene)