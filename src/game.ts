import utils from "../node_modules/decentraland-ecs-utils/index"
import { Level } from "./levels/level"
import { TransitionScene } from "./levels/transitionScene"
import {LevelCompleted, TransitionLevelComplete, transitionBox} from "./functions"

import { GlassFilter } from "gameObjects/GlassFilter"
import { State,StateUpdate } from "gameState"
import { Settings,_colorNames } from "gameSettings"
import { InventoryUI } from "gameObjects/Inventory"


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
const transitionScene = new TransitionScene(transitionBox,events)
//transitionScene.setParent(scene)


getServerInfo()

//future functionality to grab current scene from server for specific avatar
function getServerInfo()//:Entity
{
  log("getting current level from server")
   currentLevelNumber = 2
   currentLevel = new Level(scene, events, currentLevelNumber, "Level" + currentLevelNumber)
   currentLevel.setParent(scene)
   updateLevelUI(currentLevelNumber)
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





//////////////////////////
//listen for state update when a lens is selected and then show all the walls visible within the level that correspond to the active lens color


State.events.addListener(StateUpdate,null,()=>{
  log("changed lens, so we need to change which walls are visible")
  currentLevel.showWallsForLens(State.getActiveColor())
})



//////////////////////////////////////////




//listen for when the transition scene is complete
events.addListener(TransitionLevelComplete,null,()=>{
    currentLevelNumber++
    currentLevel = new Level(scene, events, currentLevelNumber, "Level" + currentLevelNumber)
    currentLevel.setParent(scene)
    engine.removeEntity(transitionScene)
    updateLevelUI(currentLevelNumber)
})

function updateLevelUI(levelui:number)
{
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



/*testing a second UICanvas
let canvas2 = new UICanvas()
let r2 = new UIContainerRect(this.filterCanvas)
rect.width = '20%'
rect.height = '100%'
rect.color =  Color4.Black()
rect.opacity = 0.3
//*/


/* UserData doesn't work
import { getUserData } from "@decentraland/Identity"

let data:any;
const userData = executeTask(async () => {
  data = await getUserData()
  log(data.displayName)
  return data.displayName
})

class userDataSystem implements ISystem{
  update (dt:number) {
    log("userDataSystem userData: ", userData)
  }
}
engine.addSystem(new userDataSystem())
*/










/* Default scene 
/// --- Set up a system ---

class RotatorSystem {
  // this group will contain every entity that has a Transform component
  group = engine.getComponentGroup(Transform)

  update(dt: number) {
    // iterate over the entities of the group
    for (let entity of this.group.entities) {
      // get the Transform component of the entity
      const transform = entity.getComponent(Transform)

      // mutate the rotation
      transform.rotate(Vector3.Up(), dt * 10)
    }
  }
}

// Add a new instance of the system to the engine
engine.addSystem(new RotatorSystem())

/// --- Spawner function ---

function spawnCube(x: number, y: number, z: number) {
  // create the entity
  const cube = new Entity()

  // add a transform to the entity
  cube.addComponent(new Transform({ position: new Vector3(x, y, z) }))

  // add a shape to the entity
  cube.addComponent(new BoxShape())

  // add the entity to the engine
  engine.addEntity(cube)

  return cube
}

/// --- Spawn a cube ---

const cube = spawnCube(8, 1, 8)

cube.addComponent(
  new OnClick(() => {
    cube.getComponent(Transform).scale.z *= 1.1
    cube.getComponent(Transform).scale.x *= 0.9

    spawnCube(Math.random() * 8 + 1, Math.random() * 8, Math.random() * 8 + 1)
  })
)

//*/
