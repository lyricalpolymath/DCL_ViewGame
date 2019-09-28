
// IMPORTANT - to make it work in development mode you need to add   &ENABLE_WEB3   to the URL in the browser
// eg: http://127.0.0.1:8000/?position=0%2C0&SCENE_DEBUG_PANEL&ENABLE_WEB3

// getting user data https://docs.decentraland.org/development-guide/user-data/#get-all-user-data
//import { getUserAccount } from '@decentraland/EthereumController'  // old package
import { getUserData } from "@decentraland/Identity" // new package

import { Settings } from "../gameSettings"
import { State } from '../gameState';


const fname = "userData."
let apiUrl = Settings.urls.inventory;



export abstract class UserData {

    //TODO Hardcoding it to implement the functions while hoping DCL solves the getUserData problem
    public static address:string = "test"

    /**
     * retrieves the user address - old async method
     */
    public static getUserAddress() {
      log(fname+"getUserAddress");
      return this.address
      /*
      if (!this.address) {
        //address is not defined - retrieve it
        //let publicKeyRequest = 
        executeTask(async () => {
          try {
            const address = await getUserAccount()
            log(fname+" getUserAccount returned address:" + address)
            this.address = address

            // TODO - understand if you want to launch an event so that the State responds to getting the address
            State.userAddress = address 
            
            return this.address
  
          } catch (error) {
            log(fname+"getUserAddress - error:", error.toString())
          }
        })
      
      } else {
        return this.address
      } 
      //*/
    }
    //*/

    /**
     * simply reads the inventory from the Server
     * it will query to see if this.address is already set
     */
  public static getInventory() {
      
      //let address = await UserData.getUserAddress()
      let address = this.address;
      log(fname+"getInventory - this.address: " + this.address)
      log(fname+"getInventory - UserData.address: " + UserData.address)

      let callUrl = Settings.urls.inventory + "?user="+ address;
      let callBody = {user: address}
      log(fname+"getInventory - going to call url: " + callUrl)
      log(fname+"getInventory - with Body: ", callBody)

      let inventoryTask = executeTask(async () => {
        log(fname+"getInventory executeTask")
        try {
          let response = await fetch( callUrl, {
            headers: { "Content-Type": "application/json" },
            method: "GET",
            body: JSON.stringify( callBody )
          })
          let json = await response.json()
          log(fname +"getInventory json response: ", json);

        } catch {
          log(fname + " failed to reach URL")
        }
      })

  }
  //*/


}


/////////////////////// NEW METHOD DOESN'T WORK EITHER


/**
 * TRYING THE NEW METHOD TO GET THE USER ADDRESS... doesn't work for now
 * getting user data https://docs.decentraland.org/development-guide/user-data/#get-all-user-data
 * /
const fname = "userData."
export const userData = executeTask(async () => {
  log(fname+"launching async task userData")
  try {
    const data = await getUserData()
    log(fname+"getUserData returned data:", data) //contains data.displayName
    log(fname+"getUserData returned data.displayName:" + data.displayName + " - user Address: " + data.publicKey)
    return data//.displayName
  } catch (error) {
    log(fname+"getUserAddress - error:", error.toString())
  }
})
log(fname+" userData Promise: ", userData)

class IDSystem implements ISystem {
  constructor() {
    log("IDSystem userData: ", userData)
  }
  update() {
    //log("IDSystem userData: ", userData)
    if (userData.isComplete && !userData.didFail) {
      log("UserData - IDSystem - userData.isComplete data:", userData)
      engine.removeSystem(this); // to stop the infinite loop
    } else if (userData.isComplete && userData.didFail) {
      log("UserData - IDSystem - userData.error: ", userData.error)
    }
    /*
    if (userData.didFail) {
      log("UserData - IDSystemerror fetching id" + userData.error)
    } else { //if (userData.isComplete) {
      log("id:" + userData.result)
    }
    //* /
  }
}
engine.addSystem(new IDSystem())
//*/







/////////////////////// OLD METHOD THAT WORKED BUT NO MORE


/* Get user's Public Key
export const publicKeyRequest = executeTask(async () => {
  log(fname + "publicKeyRequest called")
  try {
    const address = await getUserAccount()
    log(fname+" publicKeyRequest returned address:" + address)
    return address
  } catch (error) {
    log(error.toString())
  }
})
//*/



/* get User's inventory
executeTask(async () => {
  let callBody = JSON.stringify( {user: } )
  try {
    let response = await fetch(apiUrl, {
      headers: { "Content-Type": "application/json" },
      method: "GET",
      body: JSON.stringify({myBody})
    })
    let json = await response.json()
    log(json)
  } catch {
    log("failed to reach URL")
  }
})
//*/