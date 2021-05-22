#!/bin/bash

cd /app
echo 'Starting npm install'
npm install
echo 'Installing React'
npm install --save react react-dom react-scripts
echo 'Installing pm2'
npm install pm2 -g