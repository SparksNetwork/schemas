import * as Ajv from 'ajv';
/**
 * Generate a schema validator for emails.
 *
 * @returns {ValidateFunction}
 */
export declare function email(): Promise<Ajv.ValidateFunction>;
