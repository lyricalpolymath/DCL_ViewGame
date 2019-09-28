'use strict'
console.log('\n\n////////// Executing    Inventory-set    Lambda Function ////////////')

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

// this is synchronous, but we need async as we need to write to the db this time
//exports.handle = function(event, context, callback) {  

exports.handle = async (event, context, callback) => {

  // For async functions, you return a response, error, or promise to the runtime instead of using callback.
  // https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-handler.html
  //const promise = new Promise( (resolve, reject) => {

    //console.log('processing event: %j', event) // will hold the json that you are writing in event.json
    // if the request is sent from postman the event will be store in event.body
    let eString = JSON.stringify(event, null, 4)
    console.log("processing event: " + eString);
    
    // todo convert to http headers rather than passing strings in the url
    var params = {
      TableName: 'MetaGame',
      Item: {
          // test data to see if it works
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
          
          /* or should it rather be this
          const response = {
              statusCode: 200,
              body: JSON.stringify(data),
          };
          return response;
          */
      }
  })

  //}) // Promise
  
}



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