import * as Ajv from 'ajv';

/**
 * Create a data schema validator from the given domain action. The domain action
 * should be in the format 'Domain.action'
 *
 * @param domainAction
 * @returns {boolean | Promise<boolean>}
 */
export function data(domainAction:string):(data:any) => boolean | Promise<boolean> {
  const [domain, action] = domainAction.split('.');
  const obj = require(`../schemas/data/${domain}.json`)[action];

  const ajv = Ajv();
  return ajv.compile(obj) as any;
}
