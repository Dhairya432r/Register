const dotenv = require("dotenv");
const mongoose =require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path:'../config.env'});
const DB = process.env.DATABASE;
require('./db/conn')
app.use(express.json());
app.use(require('./router/auth'));  
const PORT = process.env.PORT;

const middleware =(res,req,next)=>{
    console.log(`hello my middleware`)
    next();
}

app.get('/', (req, res) => {
    res.send(`hello world`);
    app.get('/about',middleware,(req,res) =>{
        console.log(`hello my about`);
        res.send(`hello about from server`)
    });
})
app.listen(5000, ()=> {
    console.log(`server is running on 5000`)
})
