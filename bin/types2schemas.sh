#!/usr/bin/env bash

find types -type f | while read f
do
    N=$(basename $f .ts)
    if [[ ! -f "./schemas/models/$N.json" ]]
    then
        echo "Converting $f"
        ./type2schema.js $f | jq "." > "schemas/models/$N.json"
    else
        echo "Skipping $f"
    fi
done
