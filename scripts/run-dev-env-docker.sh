#!/bin/bash

# stop on error
set -e

COMMAND=$@

DOCKERFILE=$(cat <<FILE
  FROM node:18-alpine
  ENV SAM_CLI_TELEMETRY=0
  ENV AWS_ACCESS_KEY_ID=DEV
  ENV AWS_SECRET_ACCESS_KEY=DEV
  ENV AWS_DEFAULT_REGION=DEV
  RUN apk update \
   && apk add musl-dev gcc python3 python3-dev bash \
   && rm -rf /usr/lib/python3.11/EXTERNALLY-MANAGED \
   && python3 -m ensurepip --upgrade \
   && pip3 install --upgrade pip \
   && pip3 install --upgrade awscli aws-sam-cli
  EXPOSE 3000
FILE
)
echo "$DOCKERFILE" | DOCKER_CLI_HINTS=false docker build -t aws-sam-dev-env -


docker run -i --rm \
  $([ -z "$NO_TTY" ] && echo '-t') \
  -e CI \
  -e HOST_PWD=$(pwd) \
  $([ -n "$AWS_ACCESS_KEY_ID" ] && echo "-e AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID") \
  $([ -n "$AWS_SECRET_ACCESS_KEY" ] && echo "-e AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY") \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v $(pwd):/$(pwd) \
  -p 3000:3000 \
  aws-sam-dev-env \
  sh -l -c "cd \$HOST_PWD ; ${COMMAND:-./scripts/run-dev-env.sh}"