'use strict';

const router                                    = require('express').Router();
const { ProductController }                        = require('@api/controller');


/* GET Calls */
router.get('/', ProductController.getProduct);
router.get('/list', ProductController.getProducts);

module.exports = router;
