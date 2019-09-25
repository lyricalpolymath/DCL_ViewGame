
// IMPORTANT - to make it work in development mode you need to add   &ENABLE_WEB3   to the URL in the browser
// eg: http://192.168.1.35:8000/?ENABLE_WEB3&SCENE_DEBUG_PANEL&position=0%2C0

import { getUserAccount } from '@decentraland/EthereumController'

const fname = "userData."

export const publicKeyRequest = executeTask(async () => {
  try {
    const address = await getUserAccount()
    log(fname+" getUserAccount returned address:" + address)
    return address
  } catch (error) {
    log(error.toString())
  }
})