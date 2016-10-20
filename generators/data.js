"use strict";
const Ajv = require('ajv');
/**
 * Create a data schema validator from the given domain action. The domain action
 * should be in the format 'Domain.action'
 *
 * @param domainAction
 * @returns {boolean | Promise<boolean>}
 */
function data(domainAction) {
    const [domain, action] = domainAction.split('.');
    const obj = require(`../schemas/data/${domain}.json`)[action];
    const ajv = Ajv();
    return ajv.compile(obj);
}
exports.data = data;
