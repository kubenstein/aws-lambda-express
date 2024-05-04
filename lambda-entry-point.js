const {
  DynamoDBClient,
  PutItemCommand,
} = require("@aws-sdk/client-dynamodb");

const dynamodbClient = new DynamoDBClient({
  endpoint: process.env.DYNAMODB_ENDPOINT,
});

exports.handler = async event => {
  try {

    const input = {
      "Item": {
        "AlbumTitle": {
          "S": "Somewhat Famous"
        },
        "Artist": {
          "S": "No One You Know"
        },
        "SongTitle": {
          "S": "Call Me Today"
        }
      },
      "ReturnConsumedCapacity": "TOTAL",
      "TableName": "YourTableName"
    };

    const putItemCommand = new PutItemCommand(input);
    await dynamodbClient.send(putItemCommand);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Data added to DynamoDB table" }),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "An error occurred" }),
    };
  }
};

// exports.handler = async (event) => {
//   // Your Lambda function logic goes here
//   const response = {
//       statusCode: 200,
//       headers: {
//           "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//           message: "Hello from Lambda!"
//       })
//   };
//   return response;
// };

// const params = {
//   TableName: process.env.TABLE_NAME,
//   Item: {
//     id: 1,
//     data: "hello",
//   },
// };

// try {
//   // Perform a put operation to insert data into the DynamoDB table
//   await dynamoDb.put(params).promise();

//   // Return a success response
//   return {
//     statusCode: 200,
//     body: JSON.stringify({
//       message: "Data inserted successfully.",
//     }),
//   };
// } catch (error) {
//   console.error(error);

//   // Return an error response
//   return {
//     statusCode: 500,
//     body: JSON.stringify({
//       message: "Error occurred while inserting data into DynamoDB table.",
//     }),
//   };
// }
// };
