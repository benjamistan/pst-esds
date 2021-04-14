#!/bin/bash
cd /app
curl -sL https://rpm.nodesource.com/setup_14.x | sudo -E bash -
yum -y install nodejs npm
echo 'Running npm install...'
npm install
npm install --save create-react-app react-scripts
npm install pm2 -g