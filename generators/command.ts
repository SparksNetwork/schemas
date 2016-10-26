import * as Ajv from 'ajv';
import ajv from '../lib/ajv';
const existing = ajv();

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
export function command(domainAction:string):(data:any) => boolean | Promise<boolean> {
  const [domain, action] = domainAction.split('.');

  const ajv = Ajv({
    coerceTypes: true
  });

  const commandSchema = deepClone(existing.getSchema('Command').schema);
  const payloadSchema = deepClone(existing.getSchema(domainAction).schema);

  const id = `command.${domainAction}`;
  delete payloadSchema.id;

  const schema = JSON.parse(JSON.stringify(commandSchema));
  schema.id = id;
  schema.properties.action = {
    type: "string",
    "enum": [action]
  };
  schema.required.push('payload');
  schema.properties.payload = {"$ref": '#/definitions/payload'};
  schema.definitions = {
    payload: payloadSchema[action]
  };

  ajv.addSchema(schema, id);
  return ajv.getSchema(id) as any;
}

