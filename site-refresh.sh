#!/bin/bash
BRANCH=$1
if [[ ! $BRANCH ]]
then
    echo "Parameter branch ist required."
    exit 1;
fi
echo "using branch $BRANCH"
WORKDIR='floriantraber.de'
if [[ $BRANCH != 'site' ]]
then
  WORKDIR=$BRANCH.$WORKDIR
fi
echo "using workdir $WORKDIR"
mkdir /var/app/$WORKDIR
git clone https://github.com/floriantraber/floriantraber.de.git /var/app/$WORKDIR
cd /var/app/$WORKDIR
git clean -df
git pull
git checkout $BRANCH
cp /var/app/$WORKDIR /var/www/ -rf
