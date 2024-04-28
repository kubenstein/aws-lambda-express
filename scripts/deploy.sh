#!/bin/bash

sam build
sam deploy --config-env production
