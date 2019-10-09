import { Level } from "../levels/level"
import * as Globals from "../functions"

// check if the avatar is close enough to a wall to simulate a bump effect
export class WallBumpSystem {
  
  camera = Camera.instance
  level:Level
  events:EventManager

  constructor(level:Level)
  {
    this.level = level
    this.events = this.level.events
  }
  
  update() {
    if(this.level.levelWalls.length > 1)
    {
      for(var i = 1; i <= this.level.levelWalls.length-1; i++)
      {
        let wall = this.level.levelWalls[i]
        if(!wall.bumped)
        {
         
          let transform = wall.wallCollider.getComponent(Transform)

          let dist = Globals.distance(transform.position, this.camera.position)
          if ( dist < 1) {
            this.events.fireEvent(new Globals.BumpedWallEvent())
            wall.bumped = true
            wall.bumpSource.volume = .3
            wall.bumpSource.playOnce()

            if(!this.level.glitch1Ent.isAnimating)
            {
              this.level.glitch1Ent.getComponent(Transform).position = wall.getComponent(Transform).position
              this.level.glitch1Ent.getComponent(Transform).rotation = wall.getComponent(Transform).rotation
              this.level.glitch1Ent.animate(wall)
            }
            else if(!this.level.glitch2Ent.isAnimating)
            {
              this.level.glitch2Ent.getComponent(Transform).position = wall.getComponent(Transform).position
              this.level.glitch2Ent.getComponent(Transform).rotation = wall.getComponent(Transform).rotation
              this.level.glitch2Ent.animate(wall)
            }
            else if(!this.level.glitch3Ent.isAnimating)
            {
              this.level.glitch3Ent.getComponent(Transform).position = wall.getComponent(Transform).position
              this.level.glitch3Ent.getComponent(Transform).rotation = wall.getComponent(Transform).rotation
              this.level.glitch3Ent.animate(wall)
            }
          }
        }

      }
    }
  }
}