#!/bin/bash

# stop on error
set -e

DOCKERFILE=$(cat <<FILE
  FROM node:14-alpine
  RUN apk update
  RUN apk add musl-dev gcc python3 python3-dev
  RUN python3 -m ensurepip --upgrade \
   && pip3 install --upgrade pip \
   && pip3 install --upgrade awscli aws-sam-cli
  ENV SAM_CLI_TELEMETRY=0
  WORKDIR /app
FILE
)
echo "$DOCKERFILE" | docker build -t aws-sam-deployer -


docker run -it --rm \
  -e AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID \
  -e AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY \
  -v $(pwd):/app \
  aws-sam-deployer \
  sh -c '
    sam build
    sam deploy --config-env production
  '