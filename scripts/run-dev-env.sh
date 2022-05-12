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
  RUN apk add docker
  EXPOSE 3000
FILE
)
echo "$DOCKERFILE" | docker build -t aws-sam-dev-runner -


docker run -it --rm \
  --name aws-sam-dev-runner \
  -p 3000:3000 \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v $(pwd):/$(pwd) \
  -e HOST_PWD=$(pwd) \
  aws-sam-dev-runner \
  sh -c '
    cd $HOST_PWD
    sam local start-api \
      --host 0.0.0.0 \
      --docker-volume-basedir "$HOST_PWD" \
      --warm-containers EAGER \
      --container-host host.docker.internal
  '