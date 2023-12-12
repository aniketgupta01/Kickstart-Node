

const express = require('express');
const app = express();

app.use((req,res,next)=>{
    console.log('In a middleware')
    next();
})
app.use((req,res,next)=>{
    console.log('In another middleware')
    res.setHeader('Content-Type','text/html')
    res.send( '{ key1: value }')
})


app.listen(3000);