const path  = require('path');

const rootDir = require('../util/path.js');

exports.getContactForm = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact.html'))
}

exports.postContactForm = (req,res,next)=>{
    return res.send('<h1>Form Sucessfully Filled</h1>')
}