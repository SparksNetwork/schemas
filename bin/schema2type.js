#!/usr/bin/env node

const {compileFromFile} = require('json-schema-to-typescript');
const fs = require('fs');
const files = process.argv.slice(2);

Promise.all(files.map(name => new Promise((resolve, reject) =>
    fs.exists(name, e => e ? resolve(name) : reject(name))
  )))
  .then(files =>
    Promise.all(files.map(file => compileFromFile(file)))
  )
  .then(types => {
    types.forEach(type => console.log(type));
  });
