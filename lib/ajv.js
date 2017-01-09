"use strict";
var Ajv = require("ajv");
var schemas = require('../schemas.json');
function default_1() {
    var ajv = Ajv({
        coerceTypes: true
    });
    schemas.forEach(function (schema) { return ajv.addSchema(schema); });
    return ajv;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
