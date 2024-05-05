const {
  DynamoDBClient,
  PutItemCommand,
  GetItemCommand,
} = require("@aws-sdk/client-dynamodb");

let config = {};
if (process.env.LAMBDA_ENV === "dev") {
  config = { endpoint: "http://host.docker.internal:8000" };
}
const dynamodbClient = new DynamoDBClient(config);

exports.handler = async _event => {
  try {
    const putParams = {
      TableName: "MyTable",
      Item: {
        Id: { S: "unique-id-1" },
        email: { S: "email@email.com" },
      },
    };

    const putItemCommand = new PutItemCommand(putParams);
    await dynamodbClient.send(putItemCommand);

    const getParams = {
      TableName: "MyTable",
      Key: {
        Id: { S: "unique-id-1" },
      },
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
