const express=require('express');

//taking router
const router=express.Router();

//install controller
const homeController= require('../controller/home');
//handling base route
router.get('/',homeController.home);
router.get('/db', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM test_table');
      const results = { 'results': (result) ? result.rows : null};
      res.render('pages/db', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  });
//handling route when we add a todo list

router.post('/addTodo',homeController.addTodo,homeController.home);

//handling routes when we finally submit in db
router.post('/addToDB',homeController.addToDB,homeController.home);


//getting value for delete
router.get('/deleteMe',homeController.delete);

//getting value for view
router.get('/viewMe',homeController.view,homeController.home);


module.exports=router;

