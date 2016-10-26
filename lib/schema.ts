const fs = require('fs');
const path = require('path');
import * as glob from 'glob';
import * as async from 'async';

export function allSchemas(cb) {
  async.waterfall([
    async.apply(glob, 'schemas/**/*.json'),
    function(files, cb) {
      async.map(files, fs.readFile, cb);
    },
    function(buffers, cb) {
      async.map(buffers, async.asyncify(JSON.parse) as any, cb)
    },
    function(objects, cb) {
      cb(null,
        objects.reduce(function (acc, object) {
          if (!object['type']) {
            Object.keys(object).map(key => object[key])
              .forEach(i => acc.push(i));
          } else {
            acc.push(object);
          }
          return acc;
        }, [])
      );
    },
  ], cb);
}

export function readJsonFile(path, cb?) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, function (err, data) {
      if (err) { return reject(err); }
      let obj;

      try {
        obj = JSON.parse(data);
      } catch (err) {
        return reject(err);
      }

      resolve(obj);
    });
  })
    .then(obj => {
      if (cb) { cb(null, obj); }
      return obj;
    })
    .catch(err => {
      if (cb) { cb(err); }
      else { throw err; }
    });
}

export function readJsonFiles(dir, cb?) {
  const regex = /\.json$/;
  const test = regex.test.bind(regex);

  return new Promise((resolve, reject) => {
    fs.readdir(dir, function (err, files) {
      if (err) { return reject(err); }

      const jsonFiles = files.filter(test);

      Promise.all(
        jsonFiles
          .map(file => readJsonFile(path.join(dir, file)))
        )
        .then(objects => resolve(objects))
        .catch(err => reject(err));
    });
  })
    .then(objects => {
      if (cb) { cb(null, objects); }
      return objects;
    })
    .catch(err => {
      if (cb) { cb(err); }
      else { throw err; }
  });
}

const customData = ['update'];

export function propertyWithoutCustomData(property) {
  return JSON.parse(JSON.stringify(property, function(key, value) {
    if (customData.find(v => v === key)) { return undefined; }
    return value;
  }))
}

export function propertiesWithoutCustomData(properties) {
  return Object.keys(properties).reduce((acc, key) => {
    acc[key] = propertyWithoutCustomData(properties[key]);
    return acc;
  }, {});
}

