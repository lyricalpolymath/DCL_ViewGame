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


// needed to call it "handle" instead of "handler" to solve the error: function response: Handler 'handle' missing on module 'index'
// this option can be set through the "handler" field in the (apex-project) project.json file
// if you look at https://apex.run/  by default node uses "index.handle"
// and this property will be shown also on the Lambda function - Function code block
// https://console.aws.amazon.com/lambda/home?region=us-east-1#/functions/MetaGame-getInventory?tab=graph

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
            // callback(null,data); // return everything, but we need to set the headers too
            callback(null, JSON.stringify(data))
            /*
            callback(null, {
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'          // will avoid Cors warnings
                },
            })
            */
        }
    });
}
