import { Carryable } from '../utilities/carryable';

const fname = "GlassFilterSystem."


// NOT IN USE
// attempt at a carryable object variant

export class GlassFilterSystem implements ISystem {

    //private carryables: ComponentGroup = engine.getComponentGroup(Carryable, Transform);
    private filter: Entity
    private filterT: Transform
    private carryable: Carryable

    constructor(_filter:Entity) {
        //debugger
        this.filter = _filter
        this.carryable = this.filter.getComponent(Carryable)
        log (fname+"constructor this.filter: ", this.filter)
        log (fname+"constructor this.carryable: ", this.carryable)

        this.filterT = _filter.getComponent(Transform)
        log (fname+"constructor this.filterT: ", this.filterT);


    }

    //The ComponentGroup of all Entities that have both Carryable and Transform Components.
    private carryables: ComponentGroup = engine.getComponentGroup(Carryable, Transform);
    
    public update(dt: number) {
    
        for (let entity of this.carryables.entities) {
          
          let carryable = entity.getComponent(Carryable);
          log(fname+"update carryable: ", carryable)
          
          if (carryable.beingCarried) {
            
            if (carryable.objPosUser === undefined) {
              
              // Grab the current world-space position of the Entity.
              let objPosWorld = entity.getComponent(Transform).position;
              
              // Calculate and save the user-space position of the Entity from its world-space position.
              carryable.objPosUser = objPosWorld
                .subtract(Camera.instance.position)           // Subtract UserPos
                .rotate(Camera.instance.rotation.conjugate()) // Unrotate by UserRot
              ;
            }
            else {
              
              // Calculate the variable world-space position of the Entity from its constant user-space position.
              let objPosWorld = carryable.objPosUser
                .clone()                          // (Clone stops the .rotate from changing objPosUser)
                .rotate(Camera.instance.rotation) // Rotate by UserRot
                .add(Camera.instance.position)    // Add UserPos
              ;
              
              // Move the Entity to its new world-space position.
              entity.getComponent(Transform).position = objPosWorld;
            }
          }
          else if (carryable.objPosUser !== undefined) {
            
            // Entity was dropped, so don't care about objPosUser anymore.
            carryable.objPosUser = undefined;
          }
        }
      }




    /* BB VERSION unfineshed
    public update (dt:number) {
        if (this.carryable.beingCarried) { // todo maybe do this not based on carryable but on another filter.active param
            
            //this.filter.getComponent(Transform).position //= Camera.instance.position
            //log (fname+"update filter.position: ",  this.filter.getComponent(Transform).position)
            //log (fname+"update Camera.position: ",  Camera.instance.position) 

            // Grab the current world-space position of the Entity.
          let objPosWorld = this.filter.getComponent(Transform).position;
          log (fname+"update objPosWorld: ",  objPosWorld)

          // Calculate and save the user-space position of the Entity from its world-space position.
          this.carryable.objPosUser = objPosWorld
            .subtract(Camera.instance.position)           // Subtract UserPos
            //.rotate(Camera.instance.rotation.conjugate()) // Unrotate by UserRot
          ;


        } else {
            // not being carried > maybe make invisible
        }
    }
    //*/
}

// Workaround for SDK bug with Camera.instance.
let dummy = Camera.instance;