const fs = require('fs');
const yaml = require('js-yaml');
const swaggerUI = require('swagger-ui-express');

const setUpSwaggerDocs = (api) => {
  const swaggerDocument = yaml.load(fs.readFileSync('./src/docs/openapi.yaml', 'utf-8'));
  api.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
};

module.exports = setUpSwaggerDocs;
