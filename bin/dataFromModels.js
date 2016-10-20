#!/usr/bin/env node

/**
 * Generate a schema file for each data operation for each model
 */

const fs = require('fs');
const readJsonFiles = require('../lib/schema').readJsonFiles;
const propertiesWithoutCustomData = require('../lib/schema').propertiesWithoutCustomData;
const Inflection = require('inflection');

function exitErr(err) {
  console.error('Error:', err);
  process.exit(1);
}

function tryCatch(fn) {
  return function(...args) {
    try {
      fn(...args);
    } catch(err) {
      exitErr(err);
    }
  }
}

readJsonFiles('schemas/models', function(err, objects) {
  if (err) { return exitErr(err); }

  objects
    .filter(o => o.id)
    .forEach(tryCatch(object => {

    const domain = Inflection.pluralize(object.id);
    const id = `data.${domain}`;

    const createValues = {
      type: 'object',
      properties: propertiesWithoutCustomData(object.properties),
      required: object.required,
      additionalProperties: false
    };

    const create = {
      id: `${id}.create`,
      type: 'object',
      properties: {
        domain: {
          type: 'string',
          enum: [domain]
        },
        action: {
          type: 'string',
          enum: ['create']
        },
        key: {
          type: 'string'
        },
        values: createValues
      },
      required: ['domain', 'action', 'key', 'values'],
      additionalProperties: false
    };

    const updateProperties = propertiesWithoutCustomData(object.properties);

    for(let m in object.properties) {
      if (object.properties[m].update === false) {
        delete updateProperties[m];
      }
    }

    const updateValues = {
      type: 'object',
      properties: propertiesWithoutCustomData(updateProperties),
      additionalProperties: false
    };

    const update = {
      id: `${id}.update`,
      type: 'object',
      properties: {
        domain: {
          type: 'string',
          enum: [domain]
        },
        action: {
          type: 'string',
          enum: ['update']
        },
        key: {
          type: 'string',
        },
        values: updateValues
      },
      required: ['domain', 'action', 'key', 'values'],
      additionalProperties: false
    };

    const remove = {
      id: `${id}.remove`,
      type: 'object',
      properties: {
        domain: {
          type: 'string',
          enum: [domain]
        },
        action: {
          type: 'string',
          enum: ['remove']
        },
        key: {
          type: 'string'
        }
      },
      required: ['domain', 'action', 'key'],
      additionalProperties: false
    };

    const obj = {create, update, remove};

    fs.writeFile('schemas/data/' + domain + '.json', JSON.stringify(obj, null, 2));
  }));
});

