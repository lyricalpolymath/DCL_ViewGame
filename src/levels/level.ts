import utils from "../../node_modules/decentraland-ecs-utils/index"
import { Wall } from "./wall"
import * as Globals from "../functions"
import * as Walls1 from "./walls1"
import * as Walls2 from "./walls2"
import * as Walls3 from "./walls3"
import { WallBumpSystem } from "../systems/wallBumpSystem"
import { _colorNames } from "../gameSettings"
import { WallAnimation } from "./wall_animation"


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
    redWalls:Entity
    sceneLevel:number
    events:EventManager
    activeLens:string
    pickClip = Globals.pickClip
    pickSource = new AudioSource(this.pickClip)
    levelAudio:AudioSource
    showWallSystem:WallBumpSystem
    glitch1Ent:WallAnimation
    glitch2Ent:WallAnimation
    glitch3Ent:WallAnimation

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

        this.levelWalls = [null]

        this.glitch1Ent = new WallAnimation(this)
        this.glitch2Ent = new WallAnimation(this)
        this.glitch3Ent = new WallAnimation(this)

        
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

            case 3:
                log('creating leve 3')
                this.createLevel3()
                break;
        }

      //TODO
      //need to show active lens from server
      this.showWallSystem = new WallBumpSystem(this)
      engine.addSystem(this.showWallSystem)
    }

    createLevel1()
    { 
        var levelAudio = new AudioClip('sounds/Level1.mp3')
        this.levelAudio = new AudioSource(levelAudio)
        this.addComponentOrReplace(this.levelAudio)
        this.levelAudio.volume = 1
        this.levelAudio.loop = true
        this.levelAudio.playing = true
        Walls1.createScene(this)
        //Walls1.createWalls(this)
    }

    createLevel2()
    {

      //Walls2.createScene(this)
      //////////////create all the walls for this level
      Walls2.createWalls(this)
    }

    createLevel3()
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

      this.redWalls = new Entity()
      this.redWalls.setParent(this)
      this.redWalls.addComponent(new Transform({
          scale: Globals.TESTMODE ? Vector3.One() : Vector3.Zero()
      }))

      Walls3.createScene(this)
      Walls3.createWalls(this)
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