const express=require('express');
const exp = require('constants');

const app=express();

app.use((req,res,next)=>{
    console.log('In the middleware');
    next();
})

app.use((req,res,next)=>{
    console.log('In another middleware');
    res.send('<h1>Hello from express</h1>');
})

app.listen(2000);