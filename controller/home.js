// requiring modal 
const todoModal=require('../modals/index');

//handling home i.e'/' now we go to home when we enter also when we go after delete
module.exports.home=function(req,res){
    let complete=false;//if it is true it means that we want to show complete.ejs
    let view =false; ////if it is true it means that we want to show view.ejs
    if(req!=undefined&&req.body!=undefined){//checking if req is undefined or not
        if(req.body.complete==true){// req.complete is true only when we come after submitting our todo name 
    // now we want to complete form like adding category so we do this
        complete=true;
        }
        //it is when we click on view
        if(req.body.view==true){
            view=true;
        }
        
    }
    todoModal.find({},function(err,data){// we want to extract all data without any condition to show in our homepage
        if(err){
            console.log('err',err);
            return;
        }
        return data;

    }).then((data)=>{// this is an asynchronous task that's why we use then
        res.render('home',{
            'title':'vikas',
            'complete':complete,
            'todo':req.body.todoListItem,
            'data':data,
            'view':view,
            'viewData':req.body.viewData
        });
    });    
    
};
// handling post form of addTodo here we initiate complete=true so that the other parts is going to fullfill 
module.exports.addTodo=function(req,res,next){
    req.body.complete=true;
    next();
};
//when we want to add to db
module.exports.addToDB=function(req,res,next){
    let obj={
        //we create object fill all value and then add it
        'todo':req.body.todo,
        'due-date':req.body['due-date'],
        'category':req.body.category,
        'subtasks':req.body.subtasks

    };
    todoModal.create(obj).then(()=>{// after adding redirecting to home so that it will sow the updated result
       res.redirect('/');
    });

}
//handling delete
module.exports.delete=function(req,res){
    todoModal.findByIdAndDelete({'_id':req.query.id},function(err,data){// runnning query to find and delete
        if(err){
            console.log(`error,${err}`);
            return;
        }
        return;

    }).then(()=>{// if query run again send it to home to show updated result
        res.redirect('/');
    });
};

//handling view

module.exports.view=function(req,res,next){// it is called on when we click on view button
    todoModal.findById({'_id':req.query.id},function(err,data){
        if(err){
            console.log("error",err);
            return;
        }
        return data;

    }).then((data)=>{
        // initialising view and data which we get
        req.body.view=true;
        req.body.viewData=data;
        next();// calling next which is home here we cant use redirect because it make to loose our data of req.body
    });
}