#!/usr/bin/env bash

find schemas/models -type f | while read f
do
    N=$(basename $f .json)
    T=$(bin/schema2type.js ${f})
    O="types/models/$N.ts"

    echo "Converting $f"
    ./bin/schema2type.js $f > "types/models/$N.ts"
done