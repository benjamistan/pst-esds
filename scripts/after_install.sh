#!/bin/bash

cd /app
echo '********************************'
echo '***   Starting npm install   ***'
echo '********************************'
npm install
echo '****************************'
echo '***   Installing React   ***'
echo '****************************'
npm install --save react react-dom react-scripts
echo '***************************'
echo '***   Installing pm2    ***'
echo '***************************'
npm install pm2 -g