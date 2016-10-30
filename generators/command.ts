import Ajv from '../lib/ajv';
import {ValidateFunction} from 'ajv';
const ajv = Ajv();

/**
 * Generate a schema validator for a given command. The domain action should be
 * in the format 'Domain.action'
 *
 * @param domainAction
 * @returns {boolean | Promise<boolean>}
 */
export function command(domainAction:string):ValidateFunction {
  return ajv.getSchema(`command.${domainAction}`);
}

