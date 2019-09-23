import utils from "../../node_modules/decentraland-ecs-utils/index"
import { Wall } from "./wall"
import * as Globals from "../functions"
import * as Walls1 from "./walls1"
import * as Walls2 from "./walls2"
import { ShowWallSystem } from "../systems/wallshow"
import { WallBumpSystem } from "../systems/wallBumpSystem"
import { _colorNames } from "../gameSettings"


export class Level extends Entity
{
    camera = Camera.instance
    visibleWallComponent:GLTFShape
    wallColliderComponent:GLTFShape
    transitionScene:Entity
    levelWalls:Wall[]
    blueWalls:Entity
    greenWalls:Entity
    yellowWalls:Entity
    sceneLevel:number
    events:EventManager
    activeLens:string
    pickClip = Globals.pickClip
    pickSource = new AudioSource(this.pickClip)
    showWallSystem:WallBumpSystem

    constructor(scene:Entity, events:EventManager, sceneLevel:number, name:string)
    {
        super(name)
        this.setParent(scene)
        this.sceneLevel = sceneLevel
        this.events = events
        this.addComponent(new Transform())

        ///pickup sound
        this.pickSource.volume = 1
        this.pickSource.playing = false

        this.levelWalls = [new Wall(this,null,null,null,null,null,"")]

        switch(sceneLevel)
        {
            case 1:
                log("creating level 1")
                this.createLevel1()
                break;
            
            case 2:
                log('creating level 2')
                this.createLevel2()
                break;
        }

      //TODO
      //need to show active lens from server
      this.showWallSystem = new WallBumpSystem(this)
      engine.addSystem(this.showWallSystem)
    }

    createLevel1()
    { 
        Walls1.createLevel(this)
    }

    createLevel2()
    {

      //create level 2 floor
      const floorBaseGrass_01 = new Entity()
      floorBaseGrass_01.setParent(this)
      const gltfShape = new GLTFShape('models/FloorBaseGrass_01.glb')
      floorBaseGrass_01.addComponentOrReplace(gltfShape)
      const transform_2 = new Transform({
        position: new Vector3(8, 0, 8),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      floorBaseGrass_01.addComponentOrReplace(transform_2)
      floorBaseGrass_01.setParent(this)

      const floorBaseGrass_01_2 = new Entity()
      floorBaseGrass_01_2.setParent(this)
      floorBaseGrass_01_2.addComponentOrReplace(gltfShape)
      const transform_3 = new Transform({
        position: new Vector3(24, 0, 8),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      floorBaseGrass_01_2.addComponentOrReplace(transform_3)
      floorBaseGrass_01_2.setParent(this)

      const floorBaseGrass_01_3 = new Entity()
      floorBaseGrass_01_3.setParent(this)
      floorBaseGrass_01_3.addComponentOrReplace(gltfShape)
      const transform_4 = new Transform({
        position: new Vector3(8, 0, 24),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      floorBaseGrass_01_3.addComponentOrReplace(transform_4)
      floorBaseGrass_01_3.setParent(this)

      const floorBaseGrass_01_4 = new Entity()
      floorBaseGrass_01_4.setParent(this)
      floorBaseGrass_01_4.addComponentOrReplace(gltfShape)
      const transform_5 = new Transform({
        position: new Vector3(24, 0, 24),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      })
      floorBaseGrass_01_4.addComponentOrReplace(transform_5)
      floorBaseGrass_01_4.setParent(this)

      //// add the wall holding entities for all the types of lenses in this level
      this.blueWalls = new Entity()
      this.blueWalls.setParent(this)
      this.blueWalls.addComponent(new Transform({
          scale: Globals.TESTMODE ? Vector3.One() : Vector3.Zero()
      }))

      this.yellowWalls = new Entity()
      this.yellowWalls.setParent(this)
      this.yellowWalls.addComponent(new Transform({
          scale: Globals.TESTMODE ? Vector3.One() : Vector3.Zero()
      }))

      this.greenWalls = new Entity()
      this.greenWalls.setParent(this)
      this.greenWalls.addComponent(new Transform({
          scale: Globals.TESTMODE ? Vector3.One() : Vector3.Zero()
      }))


      //////////////create all the walls for this level
      Walls2.createLevel(this)
    }

    getWalls()
    {
        return this.levelWalls
    }

    getWallCount()
    {
        return this.levelWalls.length
    }

    showWallsForLens(lens:string)
    {
        switch(lens)
        {
            case _colorNames.GREEN:
                log("need to show all the green walls in this level")
                this.greenWalls.addComponentOrReplace(new Transform({scale: Vector3.One()}))
                this.blueWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                this.yellowWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                break;

            case _colorNames.BLUE:
                    log("need to show all the blue walls in this level")
                    this.greenWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.blueWalls.addComponentOrReplace(new Transform({scale: Vector3.One()}))
                    this.yellowWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                break;

            case _colorNames.YELLOW:
                    log("need to show all the yellow walls in this level")
                    this.greenWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.blueWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.yellowWalls.addComponentOrReplace(new Transform({scale: Vector3.One()}))
                break;              

            case _colorNames.NONE:
                    log("no lens on, don't show any walls")
                    this.greenWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.blueWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.yellowWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                break;
        }
    }

}