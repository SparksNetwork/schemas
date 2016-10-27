"use strict";
var fs = require('fs');
var path = require('path');
var Ajv = require('ajv');
function readAllJsonFilesAtPath(filePath) {
    return new Promise(function (resolve, reject) {
        fs.readdir(filePath, function (err, files) {
            if (err) {
                return reject(err);
            }
            Promise.all(files.map(function (file) { return new Promise(function (resolve, reject) {
                fs.stat(path.join(filePath, file), function (err, stats) {
                    if (err) {
                        return reject(err);
                    }
                    if (stats.isDirectory()) {
                        return resolve(null);
                    }
                    fs.readFile(path.join(filePath, file), function (err, data) {
                        if (err) {
                            return reject(err);
                        }
                        resolve(JSON.parse(data));
                    });
                });
            }); }))
                .then(function (data) { return data.filter(Boolean); })
                .then(resolve);
        });
    });
}
/**
 * Generate a schema validator for emails.
 *
 * @returns {ValidateFunction}
 */
function email() {
    var ajv = Ajv();
    ajv.addSchema(require('../schemas/transactionEmail.json'));
    return readAllJsonFilesAtPath(path.join(__dirname, '..', 'schemas/emails'))
        .then(function (files) { return files.forEach(function (file) { return ajv.addSchema(file); }); })
        .then(function () {
        return ajv.getSchema('transactionEmail');
    });
}
exports.email = email;
