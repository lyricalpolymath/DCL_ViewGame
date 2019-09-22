
import { GlassFilter } from "gameObjects/GlassFilter"
import { State } from "gameState"
import { Settings } from "gameSettings"
import { InventoryUI } from "gameObjects/Inventory"
import { Wall } from "gameObjects/Wall"


// the filter that appears in front of the camera
var glass = new GlassFilter()

let inventory = new InventoryUI();

// create sample walls
// TODO change the names to an enum somewhere in settings
let wallScale = new Vector3(1, 3, 0.2)
let scn = Settings.colorNames; 
let w1 = new Wall( scn.RED,   { position: new Vector3(1.5, 0, 8), scale: wallScale } )
let w2 = new Wall( scn.GREEN, { position: new Vector3(2.5, 0, 8), scale: wallScale } )
let w3 = new Wall( scn.BLUE,  { position: new Vector3(3.5, 0, 8), scale: wallScale } )

let w4 = new Wall( scn.YELLOW,  { position: new Vector3(2, 0, 7), scale: wallScale } )
let w5 = new Wall( scn.PURPLE,  { position: new Vector3(3.5, 0, 7), scale: wallScale } )
let w6 = new Wall( scn.CYAN,    { position: new Vector3(5, 0, 7), scale: wallScale } )
let w7 = new Wall( scn.WHITE,   { position: new Vector3(3, 0, 6), scale: wallScale } )



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
