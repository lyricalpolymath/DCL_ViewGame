// this function Gets sent a user address
// that is then used to read from dynamo DB what it has in storage for that user
// and returns the user inventory to the front-end

/*
'use strict'
console.log('Loading function');

const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

const TableName = "MetaGame_gameJam" 


exports.handler = (event, context, callback) => {
    console.log('Received event:', JSON.stringify(event, null, 2));

    // function to be called when everything is done
    // res   is going to be the content returned, the JSON value
    const done = (err, res) => callback(null, {
        statusCode: err ? '400' : '200',
        body: err ? err.message : JSON.stringify(res),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    
        let scanningParameters = {
        TableName: TableName,
        Key:{
            id:event.user
        }
    };

    switch (event.httpMethod) {
        case 'DELETE':
            dynamo.deleteItem(JSON.parse(event.body), done);
            break;
        case 'GET':
            console.log("Lambda-MetaGame-getInventory GET called - event:", event)
            dynamo.get(scanningParameters, done);
            break;
        case 'POST':
            dynamo.putItem(JSON.parse(event.body), done);
            break;
        case 'PUT':
            dynamo.updateItem(JSON.parse(event.body), done);
            break;
        default:
            done(new Error(`Unsupported method "${event.httpMethod}"`));
    }
};
*/



const fname = "lambda_inventory-get"
console.log(fname + ' function starts');

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

//let index = function index(event, context, callback){
exports.handle = function(event, context, callback){    
    console.log(fname + 'handler - processing event: %j', event);
    console.log(fname + 'handler - context: %j', context);

    let scanningParameters = {
        TableName: 'MetaGame',//'Leveler',
        Key:{
            //id:event.user  // good for Leveler tabel
            user: event.user
        }
    };
    console.log(fname + " scanningParameters: ", scanningParameters);

    //*In dynamoDB scan looks through your entire table and fetches all data
    docClient.get(scanningParameters, function(err,data){
        if(err){
            callback(err, null);
        }else{
            callback(null,data);
        }
    });
    //*/
}

//exports.handler = index