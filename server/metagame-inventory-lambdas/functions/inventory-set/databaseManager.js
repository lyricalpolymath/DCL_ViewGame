'use strict';

const AWS = require('aws-sdk');
let dynamo = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = "MetaGame"; //process.env.TABLE_NAME;

module.exports.initializateDynamoClient = newDynamo => {
	dynamo = newDynamo;
};

module.exports.saveItem = item => {
	const params = {
		TableName: TABLE_NAME,
		Item: item
	};

	return dynamo
		.put(params)
		.promise()
		.then(() => {
			return item.user;
		});
};

module.exports.getItem = user => {
	const params = {
		Key: {
			user: user
		},
		TableName: TABLE_NAME
	};

	return dynamo
		.get(params)
		.promise()
		.then(result => {
			return result.Item;
		});
};

module.exports.deleteItem = user => {
	const params = {
		Key: {
			user: user
		},
		TableName: TABLE_NAME
	};

	return dynamo.delete(params).promise();
};

module.exports.updateItem = (user, paramsName, paramsValue) => {
	console.log("dataBaseManager.updateItem user: " + user + " - paramsName: " + paramsName + " - paramsValue: " + paramsValue);
	
	const params = {
		TableName: TABLE_NAME,
		Key: {
			user: user
		},
		ConditionExpression: 'attribute_exists(user)',
		UpdateExpression: 'set ' + paramsName + ' = :v',
		ExpressionAttributeValues: {
			':v': paramsValue
		},
		ReturnValues: 'ALL_NEW'
	};

	return dynamo
		.update(params)
		.promise()
		.then(response => {
			return response.Attributes;
		});
};
