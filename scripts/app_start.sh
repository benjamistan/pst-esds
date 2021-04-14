#!/bin/bash
echo 'Starting app...'
cd app
pm2 start ./node_modules/react-scripts/scripts/start/js --name "esds" --watch
pm2 startup
pm2 save
pm2 restart all