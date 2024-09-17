const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, GetCommand } = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({ region: "us-west-1" }); // replace with your region

const documentClient = DynamoDBDocumentClient.from(client);

const testUuid = "e415d5c9-e946-4061-bcd9-c7fbf0e57e6d";

const getCommand = new GetCommand({
    TableName: "grocerytracker",
    Key: { 'uuid': testUuid}
});

async function fetchTest() {
    try{
        const data = await documentClient.send(getCommand);
        console.log(data);
    }catch(err){
        console.error(err);
    }
}

module.exports = {
    fetchTest
}