'use strict';

var AWS = require('aws-sdk');

var dynamo = new AWS.DynamoDB();

exports.handler = function (event, context, callback) {
    dynamo.putItem({
        TableName: 'Chat-Messages',
        Item: {
            ConversationId: {S: event.id},
            Timestamp: {
                N: "" + new Date().getTime()
            },
            Message: {S: event.message},
            Sender: {S: 'Student'}
        }
    }, function(err, data) {
        if(err !== null) {
            callback(err);
        } else {
            callback(null, null);
        }
    });
};