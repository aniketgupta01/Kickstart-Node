const path = require('path');

const express = require("express");
const bodyParser = require('body-parser')

const app = express();

const adminRoutes = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js')
const contactRoutes = require('./routes/contact.js');
const rootDir = require('./util/path.js');

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))

app.use(adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);

app.use('/',(req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','page-not-found.html'))
})



app.listen(3000);
