import existing from '../lib/ajv';
import {ValidateFunction} from 'ajv';
const ajv = existing();

/**
 * Create a data schema validator from the given domain action. The domain action
 * should be in the format 'Domain.action'
 *
 * @param domainAction
 * @returns {boolean | Promise<boolean>}
 */
export function data(domainAction:string):ValidateFunction {
  return ajv.getSchema(`data.${domainAction}`);
}
