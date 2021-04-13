#!/bin/bash
npm install serve
cd /home/ec2-user/server
serve -s build -l 3000
