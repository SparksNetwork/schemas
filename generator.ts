import * as Ajv from 'ajv';
import * as fs from 'fs';
import * as path from 'path';

const commandSchema = require('./schemas/command.json');
const dataSchema = require('./schemas/data.json');

export function command(name:string):(data:any) => boolean | Promise<boolean> {
  const ajv = Ajv({
    coerceTypes: true
  });
  const id = `command.${name}`;
  const existing = ajv.getSchema(id);
  if (existing) { return existing as any; }

  const [domain, action] = name.split('.');
  const payloadSchema = require(`./schemas/commands/${domain}.json`);
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

function readAllJsonFilesAtPath(filePath):Promise<any[]> {
  return new Promise((resolve, reject) => {
    fs.readdir(filePath, (err, files) => {
      if (err) { return reject(err); }

      Promise.all(
        files.map(file => new Promise((resolve, reject) => {
          fs.stat(path.join(filePath, file), (err, stats) => {
            if (err) { return reject(err); }
            if (stats.isDirectory()) { return resolve(null); }

            fs.readFile(path.join(filePath, file), (err, data) => {
              if (err) { return reject(err); }
              resolve(JSON.parse(data as any));
            });
          });
        }))
      )
      .then(data => data.filter(Boolean))
      .then(resolve);
    })
  });
}

export async function email() {
  const ajv = Ajv();
  ajv.addSchema(require('./schemas/transactionEmail.json'));

  await readAllJsonFilesAtPath(path.join(__dirname, 'schemas/emails'))
    .then(files => files.forEach(file => ajv.addSchema(file)));

  return ajv.getSchema('transactionEmail');
}