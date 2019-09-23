import { Level } from "../levels/level"
import utils from "../../node_modules/decentraland-ecs-utils/index"
import * as Globals from "../functions"


// check if the avatar is close enough to a wall to simulate a bump effect
export class WallBumpSystem {
  
  camera = Camera.instance
  level:Level

  constructor(level:Level)
  {
    this.level = level
  }
  update() {
    if(this.level.levelWalls.length > 1)
    {
      for(var i = 1; i <= this.level.levelWalls.length-1; i++)
      {
        //log(i)
        let wall = this.level.levelWalls[i]
        if(!wall.bumped)
        {
          let transform = wall.wallCollider.getComponent(Transform)
          let dist = Globals.distance(transform.position, this.camera.position)
          if ( dist < 2) {
            log("avatar bumped wall, need to animate")
            //wall.animate()

            wall.bumped = true
            wall.setParent(null)
            wall.bumpSource.playOnce()

            /*

            for(var i = 0; i < 100; i++)
            {
              var num = Math.floor(Math.random() * 3)
              switch(num)
              {
                case 1:
                  wall.addComponentOrReplace(Globals.yellowWall)
                  log("yellow")
                  break;
                
                case 2:
                  wall.addComponentOrReplace(Globals.blueWall)
                  log("blue")
                  break;

                case 0:
                  wall.addComponentOrReplace(Globals.greenWall)
                  log("green")
                  break;
              }
            }
            wall.setParent(wall.holdingEntity)
            wall.bumped = false/
            */
            
            const sequence = new utils.ActionsSequenceSystem.SequenceBuilder()
              .while(() => Globals.bumpCount < 14 && wall.bumped)
                .then(new Globals.BumpAction(wall))
                .then(new Globals.DelayAction(wall))
                .then(new Globals.BumpAction(wall))
                .then(new Globals.DelayAction(wall))
                .then(new Globals.BumpAction(wall))
                .then(new Globals.DelayAction(wall))
                .then(new Globals.BumpAction(wall))
                .then(new Globals.DelayAction(wall))
                .then(new Globals.BumpAction(wall))
                .then(new Globals.DelayAction(wall))
                .then(new Globals.BumpAction(wall))
                .then(new Globals.DelayAction(wall))
                .then(new Globals.BumpAction(wall))
                .then(new Globals.DelayAction(wall))
                .then(new Globals.BumpAction(wall))
                .then(new Globals.DelayAction(wall))
                .then(new Globals.BumpAction(wall))
                .then(new Globals.DelayAction(wall))
                .then(new Globals.BumpAction(wall))
                .then(new Globals.DelayAction(wall))
              .endWhile()
            engine.addSystem(new utils.ActionsSequenceSystem(sequence))
            
          }
        }

      }
    }
  }
}