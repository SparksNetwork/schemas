import * as Ajv from 'ajv';
import ajv = require("ajv");
const schemas = require('../schemas.json');

export default function():ajv.Ajv {
  const ajv = Ajv();
  schemas.forEach(schema => ajv.addSchema(schema));
  return ajv;
}