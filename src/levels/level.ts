import utils from "../../node_modules/decentraland-ecs-utils/index"
import { Wall } from "./wall"
import * as Globals from "../functions"
import {_colorNames } from "../functions"
import * as Walls1 from "./walls1"
import * as Walls2 from "./walls2"
import * as Walls3 from "./walls3"
import * as Walls4 from "./walls4"
import * as Walls5 from "./walls5"
import * as Walls6 from "./walls6"
import * as Walls7 from "./walls7"
import * as Walls8 from "./walls8"
import { WallBumpSystem } from "../systems/wallBumpSystem"
import { WallAnimation } from "./wall_animation"
import { LevelSound } from "./levelSound"


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
    purpleWalls:Entity
    whiteWalls:Entity
    turquoiseWalls:Entity
    blackWalls:Entity
    redWalls:Entity
    sceneLevel:number
    events:EventManager
    activeLens:string
    pickClip = Globals.pickClip
    pickSource = new AudioSource(this.pickClip)
    levelAudio:AudioSource
    showWallSystem:WallBumpSystem
    soundFollowSystem:LevelSound
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

        this.createColorHoldingEntities()

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
                log('creating level 3')
                this.createLevel3()
                break;

            case 4:
                log('creating level 4')
                this.createLevel4()
                break;

            case 5:
                log('creating level 5')
                this.createLevel5()
                break;

            case 6:
                log('creating level 6')
                this.createLevel6()
                break;
        
            case 7:
                log('creating level 7')
                this.createLevel7()
                break;

            case 8:
                log('creating level 8')
                this.createLevel8()
                break;
        
        }

      //TODO
      //need to show active lens from server
      this.showWallSystem = new WallBumpSystem(this)
      engine.addSystem(this.showWallSystem)

      this.soundFollowSystem = new LevelSound(this)
      engine.addEntity(this.soundFollowSystem)
    }

    createColorHoldingEntities()
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

      this.blackWalls = new Entity()
      this.blackWalls.setParent(this)
      this.blackWalls.addComponent(new Transform({
          scale: Globals.TESTMODE ? Vector3.One() : Vector3.Zero()
      }))

      this.whiteWalls = new Entity()
      this.whiteWalls.setParent(this)
      this.whiteWalls.addComponent(new Transform({
          scale: Globals.TESTMODE ? Vector3.One() : Vector3.Zero()
      }))

      this.purpleWalls = new Entity()
      this.purpleWalls.setParent(this)
      this.purpleWalls.addComponent(new Transform({
          scale: Globals.TESTMODE ? Vector3.One() : Vector3.Zero()
      }))

      this.turquoiseWalls = new Entity()
      this.turquoiseWalls.setParent(this)
      this.turquoiseWalls.addComponent(new Transform({
          scale: Globals.TESTMODE ? Vector3.One() : Vector3.Zero()
      }))
    }

    createLevel1()
    { 
        Walls1.createScene(this)
        Walls1.createWalls(this)
       
    }

    createLevel2()
    {
      Walls2.createScene(this)
      Walls2.createWalls(this)
      this.events.fireEvent(new Globals.LevelLoadingComplete())
    }

    createLevel3()
    {
      Walls3.createScene(this)
      Walls3.createWalls(this)
      this.events.fireEvent(new Globals.LevelLoadingComplete())
    }

    createLevel4()
    {
        Walls4.createScene(this)
        Walls4.createWalls(this)
        this.events.fireEvent(new Globals.LevelLoadingComplete())
    }


    createLevel5()
    {
        Walls5.createScene(this)
        Walls5.createWalls(this)
        this.events.fireEvent(new Globals.LevelLoadingComplete())
    }
    createLevel6()
    {
        Walls6.createScene(this)
        Walls6.createWalls(this)
        this.events.fireEvent(new Globals.LevelLoadingComplete())
    }

    createLevel7()
    {
        Walls7.createScene(this)
        Walls7.createWalls(this)
        this.events.fireEvent(new Globals.LevelLoadingComplete())
    }

    createLevel8()
    {
        Walls8.createScene(this)
        Walls8.createWalls(this)
        this.events.fireEvent(new Globals.LevelLoadingComplete())
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
                this.redWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                this.blackWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                this.whiteWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                this.turquoiseWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                this.purpleWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                break;

            case _colorNames.BLUE:
                    log("need to show all the blue walls in this level")
                    this.blueWalls.addComponentOrReplace(new Transform({scale: Vector3.One()}))
                    this.greenWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.yellowWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.redWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.blackWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                break;

            case _colorNames.YELLOW:
                    log("need to show all the yellow walls in this level")
                    this.yellowWalls.addComponentOrReplace(new Transform({scale: Vector3.One()}))
                    this.blueWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.greenWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.redWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.blackWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.whiteWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.turquoiseWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.purpleWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                break;            
                
            case _colorNames.RED:
                    log("need to show all the yellow walls in this level")
                    this.redWalls.addComponentOrReplace(new Transform({scale: Vector3.One()}))
                    this.greenWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.blueWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.yellowWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.blackWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.whiteWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.turquoiseWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.purpleWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                break;  
                
            case _colorNames.BLACK:
                    log("need to show all the yellow walls in this level")
                    this.blackWalls.addComponentOrReplace(new Transform({scale: Vector3.One()}))
                    this.greenWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.blueWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.yellowWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.redWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.whiteWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.turquoiseWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.purpleWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                break;    

            case _colorNames.WHITE:
                    log("need to show all the yellow walls in this level")
                    this.whiteWalls.addComponentOrReplace(new Transform({scale: Vector3.One()}))
                    this.greenWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.blueWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.yellowWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.redWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.blackWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.turquoiseWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.purpleWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                break; 
            
            case _colorNames.TURQUOISE:
                    log("need to show all the yellow walls in this level")
                    this.turquoiseWalls.addComponentOrReplace(new Transform({scale: Vector3.One()}))
                    this.greenWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.blueWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.yellowWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.redWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.blackWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.whiteWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.purpleWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                break; 

            case _colorNames.PURPLE:
                    log("need to show all the yellow walls in this level")
                    this.purpleWalls.addComponentOrReplace(new Transform({scale: Vector3.One()}))
                    this.greenWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.blueWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.yellowWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.redWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.blackWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.whiteWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.turquoiseWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                break; 

            case _colorNames.NONE:
                    log("no lens on, don't show any walls")
                    this.greenWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.blueWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.yellowWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.redWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.blackWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.whiteWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.turquoiseWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.purpleWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                break;
            
                default:
                        this.greenWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                        this.blueWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                        this.yellowWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                        this.redWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                        this.blackWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                        this.whiteWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                        this.turquoiseWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                        this.purpleWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                        break;
        }
    }

}