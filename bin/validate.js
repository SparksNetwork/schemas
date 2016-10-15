const fs = require('fs');
const clc = require('cli-color');
const Ajv = require('ajv');
const ajv = new Ajv();

const schemas = {};
const errors = [];

function exitErr(err) {
  console.error(err);
  process.exit(1);
}

let left = 0;
let count = 0;

function showEnd() {
  process.stdout.write("\n");
  errors.forEach(error => {
    console.log(clc.red("*") + " Error in", error.filename);
    console.log("  ", error.error);
  });

  console.log("\nValidated", count, "files,", errors.length, "errors found.\n");

  if (errors.length > 0) {
    process.exit(1);
  }
}

function decount(fn) {
  return function(...args) {
    left = left - 1;
    count += 1;
    fn(...args);
    if (left === 0) {
      showEnd();
    }
  }
}

function tryErr(fn) {
  return function(filename, ...args) {
    try {
      fn(filename, ...args)
    } catch(error) {
      errors.push({
        filename,
        error
      });
    }
  }
}

function parsed(fn) {
  return function(filename, data) {
    const schema = JSON.parse(data);
    return fn(filename, schema);
  }
}

const validateSchema = decount(tryErr(parsed(function(filename, schema) {
  const valid = ajv.validateSchema(schema, true);
  console.log(clc.green(filename + ' is valid'));
})));

const validateCommandSchema = decount(tryErr(parsed(function(filename, schema) {
  let anyErrors = false;

  Object.keys(schema).forEach(command => {
    const valid = ajv.validateSchema(schema[command], false);

    if (!valid) {
      anyErrors = true;
      errors.push({
        filename,
        command,
        error: ajv.errors
      });
    }
  });

  if (!anyErrors) {
    console.log(clc.green(filename + ' is valid'));
  }
})));

function validateNormalSchemas(path) {
  fs.readdir(path, (err, files) => {
    if (err) { return exitErr(err); }
    left += files.length;

    files.forEach(file => {
      fs.readFile(path + '/' + file, (err, data) => {
        if (err) { return exitErr(err); }
        validateSchema(path + '/' + file, data);
      })
    })
  });
}

validateNormalSchemas('schemas/models');
validateNormalSchemas('schemas/data');

fs.readdir('schemas/commands', (err, files) => {
  if (err) { return exitErr(err); }
  left += files.length;

  files.forEach(file => {
    fs.readFile('schemas/commands/' + file, (err, data) => {
      if (err) { return exitErr(err); }
      validateCommandSchema('schemas/commands/' + file, data);
    });
  });
});
