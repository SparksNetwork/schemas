"use strict";
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const async = require('async');
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
                    Object.keys(object).map(key => object[key])
                        .forEach(i => acc.push(i));
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
    return new Promise((resolve, reject) => {
        fs.readFile(path, function (err, data) {
            if (err) {
                return reject(err);
            }
            let obj;
            try {
                obj = JSON.parse(data);
            }
            catch (err) {
                return reject(err);
            }
            resolve(obj);
        });
    })
        .then(obj => {
        if (cb) {
            cb(null, obj);
        }
        return obj;
    })
        .catch(err => {
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
    const regex = /\.json$/;
    const test = regex.test.bind(regex);
    return new Promise((resolve, reject) => {
        fs.readdir(dir, function (err, files) {
            if (err) {
                return reject(err);
            }
            const jsonFiles = files.filter(test);
            Promise.all(jsonFiles
                .map(file => readJsonFile(path.join(dir, file))))
                .then(objects => resolve(objects))
                .catch(err => reject(err));
        });
    })
        .then(objects => {
        if (cb) {
            cb(null, objects);
        }
        return objects;
    })
        .catch(err => {
        if (cb) {
            cb(err);
        }
        else {
            throw err;
        }
    });
}
exports.readJsonFiles = readJsonFiles;
const customData = ['update'];
function propertyWithoutCustomData(property) {
    return JSON.parse(JSON.stringify(property, function (key, value) {
        if (customData.find(v => v === key)) {
            return undefined;
        }
        return value;
    }));
}
exports.propertyWithoutCustomData = propertyWithoutCustomData;
function propertiesWithoutCustomData(properties) {
    return Object.keys(properties).reduce((acc, key) => {
        acc[key] = propertyWithoutCustomData(properties[key]);
        return acc;
    }, {});
}
exports.propertiesWithoutCustomData = propertiesWithoutCustomData;
