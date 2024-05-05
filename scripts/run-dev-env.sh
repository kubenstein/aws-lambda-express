#!/bin/bash

sam local start-api \
  --host 0.0.0.0 \
  --docker-volume-basedir "$HOST_PWD" \
  --warm-containers EAGER \
  --container-host host.docker.internal \
  --env-vars './dev.env'