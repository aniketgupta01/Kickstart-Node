const path = require('path');

const express = require("express");

const rootDir = require('../util/path.js');

const pathController = require('../controllers/product.js');

const router = express.Router();

router.get("/add-product",pathController.getProductForm );
router.post("/add-product",pathController.postProductForm );

module.exports = router;
