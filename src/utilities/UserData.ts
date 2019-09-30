
//import { getUserAccount } from '@decentraland/EthereumController'
import { State, StateUpdate } from "../gameState"
import { awsPut } from "../functions"

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

        //log(fname+"parseServerDataAndUpdateState - before - State: ", State)
        State.glasses.RED.available = inventory.glasses.RED
        State.glasses.GREEN.available = inventory.glasses.GREEN
        State.glasses.BLUE.available = inventory.glasses.BLUE
        
        State.playerData = inventory.playerData
        //log(fname+"parseServerDataAndUpdateState - after  - State: ", State)

        //TODO refactor this function into State so that State updates itself?
        //State.events.fireEvent(new StateUpdate())
        State.updateState()

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


    /**
     * calls the server and passes the info in the body
     */
    public static updateServer() {
        let updateString = this.getStateString()
        let putApiUrl = awsPut
        log(fname+"updateServer going to call URL: " + putApiUrl );
        log(fname+"updateServer with: " + updateString );

        executeTask(async () => {
            try {
              let response = await fetch( putApiUrl , {
                method: "POST",  
                headers: { "Content-Type": "application/json" },
                body: updateString
              })
              .then(response => response.json())  // TODO add a handler for the server response
              .then(data => { 
                log(fname+"updateServer - update seems to have worked - data: ", data) // maybe it's enought with the response
              })

            } catch(error) {
                log(fname+"updateServer - Error: ", error);
            }  
        })
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

