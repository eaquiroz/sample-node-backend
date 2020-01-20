'use strict';

const express                    = require("express");
const router                     = express.Router();

/**
 * Import All Express Router Here
 */

const ProductRouter         = require('./product-service/routes');

router.use('/product',ProductRouter);

module.exports =  router;
