const express=require('express');

//taking router
const router=express.Router();

//install controller
const homeController= require('../controller/home');

router.get('/',homeController.home);
module.exports=router;