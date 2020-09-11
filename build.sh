#!/bin/bash
set -e

# Delete dist
rm -fR dist

# node dependencies
npm ci

# Check lint
npm run lint

# Build project
npm run build

# Prepare Npm package
cp -r ./node_modules/typescript-rest-client/src/* ./dist/src/
cp ./package.json ./dist/
cp ./README.md ./dist/
cp ./LICENSE ./dist/
