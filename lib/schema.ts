const fs = require('fs');
const path = require('path');

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

