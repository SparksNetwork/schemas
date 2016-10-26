const fs = require('fs');
const async = require('async');
const allSchemas = require('../lib/schema.js').allSchemas;

async.waterfall([
  allSchemas,
  async.asyncify(JSON.stringify),
  async.apply(fs.writeFile, 'schemas.json')
]);
