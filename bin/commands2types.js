#!/usr/bin/env node

const {compile} = require('json-schema-to-typescript');
const path = require('path');
const fs = require('fs');
const clr = require('cli-color');

let commandSchema;

function fileErr(filename, err) {
  console.error(clr.red('Error in ') + clr.red.bold(filename));
  console.error('  ', clr.red(err));
}

function convertCommand(filename, command) {
  const baseId = command.id.replace(/\.(.)/g, p => p[1].toUpperCase());
  commandSchema.id = baseId + 'Command';
  commandSchema.properties.payload['$ref'] = '#/definitions/' + baseId + 'Payload';
  commandSchema.definitions[baseId + 'Payload'] = command;
  delete command.id;

  const ts = compile(commandSchema, filename + '/' + command.id);
  const targetFilename = baseId + '.ts';

  fs.writeFile('types/commands/'+ targetFilename, ts, err => {
    if (err) {
      console.error(clr.red('Error writing ') + clr.red.bold(targetFilename));
      console.error('  ' + clr.red(err));
    }
  });
}

function convertCommands(filename, commands) {
  Object.keys(commands).forEach(command => {
    convertCommand(filename, commands[command]);
  });
}

function convertFile(filename) {
  return function(err, data) {
    if (err) { return fileErr(filename, err); }

    const commands = JSON.parse(data);
    convertCommands(filename, commands);
  }
}

fs.readFile('schemas/command.json', (err, data) => {
  if (err) { process.exit(1); }

  commandSchema = JSON.parse(data);
  commandSchema.definitions = {};
  commandSchema.required.push('payload');
  commandSchema.properties.payload = {
    '$ref': '#/definitions/payload'
  };

  fs.readdir('schemas/commands', (err, files) => {
    if (err) {
      return process.exit(1);
    }

    files.forEach(file => {
      const path = 'schemas/commands/' + file;
      fs.readFile('schemas/commands/' + file, convertFile(path));
    });
  });
});

