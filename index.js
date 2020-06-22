//including express
const express=require('express');

// giving port no
const port=process.env.PORT||8000;
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});
//starting app
 const app=express();
//setting views
app.set('view engine','ejs');
app.set('views','views');

//connecting to db
const db=require('./config/index');

//setting static folder
//making urlencoded
app.use(express.urlencoded());

app.use(express.static('assest'));
//including router to handle incomeing request
app.use('/',require('./router/index'));




 //make app to listen
 app.listen(port,function(err){
     if(err){
         console.log(`error occur ${err}`);
         return;
     }
     console.log(`we connect to port,${port}`);
 });