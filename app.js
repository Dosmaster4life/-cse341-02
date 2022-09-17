const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./database/connect');

const port = process.env.PORT || 3000;
const app = express();
require("dotenv").config();

app.use(bodyParser.json()).use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
}).use('/',require('./routes'));

mongodb.initDb((err,mongodb) => {
    if(err) {
        console.log(err);
    }else {
        app.listen(port) 
            console.log('Server started on port: ' + port);
     
    }
});




