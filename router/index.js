const express=require('express');

//taking router
const router=express.Router();

//install controller
const homeController= require('../controller/home');
//handling base route
router.get('/',homeController.home);

//handling route when we add a todo list

router.post('/addTodo',homeController.addTodo,homeController.home);

//handling routes when we finally submit in db
router.post('/addToDB',homeController.addToDB,homeController.home);


//getting value for delete
router.get('/deleteMe',homeController.delete);

//getting value for view
router.get('/viewMe',homeController.view,homeController.home);


module.exports=router;

