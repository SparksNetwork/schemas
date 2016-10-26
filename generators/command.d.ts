import { ValidateFunction } from 'ajv';
/**
 * Generate a schema validator for a given command. The domain action should be
 * in the format 'Domain.action'
 *
 * @param domainAction
 * @returns {boolean | Promise<boolean>}
 */
export declare function command(domainAction: string): ValidateFunction;
