const exp = require('constants');
const express = require('express');
const port = 8000;
const path = require('path');


const db = require('./config/mongoose');
const Task = require('./models/task');
const { render } = require('ejs');
const app = express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static('assets'));
app.use(express.urlencoded());
app.use('/',require('./routes'));



app.listen(port,function(err){
    if (err){ console.log('error in running the server ', err);}
    console.log('my express is running on port : ',port);
});

