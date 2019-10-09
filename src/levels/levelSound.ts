import { Level } from "../levels/level"
import * as Globals from "../functions"

// check if the avatar is close enough to a wall to simulate a bump effect
export class LevelSound extends Entity{
  
  camera = Camera.instance
  level:Level
  levelSource:AudioSource

  constructor(level:Level)
  {
      super()
    this.level = level
    this.addComponentOrReplace(new Transform({
        position: new Vector3(16,2,16),
        scale: Vector3.One()
    }))
    this.setParent(level)
    var levelAudio = new AudioClip('sounds/level'+ level.sceneLevel+'.mp3')
    this.levelSource = new AudioSource(levelAudio)
        this.addComponentOrReplace(this.levelSource)
        this.levelSource.volume = 1
        this.levelSource.loop = true
        this.levelSource.playing = true
  }

  stopPlaying()
  {
    this.levelSource.playing = false
  }
}