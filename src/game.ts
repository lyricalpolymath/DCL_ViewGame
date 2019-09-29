import utils from "../node_modules/decentraland-ecs-utils/index"
import { Level } from "./levels/level"
import { TransitionScene } from "./levels/transitionScene"
import {LevelCompleted, TransitionLevelComplete} from "./functions"
import { getUserAccount } from '@decentraland/EthereumController'
import { GlassFilter } from "gameObjects/GlassFilter"
import { State,StateUpdate } from "gameState"
import { Settings,_colorNames } from "gameSettings"
import { InventoryUI } from "gameObjects/Inventory"
import * as Globals from "./functions"



export var user_address:string = "NONE"
export var user_level = 1


//try to get user ethereum address
log("executeTask 1")
executeTask(async () => {
  log("executeTask1")
  try {
    log("executeTask: calling getUseAccount()" ); 
    const address = await getUserAccount()
    log("Found user address: " + address)
    user_address = address

    //getServerInfo(address, true)    //LAUSTRAM's Version
    getServerInfo_BB(address, true)   //BB Version
  
  } catch (error) {
    log("heres the eror " + error.toString())
    
    getServerInfo_BB("", false)   //BB-Version
    //getServerInfo("", false)    /// LAUSTRAM's Version
    //getServerInfo()
  }
})

import { UserData /*, publicKeyRequest*/ } from "utilities/UserData"


// Retrieve User Data
//UserData.getUserAddress();  //not working
//UserData.getInventory();


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
//const transitionScene = new TransitionScene(transitionBox,events)
//transitionScene.setParent(scene)


//getServerInfo("")



// BB Version
function getServerInfo_BB(address:string,ethSuccess:boolean)//:Entity
{
  log("GET SERVER INFO ethSuccess: " + ethSuccess)
  if(ethSuccess)
  {
    log("GET SERVER INFO - found a user")
    address = address.toLowerCase();                 // correct the address case to make sure of consinstency
    let apiUrl = Globals.awsGet + "?user="+ address  //use address not user_address so that the function works with any address passed as parm of the function 
    log("GET SERVER INFO - address: " + address)
    log("GET SERVER INFO - going to call url: " + apiUrl )
    
    executeTask(async () => {
      try {
        //let response = await fetch(Globals.awsGet + "?user="+ user_address, {
        let response = await fetch(apiUrl, {  
          headers: { "Content-Type": "application/json" },
          method: "GET"
        })
        .then(response => response.json())
        .then(data => {
          log("GET SERVER INFO - data:", data)
          if(!Object.keys(data).length)
          {
            //TODO implement the POST to the server
            log("GET SERVER INFO - user hasn't played. need to store information on server")
            currentLevelNumber = 1
            user_level = 1
            updateLevelUI(currentLevelNumber)
            currentLevel = new Level(scene, events, currentLevelNumber, "Level" + currentLevelNumber)
            currentLevel.setParent(scene)
          }
          else
          {
            log("GET SERVER INFO - user found. retrieving information data: ", data)
            log(data.Item.level)
            //UserData.parseServerData(data)

            user_level = data.Item.level
  
            currentLevelNumber = data.Item.level
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




//LAUSTRAM's version 
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
            user_level = 1
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
  
            currentLevelNumber = data.Item.level
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
    if(l == 1)
    {
        log("level " + l + " complete. found blue lens. add it to the inventory.")
    }
    doTransitionLevel(l)
})


//listen for state update when a lens is selected and then show all the walls visible within the level that correspond to the active lens color
State.events.addListener(StateUpdate,scene,()=>{
  log("changed lens, so we need to change which walls are visible")
  currentLevel.showWallsForLens(State.getActiveColor())
})


//listen for when the transition scene is complete
events.addListener(TransitionLevelComplete,null,()=>{
    currentLevelNumber++
    currentLevel = new Level(scene, events, currentLevelNumber, "Level" + currentLevelNumber)
    currentLevel.setParent(scene)
    //engine.removeEntity(transitionScene)
    updateLevelUI(currentLevelNumber)
})

function updateLevelUI(levelui:number)
{
    log('updating level text ' + levelui)
    levelText.value = "LEVEL " + levelui
}

function doTransitionLevel(lev:number)
{
   // transitionScene.setParent(scene)
    engine.removeEntity(currentLevel)
    //transitionScene.start()
}


//add scene to the engine
engine.addEntity(scene)