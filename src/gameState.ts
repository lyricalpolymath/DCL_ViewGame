import { Settings } from "gameSettings"
import { InventoryItem } from "./gameObjects/Inventory"

const fname ="gameState."


///////////////////  EVENTS

/**
 * tells all listeners that the State has just been updated
 * so that each listener will look for it's own information
 */
@EventConstructor()
export class StateUpdate {
    constructor(){
        log(fname+"StateUpdate Event fired");
    }
}


@EventConstructor()
export class InventoryItemSelectedEvent {
    constructor(public name: string, public active: boolean) {
        //log(fname+"InventoryItemSelectedEvent - changing state for glass: ", State.glasses[name]);
    }
}

/* works but the event itself is mutating the State - not right
@EventConstructor()
export class InventoryItemSelectedEvent {
    constructor(public name: string, public active: boolean) {
        State.glasses[name].active = active;  //ACHTUNG - the event itself is mutating the state...not the right way to go
        log(fname+"InventoryItemSelectedEvent - changing state for glass: ", State.glasses[name]);
    }
}
*/



//////////////////////////  STATE

/**
 * will hold the global state of the game
 */
export class State {

    static events = new EventManager()
    static eventTypes = {
        StateUpdate,
        InventoryItemSelectedEvent
    }
    

    public static glasses:any = {    
        //RED: new GlassState("RED", Settings.colors.RED)
        //GREEN: new GlassState("GREEN,") 
        RED: { 
            name: "RED", 
            color:  Settings.colors.RED, 
            available: true, 
            active: true
        },
        GREEN: { 
            name: "GREEN", 
            color:  Settings.colors.GREEN, 
            available: true, 
            active: false
        },
        BLUE: { 
            name: "BLUE", 
            color:  Settings.colors.BLUE, 
            available: true, 
            active: false
        },
        
    }



//////////////////////////// STATE MUTATORS


    // TODO - create this unique function that reduces the State changes and fires this updateStateEvent
    public static updateState(payload:any) {
        log(fname+"updateState payload: ", payload);
        //TODO
    }
    

    /**
     * changes the state of the inventory buttons and of the visibile filters
     * @param name 
     * @param active 
     */
    public static updateGlassState(name:string, active:boolean) {
        log(fname + "updateGlassState name: "+ name + "  active: " + active)
        State.glasses[name].active = active
        this.events.fireEvent( new StateUpdate() )
    }

    
}


////////////////// STATE LISTENERS - Listen to events and change the State

State.events.addListener( InventoryItemSelectedEvent, null, ({name, active}) => {
    log(fname + "State listener name: "+ name + "  active: " + active)
    State.updateGlassState(name, active);
})



