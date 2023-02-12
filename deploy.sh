#!/usr/bin/env sh

GITHUB_TOKEN=$GITHUB_TOKEN

# abort on errors
set -e

# build
yarn build

# navigate into the build output directory
cd dist

# gh-pages clone
git clone -b gh-pages https://github.com/JunilHwang/react-payments/
cp -rf react-payments/.git ./.git
rm -rf react-payments

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git add .
git commit -m "deploy"

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push https://${GITHUB_TOKEN}@github.com/JunilHwang/react-payments/ gh-pages

cd -
