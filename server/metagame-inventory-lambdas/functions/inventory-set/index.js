'use strict'
console.log('\n\n////////// Executing    Inventory-set    Lambda Function ////////////')

const databaseManager = require('./databaseManager');
//const AWS = require('aws-sdk');
//const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});


exports.handle = async (event, context, callback) => {

    //console.log('processing event: %j', event) // will hold the json that you are writing in event.json
    // if the request is sent from postman the event will be store in event.body
    let eString = JSON.stringify(event, null, 4)
    console.log("processing event: " + eString);

    console.log("event.httpMethod: ", event.httpMethod);
    switch (event.httpMethod) {
      //case 'DELETE':
      //  return deleteItem(event);
      case 'GET':
        console.log("GET Called")
        return getItem(event);
      case 'POST':
          console.log("POST Called")
        return saveItem(event);
      case 'PUT':
          console.log("PUT Called")
        return updateItem(event);
      default:
        return sendResponse(404, `Unsupported method "${event.httpMethod}"`);
    }
};
    
function getItem(event) {
  console.log("getItem event: ", event);
	const user = event.body.user//event.pathParameters.user;

	return databaseManager.getItem(user).then(response => {
		console.log(response);
		return sendResponse(200, JSON.stringify(response));
	});
}


function saveItem(event) {
  console.log("saveItem event: ", event);
	//const item = JSON.parse(event.body);
	//item.user = uuidv1();  // I think this creates a progressive id number
  const user = event.body.user
  const inventory = event.body.inventory

	return databaseManager.saveItem(item).then(response => {
		console.log(response);
		return sendResponse(200, item.user);
	});
}


function updateItem(event) {
  console.log("updateItem event: ", event);
	const user = event.body.user //event.pathParameters.user;
  const inventory = event.body.inventory

	//const body = JSON.parse(event.body);
	const paramName =  "inventory"    //body.paramName;  // name of the field to update
	const paramValue = inventory      //body.paramValue; // value to insert in the field

	return databaseManager.updateItem(user, paramName, paramValue).then(response => {
		console.log(response);
		return sendResponse(200, JSON.stringify(response));
	});
}

/*
function deleteItem(event) {
	const user = event.pathParameters.user;

	return databaseManager.deleteItem(user).then(response => {
		return sendResponse(200, 'DELETE ITEM');
	});
}
//*/

function sendResponse(statusCode, message) {
  console.log("sendResponse statusCode: " +  statusCode + " - message: ", JSON.stringify(message) );
	const response = {
		statusCode: statusCode,
		body: JSON.stringify(message)
	};
	return response
}




/*

    // todo convert to http headers rather than passing strings in the url
    // test data to see if it works
    var params = {
      TableName: 'MetaGame',
      Item: {      
          user:       "0xTEST_" + dateNow ,
          inventory: "{ inventory: " + dateNow + " }" 
    
          //these if you want to retrieve from the parameters passed by the front-end
          //user: event.user,
          //inventory: event.inventory, // passed a simple string in the url for now > find HTTP way
      }
    } 
    console.log("params: ", params)
  

    // CODE EXAMPLE https://docs.aws.amazon.com/code-samples/latest/catalog/javascript-dynamodb-ddbdoc_put.js.html
    // callback(error, response)
    //callback(null, { inventory: 'updated inventory goes here' } )
    docClient.put(params, function(err, data) {
      if(err) {
          console.log(fname+" PUT Error: ", err);
          callback(err, null);
      
        } else {
          // if no error return the data
          console.log(fname+" PUT Success data: ", data);
          callback(null, data);
      }
    }
*/  



/*
      console.log('processing context: %j', context)
      // outputs a json with a bunch of information:
      //    { 
      //      "callbackWaitsForEmptyEventLoop":true,
      //      "logGroupName":"/aws/lambda/metagame_inventory-set",
      //      "logStreamName":"2019/09/28/[2]8040d3011edc451087b7db415b58ceee",
      //      "functionName":"metagame_inventory-set",
      //      "memoryLimitInMB":"128",
      //      "functionVersion":"2",
      //      "clientContext":null,
      //      "invokeid":"609df160-9a1c-47b4-bd72-96077deb520b",
      //      "awsRequestId":"609df160-9a1c-47b4-bd72-96077deb520b",
      //      "invokedFunctionArn":"arn:aws:lambda:us-east-1:281701997159:function:metagame_inventory-set:current"
      //    }
      */