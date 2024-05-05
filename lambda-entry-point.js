const {
  DynamoDBClient,
  PutItemCommand,
  GetItemCommand,
} = require("@aws-sdk/client-dynamodb");

const dynamodbClient = new DynamoDBClient({
  endpoint: process.env.DYNAMODB_ENDPOINT,
});

exports.handler = async event => {
  try {
    const putParams = {
      TableName: 'YourTableName',
      Item: {
        Id: { S: 'unique-id-1' },
        email: { S: 'email@email.com' }
      }
    };

    const putItemCommand = new PutItemCommand(putParams);
    await dynamodbClient.send(putItemCommand);

    const getParams = {
      TableName: 'YourTableName',
      Key: {
        Id: { S: 'unique-id-1' }
      }
    };

    const getItemCommand = new GetItemCommand(getParams);
    const { Item } = await dynamodbClient.send(getItemCommand);


    return {
      statusCode: 200,
      body: JSON.stringify(Item),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error }),
    };
  }
};
