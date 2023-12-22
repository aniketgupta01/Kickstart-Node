const path  = require('path');

const rootDir = require('../util/path.js');

exports.getProductForm = (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','add-product.html'))
  }

exports.postProductForm = (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
  }  