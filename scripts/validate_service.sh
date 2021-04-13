#!/bin/bash

# verify we can access our webpage successfully
curl -v --silent localhost:5000 2>&1 | grep Emergency