#!/bin/sh
set -e

echo "Deleting old publication"
rm -rf public
mkdir public

echo "Generating site"
hugo

npm run gulp

echo "floriantraber.de" >> public/CNAME
