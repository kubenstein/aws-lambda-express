const { getCurrentInvoke } = require("@vendia/serverless-express");

module.exports = function(req) {
  var event = getCurrentInvoke().event;
  var params = event ? event["queryStringParameters"] : req.query;
  return params || {}
}