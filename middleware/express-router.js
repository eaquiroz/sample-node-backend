'use strict';

/**
 * Module dependencies.
 */

const express       = require('express');
const router        = express.Router();
const appRouter     = require('@api/router');
const env           = process.env.NODE_ENV || 'development';
const statusMonitor = require('express-status-monitor')();
const path          = require('path');

/**
 * Expose
 */

module.exports = app => {
  app.use(statusMonitor);

    router.get('/', (req, res, next) => {
    try {
        res.sendFile(path.join(__dirname+'/index.html'));
    } catch (e) {
      logger.error(e, 'err in / path');
      next(e);
    }
  });
  router.get('/status', statusMonitor.pageRoute);
  app.use('/api/v1', router);
  app.use('/', router);
  app.use('/api/v1', appRouter);
};
