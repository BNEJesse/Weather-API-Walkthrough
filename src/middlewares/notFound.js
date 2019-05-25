const responseFormatter = require('../utils/ResponseFormatter');

module.exports = (req, res, next) =>
  responseFormatter(res, 404, 'api end points not found', null);
