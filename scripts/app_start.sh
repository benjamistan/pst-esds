#!/bin/bash
npm install serve
cd /home/ec2-user/server/src
serve -s build -l 3000
