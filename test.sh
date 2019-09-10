#!/bin/bash
for ch in *; do
  test -d "$ch" || continue
  echo "entering $ch"
  cd $ch
  for ex in *; do
    test -d "$ex" || continue
    echo "entering $ex"
    cd $ex
    npm test -- --watchAll=false
    cd ..
  done
  cd ..
  echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
  echo
done
