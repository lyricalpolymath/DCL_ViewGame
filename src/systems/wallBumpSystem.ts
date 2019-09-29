import { Level } from "../levels/level"
import * as Globals from "../functions"
import { WallAnimation } from "../levels/wall_animation"


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
          this.level.wallAnimationEntity.getComponent(Transform).position = transform.position
          this.level.wallAnimationEntity.getComponent(Transform).rotation = transform.rotation

          let dist = Globals.distance(transform.position, this.camera.position)
          if ( dist < 2) {
            log("avatar bumped wall, need to animate")
<<<<<<< Updated upstream
<<<<<<< Updated upstream
            wall.animate()
=======
            //wall.animate()

            wall.bumped = true
            //wall.setParent(null)
            wall.bumpSource.playOnce()
            
            const sequence = new utils.ActionsSequenceSystem.SequenceBuilder()
              .while(() => Globals.bumpCount < 14 && wall.bumped)
                .then(new Globals.BumpAction(this.level, wall))
                .then(new Globals.DelayAction(wall))
                .then(new Globals.BumpAction(this.level, wall))
                .then(new Globals.DelayAction(wall))
                .then(new Globals.BumpAction(this.level, wall))
                .then(new Globals.DelayAction(wall))
                .then(new Globals.BumpAction(this.level, wall))
                .then(new Globals.DelayAction(wall))
                .then(new Globals.BumpAction(this.level, wall))
                .then(new Globals.DelayAction(wall))
                .then(new Globals.BumpAction(this.level, wall))
                .then(new Globals.DelayAction(wall))
                .then(new Globals.BumpAction(this.level, wall))
                .then(new Globals.DelayAction(wall))
                .then(new Globals.BumpAction(this.level, wall))
                .then(new Globals.DelayAction(wall))
                .then(new Globals.BumpAction(this.level, wall))
                .then(new Globals.DelayAction(wall))
                .then(new Globals.BumpAction(this.level, wall))
                .then(new Globals.DelayAction(wall))
              .endWhile()
            engine.addSystem(new utils.ActionsSequenceSystem(sequence))
=======

            wall.bumped = true
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
>>>>>>> Stashed changes
            
>>>>>>> Stashed changes
          }
        }

      }
    }
  }
}