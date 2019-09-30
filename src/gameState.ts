import { Settings, _colorNames } from "gameSettings"
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
        RED: { 
            name: "RED", 
            color:  Settings.colors.RED, 
            available: false, 
            active: false
        },
        GREEN: { 
            name: "GREEN", 
            color:  Settings.colors.GREEN, 
            available: false, 
            active: false
        },
        BLUE: { 
            name: "BLUE", 
            color:  Settings.colors.BLUE, 
            available: false, 
            active: false
        },
        
    }

    public static playerData:any = {
        address: undefined,        // will be assigned when found
        currentLevel: 1,    //default 1 but we can put a flag in settings when exporting it
        levels: {
            level1: {
                startTime: null,     // Datetime
                endTime: null,       // will be written when the player finds the reward
                bumps: 0             // +1 at each bump
            },
            level2: {
                startTime: null,     
                endTime: null,       
                bumps: 0             
            },
            level3: {
                startTime: null,     
                endTime: null,       
                bumps: 0             
            },
            level4: {
                startTime: null,     
                endTime: null,       
                bumps: 0             
            },
            level5: {
                startTime: null,     
                endTime: null,       
                bumps: 0             
            },
            level6: {
                startTime: null,     
                endTime: null,       
                bumps: 0             
            }
        }
    }



    /**
     * returns wither a single color is active or multiple ones
     * @return string
     */
    public static getActiveColor(){
        let R = this.glasses.RED;
        let G = this.glasses.GREEN;
        let B = this.glasses.BLUE;
        var activeColor:string;

        if (!R.active && !G.active && !B.active) {
          // all disabled - hide the component
          activeColor = _colorNames.NONE
        
        } else if (R.active && !G.active && !B.active) {
          //only RED
          activeColor = _colorNames.RED
        
        } else if (!R.active && G.active && !B.active) {
          // only Green
          log(fname+"handleStateColors - selected - ONLY GREEN")
          activeColor = Settings.colorNames.GREEN

        } else if (!R.active && !G.active && B.active) {
          // only Blue
          log(fname+"handleStateColors - selected - ONLY BLUE")
          activeColor = Settings.colorNames.BLUE

        } else if (R.active && G.active && !B.active) {
          // RED+GREEN = YELLOW
          log(fname+"handleStateColors - selected - RED+GREEN = YELLOW")
          activeColor = Settings.colorNames.YELLOW
        
        } else if (R.active && !G.active && B.active) {
          // RED+BLUE = PURPLE
          log(fname+"handleStateColors - selected - RED+BLUE = PURPLE")
          activeColor = Settings.colorNames.PURPLE
        
        } else if (!R.active && G.active && B.active) {
          // GREEN+BLUE = CYAN
          log(fname+"handleStateColors - selected - GREEN+BLUE = CYAN")
          activeColor = Settings.colorNames.CYAN
        
        } else if (R.active && G.active && B.active) {
          // RED+GREEN+BLUE = WHITE
          log(fname+"handleStateColors - selected - RED+GREEN+BLUE = WHITE")
          activeColor = Settings.colorNames.WHITE
        
        }

        return activeColor;
    }




//////////////////////////// STATE MUTATORS


     //TODO - create this unique function that reduces the State changes and fires this updateStateEvent
     //public static updateState(payload:any) {
     //    log(fname+"updateState payload: ", payload);
     //    //TODO
     //}

    /** 
     * simple wrapper of a StateUpdate Event to inform all listening objects to update
    */
    public static updateState() {
        log(fname+"updateState");
        this.events.fireEvent(new StateUpdate())
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



