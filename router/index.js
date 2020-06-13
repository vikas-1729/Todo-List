const express=require('express');

//taking router
const router=express.Router();

//install controller
const homeController= require('../controller/home');

router.get('/',homeController.home);
//router.post('/addTodo',homeController.addTodo);
module.exports=router;