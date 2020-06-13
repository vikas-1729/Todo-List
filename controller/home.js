module.exports.home=function(req,res){
    res.render('home',{
        'title':'vikas'
    });

};
module.exports.addTodo=function(req,res){
    res.send('okk');
};