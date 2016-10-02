import {compileFromFile} from 'json-schema-to-typescript'

(async function():Promise<any> {
  const ts = await compileFromFile('schemas/models/engagement.json');
  console.log(ts);
  return true;
})();
