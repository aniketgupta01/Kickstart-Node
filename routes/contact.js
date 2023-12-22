const path = require('path');

const express = require("express");

const pathController = require('../controllers/contactus.js')

const router = express.Router();

router.get('/contactus',pathController.getContactForm)

router.post('/success',pathController.postContactForm)

module.exports = router