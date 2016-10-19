"use strict";
const Ajv = require('ajv');
const dataSchema = require('../schemas/data.json');
/**
 * Create a data schema validator from the given domain action. The domain action
 * should be in the format 'Domain.action'
 *
 * @param domainAction
 * @returns {boolean | Promise<boolean>}
 */
function data(domainAction) {
    const [domain, action] = domainAction.split('.');
    const ajv = Ajv();
    const id = `data.${domainAction}`;
    const schema = JSON.parse(JSON.stringify(dataSchema));
    schema.properties.domain.enum = [domain];
    schema.properties.action.enum = [action];
    ajv.addSchema(schema, id);
    return ajv.getSchema(id);
}
exports.data = data;
