'use strict';

const databaseManager = require('./databaseManager');
const uuidv1 = require('uuid/v1');

exports.inventory = async (event) => {
	console.log(event);

	switch (event.httpMethod) {
		case 'DELETE':
			return deleteItem(event);
		case 'GET':
			return getItem(event);
		case 'POST':
			return saveItem(event);
		case 'PUT':
			return updateItem(event);
		default:
			return sendResponse(404, `Unsupported method "${event.httpMethod}"`);
	}
};

function saveItem(event) {
	const item = JSON.parse(event.body);
	item.user = uuidv1();

	return databaseManager.saveItem(item).then(response => {
		console.log(response);
		return sendResponse(200, item.user);
	});
}

function getItem(event) {
	const user = event.pathParameters.user;

	return databaseManager.getItem(user).then(response => {
		console.log(response);
		return sendResponse(200, JSON.stringify(response));
	});
}

function deleteItem(event) {
	const user = event.pathParameters.user;

	return databaseManager.deleteItem(user).then(response => {
		return sendResponse(200, 'DELETE ITEM');
	});
}

function updateItem(event) {
	const user = event.pathParameters.user;

	const body = JSON.parse(event.body);
	const paramName = body.paramName;
	const paramValue = body.paramValue;

	return databaseManager.updateItem(user, paramName, paramValue).then(response => {
		console.log(response);
		return sendResponse(200, JSON.stringify(response));
	});
}

function sendResponse(statusCode, message) {
	const response = {
		statusCode: statusCode,
		body: JSON.stringify(message)
	};
	return response
}
