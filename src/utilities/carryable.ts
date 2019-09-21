// taken from here https://github.com/NoahWarnke/carryable/blob/master/src/carryable.ts

// there is also a more complex version here https://github.com/NoahWarnke/DCLBlocks/blob/master/src/carryable.ts
// which you can learn about in Interweaver's blog post https://decentraland.org/blog/announcements/building-blocks/

/**
 * A component that allows an Entity to be carried, i.e. to
 * stay in the same location relative to a user, when toggled.
 * @author Interweaver
 */
@Component('carryable')
export class Carryable {
   //True when the Entity is being carried. False otherwise.
  public beingCarried: boolean = false;
  
  //When the Entity is being carried, its constant user-space position. Undefined otherwise.
  public objPosUser: Vector3 = undefined;

  //Toggle whether this Carryable is being carried or not.
  public toggleCarry() {
    this.beingCarried = !this.beingCarried;
  }
}




/**
 * A System to update Carryable entities.
 * @author Interweaver
 */
export class CarryableSystem {
  
  /**
   * The ComponentGroup of all Entities that have both Carryable and Transform Components.
   */
  private carryables: ComponentGroup = engine.getComponentGroup(Carryable, Transform);
  

  public update(dt: number) {
    
    for (let entity of this.carryables.entities) {
      
      let carryable = entity.getComponent(Carryable);
      
      if (carryable.beingCarried) {
        
        if (carryable.objPosUser === undefined) {
          
          // Grab the current world-space position of the Entity.
          let objPosWorld = entity.getComponent(Transform).position;
          log("CarryableSystem objPosWorld: ", objPosWorld)
          //log("CarryableSystem Camera.instance: ",Camera)

          objPosWorld = objPosWorld.subtract(Camera.instance.position)
                          .normalize()
                          .scale(1.35)
                          .add(Camera.instance.position);                          



          /* interweaver help
          //Okay, so to move it to 2m, 
          // modify Carryable so that when the carry starts, it calculates the offset vector between the two objects, 
          // normalizes it, multiplies it by two, 
          //and adds the camera position back in. 
          //Then use that as the object's position when calculating objPosUser, not the actual object position.
              //Vector3.Distance(Camera.instance.position, objPosWorld).normalize()
          carryable.objPosUser = objPosWorld
                .subtract(Camera.instance.position)
                .normalize()
                .multiply(objPosWorld)
                .addInPlace(Camera.instance.position)
          */

          // As before


        // New line


          //* Original Carryable
          // Calculate and save the user-space position of the Entity from its world-space position.
          carryable.objPosUser = objPosWorld
            .subtract(Camera.instance.position)           // Subtract UserPos
            .rotate(Camera.instance.rotation.conjugate()); // Unrotate by UserRot
          //*/

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



  /** BACKUP ORIGINAL
   * Once per frame, update the position of each Entity that is being carried
   * so that its position relative to the user remains constsant.
   * /
  public update(dt: number) {
    
    for (let entity of this.carryables.entities) {
      
      let carryable = entity.getComponent(Carryable);
      
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
}
//*/

// Workaround for SDK bug with Camera.instance.
let dummy = Camera.instance;
log("CarryableSystem Camera.instance: ", Camera.instance)

/* Camera.instance = {
      feetPosition: {x: 0, y: -1.6, z: 0}
      lastEventPosition: {x: 0, y: 0, z: 0}
      lastEventRotation: {x: 0, y: 0, z: 0, w: 1}
      lastEventWorldPosition: {x: 0, y: 0, z: 0}
      position: {x: 0, y: 0, z: 0}
      rotation: {x: 0, y: 0, z: 0, w: 1}
      worldPosition: {x: 0, y: 0, z: 0}
      _playerHeight: 1.6
}
*/