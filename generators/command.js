"use strict";
const Ajv = require('ajv');
const commandSchema = require('../schemas/command.json');
/**
 * Generate a schema validator for a given command. The domain action should be
 * in the format 'Domain.action'
 *
 * @param domainAction
 * @returns {boolean | Promise<boolean>}
 */
function command(domainAction) {
    const ajv = Ajv({
        coerceTypes: true
    });
    const id = `command.${domainAction}`;
    const existing = ajv.getSchema(id);
    if (existing) {
        return existing;
    }
    const [domain, action] = domainAction.split('.');
    const payloadSchema = require(`../schemas/commands/${domain}.json`);
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
