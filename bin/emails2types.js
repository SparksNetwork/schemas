#!/usr/bin/env node

const {compile} = require('json-schema-to-typescript');
const path = require('path');
const fs = require('fs');
const clr = require('cli-color');

const txEmailSchema = require('../schemas/transactionEmail.json');

function fileErr(filename, err) {
  console.error(clr.red('Error in ') + clr.red.bold(filename));
  console.error('  ', clr.red(err));
}

fs.readdir('schemas/emails', (err, files) => {
  if (err) { return fileErr('schemas/emails', err); }

  files.forEach(file => {
    const filePath = path.join('schemas/emails', file);

    fs.readFile(filePath, (err, data) => {
      if (err) { return fileErr(filePath, err); }

      const targetFilename = file.split('.')[0] + '.ts';
      const emailSchema = JSON.parse(data);

      const schema = Object.assign({}, txEmailSchema);
      delete schema.oneOf;
      Object.assign(schema.properties, emailSchema.properties);
      schema.required = schema.required.concat(Object.keys(emailSchema.properties));
      schema.additionalProperties = false;
      schema.id = emailSchema.id.split('.').slice(1)[0] + 'Email';

      const ts = compile(schema, filePath);

      fs.writeFile('types/emails/' + targetFilename, ts, err => {
        if (err) {
          console.error(clr.red('Error writing ') + clr.red.bold(targetFilename));
          console.error('  ' + clr.red(err));
        }
      })
    });
  });
});

