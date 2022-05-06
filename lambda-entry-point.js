const serverlessExpress = require("@vendia/serverless-express");
const app = require("./src/");
exports.handler = serverlessExpress({ app });
