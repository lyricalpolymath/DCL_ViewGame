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
        log("creating level for " + sceneLevel)
        switch(sceneLevel)
        {
            case 1:
                this.createLevel1()
                break;
            
            case 2:
                this.createLevel2()
                break;

            case 3:
                this.createLevel3()
                break;

            case 4:
                this.createLevel4()
                break;

            case 5:
                this.createLevel5()
                break;

            case 6:
                this.createLevel6()
                break;
        
            case 7:
                this.createLevel7()
                break;

            case 8:
                this.createLevel8()
                break;
        
        }

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
    }

    createLevel3()
    {
      Walls3.createScene(this)
      Walls3.createWalls(this)
    }

    createLevel4()
    {
        Walls4.createScene(this)
        Walls4.createWalls(this)
    }


    createLevel5()
    {
        Walls5.createScene(this)
        Walls5.createWalls(this)
    }
    createLevel6()
    {
        Walls6.createScene(this)
        Walls6.createWalls(this)
    }

    createLevel7()
    {
        Walls7.createScene(this)
        Walls7.createWalls(this)
    }

    createLevel8()
    {
        Walls8.createScene(this)
        Walls8.createWalls(this)
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
        if(Globals.TESTMODE)
        {
            lens = _colorNames.ALL
        }
        switch(lens)
        {
            case _colorNames.GREEN:
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
                    this.blueWalls.addComponentOrReplace(new Transform({scale: Vector3.One()}))
                    this.greenWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.blackWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.yellowWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.redWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.whiteWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.turquoiseWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.purpleWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                break;

            case _colorNames.YELLOW:
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
                    this.greenWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.blueWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.yellowWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.redWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.blackWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.whiteWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.turquoiseWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                    this.purpleWalls.addComponentOrReplace(new Transform({scale: Vector3.Zero()}))
                break;
            
            case _colorNames.ALL:
                        this.greenWalls.addComponentOrReplace(new Transform({scale: Vector3.One()}))
                        this.blueWalls.addComponentOrReplace(new Transform({scale: Vector3.One()}))
                        this.yellowWalls.addComponentOrReplace(new Transform({scale: Vector3.One()}))
                        this.redWalls.addComponentOrReplace(new Transform({scale: Vector3.One()}))
                        this.blackWalls.addComponentOrReplace(new Transform({scale: Vector3.One()}))
                        this.whiteWalls.addComponentOrReplace(new Transform({scale: Vector3.One()}))
                        this.turquoiseWalls.addComponentOrReplace(new Transform({scale: Vector3.One()}))
                        this.purpleWalls.addComponentOrReplace(new Transform({scale: Vector3.One()}))
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