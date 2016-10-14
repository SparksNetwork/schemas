import * as Ajv from 'ajv';

const ajv = Ajv();
const commandSchema = require('./schemas/command.json');

export function command(name:string):Function {
  const id = `command.${name}`;
  const existing = ajv.getSchema(id);
  if (existing) { return existing; }

  const [domain, action] = name.split('.');
  const payloadSchema = require(`./schemas/commands/${domain}.json`);

  const schema = JSON.parse(JSON.stringify(commandSchema));
  schema.properties.action = {
    type: "string",
    enum: [action]
  };
  schema.required.push('payload');
  schema.properties.payload.$ref = '#/definitions/payload';
  schema.definitions = {
    payload: payloadSchema[action]
  };

  ajv.addSchema(schema, id);
  return ajv.getSchema(id);
}