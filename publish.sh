#!/bin/sh
set -e

echo "Deleting old publication"
rm -rf public
mkdir public

cp -r website public

echo "Generating site"

npm run gulp

echo "floriantraber.de" >> public/CNAME
