import * as fs from 'fs';
import * as path from 'path';
import * as Ajv from 'ajv';

function readAllJsonFilesAtPath(filePath):Promise<any[]> {
  return new Promise((resolve, reject) => {
    fs.readdir(filePath, (err, files) => {
      if (err) { return reject(err); }

      Promise.all(
        files.map(file => new Promise((resolve, reject) => {
          fs.stat(path.join(filePath, file), (err, stats) => {
            if (err) { return reject(err); }
            if (stats.isDirectory()) { return resolve(null); }

            fs.readFile(path.join(filePath, file), (err, data) => {
              if (err) { return reject(err); }
              resolve(JSON.parse(data as any));
            });
          });
        }))
      )
        .then(data => data.filter(Boolean))
        .then(resolve);
    })
  });
}

/**
 * Generate a schema validator for emails.
 *
 * @returns {ValidateFunction}
 */
export async function email() {
  const ajv = Ajv();
  ajv.addSchema(require('../schemas/transactionEmail.json'));

  await readAllJsonFilesAtPath(path.join(__dirname, '..', 'schemas/emails'))
    .then(files => files.forEach(file => ajv.addSchema(file)));

  return ajv.getSchema('transactionEmail');
}
