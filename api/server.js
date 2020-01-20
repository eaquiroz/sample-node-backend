'use strict';

/**
 * Module dependencies
 */

require('module-alias/register');
require('../lib/logger/logger');
const cors = require('cors');
const express     = require('express');
const app         = express();

app.use(cors());


/**
 * Start Node Server
 */

require('../middleware/start-server')(app);

/**
 * Initialize Express
 */

require('../middleware/express-setup')(app);
require('../middleware/express-router')(app);
require('../middleware/error-handler')(app);

/**
 * Initialize MongoDB Collections
 */
require('./model');

/**
 * Initialize Swagger Docs
 */

require('../middleware/start-swagger')(app);

module.exports = app;
