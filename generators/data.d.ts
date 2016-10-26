import { ValidateFunction } from 'ajv';
/**
 * Create a data schema validator from the given domain action. The domain action
 * should be in the format 'Domain.action'
 *
 * @param domainAction
 * @returns {boolean | Promise<boolean>}
 */
export declare function data(domainAction: string): ValidateFunction;
