// requiring mongoose
const mongoose=require('mongoose');
const Schema=new mongoose.Schema(schemaCreate());

function schemaCreate(){
    return{
        'todo':{
            'type':String
        },
        'due-date':{
            'type':Date
        },
        'category':{
            type:String
        },
        'subtasks':{
            type:Array
        }
    }

}

const todoModal=mongoose.model('todoModal',Schema);
module.exports=todoModal;