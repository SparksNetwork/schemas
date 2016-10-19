"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const fs = require('fs');
const path = require('path');
const Ajv = require('ajv');
function readAllJsonFilesAtPath(filePath) {
    return new Promise((resolve, reject) => {
        fs.readdir(filePath, (err, files) => {
            if (err) {
                return reject(err);
            }
            Promise.all(files.map(file => new Promise((resolve, reject) => {
                fs.stat(path.join(filePath, file), (err, stats) => {
                    if (err) {
                        return reject(err);
                    }
                    if (stats.isDirectory()) {
                        return resolve(null);
                    }
                    fs.readFile(path.join(filePath, file), (err, data) => {
                        if (err) {
                            return reject(err);
                        }
                        resolve(JSON.parse(data));
                    });
                });
            })))
                .then(data => data.filter(Boolean))
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
    return __awaiter(this, void 0, void 0, function* () {
        const ajv = Ajv();
        ajv.addSchema(require('../schemas/transactionEmail.json'));
        yield readAllJsonFilesAtPath(path.join(__dirname, '..', 'schemas/emails'))
            .then(files => files.forEach(file => ajv.addSchema(file)));
        return ajv.getSchema('transactionEmail');
    });
}
exports.email = email;
