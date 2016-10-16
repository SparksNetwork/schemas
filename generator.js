"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const Ajv = require('ajv');
const fs = require('fs');
const path = require('path');
const ajv = Ajv({
    coerceTypes: true
});
const commandSchema = require('./schemas/command.json');
function command(name) {
    const id = `command.${name}`;
    const existing = ajv.getSchema(id);
    if (existing) {
        return existing;
    }
    const [domain, action] = name.split('.');
    const payloadSchema = require(`./schemas/commands/${domain}.json`);
    delete payloadSchema.id;
    const schema = JSON.parse(JSON.stringify(commandSchema));
    schema.id = id;
    schema.properties.action = {
        type: "string",
        "enum": [action]
    };
    schema.required.push('payload');
    schema.properties.payload = { "$ref": '#/definitions/payload' };
    schema.definitions = {
        payload: payloadSchema[action]
    };
    ajv.addSchema(schema, id);
    return ajv.getSchema(id);
}
exports.command = command;
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
function email() {
    return __awaiter(this, void 0, void 0, function* () {
        ajv.addSchema(require('./schemas/transactionEmail.json'));
        yield readAllJsonFilesAtPath(path.join(__dirname, 'schemas/emails'))
            .then(files => files.forEach(file => ajv.addSchema(file)));
        return ajv.getSchema('transactionEmail');
    });
}
exports.email = email;
