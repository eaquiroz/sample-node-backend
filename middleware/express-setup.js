'use strict';

/**
 * Module dependencies.
 */

const compression = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const env = process.env.NODE_ENV || 'development';

/**
 * Expose
 */

module.exports = app => {
  app.use(helmet());
  app.disable('x-powered-by');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(
    methodOverride(req => {
      if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        var method = req.body._method;
        delete req.body._method;
        return method;
      }
    })
  );
};
