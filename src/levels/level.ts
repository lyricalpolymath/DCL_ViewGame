import utils from "../../node_modules/decentraland-ecs-utils/index"
import { Wall } from "./wall"
import * as Globals from "../functions"
import * as Walls1 from "./walls1"
<<<<<<< Updated upstream
import * as Walls2 from "./walls2"
import { ShowWallSystem } from "../systems/wallshow"
=======
import {level2Walls} from "./walls2"
>>>>>>> Stashed changes
import { WallBumpSystem } from "../systems/wallBumpSystem"
import { _colorNames } from "../gameSettings"
import { level2Content } from "./content/level2"
import { WallAnimation } from "./wall/wallanimation"


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
    wallAnimationEntity:WallAnimation

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

<<<<<<< Updated upstream
        this.levelWalls = [new Wall(this,null,null,null,null,null,"")]
=======
        this.levelWalls = [null]
>>>>>>> Stashed changes

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

      this.wallAnimationEntity = new WallAnimation()
      //this.wallAnimationEntity.setParent(this)
      this.showWallSystem = new WallBumpSystem(this)
      engine.addSystem(this.showWallSystem)
    }

    createLevel1()
    { 
        Walls1.createLevel(this)
    }

    createLevel2()
    {
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

<<<<<<< Updated upstream
=======
      this.redWalls = new Entity()
      this.redWalls.setParent(this)
      this.redWalls.addComponent(new Transform({
          scale: Globals.TESTMODE ? Vector3.One() : Vector3.Zero()
      }))

      //create level 2 content
      level2Content(this)
>>>>>>> Stashed changes

      //////////////create all the walls for this level
      level2Walls(this)

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