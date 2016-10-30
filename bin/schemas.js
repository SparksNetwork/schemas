const fs = require('fs');
const async = require('async');
const allSchemas = require('../lib/schema.js').allSchemas;

allSchemas(function(err, schemas) {
  if (err) { throw new Error(err); }
  const json = JSON.stringify(schemas);
  fs.writeFile('schemas.json', json);
});
