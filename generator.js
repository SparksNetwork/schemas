"use strict";
const Ajv = require('ajv');
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
