/**
 * Created by chattod on 4/16/15.
 *
 * This file is the router for recipie Saving server side
 */

'use strict';

var express = require('express');
var controller = require('./recipe.controller');
var config = require('../../config/environment');

var router = express.Router();

router.post('/find/author', controller.index);
router.post('/', controller.create);

module.exports = router;
