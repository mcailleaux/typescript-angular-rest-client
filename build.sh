#!/bin/bash
set -e

# Delete dist
rm -fR dist

# node dependencies
npm ci

# Check lint
npm run lint

# Copy generic lib
mkdir -p dist/src
cp -r ./node_modules/typescript-rest-client/src/* ./dist/src/

# Build project
npm run build

# Prepare Npm package
cp ./node_modules/typescript-rest-client/src/index* ./dist/src/
cp ./package.json ./dist/
cp ./README.md ./dist/
cp ./LICENSE ./dist/
