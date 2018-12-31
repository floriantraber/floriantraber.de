#!/bin/sh
BRANCH=gh-pages
if [[ $(git status -s) ]]
then
    echo "The working directory is dirty. Please commit any pending changes."
    exit 1;
fi

echo "Deleting old publication"
rm -rf public
git worktree prune
rm -rf .git/worktrees/public/
mkdir public

echo "Checking out $BRANCH branch into public"
git worktree add -B $BRANCH public origin/$BRANCH

echo "Removing existing files"
rm -rf public/*

echo "Generating site"
hugo

npm run gulp

echo "floriantraber.de" >> public/CNAME

# echo "Updating $BRANCH branch"
# cd public && git add --all && git commit -m "Publish to site (publish.sh)" && git push


