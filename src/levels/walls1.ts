import utils from "../../node_modules/decentraland-ecs-utils/index"
import { Wall } from "./wall"
import * as Globals from "../functions"
import { Level } from "./level"

    export function createLevel(level:Level)
    {
        const camera = Camera.instance
        /*
        level.levelWalls = [new Wall(level,null,null,null,null,null,Globals.visibleWall,Globals.wallCollider,[""],1)]

        ///create walls outside level
        level.levelWallCount++
        level.levelWalls.push(new Wall(level,level.sceneLevel,null,"Wall " + level.levelWallCount, new Vector3(2,1,4), Quaternion.Euler(0,0,0), Globals.visibleWall, Globals.wallCollider,["blue"],1))
        level.levelWalls[level.levelWallCount].addTrigger(Globals.XFACINGSCALE, Globals.XFACINGPOSITION)

        level.levelWallsUUID.push(level.levelWalls[level.levelWallCount].uuid)

        log("this level in the scene is " + this.sceneLevel)


        */

       level.levelWalls = [new Wall(level,null,null,null,null,null,Globals.visibleWall,Globals.wallCollider,[""],1)]
       var walls1:Vector3[] = [new Vector3(-5.11, 1.5, -4.01), new Vector3(2.77, 1.5, -2.04), new Vector3(2.77, 1.5, -0.06), new Vector3(2.77, 1.5, 1.93), new Vector3(1.78, 1.5, -5.06), new Vector3(-4.14, 1.5, -5.03), new Vector3(-5.90, 1.5, 11.04), new Vector3(-7.87, 1.5, 11.04), new Vector3(-9.85, 1.5, 11.04), new Vector3(-11.84, 1.5, 11.04), new Vector3(-12.87, 1.5, 10.07), new Vector3(-5.11, 1.5, -2.04), new Vector3(-12.87, 1.5, 8.09), new Vector3(-12.87, 1.5, 6.12), new Vector3(-12.87, 1.5, 4.13), new Vector3(-12.87, 1.5, 2.16), new Vector3(-12.87, 1.5, 0.16), new Vector3(-12.87, 1.5, -1.82), new Vector3(-12.87, 1.5, -3.81), new Vector3(-12.87, 1.5, -5.78), new Vector3(-12.87, 1.5, -7.75), new Vector3(-12.87, 1.5, -9.75), new Vector3(-5.11, 1.5, -0.06), new Vector3(-12.87, 1.5, -11.74), new Vector3(-11.85, 1.5, -12.71), new Vector3(-9.88, 1.5, -12.71), new Vector3(-7.91, 1.5, -12.71), new Vector3(-5.92, 1.5, -12.71), new Vector3(-3.94, 1.5, -12.71), new Vector3(-1.97, 1.5, -12.71), new Vector3(0, 1.5, -12.71), new Vector3(1.2, 1.5, -12.71), new Vector3(3.99, 1.5, -12.71), new Vector3(-5.11, 1.5, 1.93), new Vector3(5.97, 1.5, -12.71), new Vector3(7.95, 1.5, -12.71), new Vector3(9.93, 1.5, -12.71), new Vector3(10.97, 1.5, -11.76), new Vector3(10.97, 1.5, -9.78), new Vector3(10.97, 1.5, -7.80), new Vector3(10.97, 1.5, -5.81), new Vector3(10.97, 1.5, -3.82), new Vector3(10.97, 1.5, -1.91), new Vector3(10.97, 1.5, 0.06), new Vector3(1.80, 1.5, 2.97), new Vector3(10.97, 1.5, 2.03), new Vector3(10.97, 1.5, 3.99), new Vector3(10.97, 1.5, 5.98), new Vector3(10.97, 1.5, 7.97), new Vector3(10.97, 1.5, 9.97), new Vector3(10, 1.5, 10.99), new Vector3(8.03, 1.5, 10.99), new Vector3(6.05, 1.5, 10.99), new Vector3(4.07, 1.5, 10.99), new Vector3(2.07, 1.5, 10.99), new Vector3(-0.18, 1.5, 2.97), new Vector3(-0.2, 1.5, -5.06), new Vector3(-3.9, 1.5, 11.04), new Vector3(-2.15, 1.5, 2.97), new Vector3(-4.14, 1.5, 2.97), new Vector3(2.77, 1.5, -4.01)]
       log(walls1)

       for(var i = 0; i < walls1.length; i++)
       {
           level.levelWallCount++
           level.levelWalls.push(new Wall(level,level.sceneLevel,null,"Wall " + level.levelWallCount, walls1[i], Quaternion.Euler(0,0,0), Globals.visibleWall, Globals.wallCollider,["blue"],1))
           level.levelWalls[level.levelWallCount].addTrigger(Globals.XFACINGSCALE, Globals.XFACINGPOSITION)

           level.levelWallsUUID.push(level.levelWalls[level.levelWallCount].uuid)
       }
       // testLevel(level)
    }

    function testLevel(level:Level)
    {

        var walls1:Vector3[] = [new Vector3(-5.11, 1.5, -4.01), new Vector3(2.77, 1.5, -2.04), new Vector3(2.77, 1.5, -0.06), new Vector3(2.77, 1.5, 1.93), new Vector3(1.78, 1.5, -5.06), new Vector3(-4.14, 1.5, -5.03), new Vector3(-5.90, 1.5, 11.04), new Vector3(-7.87, 1.5, 11.04), new Vector3(-9.85, 1.5, 11.04), new Vector3(-11.84, 1.5, 11.04), new Vector3(-12.87, 1.5, 10.07), new Vector3(-5.11, 1.5, -2.04), new Vector3(-12.87, 1.5, 8.09), new Vector3(-12.87, 1.5, 6.12), new Vector3(-12.87, 1.5, 4.13), new Vector3(-12.87, 1.5, 2.16), new Vector3(-12.87, 1.5, 0.16), new Vector3(-12.87, 1.5, -1.82), new Vector3(-12.87, 1.5, -3.81), new Vector3(-12.87, 1.5, -5.78), new Vector3(-12.87, 1.5, -7.75), new Vector3(-12.87, 1.5, -9.75), new Vector3(-5.11, 1.5, -0.06), new Vector3(-12.87, 1.5, -11.74), new Vector3(-11.85, 1.5, -12.71), new Vector3(-9.88, 1.5, -12.71), new Vector3(-7.91, 1.5, -12.71), new Vector3(-5.92, 1.5, -12.71), new Vector3(-3.94, 1.5, -12.71), new Vector3(-1.97, 1.5, -12.71), new Vector3(0, 1.5, -12.71), new Vector3(1.2, 1.5, -12.71), new Vector3(3.99, 1.5, -12.71), new Vector3(-5.11, 1.5, 1.93), new Vector3(5.97, 1.5, -12.71), new Vector3(7.95, 1.5, -12.71), new Vector3(9.93, 1.5, -12.71), new Vector3(10.97, 1.5, -11.76), new Vector3(10.97, 1.5, -9.78), new Vector3(10.97, 1.5, -7.80), new Vector3(10.97, 1.5, -5.81), new Vector3(10.97, 1.5, -3.82), new Vector3(10.97, 1.5, -1.91), new Vector3(10.97, 1.5, 0.06), new Vector3(1.80, 1.5, 2.97), new Vector3(10.97, 1.5, 2.03), new Vector3(10.97, 1.5, 3.99), new Vector3(10.97, 1.5, 5.98), new Vector3(10.97, 1.5, 7.97), new Vector3(10.97, 1.5, 9.97), new Vector3(10, 1.5, 10.99), new Vector3(8.03, 1.5, 10.99), new Vector3(6.05, 1.5, 10.99), new Vector3(4.07, 1.5, 10.99), new Vector3(2.07, 1.5, 10.99), new Vector3(-0.18, 1.5, 2.97), new Vector3(-0.2, 1.5, -5.06), new Vector3(-3.9, 1.5, 11.04), new Vector3(-2.15, 1.5, 2.97), new Vector3(-4.14, 1.5, 2.97), new Vector3(2.77, 1.5, -4.01)]
        log(walls1)

        for(var i = 0; i < walls1.length; i++)
        {
            level.levelWallCount++
            level.levelWalls.push(new Wall(level,level.sceneLevel,null,"Wall " + level.levelWallCount, walls1[i], Quaternion.Euler(0,0,0), Globals.visibleWall, Globals.wallCollider,["blue"],1))
            level.levelWalls[level.levelWallCount].addTrigger(Globals.XFACINGSCALE, Globals.XFACINGPOSITION)

            level.levelWallsUUID.push(level.levelWalls[level.levelWallCount].uuid)
        }

    }