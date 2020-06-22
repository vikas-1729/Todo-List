// requiring mongoose
const mongoose=require('mongoose');
const Schema=new mongoose.Schema(schemaCreate());

// function to create Schema
function schemaCreate(){
    return{
        'todo':{// name of todo
            'type':String
        },
        'due-date':{//last date
            'type':Date
        },
        'category':{//category
            type:String
        },
        'subtasks':{// array of subtask
            type:Array
        }
    }

}

const todoModal=mongoose.model('todoModal',Schema);
module.exports=todoModal;