import * as Ajv from 'ajv';
const dataSchema = require('../schemas/data.json');

/**
 * Create a data schema validator from the given domain action. The domain action
 * should be in the format 'Domain.action'
 *
 * @param domainAction
 * @returns {boolean | Promise<boolean>}
 */
export function data(domainAction:string):(data:any) => boolean | Promise<boolean> {
  const [domain, action] = domainAction.split('.');
  const ajv = Ajv();

  const id = `data.${domainAction}`;

  const schema = JSON.parse(JSON.stringify(dataSchema));
  schema.properties.domain.enum = [domain];
  schema.properties.action.enum = [action];

  ajv.addSchema(schema, id);
  return ajv.getSchema(id) as any
}

