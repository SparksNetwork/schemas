"use strict";
var ajv_1 = require('../lib/ajv');
var ajv = ajv_1.default();
function deepClone(schema) {
    return JSON.parse(JSON.stringify(schema));
}
/**
 * Generate a schema validator for a given command. The domain action should be
 * in the format 'Domain.action'
 *
 * @param domainAction
 * @returns {boolean | Promise<boolean>}
 */
function command(domainAction) {
    var _a = domainAction.split('.'), domain = _a[0], action = _a[1];
    var id = "command." + domainAction;
    try {
        var existing = ajv.getSchema(id);
        if (existing) {
            return existing;
        }
    }
    catch (error) {
    }
    var schema = deepClone(ajv.getSchema('Command').schema);
    schema.id = id;
    schema.properties.action = {
        type: "string",
        "enum": [action]
    };
    schema.required.push('payload');
    schema.properties.payload = { "$ref": domainAction };
    ajv.addSchema(schema, id);
    return ajv.getSchema(id);
}
exports.command = command;
