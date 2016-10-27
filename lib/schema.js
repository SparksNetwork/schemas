"use strict";
var fs = require('fs');
var path = require('path');
var glob = require('glob');
var async = require('async');
function allSchemas(cb) {
    async.waterfall([
        async.apply(glob, 'schemas/**/*.json'),
        function (files, cb) {
            async.map(files, fs.readFile, cb);
        },
        function (buffers, cb) {
            async.map(buffers, async.asyncify(JSON.parse), cb);
        },
        function (objects, cb) {
            cb(null, objects.reduce(function (acc, object) {
                if (!object['type']) {
                    Object.keys(object).map(function (key) { return object[key]; })
                        .forEach(function (i) { return acc.push(i); });
                }
                else {
                    acc.push(object);
                }
                return acc;
            }, []));
        },
    ], cb);
}
exports.allSchemas = allSchemas;
function readJsonFile(path, cb) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, function (err, data) {
            if (err) {
                return reject(err);
            }
            var obj;
            try {
                obj = JSON.parse(data);
            }
            catch (err) {
                return reject(err);
            }
            resolve(obj);
        });
    })
        .then(function (obj) {
        if (cb) {
            cb(null, obj);
        }
        return obj;
    })
        .catch(function (err) {
        if (cb) {
            cb(err);
        }
        else {
            throw err;
        }
    });
}
exports.readJsonFile = readJsonFile;
function readJsonFiles(dir, cb) {
    var regex = /\.json$/;
    var test = regex.test.bind(regex);
    return new Promise(function (resolve, reject) {
        fs.readdir(dir, function (err, files) {
            if (err) {
                return reject(err);
            }
            var jsonFiles = files.filter(test);
            Promise.all(jsonFiles
                .map(function (file) { return readJsonFile(path.join(dir, file)); }))
                .then(function (objects) { return resolve(objects); })
                .catch(function (err) { return reject(err); });
        });
    })
        .then(function (objects) {
        if (cb) {
            cb(null, objects);
        }
        return objects;
    })
        .catch(function (err) {
        if (cb) {
            cb(err);
        }
        else {
            throw err;
        }
    });
}
exports.readJsonFiles = readJsonFiles;
var customData = ['update'];
function propertyWithoutCustomData(property) {
    return JSON.parse(JSON.stringify(property, function (key, value) {
        if (customData.find(function (v) { return v === key; })) {
            return undefined;
        }
        return value;
    }));
}
exports.propertyWithoutCustomData = propertyWithoutCustomData;
function propertiesWithoutCustomData(properties) {
    return Object.keys(properties).reduce(function (acc, key) {
        acc[key] = propertyWithoutCustomData(properties[key]);
        return acc;
    }, {});
}
exports.propertiesWithoutCustomData = propertiesWithoutCustomData;
