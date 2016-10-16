import * as Ajv from 'ajv';
export declare function command(name: string): (data: any) => boolean | Promise<boolean>;
export declare function email(): Promise<Ajv.ValidateFunction>;
