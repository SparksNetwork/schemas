#!/usr/bin/env bash

CONV='del(.properties["$key"]) | {create: {"$schema": "http://json-schema.org/draft-04/schema#", id: (.id + "s.create"), type: "object", "properties": {values: {properties: .properties, type: .type, required: .required, additionalProperties: false}}, required: ["values"], additionalProperties: false}, update: {"$schema": "http://json-schema.org/draft-04/schema#", id: (.id + "s.update"), type: "object", properties: {key: {type: "string"}, values: {properties: .properties, type: .type}}, required: ["key", "values"]}, remove: {"$schema": "http://json-schema.org/draft-04/schema#", type: "object", id: (.id + "s.remove"), properties: {key: {type: "string"}}, required: ["key"], additionalProperties: false}}'

JQ="jq '${CONV}' \$F > \$O"
CMD="F=\$1; echo \$F; T=\${F/models/commands}; O=\${T%.*}s.json; [[ -f \"\$O\" ]] && echo \$O || (${JQ})"

find schemas/models -type f -iname '*.json' |
    xargs -n1 -I {} bash -c "$CMD" -- {}
