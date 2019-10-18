#!/bin/bash
for ch in *; do
  test -d "$ch" || continue
  echo "entering $ch"
  cd $ch
  for ex in *; do
    test -d "$ex" || continue
    echo "entering $ex"
    cd $ex
    cross-env CI=true npm run test:nowatch
    cd ..
    echo
  done
  cd ..
  echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
  echo
done
