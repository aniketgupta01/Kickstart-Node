const path = require('path');

const express = require('express');

const rootDir = require('../util/path.js');

const router = express.Router();

const pathController = require('../controllers/openshop.js');

router.get("/",pathController.getShop );

  module.exports = router;