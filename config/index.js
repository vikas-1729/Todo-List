// importing mongoose
const mongoose=require('mongoose');

//making connection
mongoose.connect('mongodb://localhost/todo_db');
//taking db
const db=mongoose.connection;

db.on('error',console.error.bind('console','error'));
db.once('open',function(){
    console.log('welcome connect to database');

});
