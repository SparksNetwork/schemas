#!/usr/bin/env node

const fs = require('fs');
const typson = require('typson/lib/typson-schema');
const files = process.argv.slice(2);

Promise.all(files.map(name => new Promise((resolve, reject) =>
  fs.exists(name, e => e ? resolve(name) : reject(name))
)))
  .then(files => {
    Promise.all(files.map(name => new Promise((resolve, reject) =>
      typson.definitions(name)
        .done(definitions => resolve(definitions))
    )))
      .then(definitions => {
        definitions.map(definition => {
          const name = Object.keys(definition)[0];
          console.log(JSON.stringify(definition[name]));
        });
      });
  })
  .catch(name => console.error(`${name} does not exist!`));




