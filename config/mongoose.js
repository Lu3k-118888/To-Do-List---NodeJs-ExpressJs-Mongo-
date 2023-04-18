const mongoose = require('mongoose');

//connect to the database
//mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]
mongoose.connect('mongodb://127.0.0.1/My_to_do_App');

//accuire the connction (to check if it is successfull)
const db = mongoose.connection;

//error
db.on('error', function(err) { console.log(err.message); });

db.once('open',function(){
    console.log('successfully connected to database');
})

