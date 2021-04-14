#!/bin/bash
cd /app
echo 'Running npm install...'
npm install
npm install --save create-react-app react-scripts
npm install pm2 -g
