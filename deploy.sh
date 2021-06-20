#!/bin/bash

repo=$(git config --get remote.origin.url)

# build Vue project
yarn build
cd dist

# git
git init
git add .
git commit -m 'first'

# push to github page 
git push -f $repo master:gh-pages
