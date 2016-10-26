"use strict";
const Ajv = require('ajv');
const schemas = require('../schemas.json');
function default_1() {
    const ajv = Ajv();
    schemas.forEach(schema => ajv.addSchema(schema));
    return ajv;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
