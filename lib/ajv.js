"use strict";
const Ajv = require('ajv');
const globc = require('glob');
const schema_1 = require('./schema');
function glob(pattern) {
    return new Promise((resolve, reject) => {
        globc(pattern, function (err, files) {
            if (err) {
                return reject(err);
            }
            resolve(files);
        });
    });
}
function addSchema(ajv, object) {
    if (object['type']) {
        return Promise.resolve(ajv.addSchema(object));
    }
    else {
        return Promise.all(Object.keys(object).map(key => Promise.resolve(ajv.addSchema(object[key]))));
    }
}
function addSchemas(ajv, objects) {
    return Promise.all(objects.map(object => addSchema(ajv, object)));
}
function default_1() {
    const ajv = Ajv();
    return glob('schemas/**/*.json')
        .then(files => Promise.all(files.map(file => schema_1.readJsonFile(file))))
        .then(files => {
        console.log(files.length);
        return files;
    })
        .then(objects => addSchemas(ajv, objects))
        .then(() => ajv);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
