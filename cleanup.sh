#!/bin/bash
for ch in *; do
  test -d "$ch" || continue
  echo "entering $ch"
  cd $ch
  for ex in *; do
    test -d "$ex" || continue
    echo "entering $ex"
    cd $ex
    rm -rf node_modules
    rm yarn.lock yalc.lock package-lock.json
    npm install --save react@^16.9.0 react-dom@^16.9.0 react-scripts@^2.1.8
    npm install
    cd ..
  done
  cd ..
  echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
  echo
done
