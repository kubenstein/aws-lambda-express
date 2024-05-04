// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// import { fileURLToPath } from "url";

// // snippet-start:[dynamodb.JavaScript.table.listTablesV3]
// import { ListTablesCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";

// const client = new DynamoDBClient({});

// export const main = async () => {
//   const command = new ListTablesCommand({});

//   const response = await client.send(command);
//   console.log(response);
//   return response;
// };
// snippet-end:[dynamodb.JavaScript.table.listTablesV3]

// Invoke main function if this file was run directly.
// if (process.argv[1] === fileURLToPath(import.meta.url)) {
//   main();
// }

const {
  DynamoDBClient,
  ListTablesCommand,
} = require("@aws-sdk/client-dynamodb");

// const client = new DynamoDBClient({
//   region: "localhost",
//   endpoint: "http://host.docker.internal:8000",
// });

// exports.handler = async (event) => {
//   // const command = new ListTablesCommand({});
//   // const response = await client.send(command);
//   const response = {
//     statusCode: 200,
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         message: "Hello from Lambda!"
//     })
//   };
//   return response;
// };


module.exports.default = async () => {
  return {
    statusCode: 200,
  };
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
