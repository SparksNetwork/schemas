"use strict";
var ajv_1 = require("../lib/ajv");
var ajv = ajv_1.default();
/**
 * Generate a schema validator for a given command. The domain action should be
 * in the format 'Domain.action'
 *
 * @param domainAction
 * @returns {boolean | Promise<boolean>}
 */
function command(domainAction) {
    return ajv.getSchema("command." + domainAction);
}
exports.command = command;
