# Sparks.Network Schemas and Types

### Commands

Each command file represents a command "domain", containing a number of actions, each of which is a schema. Every command message must conform to one of the command schemas.

### Data

Each data file represents a data message "domain" containing the schemas for create, update and remove. Every data message must conform to one of these schemas.

The data schemas are generated automatically from the model schemas.

### Emails

TODO

### Models

Each model schema represents the model and validations "at rest".

## Generators

There are some validation generation helpers for commands, data and email:

```js
const {data} = require('sparks-schemas/generators/data');
const validator = data('Engagements.create');

validator({
  domain: 'Engagements',
  action: 'create',
  key: 'abc123',
  values: {
    profileKey: 'prof123',
    oppKey: 'opp123'
  }
}) => true
```

## 