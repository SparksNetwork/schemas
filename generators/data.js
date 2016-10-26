"use strict";
const ajv_1 = require('../lib/ajv');
const ajv = ajv_1.default();
/**
 * Create a data schema validator from the given domain action. The domain action
 * should be in the format 'Domain.action'
 *
 * @param domainAction
 * @returns {boolean | Promise<boolean>}
 */
function data(domainAction) {
    return ajv.getSchema(`data.${domainAction}`);
}
exports.data = data;
