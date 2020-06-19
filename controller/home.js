// requiring modal 
const todoModal=require('../modals/index');
module.exports.home=function(req,res){
    let complete=false;
    let view =false;
    if(req!=undefined&&req.body!=undefined){
        if(req.body.complete==true){
        complete=true;
        }
        if(req.body.view==true){
            view=true;
        }
        
    }
    todoModal.find({},function(err,data){
        if(err){
            console.log('err',err);
            return;
        }
        return data;

    }).then((data)=>{
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
        'todo':req.body.todo,
        'due-date':req.body['due-date'],
        'category':req.body.category,
        'subtasks':req.body.subtasks

    };
    todoModal.create(obj).then(()=>{
       res.redirect('/');
    });

}
//handling delete
module.exports.delete=function(req,res){
    todoModal.findByIdAndDelete({'_id':req.query.id},function(err,data){
        if(err){
            console.log(`error,${err}`);
            return;
        }
        return;

    }).then(()=>{
        res.redirect('/');
    });
};

//handling view

module.exports.view=function(req,res,next){
    todoModal.findById({'_id':req.query.id},function(err,data){
        if(err){
            console.log("error",err);
            return;
        }
        return data;

    }).then((data)=>{
        
        req.body.view=true;
        req.body.viewData=data;
        next();
    });
}