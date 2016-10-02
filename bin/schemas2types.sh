#!/usr/bin/env bash

find schemas/models -type f | while read f
do
    N=$(basename $f .json)
    T=$(bin/schema2type.js ${f})
    O="types/models/$N.ts"

    if [[ ! -f "$O" ]]
    then
        echo "Converting $f"
        ./schema2type.js $f | jq "." > "types/models/$N.ts"
    else
        echo $O
        echo "${T}" | diff $O -

        read -p "Overwrite (y/n)? " yn < /dev/tty
        case $yn in
            [Yy]* ) echo "${T}" > "$O"; break;;
            * ) echo "Skipping ${f}";;
        esac
    fi
done