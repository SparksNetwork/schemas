#!/usr/bin/env node

const fs = require('fs');
const clc = require('cli-color');
const Ajv = require('ajv');
const ajv = new Ajv();
const allSchemas = require('../lib/schema').allSchemas;
const async = require('async');

function validateSchema(schema, cb) {
  const valid = ajv.validateSchema(schema, false);

  if (valid) {
    process.stdout.write(clc.green('.'));
  } else {
    console.log('');
    console.log(clc.red('* ' + schema.id + 'is not valid'));
    console.log('  ', ajv.errors);
  }

  cb(null);
}

async.waterfall([
  allSchemas,
  function(schemas, cb) {
    async.map(schemas, validateSchema, cb);
  }
], function(err, v) {
  console.log("\n");
  if (err) {
    console.log(clc.red('FAILURE: ', err));
  } else {
    console.log('Validated', v.length, 'schemas');
  }
});