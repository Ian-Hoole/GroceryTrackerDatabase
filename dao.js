const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, 
        GetCommand, 
        PutCommand, 
        UpdateCommand, 
        DeleteCommand
    } = require("@aws-sdk/lib-dynamodb");
const { v4: uuidv4 } = require('uuid');
const { logger } = require('./logger.js');

const client = new DynamoDBClient({ region: "us-west-1" }); // replace with your region

const documentClient = DynamoDBDocumentClient.from(client);

const TableName = "grocerytracker";
// Get functions
async function getTest() {
    const testUuid = "e415d5c9-e946-4061-bcd9-c7fbf0e57e6d";

    const getCommand = new GetCommand({
        TableName,
        Key: { 'uuid': testUuid }
    });

    try{
        const data = await documentClient.send(getCommand).then();
        logger.info(JSON.stringify(data, null, 2));
    }catch(err){
        logger.error(err);
    }
}

async function getItem(key) {
    const getCommand = new GetCommand({
        TableName,
        Key: { 'uuid': key }
    });
    try {
        const data = await documentClient.send(getCommand);
        logger.info(JSON.stringify(data, null, 2));
        return data
    } catch (err) {
        logger.error(err);
    }
}

async function createItem(item){
    item.uuid = uuidv4();
    const putCommand = new PutCommand({
        TableName,
        Item: item
    });

    try{
        const data = await documentClient.send(putCommand);
        logger.info(JSON.stringify(data, null, 2));
        return item.uuid;
    } catch (err) {
        logger.error(err);
    }
}


module.exports = {
    getTest,
    getItem,
    createItem
}