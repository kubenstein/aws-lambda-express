#!/bin/bash

sam logs -t --config-env production --stack-name aws-lambda-express -n ApiGatewayFunction --region ap-northeast-1
