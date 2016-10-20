const fs = require('fs');
const path = require('path');

function readJsonFile(path, cb) {
  fs.readFile(path, function(err, data) {
    if (err) { return cb(err); }
    try {
      cb(null, JSON.parse(data));
    } catch(err) {
      cb(err);
    }
  });
}

function readJsonFiles(dir, cb) {
  const regex = /\.json$/;
  const test = regex.test.bind(regex);

  fs.readdir(dir, function (err, files) {
    if (err) {
      return cb(err);
    }

    const jsonFiles = files.filter(test);
    const jsonData = [];
    let left = jsonFiles.length;

    jsonFiles
      .forEach(file => {
        readJsonFile(path.join(dir, file), function (err, obj) {
          left -= 1;
          if (!err) {
            jsonData.push(obj);
          }
          if (left === 0) {
            cb(null, jsonData);
          }
        })
      });
  });
}

const customData = ['update'];

function propertyWithoutCustomData(property) {
  return JSON.parse(JSON.stringify(property, function(key, value) {
    if (customData.find(v => v === key)) { return undefined; }
    return value;
  }))
}

function propertiesWithoutCustomData(properties) {
  return Object.keys(properties).reduce((acc, key) => {
    acc[key] = propertyWithoutCustomData(properties[key]);
    return acc;
  }, {});
}

module.exports = {
  readJsonFile,
  readJsonFiles,
  propertyWithoutCustomData,
  propertiesWithoutCustomData
};