import Ajv from '../lib/ajv';
import {ValidateFunction} from 'ajv';
const ajv = Ajv();

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
export function command(domainAction:string):ValidateFunction {
  const [domain, action] = domainAction.split('.');

  const id = `command.${domainAction}`;
  try {
    const existing = ajv.getSchema(id);
    if (existing) { return existing; }
  } catch(error) {
  }

  const schema = deepClone(ajv.getSchema('Command').schema);

  schema.id = id;
  schema.properties.action = {
    type: "string",
    "enum": [action]
  };
  schema.required.push('payload');
  schema.properties.payload = {"$ref": domainAction};

  ajv.addSchema(schema, id);
  return ajv.getSchema(id);
}

