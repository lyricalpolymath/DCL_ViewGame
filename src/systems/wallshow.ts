import { Level } from "../levels/level";
import * as Globals from "../functions"
import utils from "../../node_modules/decentraland-ecs-utils/index"


export class ShowWallSystem implements ISystem
{
    level:Level
    showColorGroups:ComponentGroup[] = [null]

    constructor()
    {
        //this.level = level
    }

    addColor(color:ComponentGroup)
    {
        this.showColorGroups.push(color)
    }
    update(dt)
    {
        //log("running show wall system")
        const wallGroup = engine.getComponentGroup(Globals.Show)

        if(wallGroup.hasEntity)
        {
            for(let wall of wallGroup.entities)
            {
                if(wall.getComponent(Transform).scale != Vector3.One())
                {
                    log("animating wall hit")
                    var parent = wall.getParent()
                    //wall.setParent(null)
                    wall.getComponent(Transform).scale = Vector3.One()
                    //wall.removeComponent(Globals.Bump)
                }

            }
        }

    }
}