
//import { getUserAccount } from '@decentraland/EthereumController'
import { State, StateUpdate } from "../gameState"

const fname = "userData."


export abstract class UserData
{
    //laustram's data               // but we should change them to State
    static eth_address:string       // State.playerData.address
    static level:number             // State.playerData.currentLevel


    /** 
     * it appears getUserAccount or executeTask can't be called wrapped in a function
    * /
    public static getUserAddress( successCallBack, failCallBack ) {
        log(fname+"getUserAddress");
        
        return executeTask(async () => {
            try {
              const address = await getUserAccount()
              log(fname+"getUserAddress - found address: " + address)
              successCallBack(address)
          
          
            } catch (error) {
              log(fname+"getUserAddress - heres the eror " + error.toString())
              failCallBack(error)
            }
          })

    }
    //*/

    /**
     * gets passed the data when retrieved from the server
     * @param data - a composite of the State Object
     */
    public static parseServerDataAndUpdateState(data:any) {
        log(fname+"parseServerDataAndUpdateState  data: ", data);
        let address = data.Item.id
        let inventory = JSON.parse(data.Item.inventory).inventory
        log(fname+"parseServerDataAndUpdateState  inventory: ", inventory);

        //log(fname+"parseServerDataAndUpdateState - before - State.glasses: ", State.glasses)
        //log(fname+"parseServerDataAndUpdateState - inventory.glasses.RED: " +  inventory.glasses.RED)
        //log(fname+"parseServerDataAndUpdateState - State.glasses.RED.available: " +  State.glasses.RED.available)
        State.glasses.RED.available = inventory.glasses.RED
        State.glasses.GREEN.available = inventory.glasses.GREEN
        State.glasses.BLUE.available = inventory.glasses.BLUE
        //log(fname+"parseServerDataAndUpdateState - after  - State.glasses: ", State.glasses)

        //log(fname+"parseServerDataAndUpdateState - before - State.playerData: ", State.playerData)
        State.playerData = inventory.playerData
        //log(fname+"parseServerDataAndUpdateState - after  - State.playerData: ", State.playerData)

        //TODO refactor all this
        //State.events.fireEvent(new StateUpdate())
        State.updateState()

        //let inventory = data.Item.inventory //JSON.parse(data.Item.inventory)
        //log(fname+"parseServerDataAndUpdateState  address: ", address);
        //log(fname+"parseServerDataAndUpdateState  inventory: ", inventory);
        //log(fname+"parseServerDataAndUpdateState  typeof(inventory): " + typeof(inventory) );
        //let inventoryObj = JSON.parse(inventory)
        //log(fname+"parseServerDataAndUpdateState  JSON.parse(inventory): ", inventoryObj );

        // this is how it should appear
        //UserData.getStateString();
    }

    /**
     * formats the current state object into the string that we will store in the DB
     */
    public static getStateString() {
        let stateObject = {
            inventory: {
                glasses: {
                    RED: State.glasses.RED.available,
                    GREEN: State.glasses.GREEN.available,
                    BLUE: State.glasses.BLUE.available,
                },
                playerData: State.playerData
            }
        } 
        let stateString = JSON.stringify(stateObject)
        log(fname+"getStateString: " + stateString);
        return stateString
    }


    public static updateServer() {
        let updateString = this.getStateString()
        log(fname+"updateServer with: " + updateString );
        
    }

}

/* CORRECT JSON FORMAT
{ "inventory": { "glasses": { "RED":true, "GREEN":false, "BLUE":false } }, "playerData": { "currentLevel": 1, 
    "levels": {
        "level1": {
            "startTime": null,     
            "endTime": null,       
            "bumps": 0          
        },
        "level2": {
            "startTime": null,     
            "endTime": null,       
            "bumps": 0             
        },
        "level3": {
            "startTime": null,     
            "endTime": null,       
            "bumps": 0             
        },
        "level4": {
            "startTime": null,     
            "endTime": null,       
            "bumps": 0             
        },
        "level5": {
            "startTime": null,     
            "endTime": null,       
            "bumps": 0             
        },
        "level6"": {
            "startTime": null,     
            "endTime": null,       
            "bumps": 0             
        }
    } } 
}
*/

