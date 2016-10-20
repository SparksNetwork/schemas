const Ajv = require('ajv');
const globc = require('glob');
import {readJsonFile} from './schema';

function glob(pattern):Promise<string[]> {
  return new Promise((resolve, reject) => {
    globc(pattern, function(err, files) {
      if (err) { return reject(err); }
      resolve(files);
    });
  });
}

function addSchema(ajv, object) {
  if (object['type']) {
    return Promise.resolve(ajv.addSchema(object));
  } else {
    return Promise.all(Object.keys(object).map(key =>
      Promise.resolve(ajv.addSchema(object[key]))
    ));
  }
}

function addSchemas(ajv, objects) {
  return Promise.all(
    objects.map(object => addSchema(ajv, object))
  )
}

export default function() {
  const ajv = Ajv();

  return glob('schemas/**/*.json')
    .then(files => Promise.all(
      files.map(file => readJsonFile(file))
    ))
    .then(files => {
      return files;
    })
    .then(objects => addSchemas(ajv, objects))
    .then(() => ajv);
}