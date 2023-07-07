const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/codeial_db');
const db = mongoose.connection;
db.on('error', console.error.bind("error connecting to db"));
db.once('open',function(){
    console.log("succesfully connected to database");
});

